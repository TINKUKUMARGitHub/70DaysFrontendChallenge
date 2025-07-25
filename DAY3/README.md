Bhai! ✅
**Day 3 – 25 July**  with `README.md`, project, interview Q\&A.

---

# 📅 **Day 3 – CSS Positioning + Media Queries + Responsive Design**

## 🎯 **Theme**: Learn how to control element placement and responsiveness — like real-world website layouts.

---

## 🕘 Morning Session (4 hrs)

### 🔸 **1. Concepts to Study & Practice (2.5 hrs)**

📘 Topics:

* **Positioning**:

  * `static`, `relative`, `absolute`, `fixed`, `sticky`
  * `top`, `left`, `right`, `z-index`, `overflow`
* **Media Queries**:

  * Syntax: `@media (max-width: 768px) { ... }`
  * Mobile-first vs Desktop-first
* **Responsive Units**:

  * `em`, `rem`, `%`, `vh`, `vw`

🔗 Resources:

* [Positioning – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
* [Responsive Design Basics](https://web.dev/responsive-web-design-basics/)

---

### 🔸 **2. Mini Practice Tasks (1.5 hrs)**

📁 Folder: `/Day3/Practice`

Tasks:

1. `positioning-demo.html`: Use all 5 position types with colored boxes.
2. `media-queries.html`: Create a layout that changes from 3-column to 1-column on small screens.

✅ Tags:

* HTML: `<div>`, `<h1>`, `<p>`, `<section>`
* CSS: `position`, `media`, `z-index`, `overflow`, `min-width`

---

## 🕒 Break – 1 hr

💡 Reflect: “Responsive design kaise improve kar sakta hoon?”

---

## 🌇 Afternoon Session (4 hrs)

### 🛠️ **Mini Project – Responsive Pricing Table**

📁 Folder: `/Day3/Project/pricing-table`

### Project Goal:

Create a **responsive 3-plan pricing table** with proper spacing, buttons, hover effects.

### Layout Plan:

* Use **Flexbox for desktop**, **stacked layout for mobile**
* Each card = Plan name, price, features, button
* Make **1 plan highlighted** with different background

---

### 🎨 Color Palette (Figma-inspired):

| Purpose        | Color                       |
| -------------- | --------------------------- |
| Background     | `#f0f4f8` (light grey-blue) |
| Card BG        | `#ffffff`                   |
| Text Primary   | `#1f2937` (dark grey)       |
| Button BG      | `#10b981` (green)           |
| Hover Button   | `#059669` (dark green)      |
| Highlight Plan | `#e0f2fe` (light blue)      |

### Tags:

* HTML: `<section>`, `<h2>`, `<ul>`, `<li>`, `<button>`
* CSS: `flex`, `media`, `hover`, `border-radius`, `box-shadow`

💡 Bonus:

* Add **hover transition** to button
* Use **Google Fonts: Inter or Lato**

---

## 📝 End-of-Day Reflection (30 min)

### 📋 10 Learnings:

e.g., Sticky vs Fixed position, why media queries matter.

### ❓ 3 “Why” Questions:

* Why use relative units instead of px?
* Why prefer mobile-first approach?
* Why use z-index?

---

## ✅ Deliverables Checklist

| File                                | Description                    |
| ----------------------------------- | ------------------------------ |
| `/Practice/*.html`                  | Positioning + responsive demos |
| `/Project/pricing-table/index.html` | Responsive pricing project     |
| `style.css`                         | Linked stylesheet              |
| `day3_notes.txt`                    | Learnings + questions          |
| `README.md`                         | This roadmap guide             |

---

## 🎤 Interview Q\&A – Positioning + Responsive

**Q1. Difference between relative and absolute positioning?**
**A:** Relative positions element from its normal spot; absolute positions from the nearest positioned ancestor (else from `body`).

**Q2. What is z-index?**
**A:** It controls stacking of overlapping elements. Higher `z-index` appears on top.

**Q3. How do media queries work?**
**A:** They apply CSS rules based on screen size. Example: `@media (max-width: 768px)` applies to mobile devices.

**Q4. How to make elements responsive?**
**A:** Use relative units, media queries, and flexible layouts like Flexbox/Grid.

**Q5. What is the difference between px, em, rem?**
**A:** `px` is fixed. `em` is relative to parent font size. `rem` is relative to root (`html`) font size.

---


