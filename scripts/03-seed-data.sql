-- Insert sample properties (you'll need to replace with real host IDs after users sign up)
INSERT INTO public.properties (
  id,
  host_id,
  title,
  description,
  price,
  location,
  coordinates,
  bedrooms,
  bathrooms,
  guests,
  amenities,
  images,
  rating,
  review_count,
  instant_book,
  house_rules,
  cancellation_policy
) VALUES 
(
  '11111111-1111-1111-1111-111111111111',
  '00000000-0000-0000-0000-000000000000', -- Replace with actual host ID
  'Modern Apartment in Kampala',
  'A beautiful, modern apartment in the heart of Kampala. Perfect for travelers and digital nomads.',
  50.00,
  'Kampala Central, Uganda',
  '{"lat": 0.3476, "lng": 32.5825}',
  2,
  1,
  4,
  ARRAY['Wi-Fi', 'Air Conditioning', 'Kitchen', 'Washing Machine', 'TV', 'Parking'],
  ARRAY['/images/kampala-apartment.png', '/images/kampala-apartment.png'],
  4.5,
  32,
  true,
  ARRAY['Check-in: 3:00 PM - 10:00 PM', 'Checkout: 11:00 AM', 'No smoking', 'No pets'],
  'Free cancellation for 48 hours. Cancel before check-in for a partial refund.'
),
(
  '22222222-2222-2222-2222-222222222222',
  '00000000-0000-0000-0000-000000000000', -- Replace with actual host ID
  'Cozy Studio in Entebbe',
  'Comfortable studio apartment near the airport. Perfect for short stays.',
  35.00,
  'Entebbe, Uganda',
  '{"lat": 0.0639, "lng": 32.4434}',
  1,
  1,
  2,
  ARRAY['Wi-Fi', 'Kitchen', 'TV', 'Parking'],
  ARRAY['/images/entebbe-studio.png', '/images/entebbe-studio.png'],
  4.2,
  18,
  true,
  ARRAY['Check-in: 2:00 PM - 10:00 PM', 'Checkout: 11:00 AM', 'No smoking'],
  'Free cancellation for 48 hours.'
);

-- Note: After running this script, update the host_id values with actual user IDs from your auth.users table
