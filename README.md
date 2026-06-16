# Eastern Daily Health Tips

A static health website optimized for Google SEO and AdSense monetization, featuring traditional Chinese wellness practices for global English-speaking users.

## Project Structure

```
eastern-health-tips/
├── index.html          # Homepage
├── meal-plans.html     # Healthy Meal Plans
├── fitness.html        # Traditional Chinese Fitness & Qigong
├── sleep.html          # Sleep Health
├── tools.html          # Online Health Tools
├── css/
│   └── styles.css      # Global styles
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Features

### Pages
1. **Homepage** - Introduction to Eastern wellness philosophy
2. **Meal Plans** - Chinese dietary therapy, Five Flavors theory, weekly meal plans
3. **Fitness** - Tai Chi, Baduanjin, Daoyin, Morning Qigong, Bedtime Regimen
4. **Sleep Health** - TCM organ clock, sleep cycle calculator, bedtime routines
5. **Health Tools** - BMI, Calorie, Water Intake, Sleep Cycle, Macro Nutrient calculators

### Design Elements
- **Color Palette**: Cinnabar red, indigo blue, wood beige, ink black
- **Decorations**: Cloud patterns, seal-stamp headings, scroll unfold effects
- **Typography**: Serif headings (Playfair Display), sans-serif body (Inter)
- **Animations**: Gentle floating clouds, scroll reveal effects

### SEO Optimization
- Unique title and meta description for each page
- Semantic HTML5 structure
- Keyword-rich content targeting: daily health tips, Eastern health, Tai Chi, Baduanjin, Chinese qigong
- Alt text placeholders for all images

### AdSense Integration
- Pre-reserved ad slots with marked container IDs
- Header banner (728x90)
- In-content ads (728x90)
- Ad slots positioned for optimal viewability

## Deployment

### Cloudflare Pages
1. Push code to GitHub repository
2. Connect repository to Cloudflare Pages
3. Set build command: (leave empty for static site)
4. Set output directory: `/`

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main)
4. Site will be available at: `https://username.github.io/repo-name/`

### Local Development
Simply open `index.html` in a web browser. No build process required.

## Customization

### Adding New Exercises
To add new Tai Chi or Baduanjin tutorials:
1. Open `fitness.html`
2. Add new exercise cards in the appropriate tab section
3. Follow the existing card structure

### Adding Images
1. Replace placeholder divs with actual `<img>` tags
2. Add descriptive alt text for SEO
3. Optimize images for web (WebP format recommended)

### Adding Ad Code
1. Find the ad slot div with `id="ad-header"`, `id="ad-fitness-mid"`, etc.
2. Replace the placeholder text with your AdSense code
3. Ensure the container maintains its dimensions

## Technical Notes

- **No build process required** - Pure HTML/CSS/JS
- **Fully responsive** - Works on all device sizes
- **Fast loading** - Minimal dependencies, optimized CSS
- **Accessible** - Semantic HTML, proper ARIA labels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for personal use. Content should be original or properly attributed.

## Contact

For questions or support, please contact via the website's contact form.