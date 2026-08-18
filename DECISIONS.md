# AcdyOn Career Planner - Design Decisions

## 1. Why this product direction?

AcdyOn Career Planner focuses on transforming **Role → Company → Income → Timeline** into **Skills → Projects → Learning → Practice → Readiness** because:

- **Clear Problem Statement**: Career planning is often vague and overwhelming. People know they want a specific role at a specific company with a target income, but they don't know the concrete steps to get there.

- **Input-Output Clarity**: The destination inputs (role, company, income, timeline) are specific and actionable. The roadmap outputs (skills, projects, learning, practice, readiness) are equally concrete and measurable.

- **Progress Tracking**: By breaking down the journey into phases (Foundations → Core Skills → Build & Ship → Interview Readiness), users can track progress and see incremental improvement.

- **Practical Focus**: Unlike generic "learn more" advice, this approach connects abstract goals to specific skills, projects, and preparation activities that directly impact employability.

- **Timeline-Aware**: Recognizing that people have different time constraints (3 months vs 18 months), the roadmap adapts the scope and intensity accordingly.

This direction moves career planning from aspirational to actionable, addressing the gap between "I want this job" and "Here's exactly how to get it."

## 2. One Trade-off

Under the assessment time limit, I chose a **rule-based roadmap demonstration** rather than building a real recommendation engine with persistent user data and AI-powered personalization.

**Why this trade-off?**
- Rule-based roadmaps are deterministic, predictable, and easy to explain in an interview setting.
- They demonstrate the core user experience without requiring complex backend infrastructure.
- The frontend interactions and visual quality take priority over backend sophistication.

**What I would do with more time:**
- Connect the planner to a real recommendation service that considers user's current skill level, learning pace, and market trends.
- Implement persistent user data with authentication to save roadmaps and track progress over time.
- Add AI-powered personalization that adapts the roadmap based on user feedback and completion rates.
- Integrate real-time job market data to validate target companies and income expectations.

## 3. AI Usage

This project was built with AI assistance for code generation and design decisions. Here's a transparent breakdown:

**AI-Assisted Areas:**
- Initial project structure and component scaffolding
- Tailwind CSS configuration and color system implementation
- React component structure and state management patterns
- Responsive design classes and mobile-first approach
- Animation utilities and CSS keyframes
- Roadmap data structure and sample content
- Documentation structure (this file and README)

**Personally Reviewed, Simplified, Tested, and Changed:**
- All components were reviewed for simplicity and understandability
- Removed unnecessary abstractions and complex state management
- Ensured all code follows the "simple enough for a recent graduate to explain" principle
- Tested responsive behavior at 390px mobile and 1440px desktop breakpoints
- Verified all interactions (Career Planner, Founder Mode, navigation)
- Simplified animations to be subtle and purposeful rather than excessive
- Ensured no fake testimonials, user counts, or company logos
- Validated that the Easter egg works exactly as specified (5 compass clicks)

**Code Quality Principles Applied:**
- Used simple `useState` instead of complex state management
- Preferred props drilling over context providers where appropriate
- Kept component structure flat and understandable
- Used arrays and `.map()` for rendering lists
- Applied Tailwind classes directly rather than creating excessive custom components
- Ensured all animations earn their keep and serve the user experience

The AI served as a force multiplier for implementation speed, while all design decisions, code simplification, and quality assurance were personally reviewed and adjusted to meet the assessment requirements.
