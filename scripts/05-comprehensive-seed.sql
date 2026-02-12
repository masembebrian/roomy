-- Comprehensive seed data for Roomy application
-- This script populates the database with realistic test data

-- Insert profiles (hosts)
INSERT INTO profiles (id, name, email, image, verified, bio, created_at)
VALUES
  (
    '11111111-1111-1111-1111-111111111111',
    'Sarah Mwangi',
    'sarah@example.com',
    '/images/host-sarah.png',
    true,
    'Passionate about hospitality. Loves welcoming travelers from around the world.',
    NOW()
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'John Kimani',
    'john@example.com',
    '/images/host-john.png',
    false,
    'Local Kampala resident offering comfortable modern apartments.',
    NOW()
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'Emily Kabasa',
    'emily@example.com',
    '/images/host-emily.png',
    true,
    'Experienced property manager with 10+ years in hospitality.',
    NOW()
  ),
  (
    '44444444-4444-4444-4444-444444444444',
    'David Okonkwo',
    'david@example.com',
    '/images/host-david.png',
    true,
    'Luxury villa specialist in scenic locations.',
    NOW()
  ),
  (
    '55555555-5555-5555-5555-555555555555',
    'Grace Nakambi',
    'grace@example.com',
    '/images/host-grace.png',
    false,
    'Budget-friendly accommodations for backpackers and students.',
    NOW()
  );

-- Insert properties
INSERT INTO properties (
  id,
  title,
  description,
  location,
  latitude,
  longitude,
  price,
  currency,
  bedrooms,
  bathrooms,
  guests,
  amenities,
  images,
  rating,
  review_count,
  host_id,
  instant_book,
  created_at
)
VALUES
  (
    '66666666-6666-6666-6666-666666666666',
    'Modern Apartment in Kampala City Center',
    'Spacious, fully furnished apartment with stunning city views. Perfect for business travelers and families. High-speed WiFi, modern kitchen, and 24/7 security.',
    'Kampala, Central District',
    0.3476,
    32.5825,
    85,
    'USD',
    2,
    1,
    4,
    '["WiFi", "Kitchen", "Air Conditioning", "Parking", "Security", "TV"]',
    '["kampala-apartment"]',
    4.8,
    45,
    '11111111-1111-1111-1111-111111111111',
    true,
    NOW()
  ),
  (
    '77777777-7777-7777-7777-777777777777',
    'Cozy Studio near Entebbe Airport',
    'Convenient studio apartment just 10 minutes from Entebbe International Airport. Ideal for layovers and short stays. Complimentary airport shuttle available.',
    'Entebbe, International Avenue',
    0.0611,
    32.4432,
    45,
    'USD',
    1,
    1,
    2,
    '["WiFi", "Air Conditioning", "Shower", "Safe", "Airport Shuttle"]',
    '["entebbe-studio"]',
    4.5,
    32,
    '22222222-2222-2222-2222-222222222222',
    false,
    NOW()
  ),
  (
    '88888888-8888-8888-8888-888888888888',
    'Spacious Family Home in Jinja',
    'Beautiful family home with garden, ideal for groups and families. Close to adventure activities like white-water rafting and bungee jumping. Fully equipped kitchen.',
    'Jinja, Adventure District',
    0.4478,
    33.2027,
    120,
    'USD',
    3,
    2,
    6,
    '["WiFi", "Kitchen", "Garden", "TV", "Parking", "BBQ Grill"]',
    '["jinja-family-home"]',
    4.9,
    58,
    '33333333-3333-3333-3333-333333333333',
    true,
    NOW()
  ),
  (
    '99999999-9999-9999-9999-999999999999',
    'Luxury Lakeside Villa in Mukono',
    'Spectacular lakeside villa with private beach access. Premium amenities including infinity pool, sauna, and stunning sunset views over Lake Victoria.',
    'Mukono, Lakeside',
    0.3533,
    32.755,
    250,
    'USD',
    4,
    3,
    8,
    '["WiFi", "Pool", "Beach Access", "Sauna", "Kitchen", "Entertainment System", "Parking", "Security"]',
    '["mukono-villa"]',
    5.0,
    27,
    '44444444-4444-4444-4444-444444444444',
    true,
    NOW()
  ),
  (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'Mountain View Cottage in Fort Portal',
    'Charming cottage with breathtaking views of Fort Portal mountains. Great base for exploring the Rwenzori Mountains and local attractions. Peaceful and quiet.',
    'Fort Portal, Mountain View',
    0.6713,
    30.2755,
    65,
    'USD',
    2,
    1,
    4,
    '["WiFi", "Kitchen", "Fireplace", "Hiking Trails", "Parking"]',
    '["fort-portal-cottage"]',
    4.6,
    38,
    '55555555-5555-5555-5555-555555555555',
    false,
    NOW()
  ),
  (
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    'Downtown Kampala Penthouse',
    'Stunning penthouse with panoramic city views. High-end furnishings, private balcony, rooftop access. Perfect for professionals and luxury seekers.',
    'Kampala, Downtown',
    0.3450,
    32.5900,
    150,
    'USD',
    3,
    2,
    5,
    '["WiFi", "Kitchen", "AC", "Balcony", "Rooftop", "Parking", "Concierge"]',
    '["kampala-penthouse"]',
    4.7,
    42,
    '11111111-1111-1111-1111-111111111111',
    true,
    NOW()
  );

