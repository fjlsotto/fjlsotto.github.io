# fjlsotto.github.io

Personal portfolio site for Francis Jay Sotto — Data Professional & Statistician. Built with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages.

**Live site:** [fjlsotto.github.io](https://fjlsotto.github.io)

---

## Structure

```
/
├── index.html              # Main portfolio page
├── styles.css              # Global styles (design tokens, layout, components)
├── script.js               # Scroll reveal, nav behavior, experience accordion
├── README.md
├── assets/
│   ├── favicon.svg         # Tab icon (FJ monogram)
│   └── resume.pdf          # Resume — add your own here
└── projects/
    ├── _template/          # Copy this folder to start a new project page
    │   ├── index.html      # Project case study template
    │   └── project.css     # Project-specific styles
    ├── loan-default-prediction/
    └── customer-churn-analysis/
```

---

## Adding a New Project

1. **Copy the template:**
   ```bash
   cp -r projects/_template projects/your-project-name
   ```

2. **Update `projects/your-project-name/index.html`** — fill in all `<!-- UPDATE -->` sections:
   - Page title and meta description
   - Category badge, project title, tagline
   - GitHub repo link and date
   - Tech stack tags
   - Overview, data, methodology, results, and takeaways sections

3. **Add a card to the portfolio grid** in `index.html` — copy an existing project card block and update the title, description, badge, tags, GitHub link, and `href` to your new project folder.

---

## Resume

Drop your PDF into `assets/` named `resume.pdf`. The Resume button in the navbar links directly to it.

---

## Project GitHub Links

Each project card has a GitHub icon linking to the repo, and the project title links to the case study page at `projects/your-project-name/`. To wire up a new project:

1. In `index.html`, find the project card
2. Update the `.icon-link` `href` to your actual GitHub repo URL
3. Update the `<h3>` title `href` to `projects/your-project-name/`

> The two existing projects currently point to placeholder GitHub URLs — update once those repos are public.

---

## On Project Clusters / Filtering

Each project card already has a category badge (Machine Learning, Analytics, etc.). Filtering by category will be added once there are enough projects to warrant it (target: 5+). For now, the badges serve as visual grouping.

---

## Running Locally

No build step required:

```bash
python3 -m http.server 3000
# open http://localhost:3000
```

---

## Contact

- [fjlsotto@gmail.com](mailto:fjlsotto@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/francisjay)
- [GitHub](https://github.com/fjlsotto)

---

## Tech Stack

- **HTML / CSS / JavaScript** — no frameworks or build tools
- **Fonts:** Playfair Display + Inter via Google Fonts
- **Hosting:** GitHub Pages (auto-deploys from `main`)
