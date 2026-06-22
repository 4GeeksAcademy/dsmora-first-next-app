# AdventureHub - Project Brief & PRD

## 1. Product Vision
AdventureHub is a high-fidelity experience discovery platform designed for modern explorers. It connects users with curated, world-class adventures—from diving with manta rays in Bali to trekking the Inca Trail—through a seamless, visually-driven interface.

## 2. Target Audience
- **The Modern Explorer**: Tech-savvy travelers seeking unique, high-quality experiences over standard tourist packages.
- **Visual Planners**: Users who prioritize high-quality photography and clear itineraries when choosing their next destination.

## 3. Core Features (MVP)
- **Experience Discovery**: Multi-filter search (category, destination, price) with URL-synced state.
- **Global Favorites**: Context-based favoriting system to save experiences across the session.
- **Detailed Itineraries**: Deep-dive pages including daily schedules, "what's included" sections, and integrated booking widgets.
- **User Dashboard**: A profile area to track "Vivid Experiences" (completed), Favorites, and Upcoming Trips.

## 4. Technical Architecture
- **Framework**: Next.js (App Router).
- **State Management**: React Context API + `useState` for global favorites; URL Query Params for search state.
- **Styling**: Tailwind CSS for utility-first responsive design.
- **Data Strategy**: Typed local dataset of 100+ experiences to ensure low latency and consistent schema validation.

## 5. Design System: "Vibrant Explorer"
- **Color Palette**: 
    - Primary: Slate/Navy (#0f172a) for depth and trust.
    - Accent: Coral/Red (#CC1622) for urgency and energy in CTAs.
    - Surface: Clean whites and soft grays (#f7f9fb) for a premium feel.
- **Typography**: Inter (Sans-serif) for maximum readability across devices.
- **Geometry**: 8px (Rounded Eight) corner radius for a friendly yet structured look.

## 6. Sitemaps & Routes
- `/`: Hero landing page with discovery CTAs.
- `/experiences`: Search and filter results grid.
- `/experiences/[id]`: Detailed view of a single adventure.
- `/favorites`: Collection of user-saved experiences.
- `/profile`: Personal stats and account settings.

## 7. Success Metrics
- **Fidelity**: 1:1 match between designed UI components and implementation.
- **Performance**: Near-instant filtering transitions using pure intersection logic.
- **Usability**: Intuitive navigation between discovery and detail views without losing context.
