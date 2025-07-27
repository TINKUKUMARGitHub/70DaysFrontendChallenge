
# 📅 **Day 5 – CSS Variables + Transitions + Animations**

## 🎯 **Theme**: Add life to your designs – master modern CSS for dynamic, clean UI.

---

## 🕘 Morning Session (4 hrs)

### 🔸 **1. Concepts to Study & Practice (2.5 hrs)**

📘 Topics:

1. **CSS Variables (Custom Properties)**:

   * Syntax: `--primary-color: #4f46e5;`
   * Usage: `color: var(--primary-color);`
   * Scope: global (`:root`) vs local (inside selector)

2. **Transitions**:

   * Properties: `transition-property`, `duration`, `timing-function`, `delay`
   * Example: `transition: all 0.3s ease;`

3. **Animations (Keyframes)**:

   * `@keyframes`, `animation-name`, `duration`, `iteration-count`, `direction`
   * Example: Fade-in, Slide-in, Bounce, Pulse

4. **Best Practices**:

   * Use `will-change`, minimize reflows
   * Keep animations smooth (<60fps)

🔗 Resources:

* [CSS Variables – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
* [CSS Transitions & Animations – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

### 🔸 **2. Mini Practice Tasks (1.5 hrs)**

📁 Folder: `/Day5/Practice`

Tasks:

1. `variables-demo.html`: Define 5 color variables, apply to text/buttons.
2. `transition-demo.html`: Create hover button with smooth color & scale transition.
3. `animation-demo.html`: Animate a box using keyframes (e.g., pulse or slide).

✅ Tags:

* HTML: `<button>`, `<div>`, `<p>`
* CSS: `:root`, `var()`, `@keyframes`, `transition`, `animation`

---

## 🕒 Break – 1 hr

💡 Reflection: How can transitions improve user experience?

---

## 🌇 Afternoon Session (4 hrs)

### 🛠️ **Mini Project – Animated Landing Page Hero Section**

📁 Folder: `/Day5/Project/landing-hero`

---

### 🧱 What to Build (Full Details):

Create a **landing page hero section** (like SaaS or app site).

### ✅ Page Structure:

1. **Navbar (top)** – Logo + menu links (use Flexbox)
2. **Hero Section (center)**:

   * Heading (`<h1>`)
   * Subheading (`<p>`)
   * Call to Action Button (`<button>`)
   * Image (placeholder)

### 🎨 Color Palette (Modern SaaS Theme):

| Purpose      | Color                  |
| ------------ | ---------------------- |
| Background   | `#f9fafb` (light gray) |
| Primary Text | `#1f2937` (dark gray)  |
| Accent Color | `#6366f1` (indigo)     |
| Button Hover | `#4f46e5`              |
| CTA Text     | `#ffffff`              |

---

### 🪄 Features:

* Use CSS variables for all colors, font sizes.
* Smooth transition on button hover.
* Animate text or image on page load (e.g., fade-in, slide).
* Responsive layout (Flexbox) for mobile.

---

### Bonus:

* Add **scroll indicator animation** (optional)
* Use Google Font: `"Poppins"` or `"Inter"`

---

## 📝 End-of-Day Reflection (30 min)

### 📋 10 Learnings:

e.g., How variables reduce redundancy, transitions improve UX, keyframe structure.

### ❓ 3 “Why” Questions:

* Why prefer variables in CSS?
* Why use transitions over JS for hover effects?
* Why animation performance matters?

---

## ✅ Deliverables Checklist

| File                               | Description                        |
| ---------------------------------- | ---------------------------------- |
| `/Practice/*.html`                 | Variables + transition + animation |
| `/Project/landing-hero/index.html` | Animated hero section project      |
| `style.css`                        | Linked stylesheet                  |
| `day5_notes.txt`                   | Learnings + questions              |
| `README.md`                        | This roadmap guide                 |

---

## 🎤 Interview Q\&A – CSS Variables & Animations

**Q1. What are CSS Variables? Advantages?**
**A:** Custom properties for reusable values. Easier theme management, cleaner code, dynamic styling via JS.

**Q2. How are transitions and animations different?**
**A:** Transitions respond to state change (e.g., hover); animations run automatically using keyframes.

**Q3. How do you optimize animations for performance?**
**A:** Animate `transform`, `opacity` (not layout), use `will-change`, avoid heavy JS.

**Q4. Why use keyframes over JS animations?**
**A:** Simpler syntax, browser-optimized, no JS dependency.

