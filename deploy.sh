#!/bin/bash

# La Bella Tavola Restaurant Website Deployment Script

echo "🍝 La Bella Tavola - Restaurant Website Deployment"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "📖 See SETUP.md for installation instructions."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI"
        echo "💡 You can deploy manually by:"
        echo "   1. Push your code to GitHub"
        echo "   2. Go to vercel.com"
        echo "   3. Import your repository"
        exit 1
    fi
fi

echo "✅ Vercel CLI is ready"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
echo "🌐 Your restaurant website is now live!"
echo ""
echo "📝 Next steps:"
echo "   1. Update restaurant information in the components"
echo "   2. Replace placeholder images with your own"
echo "   3. Update contact details and social media links"
echo "   4. Customize colors and branding"
echo "   5. Set up analytics and SEO"
echo ""
echo "📖 For more information, see README.md and SETUP.md" 