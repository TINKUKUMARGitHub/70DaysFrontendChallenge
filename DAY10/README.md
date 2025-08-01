✅ **Day 10 – Frontend Mastery Challenge**
🗕️ **Date**: 1 August 2025
🕒 **Time**: 8 Hours (Morning 4 hrs + Afternoon 4 hrs)
🌟 **Theme**: CSS Grid Mastery + Real Page Layout
📈 **Goal**: Master CSS Grid + Create real responsive layout using grid

---

# 📊 Key Outcomes Today:

| Skill               | Outcome                                                     |
| ------------------- | ----------------------------------------------------------- |
| CSS Grid            | Full grid layout mastery (auto-fit, fr, gap, area)          |
| Grid Layout Project | Real UI layout with grid (header, sidebar, content, footer) |
| Logic Skill         | Layout problem solving with grid                            |
| Interview Q\&A      | CSS Grid concepts + responsive layout questions             |
| Resume Boost        | Add "Grid Layout UI" to project list                        |

---

# 🕓 Morning Session (4 Hours)

## 1️⃣ Theory: CSS Grid Core Concepts (2 hrs)

### Key Properties:

| Property              | Description                | Example                           |
| --------------------- | -------------------------- | --------------------------------- |
| display: grid         | Turns container into grid  | `display: grid;`                  |
| grid-template-columns | Define columns             | `grid-template-columns: 1fr 1fr;` |
| grid-gap / gap        | Space between rows/columns | `gap: 20px;`                      |
| grid-template-areas   | Name areas of layout       | `"header header" "sidebar main"`  |
| grid-column / row     | Span items                 | `grid-column: 1 / 3;`             |

### Responsive Grid:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

### Practice:

* Create 4 boxes using grid.
* Make them responsive using `auto-fit` and `minmax()`.

## 2️⃣ Project Start: Grid Layout Page (2 hrs)

### Folder: `Day10_GridLayout_Project/`

| Section      | Details                              |
| ------------ | ------------------------------------ |
| Header       | Full width, site name/logo           |
| Sidebar      | 20% width (desktop), hidden (mobile) |
| Main Content | Blog posts / product grid            |
| Footer       | Full width, contact info             |

* Use `grid-template-areas` for layout.
* Media Query: Hide sidebar below 768px.
* Bonus: Make footer sticky on small screen.

---

# 🕒 Afternoon Session (4 Hours)

## 3️⃣ Logic Task (1 hr)

* Problem: Make **3 cards in grid layout**.
* On desktop: row layout, on mobile: stacked.
* Bonus: Add hover effect with `transform: scale(1.05)`.

## 4️⃣ Git & GitHub Practical (0.5 hr)

### Git Theory:

| Step          | Command                               |
| ------------- | ------------------------------------- |
| Init repo     | `git init`                            |
| Add all files | `git add .`                           |
| Commit        | `git commit -m "Day10: Grid Project"` |
| Push          | `git push origin main`                |

### Practical:

* Push `Day10_GridLayout_Project` to GitHub.
* Update README.md with screenshot + code snippets.

## 5️⃣ AI Tool Task (0.5 hr)

* Prompt: "How can I improve CSS Grid layout performance and responsiveness?"
* Copilot: Help generate grid-area names and responsive breakpoints.

## 6️⃣ Interview Q\&A (1 hr)

| Question                        | Key Point to Answer                      |
| ------------------------------- | ---------------------------------------- |
| Q1: Grid vs Flexbox?            | Grid = 2D layout, Flex = 1D (row/column) |
| Q2: What is fr unit?            | Fraction of available space in grid      |
| Q3: Use of grid-template-areas? | Named layout areas, clean code           |
| Q4: Auto-fit vs auto-fill?      | Fit = shrink items, Fill = fixed tracks  |
| Q5: Responsive grid method?     | minmax + auto-fit + media queries        |

---

# 📄 Resume Tip:

> Created responsive web page using CSS Grid with auto-fit, fr units, and media queries for layout.






