# Setup Guide for La Bella Tavola Restaurant Website

## Prerequisites Installation

### 1. Install Node.js

#### Option A: Using Homebrew (macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

#### Option B: Direct Download
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer

#### Option C: Using Node Version Manager (nvm)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run
source ~/.bashrc

# Install Node.js
nvm install --lts
nvm use --lts
```

### 2. Verify Installation
```bash
node --version
npm --version
```

## Project Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### 1. Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Click "New Project"
5. Import your repository
6. Deploy automatically

#### Option B: Using Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts
```

### 3. Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings

## Environment Variables

Create a `.env.local` file in the root directory for any environment variables:

```env
# Example environment variables
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_CONTACT_EMAIL=your_email@domain.com
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node modules not found**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

### Performance Optimization

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images before uploading
   - Use appropriate image formats (WebP, AVIF)

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

## Support

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Vercel documentation](https://vercel.com/docs)
3. Open an issue in the project repository

## Next Steps

After deployment:
1. Update restaurant information in the components
2. Replace placeholder images with your own
3. Update contact information and social media links
4. Customize colors and branding in `tailwind.config.js`
5. Set up analytics (Google Analytics, etc.)
6. Configure SEO meta tags
7. Test on different devices and browsers 