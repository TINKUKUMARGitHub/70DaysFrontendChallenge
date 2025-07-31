✅ **Day 9 – Frontend Mastery Challenge**
🗒️ **Date**: 31 July 2025
🕒 **Time**: 8 Hours (Morning 4 hrs + Afternoon 4 hrs)
🌟 **Theme**: CSS Flexbox Mastery + Responsive Card Layout Project
📌 **Goal**: Master Flexbox (1D layout) and build a real-world responsive card layout.

---

# 📊 Key Outcomes Today:

| Skill               | Outcome                                     |
| ------------------- | ------------------------------------------- |
| CSS Flexbox         | Align, justify, direction, wrapping mastery |
| Responsive Layout   | Cards adapt on mobile/tablet/desktop        |
| Project Execution   | Real **Card Layout Project** with Flexbox   |
| Interview Readiness | Flexbox + responsive layout Q\&A            |
| Resume Boost        | Add "Responsive Card Layout" to portfolio   |

---

# 🕓 Morning Session (4 Hours)

## 1️⃣ Theory: CSS Flexbox (2 hrs)

### Flexbox Core Properties:

| Property        | Description                                    |
| --------------- | ---------------------------------------------- |
| display: flex   | Activate flex container                        |
| flex-direction  | row / column / row-reverse / column-reverse    |
| justify-content | Start / center / space-between / space-around  |
| align-items     | Align vertically (flex-start, center, stretch) |
| flex-wrap       | Wrap items to new line                         |
| gap             | Space between flex items                       |

### Child Properties:

| Property    | Description           |
| ----------- | --------------------- |
| flex: 1 / 2 | Auto grow/shrink      |
| align-self  | Align individual item |
| order       | Change display order  |

### ✅ Practice Task:

* Create a Flex container with 4 boxes.
* Apply justify-content & align-items variations.
* Try row and column direction + wrap.

---

## 2️⃣ Git + GitHub Theory + Commands (1 hr)

### Key Concepts:

| Term   | Description                         |
| ------ | ----------------------------------- |
| Git    | Version control system (local repo) |
| GitHub | Online repo hosting (remote)        |
| Commit | Save changes with message           |
| Push   | Upload commits to GitHub            |

### ✅ Daily Commands:

```bash
# Init repo
git init

# Add files to staging
git add .

# Commit with message
git commit -m "Day 9: Flexbox practice"

# Connect to GitHub remote
git remote add origin <repo_url>

# Push to GitHub
git push -u origin main
```

---

## 3️⃣ Interview Q\&A (1 hr)

| Question                          | Key Answer                                      |
| --------------------------------- | ----------------------------------------------- |
| Q1: Flexbox vs Grid?              | Flex = 1D layout, Grid = 2D layout              |
| Q2: justify-content options?      | start, end, center, space-between, space-around |
| Q3: align-items options?          | stretch, center, flex-start, flex-end           |
| Q4: How to wrap flex items?       | Use flex-wrap: wrap                             |
| Q5: Responsive layout in Flexbox? | Use %/vw units + media queries + flex-wrap      |

---

# 🕕 Afternoon Session (4 Hours)

## 4️⃣ Project: Responsive Card Layout (3 hrs)

### Project Folder: `Day9_CardLayout_Project/`

| Section      | Details                                     |
| ------------ | ------------------------------------------- |
| Container    | Flex container, wrap cards on small screens |
| Card         | Image, title, description, button           |
| Mobile View  | Stack cards vertically                      |
| Desktop      | Cards in row with equal spacing             |
| Hover Effect | Scale card on hover using transform         |

### ✅ Guidance:

* Use `flex-wrap`, `justify-content: space-between`, `gap`.
* Card width: 30% (desktop), 100% (mobile via media query).
* Hover:

```css
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
```

### Colors:

| Element | Color   |
| ------- | ------- |
| Card BG | #f9f9f9 |
| Button  | #007bff |
| Text    | #333333 |

---

## 5️⃣ README.md + GitHub Push (0.5 hr)

* Project summary + screenshots.
* Code snippet of Flexbox usage.
* Interview Q\&A recap.
* Push to GitHub with commit msg: "Day 9: Responsive Card Layout Project"

---

## 6️⃣ Logic Task + AI Tool Use (0.5 hr)

* Problem: 4 cards, different heights, align evenly using Flexbox.
* AI Task: Use **ChatGPT prompt** "Fix uneven card height in Flexbox layout"
* DevTools: Inspect flex properties in browser.


> **Q:** How do you build responsive UIs?
> **A:** I use mobile-first design with Flexbox/Grid, responsive units, and media queries for smooth experience.


