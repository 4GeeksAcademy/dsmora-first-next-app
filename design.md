***name: Vibrant Explorer
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#b71422'
  on-secondary: '#ffffff'
  secondary-container: '#db3237'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#008ebf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930014'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
***
Brand & Style
The design system is built for a premium adventure and experience marketplace that balances professional reliability with high-energy excitement. The aesthetic is Corporate Modern with a Minimalist lean, focusing on high-quality photography and intentional white space to let the experiences breathe.

The target audience consists of modern travelers seeking seamless, trustworthy, yet thrilling bookings. The UI evokes a sense of clarity, premium quality, and "readiness for adventure" through crisp edges, vibrant accents, and a methodical information architecture.

Colors
This design system utilizes a high-contrast palette to drive user action and ensure legibility.

Primary (#0f172a): Deep Slate. Used for core navigation, headings, and primary text to provide a grounded, authoritative feel.
Secondary (#ff4d4d): Energy Coral. Reserved strictly for primary Call-to-Action (CTA) buttons, favoriting icons, and urgent status indicators.
Tertiary (#38bdf8): Sky Blue. Used sparingly for secondary accents, links, or informational badges to complement the travel theme.
Background (#f8fafc): Ghost White. A cool-toned neutral that reduces eye strain and provides a clean canvas for image-heavy experience cards.

Typography
The system relies exclusively on Inter to maintain a systematic, utilitarian, and modern feel. 

Headlines: Use heavy weights (700-800) with slight negative letter-spacing to create a "compact" and premium editorial look.
Body: Standardized at 16px for optimal readability across all booking details and descriptions.
Labels: Uppercase styling for small metadata (e.g., "CATEGORY", "DURATION") to differentiate from prose.

Layout & Spacing
This design system follows a Fluid Grid model with a fixed maximum container width for desktop to ensure readability on ultra-wide monitors.

Grid: A 12-column layout on desktop, 6-column on tablet, and 2-column on mobile.
Rhythm: An 8px linear scale (8, 16, 24, 32, 48, 64) governs all padding and margins.
Adaptation: On mobile, margins shrink to 16px and experience cards transition from a multi-column layout to a stacked vertical list to maximize image visibility.

Elevation & Depth
Depth is achieved through Ambient Shadows and tonal layering. This creates a tactile feel where interactive elements seem to float slightly above the ghost-white background.

Card Elevation: Use a very soft, diffused shadow: 0 4px 20px rgba(15, 23, 42, 0.08).
Active Elevation: When a user hovers over a card or button, the shadow should deepen and the element should lift (Y-axis translation) to signify interactivity.
Layering: Use the secondary background color (#ffffff) for card surfaces to pop against the #f8fafc page background.

Shapes
The shape language is consistently Rounded, conveying a friendly and approachable premium vibe.

Small Components: Checkboxes and small tags use a 4px (Soft) radius.
Cards & Inputs: Use a 0.5rem (8px) radius as the standard.
Large Sections/Modals: Use a 1.5rem (24px) radius for top corners on mobile drawers or large desktop modals to soften the overall interface.

Components

Buttons: 
Primary: Solid Energy Coral (#ff4d4d) with white text. Hover state: darken by 10%. 
Secondary: Ghost White background with Primary text and a subtle border.
Experience Cards: Aspect ratio of 4:3 for images. Bottom section contains the title in Headline-MD, a price label in Primary Bold, and a floating "Heart" icon in the top right for favorites (using Energy Coral when active).
Chips/Badges: Small, pill-shaped tags with #0f172a text on a 10% opacity Sky Blue background to denote categories like "Water Sports" or "Guided Tour."
Input Fields: 8px rounded corners with a 1px border in a light grey-blue. On focus, the border transitions to Primary (#0f172a) with a subtle outer glow.
Navigation: A clean top-bar with a blur-behind (backdrop-filter) effect. Navigation links use Primary color with a 2px Energy Coral underline appearing on hover/active states.
Search Bar: Prominent, high-shadow element with integrated icons for "Location," "Date," and "Guests," functioning as the central hub of the landing page.
