# MAXIMUS - Animation Reference Guide

## 🎬 Complete Animation Breakdown

This document provides a detailed breakdown of all animations and interactions implemented in the MAXIMUS website.

---

## 1. HERO SECTION ANIMATIONS

### Background Parallax
- **Trigger**: Window scroll
- **Effect**: Background image moves slower than scroll speed
- **Speed**: 0.5x scroll speed
- **Implementation**: JavaScript `transform: translateY()`
- **File**: `js/main.js` (lines ~90-100)

### Background Zoom
- **Trigger**: Automatic on page load
- **Effect**: Slow zoom in/out
- **Duration**: 20 seconds
- **Loop**: Infinite alternate
- **Implementation**: CSS `@keyframes slowZoom`
- **File**: `css/custom.css` (lines ~35-45)

### Floating Particles
- **Trigger**: Automatic on page load
- **Effect**: Subtle floating dust particles
- **Duration**: 15 seconds
- **Loop**: Infinite
- **Implementation**: CSS radial gradients + animation
- **File**: `css/custom.css` (lines ~48-70)

### Hero Content Fade-In
- **Trigger**: Page load
- **Effect**: Fade in + slide up
- **Duration**: 1.5 seconds
- **Delay**: 0.3 seconds
- **Implementation**: CSS `@keyframes heroFadeIn`
- **File**: `css/custom.css` (lines ~73-85)

### Scroll Indicator
- **Trigger**: Page load
- **Effect**: Fade in + slide up
- **Duration**: 1 second
- **Delay**: 1.5 seconds
- **Additional**: Bounce animation on arrow
- **Implementation**: CSS animations
- **File**: `css/custom.css` (lines ~88-100)

### CTA Button Glow
- **Trigger**: Hover
- **Effect**: Pulsing glow effect
- **Duration**: 1.5 seconds
- **Loop**: Infinite while hovering
- **Implementation**: CSS `::before` pseudo-element + blur
- **File**: `css/custom.css` (lines ~103-125)

---

## 2. NAVIGATION ANIMATIONS

### Navbar Background Transition
- **Trigger**: Scroll past 100px
- **Effect**: Background fades in with blur
- **Duration**: 0.5 seconds
- **Implementation**: JavaScript class toggle + CSS transition
- **Files**: 
  - `js/main.js` (lines ~15-30)
  - `css/custom.css` (lines ~18-25)

### Nav Link Underline
- **Trigger**: Hover
- **Effect**: Underline expands from left to right
- **Duration**: 0.3 seconds
- **Implementation**: CSS `::after` pseudo-element
- **File**: `css/custom.css` (lines ~27-40)

### Active Link Highlight
- **Trigger**: Scroll to section
- **Effect**: Text color changes to red
- **Implementation**: JavaScript scroll detection
- **File**: `js/main.js` (lines ~180-200)

### Logo Hover
- **Trigger**: Mouse enter/leave
- **Effect**: Scale + slight rotation
- **Duration**: 0.3 seconds
- **Implementation**: JavaScript + inline styles
- **File**: `js/main.js` (lines ~205-220)

### Mobile Menu Slide
- **Trigger**: Hamburger icon click
- **Effect**: Menu slides down
- **Duration**: 0.3 seconds
- **Implementation**: Tailwind classes toggle
- **File**: `js/main.js` (lines ~35-60)

---

## 3. SCROLL-BASED ANIMATIONS

### Intersection Observer Setup
- **Threshold**: 15% of element visible
- **Root Margin**: -50px from bottom
- **Implementation**: JavaScript Intersection Observer API
- **File**: `js/main.js` (lines ~75-95)

### Fade-Up Animation
- **Trigger**: Element enters viewport
- **Effect**: Fade in + slide up
- **Duration**: 0.8 seconds
- **Elements**: About section, service title
- **Implementation**: CSS class `.fade-up.visible`
- **File**: `css/custom.css` (lines ~130-145)

### Fade-Left Animation
- **Trigger**: Element enters viewport
- **Effect**: Fade in + slide from left
- **Duration**: 0.8 seconds
- **Elements**: Contact section left block
- **Implementation**: CSS class `.fade-left.visible`
- **File**: `css/custom.css` (lines ~147-160)

### Fade-Right Animation
- **Trigger**: Element enters viewport
- **Effect**: Fade in + slide from right
- **Duration**: 0.8 seconds
- **Elements**: Contact form
- **Implementation**: CSS class `.fade-right.visible`
- **File**: `css/custom.css` (lines ~162-175)

---

## 4. SERVICE CARD ANIMATIONS

### Card Reveal (Staggered)
- **Trigger**: Cards enter viewport
- **Effect**: Fade in + slide up with delay
- **Duration**: 0.5 seconds each
- **Delays**: 0.1s, 0.2s, 0.3s, 0.4s, 0.5s, 0.6s
- **Implementation**: CSS nth-child delays
- **File**: `css/custom.css` (lines ~177-195)

### Image Zoom on Hover
- **Trigger**: Mouse hover
- **Effect**: Background image scales to 110%
- **Duration**: 0.7 seconds
- **Implementation**: CSS `transform: scale()`
- **File**: `index.html` (inline Tailwind classes)

### Overlay Darken on Hover
- **Trigger**: Mouse hover
- **Effect**: Black overlay increases opacity
- **Duration**: 0.5 seconds
- **Implementation**: CSS background transition
- **File**: `index.html` (inline Tailwind classes)

### Text Rise on Hover
- **Trigger**: Mouse hover
- **Effect**: Text moves up slightly
- **Duration**: 0.5 seconds
- **Implementation**: CSS `transform: translateY()`
- **File**: `index.html` (inline Tailwind classes)

