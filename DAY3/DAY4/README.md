
# 📅 **Day 4 – CSS Grid + Responsive Blog Page**

## 🎯 **Theme**: Master CSS Grid for real-world responsive layouts — build a blog grid layout (just like news sites or blogs).

---

## 🕘 Morning Session (4 hrs)

### 🔸 **1. Concepts to Study & Practice (2.5 hrs)**

📘 Topics:

* CSS Grid Basics:

  * `display: grid`, `grid-template-columns`, `grid-gap`, `grid-row`, `grid-column`
* Grid Placement:

  * `grid-area`, `grid-template-areas`, `justify-items`, `align-items`
* Nested Grid: Grid inside grid
* Media Queries for Grid:

  * Make it mobile responsive

🔗 Resources:

* [CSS Grid – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
* [CSS Grid Cheatsheet](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

### 🔸 **2. Mini Practice Tasks (1.5 hrs)**

📁 Folder: `/Day4/Practice`

Tasks:

1. `grid-layout.html`: Create a **3-column layout** with Grid.
2. `grid-website.html`: website to place header, nav, main, sidebar, footer.

✅ Tags:

* HTML: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
* CSS: `display: grid`, `grid-template`, `gap`, `area`

---

## 🕒 Break – 1 hr

💡 Tip: Grid is powerful, visualize using **DevTools → Layout Tab**.

---

## 🌇 Afternoon Session (4 hrs)

### 🛠️ **Mini Project – Responsive Blog Grid Page**

📁 Folder: `/Day4/Project/blog-grid`

---

### 🧱 What to Build (Full Details):

Build a **homepage for a blog site** with a **grid layout of blog posts**.

### ✅ Page Structure:

1. **Navbar (Top)**:

   * Logo (left), Menu (right) – use Flexbox

2. **Main Content (Grid Layout)**:

   * **6 blog cards** (2 rows × 3 columns on desktop)
   * Each card:

     * Image (placeholder)
     * Blog Title (h2)
     * Short description (p)
     * Button: Read More

3. **Responsive Design**:

   * On mobile: 1 column
   * Tablet: 2 columns
   * Desktop: 3 columns

---

### 🎨 Color Palette (Clean Blog Theme):

| Purpose      | Color                  |
| ------------ | ---------------------- |
| Background   | `#ffffff`              |
| Text Color   | `#1e293b` (dark gray)  |
| Accent Color | `#2563eb` (blue)       |
| Button Hover | `#1d4ed8` (dark blue)  |
| Border Color | `#e2e8f0` (light gray) |

---

### Tags & Features to Use:

* HTML: `<nav>`, `<section>`, `<article>`, `<img>`, `<h2>`, `<p>`, `<button>`
* CSS:

  * Grid for blog layout
  * Flexbox for navbar
  * Media queries
  * Transitions on button hover
  * `box-shadow`, `border-radius` for card effect

---

💡 Bonus (Optional):

* Add a **footer** with social links
* Use **Google Font: "Lato" or "Merriweather"**

---

## 📝 End-of-Day Reflection (30 min)

### 📋 10 Learnings:

e.g., Grid vs Flex, areas vs columns, mobile grid layout.

### ❓ 3 “Why” Questions:

* Why use grid for blog?
* Why not use Flexbox for multi-column?
* Why combine Flexbox + Grid?

---

## ✅ Deliverables Checklist

| File                            | Description               |
| ------------------------------- | ------------------------- |
| `/Practice/*.html`              | Grid examples             |
| `/Project/blog-grid/index.html` | Responsive blog grid page |
| `style.css`                     | Linked stylesheet         |
| `day4_notes.txt`                | Learnings + questions     |
| `README.md`                     | This roadmap guide        |

---

## 🎤 Interview Q\&A – CSS Grid + Layouts

**Q1. Difference between Flexbox and Grid?**
**A:** Flexbox is for 1D layouts (row/column), Grid is for 2D (rows + columns). Grid offers more control for complex layouts.

**Q2. How do you make a grid responsive?**
**A:** Use `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` and media queries.

**Q3. What is grid-template-areas?**
**A:** It lets you name areas (e.g., "header nav main") and place elements cleanly.

**Q4. Can you combine Flexbox and Grid?**
**A:** Yes. E.g., Grid for layout, Flexbox inside components for alignment.

**Q5. When to use Grid over Flexbox?**
**A:** Use Grid for overall page structure or multi-column; Flexbox for small alignments.



