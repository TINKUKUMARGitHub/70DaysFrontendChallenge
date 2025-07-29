✅ **Day 7 – Frontend Mastery Challenge**
📅 **Date**: 29 July 2025
🕒 **Total Time**: 8 Hours (Morning 4 hrs + Afternoon 4 hrs)
🎯 **Theme**: Mastering **CSS Positioning + Z-Index + Real Layout**
📍 **Goal**: Build your first **professional layout** using **CSS Positioning**.

---

# 🌟 Key Outcomes Today:

| Skill                      | Outcome                                                               |
| -------------------------- | --------------------------------------------------------------------- |
| CSS Positioning            | Understand static, relative, absolute, fixed, sticky                  |
| Z-Index & Stacking Context | Control element layers like a pro (used in modals, tooltips, navbars) |
| Project Execution          | Build a **feature section layout** with badge, image, CTA, sticky bar |
| Interview Readiness        | Positioning + layout + stacking Q\&A                                  |
| Resume Boost               | Add “CSS Positioning + z-index + Feature Layout” to your project list |

---

# 🕘 Morning Session (4 Hours)

## 1️⃣ Deep Concepts: CSS Positioning (2.5 hrs)

### CSS Position Types:

| Type     | Use Case                                                | Key Properties                   |
| -------- | ------------------------------------------------------- | -------------------------------- |
| Static   | Default position (no positioning applied)               | No `top`, `left` effect          |
| Relative | Shift from original place, parent for absolute children | `top`, `left`, etc. work         |
| Absolute | Position inside nearest positioned ancestor             | `top`, `left`, `right`, `bottom` |
| Fixed    | Sticks to viewport (navbar, CTA)                        | Viewport based                   |
| Sticky   | Scrolls until threshold, then sticks                    | Use in navbars, sections         |

### ✅ Practice Tasks (in folder `Day7/positioning-practice/`):

* Build 5 mini boxes using each position type.
* Add borders, background colors, and text to each box.
* Apply `top`, `left`, `z-index` — observe behavior.

---

## 2️⃣ Z-Index + Stacking Context (1 hr)

### Key Points:

* **Z-index** controls layer order **only if element is positioned**.
* **Stacking context** forms when:

  * `position` + `z-index`
  * `opacity < 1`, `transform`, `filter` applied.

### ✅ Activity:

* Create 3 overlapping cards (Card A, B, C).
* Use different `z-index` values — observe which one stays on top.
* Add `opacity`, `transform`, and see stacking context changes.

---

## 3️⃣ Interview Q\&A + Wrap-up (0.5 hr)

| Question                           | Key Point to Answer                          |
| ---------------------------------- | -------------------------------------------- |
| Q1: Relative vs Absolute?          | Absolute is inside closest positioned parent |
| Q2: z-index not working?           | Parent stacking context might block it       |
| Q3: Use cases of fixed & sticky?   | Navbar (sticky), Floating CTA (fixed)        |
| Q4: What creates stacking context? | z-index, opacity, transform, etc.            |
| Q5: Same z-index on two elements?  | The later in HTML renders above              |

---

# 🕓 Afternoon Session (4 Hours)

## 4️⃣ Mini Project – **Feature Section Layout with Positioning** (3 hrs)

### Project Folder: `Day7_FeatureSection_Project/`

| Section      | Details                                                               |
| ------------ | --------------------------------------------------------------------- |
| Left Column  | Heading, Subheading, Button                                           |
| Right Column | Image (positioned **absolutely** inside container)                    |
| Badge/Icon   | Positioned **top-right** (absolute), use any emoji/icon               |
| Footer CTA   | Floating CTA button **fixed** to bottom-right                         |
| Responsive   | Use **media queries** — switch from side-by-side to stacked on mobile |

### ✅ Guidance:

* Use **relative parent div**, **absolute child image**.
* Position badge with `top: 10px; right: 10px`.
* Fixed CTA:

  ```css
  .cta-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }
  ```

### 🎨 Colors (Use as per Figma-style):

| Element    | Color            |
| ---------- | ---------------- |
| Background | `#f9f9f9`        |
| Button     | `#007bff` (Blue) |
| Text Color | `#333333`        |
| Badge      | `#ff4757` (Red)  |

---

## 5️⃣ README.md – Industry Level (0.5 hr)

### Include:

* Summary of **CSS Positioning**.
* Screenshots of project layout.
* Code snippets of `relative + absolute`, `fixed`, `z-index`.
* List of **5 real-world uses** of each position type.
* Interview Q\&A recap.

---

## 6️⃣ Wrap-up Practice Task (0.5 hr)

* Create **sticky header** for your feature section.
* Add **hover effect** on CTA button (e.g., move slightly using `position` and `transform`).

---

# ✅ Deliverables:

| File/Folder               | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `positioning-practice/`   | Mini examples of each position type                           |
| `FeatureSection_Project/` | Full feature section + floating CTA                           |
| `README.md`               | Full write-up, code, screenshots                              |
| Git commit message        | `"Day 7: CSS Positioning Mastered + Feature Section Project"` |

---

# 📄 Resume Tip of the Day:

✅ Add under **Projects**:

> “Built responsive feature section with advanced CSS positioning, z-index stacking, and responsive layout for mobile & desktop.”

✅ Add **Skill**: CSS Positioning, Responsive Design, Accessibility, Git

# 🧠 Bonus Logic Task (Optional):

* Create a **popup modal** using `position: absolute` and `fixed backdrop`.
* On button click → show modal above page content.