### Shine Effect
- **Trigger**: Mouse hover
- **Effect**: Light sweep across card
- **Duration**: 0.7 seconds
- **Implementation**: CSS `::before` pseudo-element
- **File**: `css/custom.css` (lines ~197-210)

### Ripple Effect on Click
- **Trigger**: Card click
- **Effect**: Expanding circle from click point
- **Duration**: 0.6 seconds
- **Implementation**: JavaScript dynamic element creation
- **File**: `js/main.js` (lines ~230-265)

---

## 5. FORM ANIMATIONS

### Input Focus Glow
- **Trigger**: Input focus
- **Effect**: Red glow appears under input
- **Duration**: 0.3 seconds
- **Implementation**: CSS box-shadow transition
- **File**: `css/custom.css` (lines ~215-220)

### Border Color Transition
- **Trigger**: Input focus
- **Effect**: Border changes from gray to red
- **Duration**: 0.3 seconds
- **Implementation**: Tailwind focus classes
- **File**: `index.html` (inline classes)

### Submit Button Hover
- **Trigger**: Mouse hover
- **Effect**: Glow + scale up
- **Duration**: 0.3 seconds
- **Implementation**: Tailwind hover classes
- **File**: `index.html` (inline classes)

### Form Submission
- **Trigger**: Form submit
- **Effect**: Button text changes, notification appears
- **Duration**: 1.5 seconds (simulated)
- **Implementation**: JavaScript event handler
- **File**: `js/main.js` (lines ~105-145)

---

## 6. NOTIFICATION SYSTEM

### Notification Slide-In
- **Trigger**: Form submit or action
- **Effect**: Slides in from right
- **Duration**: 0.5 seconds
- **Implementation**: CSS transform transition
- **File**: `js/main.js` (lines ~150-175)

### Notification Auto-Dismiss
- **Trigger**: 3 seconds after appearance
- **Effect**: Slides out to right
- **Duration**: 0.5 seconds
- **Implementation**: JavaScript setTimeout
- **File**: `js/main.js` (lines ~150-175)

---

## 7. FOOTER ANIMATIONS

### Social Icon Hover
- **Trigger**: Mouse hover
- **Effect**: Background color changes to red
- **Duration**: 0.3 seconds
- **Implementation**: Tailwind hover classes
- **File**: `index.html` (inline classes)

### Link Hover
- **Trigger**: Mouse hover
- **Effect**: Text color changes to red
- **Duration**: 0.3 seconds
- **Implementation**: Tailwind hover classes
- **File**: `index.html` (inline classes)

---

## 8. SMOOTH SCROLLING

### Navigation Link Click
- **Trigger**: Nav link click
- **Effect**: Smooth scroll to section
- **Duration**: Based on distance
- **Implementation**: JavaScript `scrollTo()` with behavior: 'smooth'
- **File**: `js/main.js` (lines ~65-85)

### Offset Calculation
- **Purpose**: Account for fixed navbar
- **Offset**: 80px
- **Implementation**: JavaScript offsetTop calculation
- **File**: `js/main.js` (lines ~65-85)

---

## 9. PERFORMANCE OPTIMIZATIONS

### Image Preloading
- **Trigger**: Page load
- **Effect**: Preloads all service images
- **Purpose**: Faster image display on scroll
- **Implementation**: JavaScript Image() constructor
- **File**: `js/main.js` (lines ~280-295)

### Intersection Observer
- **Purpose**: Efficient scroll detection
- **Benefit**: Only animates when elements are visible
- **Implementation**: Native browser API
- **File**: `js/main.js` (lines ~75-95)

---

## 10. CUSTOM SCROLLBAR

### Scrollbar Styling
- **Width**: 10px
- **Track Color**: Dark (#0A0A0A)
- **Thumb Color**: Red (#C41E3A)
- **Hover Color**: Darker red (#A01830)
- **Implementation**: CSS `::-webkit-scrollbar`
- **File**: `css/custom.css` (lines ~265-285)

---

## Animation Timing Functions

### Ease-Out
- **Used For**: Most animations
- **Effect**: Fast start, slow end
- **Feel**: Natural, smooth

### Ease-In-Out
- **Used For**: Parallax, zoom effects
- **Effect**: Slow start, fast middle, slow end
- **Feel**: Balanced, professional

### Linear
- **Used For**: Continuous animations
- **Effect**: Constant speed
- **Feel**: Mechanical, precise

---

## Browser Compatibility

All animations use modern CSS and JavaScript features:

- ✅ **CSS Transforms**: All modern browsers
- ✅ **CSS Transitions**: All modern browsers
- ✅ **CSS Animations**: All modern browsers
- ✅ **Intersection Observer**: All modern browsers (IE11 needs polyfill)
- ✅ **Backdrop Filter**: All modern browsers (Safari needs -webkit-)

---

## Customization Tips

### Adjust Animation Speed
```css
/* In custom.css, change duration values */
.fade-up {
    transition: all 0.8s ease-out; /* Change 0.8s to your preference */
}
```

### Disable Animations
```css
/* Add to custom.css for reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### Change Easing
```css
/* Replace ease-out with other timing functions */
transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Animation Performance Checklist

✅ Use `transform` and `opacity` for best performance  
✅ Avoid animating `width`, `height`, `top`, `left`  
✅ Use `will-change` sparingly for complex animations  
✅ Limit simultaneous animations  
✅ Use CSS animations over JavaScript when possible  
✅ Debounce scroll events  
✅ Use Intersection Observer instead of scroll listeners  

---

**MAXIMUS** - Crafted with attention to every detail.
