# Quick Start Guide 🚀

## Get Your Restaurant Website Live in 5 Minutes

### Option 1: One-Click Deploy (Recommended)

1. **Fork this repository** on GitHub
2. **Go to [vercel.com](https://vercel.com)** and sign up with GitHub
3. **Click "New Project"** and import your forked repository
4. **Deploy** - Vercel will automatically build and deploy your site
5. **Customize** - Update the content with your restaurant information

### Option 2: Local Development

If you want to customize before deploying:

1. **Install Node.js** (see SETUP.md for detailed instructions)
2. **Clone and install:**
   ```bash
   git clone <your-repo-url>
   cd restaurant-website
   npm install
   npm run dev
   ```
3. **Open http://localhost:3000** to see your site
4. **Customize** the content
5. **Deploy** using the deploy script: `./deploy.sh`

## What You Get

✅ **Complete Restaurant Website** with:
- Beautiful hero section
- About your restaurant
- Interactive menu with categories
- Photo gallery with lightbox
- Contact information with map
- Reservation booking system
- Mobile-responsive design
- Fast loading performance

## Quick Customization

### 1. Update Restaurant Info
Edit these files to customize your restaurant:

- **Restaurant name**: Update in `components/Header.tsx` and `components/Footer.tsx`
- **Contact details**: Update in `components/Contact.tsx`
- **Menu items**: Edit `components/Menu.tsx`
- **About section**: Modify `components/About.tsx`

### 2. Replace Images
- Replace placeholder images with your own photos
- Update image URLs in the components
- Use high-quality images for best results

### 3. Customize Colors
Edit `tailwind.config.js` to match your brand colors:

```javascript
colors: {
  primary: {
    500: '#your-brand-color',
    // ... other shades
  }
}
```

### 4. Update Contact Information
- Phone number
- Email address
- Physical address
- Social media links

## Deployment Checklist

Before going live, make sure to:

- [ ] Update restaurant name and branding
- [ ] Replace placeholder images with your own
- [ ] Update contact information
- [ ] Customize menu items and prices
- [ ] Add your restaurant's story in the About section
- [ ] Update social media links
- [ ] Test the reservation form
- [ ] Check mobile responsiveness
- [ ] Verify all links work correctly

## Need Help?

- 📖 **Detailed Setup**: See `SETUP.md`
- 📚 **Full Documentation**: See `README.md`
- 🐛 **Issues**: Open an issue on GitHub
- 💬 **Support**: Check the troubleshooting section in `SETUP.md`

## Next Steps After Deployment

1. **Set up analytics** (Google Analytics, etc.)
2. **Configure SEO** meta tags
3. **Add your domain** in Vercel settings
4. **Set up email notifications** for reservations
5. **Test on different devices** and browsers
6. **Share your website** with customers

---

**Your restaurant website is ready to impress customers! 🍝✨** 