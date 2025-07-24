

# 📅 **Day 2 – CSS Basics + Box Model + Flexbox Layout**

## 🎯 **Theme**: Master styling, spacing, and layout to design like a pro — Figma-style card UI.

---

## 🕘 Morning Session (4 hrs)

### 🔸 **1. Concepts to Study & Practice (2.5 hrs)**

📘 Topics:

* CSS Syntax, Selectors (universal `*`, element, class `.`, ID `#`)
* Colors (HEX `#`, RGB, HSL, named)
* Font styling: `font-family`, `font-size`, `font-weight`, `line-height`
* Box Model: `margin`, `padding`, `border`, `width`, `height`
* Display types: `block`, `inline`, `inline-block`, `none`
* Flexbox Intro:

  * `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`

🔗 Resources:

* [CSS Basics – MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [CSS Flexbox Guide – CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### 🔸 **2. Mini Practice Tasks (1.5 hrs)**

📁 Folder: `/Day2/Practice`

Tasks:

1. `box-model.html` – Create 3 nested boxes with different margin, padding, border.
2. `flex-layout.html` – Build a horizontal navbar with 3 links using Flexbox.
3. `colors.html` – Design color palette using 5 different color styles with `HEX`, `RGB`, `HSL`.

✅ Use:

* Tags: `<div>`, `<nav>`, `<a>`, `<h1>`, `<p>`
* CSS: `background-color`, `border-radius`, `box-shadow`, `hover`

---

## 🕒 Break – 1 hr

💡 Reflect: “Box model kahan confuse kiya?” – test in browser DevTools.

---

## 🌇 Afternoon Session (4 hrs)

### 🛠️ **Mini Project – Responsive Card Layout (Figma-style UI)**

📁 Folder: `/Day2/Project/card-layout`

### Project Goal:

Build a **3-card layout** that looks modern, clean, and responsive — **like industry design**.

### Tags to Use:

* HTML: `<section>`, `<div>`, `<img>`, `<h2>`, `<p>`, `<button>`
* CSS: Flexbox, Box Shadow, Border Radius, Hover Effect, Media Queries

---

### 🎨 Color Palette (Figma Style):

| Purpose      | Color                   |
| ------------ | ----------------------- |
| Background   | `#f5f5f5` (light grey)  |
| Card BG      | `#ffffff` (white)       |
| Text Color   | `#333333` (dark)        |
| Accent Color | `#4f46e5` (indigo)      |
| Button Hover | `#4338ca` (dark indigo) |

### Layout:

* 3 cards in row (Flexbox)
* Each card = image, title, description, button
* Button hover = background color change + cursor pointer

---

### 🔧 Requirements:

* Responsive (1 column on mobile)
* Clean spacing, alignment
* Hover effect on button
* Use `box-shadow` for card

💡 Bonus:

* Use Google Fonts (`Poppins` or `Roboto`)
* Use CSS variables (`--primary-color`) for color reuse

---

## 📝 End-of-Day Reflection (30 min)

### 📋 10 Learnings:

e.g., Box model ka kaam kya hai? Flexbox ka real use?

### ❓ 3 “Why” Questions:

* Why use Flexbox over float?
* Why do we need box-sizing: border-box?
* Why use HEX instead of named colors?

---

## ✅ Deliverables Checklist

| File                              | Description            |
| --------------------------------- | ---------------------- |
| `/Practice/*.html`                | All mini tasks         |
| `/Project/card-layout/index.html` | Responsive card layout |
| `style.css`                       | Linked CSS file        |
| `day2_notes.txt`                  | Learnings + questions  |
| `README.md`                       | This roadmap file      |

---

## 🎤 Interview Q\&A – CSS + Layout

**Q1. What is the CSS Box Model?**
**A:** It defines how space is calculated around elements: Content → Padding → Border → Margin.

**Q2. Difference between `inline`, `block`, and `inline-block`?**
**A:** Inline = no new line, can’t set width/height. Block = new line, full width. Inline-block = inline + set width/height.

**Q3. What is Flexbox? When to use it?**
**A:** A CSS layout model for 1D layouts (rows/columns), ideal for aligning items, spacing, centering.

**Q4. How to make a site responsive?**
**A:** Use relative units (`%`, `em`, `rem`), Flexbox/Grid, and media queries (`@media`).

**Q5. Why use external CSS over inline/internal?**
**A:** Cleaner code, reusable styles, better performance, and separation of concerns.

---




