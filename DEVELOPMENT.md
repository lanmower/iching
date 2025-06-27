# I Ching Development Guide

## 🚀 Quick Start

### Start Development Server
```bash
npm run dev
```
This starts the development server with hot reload at http://localhost:3000

### Alternative Development Commands
```bash
# Standard React development server
npm start

# Simple development server (no custom wrapper)
npm run dev:simple

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build
```

## 🔄 Hot Reload Features

The development server includes:
- **Fast Refresh**: Instant updates when you save files
- **Error Overlay**: Displays compilation errors in the browser
- **Automatic Browser Sync**: Changes reflect immediately
- **Source Maps**: Debug with original source code

## 📁 Development Workflow

### File Structure for Development
```
src/
├── App.js                    # Main application component
├── Explanation.js            # Enhanced I Ching display component
├── TrigramDisplay.js         # Hexagram lines display
├── EnergyVisual.js          # Visual representation
├── explanation/
│   └── explanationProvider.js   # Core I Ching logic
├── trigram/
│   └── trigramGenerator.js     # Hexagram generation
└── visual/
    └── visualDisplay.js        # Energy visualization
```

### Making Changes

1. **Edit any source file** in `src/` directory
2. **Save the file** (Ctrl+S / Cmd+S)
3. **Browser automatically refreshes** with your changes
4. **Check browser console** for any errors

### Common Development Tasks

#### Adding New Hexagram Data
Edit `src/explanation/explanationProvider.js`:
- Update `HEXAGRAMS` object for hexagram information
- Update `TRIGRAMS` object for trigram correspondences

#### Modifying the Display
Edit `src/Explanation.js`:
- Update JSX structure for layout changes
- Modify inline styles or add CSS classes

#### Changing Hexagram Generation
Edit `src/trigram/trigramGenerator.js`:
- Modify line generation logic
- Update trigram mapping

## 🔧 Development Environment

### Environment Variables
See `.env` file for configuration:
- `FAST_REFRESH=true` - Enables React Fast Refresh
- `PORT=3000` - Development server port
- `BROWSER=none` - Prevents auto-opening browser

### Browser DevTools
- **React Developer Tools**: Install browser extension
- **Console**: Check for errors and debug output
- **Network Tab**: Monitor API calls (if any)
- **Sources Tab**: Debug with breakpoints

## 🧪 Testing During Development

```bash
# Run tests once
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run all tests
npm test -- --watchAll
```

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Serve production build locally
npx serve -s build
```

## 📊 Performance Monitoring

The app includes Web Vitals monitoring. Check browser console for:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Try different port
   PORT=3001 npm run dev
   ```

2. **Hot reload not working**
   ```bash
   # Clear cache and restart
   rm -rf node_modules/.cache
   npm run dev
   ```

3. **Build errors**
   ```bash
   # Check syntax and dependencies
   npm run build
   ```

### Getting Help
- Check browser console for errors
- Look at terminal output for compilation issues
- Ensure all dependencies are installed: `npm install`

## 🎯 Development Best Practices

1. **Save frequently** - Hot reload works on every save
2. **Check console** - Watch for warnings and errors
3. **Test in multiple browsers** - Ensure compatibility
4. **Use React DevTools** - Inspect component state
5. **Keep builds clean** - Run `npm run build` periodically

---

Happy coding! 🔯 The I Ching development environment is ready for your enhancements.