# Gen-Z Dark Rave Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from cutting-edge portfolio sites (Awwwards winners), modern music festival websites, and cyberpunk aesthetics. This is an experience-focused project where visual impact drives engagement.

## Core Design Principles
1. **Immersive Darkness**: Pure dark theme with deep blacks (#000000 to #0a0a0a)
2. **Neon Energy**: Vibrant neon accents (cyan, magenta, purple, lime green) for interactive elements
3. **Glitch Aesthetics**: Intentional digital distortion effects on key typography and transitions
4. **Constant Motion**: Every section features subtle animations even at rest

## Typography System

**Primary Display Font**: Use "Orbitron" or "Audiowide" from Google Fonts for headers (cyberpunk/tech aesthetic)
**Secondary Font**: "Space Grotesk" for body text and UI elements (modern, geometric)
**Accent Font**: "VT323" or monospace for glitch text overlays

Hierarchy:
- Hero name: 96px (mobile: 48px), ultra-bold, letter-spacing: -0.02em
- Section headers: 64px (mobile: 36px), bold, uppercase
- Subsection titles: 32px (mobile: 24px), medium weight
- Body text: 18px (mobile: 16px), regular weight, line-height: 1.6
- UI elements: 14-16px, medium weight

Apply glitch text effect on hero name and section headers using CSS animations.

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 16, 24 for consistency
- Section padding: py-24 (desktop), py-16 (mobile)
- Component spacing: gap-8 or gap-16
- Container max-width: max-w-7xl with px-8

**Grid System**: 12-column for desktop, single column for mobile

## Section Specifications

### Hero Section
- Full viewport height (100vh)
- Three.js particle/mesh background spanning entire section
- Centered content with glitch-animated name reveal
- Two CTA buttons side-by-side with neon outlines and glow effects
- Scroll indicator at bottom with pulsing animation

### About Me
- Two-column layout (60/40 split): bio text left, animated geometric shapes right
- Personality traits as floating cards with neon borders
- Staggered entrance animations for each element

### Skills
- Masonry-style grid or circular cluster layout
- Interactive bubbles with Framer Motion hover states (scale, glow intensity)
- Each skill shows proficiency with animated progress rings

### Experience Timeline
- Vertical layout with neon connector line
- Cards alternate left/right on desktop, stack on mobile
- Scroll-triggered reveal animations
- Company logos with neon filter effects

### Projects
- 3-column grid (desktop), single column (mobile)
- 3D tilt effect on hover using Framer Motion
- Project cards feature: title, tech stack tags, thumbnail, GitHub/demo links
- Particle burst effect on click/interaction

### Custom 3D Rave Room
- Full-section Three.js interactive scene
- Rotating neon geometric primitives (cubes, spheres, toruses)
- Mouse-controlled camera movement
- Particle field background
- "Enter the Rave" interaction prompt

### Contact
- Split layout: form (left 60%), social links + info (right 40%)
- Form fields with neon underline focus states
- Submit button with glitch animation on click
- Success state shows animated neon checkmark

## Component Library

**Buttons**: Outlined with neon glow, uppercase text, hover increases glow intensity
**Cards**: Dark background with subtle neon border, hover lifts with shadow glow
**Form Inputs**: Transparent background, neon bottom border, glow on focus
**Navigation**: Fixed header with glassmorphism effect, neon hover states on links
**Loading Indicators**: Neon spinner with glitch trails

## Animation Strategy

**Page Transitions** (Barba.js): 600ms fade with vertical slide, glitch overlay during transition
**Entrance Animations**: Stagger delays of 100-200ms between elements
**Hover States**: 200ms duration, ease-out timing
**Scroll Animations**: Trigger at 70% viewport visibility

**Performance Budget**: Limit simultaneous Three.js particles to <10,000, use RequestAnimationFrame for smooth 60fps

## Responsive Behavior
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Three.js scenes reduce particle count 50% on mobile
- Disable complex hover effects on touch devices
- Stack all multi-column layouts to single column below md breakpoint

## Accessibility Considerations
- Provide "Reduce Motion" toggle in header
- Ensure neon text maintains 4.5:1 contrast ratio
- Keyboard navigation for all interactive elements
- Skip navigation link for screen readers

## Images
**Hero Section**: Use abstract neon geometric pattern or digital particle field as background layer beneath Three.js scene
**About Me**: Personal photo with neon duotone filter effect
**Projects**: Project thumbnails/screenshots with neon border treatment

This design creates an immersive, high-energy experience that positions you as a cutting-edge developer while maintaining professional functionality.