# Assets Folder Structure

This folder contains all static assets for the ICEva website.

## Folder Organization

### `/images/`
- Contains general images like hero backgrounds, scenery, aircraft photos
- `aurora-hero.jpg` - Main hero section background image

### `/logos/`
- Contains all logo variations and branding assets
- `iceva-logo.png` - Main ICEva logo (used throughout the site)

### `/placeholders/`
- Contains placeholder images for development
- Use placeholder images from Unsplash when needed

## Usage

Import assets using ES6 imports:

```javascript
import heroImage from '@/assets/images/aurora-hero.jpg';
import logo from '@/assets/logos/iceva-logo.png';
```

## Guidelines

- Use descriptive filenames
- Optimize images for web (WebP when possible)
- Maintain consistent naming convention (kebab-case)
- Keep file sizes reasonable for fast loading