# La Bella Tavola - Restaurant Website

A modern, responsive restaurant website built with Next.js, TypeScript, and Tailwind CSS. Perfect for deployment on Vercel.

## Features

- 🍝 **Modern Design** - Beautiful, responsive design with smooth animations
- 📱 **Mobile First** - Optimized for all devices and screen sizes
- 🎨 **Interactive Menu** - Categorized menu with beautiful food photography
- 📸 **Photo Gallery** - Lightbox gallery with category filtering
- 📅 **Reservation System** - Interactive booking modal with form validation
- 🗺️ **Google Maps Integration** - Embedded map showing restaurant location
- ⚡ **Fast Performance** - Built with Next.js for optimal loading speeds
- 🎭 **Smooth Animations** - Framer Motion animations for enhanced UX

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd restaurant-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Menu.tsx             # Menu section
│   ├── Gallery.tsx          # Photo gallery
│   ├── Contact.tsx          # Contact information
│   ├── Footer.tsx           # Footer component
│   └── ReservationModal.tsx # Booking modal
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#fef7ee',
    100: '#fdedd6',
    // ... more shades
  }
}
```

### Content
- Update restaurant information in each component
- Replace images with your own photos
- Modify menu items in `components/Menu.tsx`
- Update contact details in `components/Contact.tsx`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes
- Custom CSS classes are defined in the `@layer components` section

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Features in Detail

### Header
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Contact information and reservation button

### Hero Section
- Full-screen hero with background image
- Call-to-action buttons
- Smooth scroll indicator

### About Section
- Restaurant story and history
- Feature highlights with icons
- Statistics and achievements

### Menu
- Interactive category tabs
- Beautiful food cards with images
- Pricing and descriptions
- Star ratings

### Gallery
- Filterable photo gallery
- Lightbox modal for image viewing
- Category-based organization

### Contact
- Contact information with icons
- Embedded Google Maps
- Social media links
- Additional services information

### Reservation Modal
- Complete booking form
- Date and time selection
- Guest count options
- Special requests field
- Form validation and submission

## Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- Code splitting with dynamic imports
- Optimized fonts and icons
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the GitHub repository.

---

Built with ❤️ for restaurants who want to showcase their culinary excellence online. 