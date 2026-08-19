# AcdyOn Career Planner

**You set the destination. We map the route.**

A premium career planning experience that turns your target role into a practical route. Choose your role, target company, income goal, and timeline — and get a personalized career roadmap with specific skills, projects, and preparation steps.

## Product

AcdyOn Career Planner transforms career aspirations into actionable plans:

- **Destination**: Role → Company → Income → Timeline
- **Route**: Skills → Projects → Learning → Practice → Readiness

## Features

- **Career Destination Planner**: Interactive step-by-step planner to define your career goals
- **Personalized Roadmap Preview**: See your career route broken down into actionable phases
- **Responsive Premium Landing Page**: Optimized for 390px mobile and 1440px desktop
- **Roadmap Generation Interaction**: Real-time roadmap generation with smooth animations
- **Founder Mode Easter Egg**: Hidden feature for discovering alternative career paths

## Tech Stack

- **React**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework with custom color system
- **Vite**: Fast build tool and development server
- **Lucide React**: Icon library for UI elements
- **JavaScript**: Simple, understandable code without TypeScript complexity

## Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

GitHub Repository: https://github.com/Yanvi09/AcdyOn-Carrer-Planner.git

Live Demo: [To be deployed]

## Project Structure

```
src/
  components/
    Navbar.jsx           # Premium navigation with compass icon
    Hero.jsx             # Hero section with product preview
    CareerPlanner.jsx    # Main interactive planner
    HowItWorks.jsx       # 4-step process explanation
    DestinationRoute.jsx # You decide vs AcdyOn maps
    RoadmapPreview.jsx   # Product roadmap showcase
    CareerPhases.jsx     # Learn → Practice → Build → Prove → Interview
    Mentorship.jsx       # Guidance and expertise section
    FinalCTA.jsx         # Final call-to-action
    Footer.jsx           # Site footer with links
    FounderMode.jsx      # Easter egg (5 compass clicks)
  data/
    roadmapData.js       # Rule-based roadmap data
  App.jsx               # Main app component
  main.jsx              # React entry point
  index.css             # Global styles and animations
```

## Color System

- **Primary Background**: `#080D20` (Deep navy)
- **Secondary Navy**: `#0E1630`
- **Card Background**: `#111A35`
- **Primary Blue**: `#3155FF`
- **Bright Blue**: `#4268FF`
- **Cyan Accent**: `#5CCBFF`
- **Main Text**: `#F7F9FF`
- **Secondary Text**: `#B8C1D9`
- **Muted Text**: `#7F8AA8`

## Design Principles

- **Premium Feel**: Deep navy background, electric blue CTAs, subtle grid pattern
- **Editorial Typography**: Large, tight headlines with controlled line length
- **Restrained Motion**: Subtle animations that earn their keep
- **Mobile-First**: Responsive design optimized for 390px mobile width
- **Simple Code**: Easy to explain line-by-line in an interview setting

## Easter Egg

Click the compass icon in the navbar **5 times** to unlock Founder Mode — a hidden feature for exploring alternative career paths beyond traditional employment.

## License

© 2024 AcdyOn. All rights reserved.