-- Insert reviews
INSERT INTO reviews (
  id,
  property_id,
  guest_id,
  rating,
  title,
  comment,
  created_at
)
VALUES
  (
    'cccccccc-cccc-cccc-cccc-cccccccccccc',
    '66666666-6666-6666-6666-666666666666',
    'guest-1',
    5,
    'Amazing stay in Kampala!',
    'The apartment was exactly as described. Clean, modern, and the location is perfect for exploring the city. Would definitely recommend!',
    NOW() - INTERVAL 30 DAYS
  ),
  (
    'dddddddd-dddd-dddd-dddd-dddddddddddd',
    '66666666-6666-6666-6666-666666666666',
    'guest-2',
    4,
    'Great value for money',
    'Good accommodation with all amenities. The WiFi was sometimes slow but overall a pleasant experience.',
    NOW() - INTERVAL 20 DAYS
  ),
  (
    'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
    '99999999-9999-9999-9999-999999999999',
    'guest-3',
    5,
    'Luxury experience',
    'The villa exceeded all expectations. The infinity pool and lake views are absolutely stunning. Perfect for a special occasion.',
    NOW() - INTERVAL 15 DAYS
  );

-- Insert bookings
INSERT INTO bookings (
  id,
  property_id,
  guest_id,
  check_in,
  check_out,
  total_price,
  status,
  created_at
)
VALUES
  (
    'ffffffff-ffff-ffff-ffff-ffffffffffff',
    '66666666-6666-6666-6666-666666666666',
    'guest-1',
    NOW() + INTERVAL 10 DAYS,
    NOW() + INTERVAL 13 DAYS,
    255.00,
    'confirmed',
    NOW() - INTERVAL 5 DAYS
  ),
  (
    '10101010-1010-1010-1010-101010101010',
    '77777777-7777-7777-7777-777777777777',
    'guest-2',
    NOW() + INTERVAL 5 DAYS,
    NOW() + INTERVAL 7 DAYS,
    90.00,
    'pending',
    NOW() - INTERVAL 2 DAYS
  );

-- Insert favorites
INSERT INTO favorites (
  id,
  user_id,
  property_id,
  created_at
)
VALUES
  (
    '11001100-1100-1100-1100-110011001100',
    'guest-1',
    '66666666-6666-6666-6666-666666666666',
    NOW() - INTERVAL 10 DAYS
  ),
  (
    '11001101-1100-1101-1100-110011001101',
    'guest-2',
    '99999999-9999-9999-9999-999999999999',
    NOW() - INTERVAL 7 DAYS
  );

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_properties_location ON properties(location);
CREATE INDEX IF NOT EXISTS idx_properties_host_id ON properties(host_id);
CREATE INDEX IF NOT EXISTS idx_properties_price ON properties(price);
CREATE INDEX IF NOT EXISTS idx_properties_rating ON properties(rating);
CREATE INDEX IF NOT EXISTS idx_bookings_property_id ON bookings(property_id);
CREATE INDEX IF NOT EXISTS idx_bookings_guest_id ON bookings(guest_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_reviews_property_id ON reviews(property_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_property_id ON favorites(property_id);

-- Insert notifications for system announcements
INSERT INTO notifications (id, user_id, type, title, message, created_at)
VALUES
  (
    '12121212-1212-1212-1212-121212121212',
    'guest-1',
    'booking_confirmed',
    'Booking Confirmed',
    'Your booking for Modern Apartment in Kampala City Center has been confirmed!',
    NOW()
  ),
  (
    '13131313-1313-1313-1313-131313131313',
    'guest-2',
    'message_new',
    'New Message',
    'Sarah Mwangi sent you a message about your booking.',
    NOW() - INTERVAL 1 HOUR
  );

-- Log that seed completed successfully
DO $$
BEGIN
  RAISE NOTICE 'Comprehensive seed data loaded successfully at %', NOW();
END $$;
