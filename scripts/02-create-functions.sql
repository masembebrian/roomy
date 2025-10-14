-- Function to generate confirmation code
CREATE OR REPLACE FUNCTION generate_confirmation_code()
RETURNS TEXT AS $$
BEGIN
  RETURN 'RMY' || LPAD(FLOOR(RANDOM() * 999999)::TEXT, 6, '0');
END;
$$ LANGUAGE plpgsql;

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, sign_up_method)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'User'),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'sign_up_method', 'email')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_properties_updated_at BEFORE UPDATE ON public.properties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to create notification on booking
CREATE OR REPLACE FUNCTION notify_on_booking()
RETURNS TRIGGER AS $$
DECLARE
  property_record RECORD;
  host_record RECORD;
BEGIN
  -- Get property details
  SELECT * INTO property_record FROM public.properties WHERE id = NEW.property_id;
  
  -- Get host details
  SELECT * INTO host_record FROM public.profiles WHERE id = property_record.host_id;
  
  -- Create notification for guest
  INSERT INTO public.notifications (
    user_id,
    type,
    title,
    message,
    details,
    category
  ) VALUES (
    NEW.guest_id,
    'booking_confirmed',
    'Booking Confirmed',
    'Your booking for ' || property_record.title || ' has been confirmed',
    jsonb_build_object(
      'propertyName', property_record.title,
      'propertyImage', property_record.images[1],
      'hostName', host_record.name,
      'hostImage', host_record.image,
      'checkIn', NEW.check_in,
      'checkOut', NEW.check_out,
      'guests', NEW.guests,
      'total', NEW.total_price,
      'bookingId', NEW.confirmation_code
    ),
    'bookings'
  );
  
  -- Create notification for host
  INSERT INTO public.notifications (
    user_id,
    type,
    title,
    message,
    details,
    category
  ) VALUES (
    property_record.host_id,
    'new_booking',
    'New Booking Received',
    'You have a new booking for ' || property_record.title,
    jsonb_build_object(
      'propertyName', property_record.title,
      'propertyImage', property_record.images[1],
      'guestName', (SELECT name FROM public.profiles WHERE id = NEW.guest_id),
      'checkIn', NEW.check_in,
      'checkOut', NEW.check_out,
      'guests', NEW.guests,
      'total', NEW.total_price,
      'bookingId', NEW.confirmation_code
    ),
    'bookings'
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create notifications on booking
DROP TRIGGER IF EXISTS on_booking_created ON public.bookings;
CREATE TRIGGER on_booking_created
  AFTER INSERT ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION notify_on_booking();

-- Function to set confirmation code on booking
CREATE OR REPLACE FUNCTION set_booking_confirmation_code()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.confirmation_code IS NULL THEN
    NEW.confirmation_code := generate_confirmation_code();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to set confirmation code
DROP TRIGGER IF EXISTS set_confirmation_code ON public.bookings;
CREATE TRIGGER set_confirmation_code
  BEFORE INSERT ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION set_booking_confirmation_code();
