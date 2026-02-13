# Roomy - Uganda's Premier Property Rental Platform

A modern, full-stack web application for discovering and booking unique properties across Uganda. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmasembebrian%2Froomy)

## Features

- **Property Discovery**: Browse and search properties across Uganda with advanced filters
- **User Authentication**: Secure Supabase Auth integration with Google OAuth
- **Booking System**: Full booking workflow with confirmation and cancellation
- **Review System**: Leave and read reviews from verified guests
- **Favorites**: Save properties to your favorites for quick access
- **Admin Dashboard**: Manage properties, bookings, and users
- **Real-time Map**: Interactive Google Maps showing property locations
- **Responsive Design**: Mobile-first design that works on all devices
- **PWA Support**: Install as native app on iOS and Android devices
- **Dark Mode**: Full dark mode support with theme persistence
- **Internationalization**: Multi-language support for global users

## Technology Stack

### Frontend
- **Framework**: Next.js 15.1.11
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React Hooks + Context API
- **Data Fetching**: SWR (client-side) + Fetch API (server-side)
- **UI Components**: shadcn/ui (40+ components)
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Maps**: @react-google-maps/api

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **API**: Next.js API Routes
- **File Storage**: Vercel Blob
- **ORM**: Supabase JavaScript Client

### DevOps
- **Hosting**: Vercel (Next.js optimized)
- **Version Control**: GitHub
- **CI/CD**: GitHub Actions + Vercel Deployments
- **Monitoring**: Built-in performance monitoring

## Project Structure

```
roomy/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   ├── auth/                     # Authentication pages
│   ├── admin/                    # Admin dashboard
│   ├── bookings/                 # Booking pages
│   ├── explore/                  # Property explorer
│   ├── favorites/                # Favorites page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── ...other pages
├── components/                   # Reusable React components
│   ├── ui/                       # shadcn/ui components
│   ├── error-boundary.tsx        # Error handling
│   ├── map.tsx                   # Google Maps
│   ├── apartment-list.tsx        # Property listings
│   └── ...other components
├── lib/                          # Utility functions
│   ├── supabase/                 # Supabase client setup
│   ├── cache.ts                  # Request caching
│   ├── logger.ts                 # Logging utility
│   ├── seo.ts                    # SEO utilities
│   └── auth.tsx                  # Auth context
├── scripts/                      # Database scripts
│   ├── 01-create-tables.sql      # Database schema
│   ├── 02-create-functions.sql   # PL/pgSQL functions
│   ├── 03-seed-data.sql          # Initial seed data
│   ├── 04-create-payments.sql    # Payment tables
│   └── 05-comprehensive-seed.sql # Additional seed data
├── public/                       # Static assets
│   ├── images/                   # Property and host images
│   ├── manifest.json             # PWA manifest
│   ├── robots.txt                # SEO robots file
│   └── sitemap.xml               # XML sitemap
└── configuration files
    ├── next.config.mjs           # Next.js config
    ├── tailwind.config.ts        # Tailwind config
    ├── tsconfig.json             # TypeScript config
    └── package.json              # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Supabase account (https://supabase.com)
- Google Maps API key
- GitHub account (for deployment)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/masembebrian/roomy.git
cd roomy
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-key
GOOGLE_MAPS_API_KEY=your-google-maps-key
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

4. **Setup Database**

Create a Supabase project and execute the migration scripts:

```bash
# Connect to your Supabase database
# Then run each script in order:
psql -h db.supabase.co -U postgres < scripts/01-create-tables.sql
psql -h db.supabase.co -U postgres < scripts/02-create-functions.sql
psql -h db.supabase.co -U postgres < scripts/03-seed-data.sql
psql -h db.supabase.co -U postgres < scripts/04-create-payments.sql
psql -h db.supabase.co -U postgres < scripts/05-comprehensive-seed.sql
```

5. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

### Code Quality

- **Linting**: ESLint configuration for code quality
- **Type Safety**: Strict TypeScript configuration
- **Error Handling**: Comprehensive error boundaries
- **Logging**: Advanced logging with performance metrics

## Testing

### Manual Testing Checklist
- [ ] User authentication flow
- [ ] Property listing and filtering
- [ ] Booking creation and confirmation
- [ ] Review submission
- [ ] Responsive design on mobile/tablet
- [ ] Dark mode toggle
- [ ] Error handling (network, API errors)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub repository
2. Create Vercel project linked to repository
3. Configure environment variables in Vercel dashboard
4. Enable automatic deployments
5. See `DEPLOYMENT_GUIDE.md` for detailed instructions

### Environment Variables Required
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `GOOGLE_MAPS_API_KEY`
- `BLOB_READ_WRITE_TOKEN`

## Database Schema

### Core Tables
- **profiles**: User profiles (hosts and guests)
- **properties**: Rental properties
- **bookings**: Property bookings
- **reviews**: Guest reviews
- **favorites**: Favorited properties
- **notifications**: User notifications

See `scripts/01-create-tables.sql` for complete schema.

## API Documentation

### Authentication Endpoints
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/reset-password` - Reset password

### Property Endpoints
- `GET /api/properties` - List all properties
- `GET /api/properties/[id]` - Get property details
- `POST /api/properties` - Create new property (host only)
- `PUT /api/properties/[id]` - Update property (host only)

### Booking Endpoints
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/[id]` - Get booking details
- `PATCH /api/bookings/[id]/cancel` - Cancel booking

### Review Endpoints
- `GET /api/reviews` - Get property reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/[id]` - Update review

### Favorites Endpoints
- `GET /api/favorites` - Get user favorites
- `POST /api/favorites` - Add to favorites
- `DELETE /api/favorites/[id]` - Remove from favorites

## Performance Metrics

Current performance targets:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

## Security

- HTTPS enforced
- Security headers configured
- CSRF protection enabled
- Row Level Security (RLS) on database
- API rate limiting
- Input validation and sanitization
- Secure password hashing (bcrypt)
- HTTP-only cookies for sessions

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@roomy.ug or create an issue on GitHub.

## Roadmap

- [ ] Payment integration (Stripe)
- [ ] Advanced search filters
- [ ] Host rating system
- [ ] Instant messaging system
- [ ] Review ratings breakdown
- [ ] Property analytics dashboard
- [ ] Promotional codes and discounts
- [ ] Referral program

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Database powered by [Supabase](https://supabase.com/)
- Hosting by [Vercel](https://vercel.com/)
- Maps by [Google Maps](https://maps.google.com/)

## Contact

- Website: https://roomy.ug
- Email: info@roomy.ug
- Twitter: @roomy_ug
- Instagram: @roomy_ug

---

Made with ❤️ for Uganda's travelers and hosts
