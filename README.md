# Cybersecurity Portfolio — Astro Integration

## Folder structure

```
astro/
└── src/
    ├── data/
    │   └── portfolio.ts        ← ✏️  EDIT THIS FILE with your details
    ├── styles/
    │   └── global.css          ← All styles (dark terminal theme)
    ├── components/
    │   ├── Nav.astro
    │   ├── About.astro
    │   ├── Experience.astro
    │   ├── Projects.astro
    │   ├── Education.astro
    │   ├── Certifications.astro
    │   └── Volunteer.astro
    └── pages/
        └── index.astro         ← Main page — imports everything
```

## Quick start

1. **Copy** the `astro/src/` folder into your existing Astro project's `src/` directory.
2. **Edit** `src/data/portfolio.ts` — replace every placeholder value with your real info.
3. Run `npm run dev` and visit `http://localhost:4321`.

## Personalising

All your content lives in **one file**: `src/data/portfolio.ts`.

| Export              | What to edit                                      |
|---------------------|---------------------------------------------------|
| `personal`          | Name, title, bio, location, email, LinkedIn, GitHub, availability |
| `skills`            | Array of skill tags shown in the hero             |
| `highlightedSkillCount` | How many skill tags get the green accent colour |
| `experience`        | Work history — add/remove `Job` objects           |
| `projects`          | Portfolio projects — add/remove `Project` objects |
| `education`         | Degrees — add/remove `Degree` objects             |
| `certifications`    | Certs — add/remove `Cert` objects                 |
| `volunteer`         | Volunteer roles — add/remove `VolunteerRole` objects |

## Theming

CSS custom properties live at the top of `src/styles/global.css`:

```css
:root {
  --green:     #39ff6a;   /* primary accent */
  --amber:     #f5a623;   /* secondary accent (company names, cert years) */
  --bg:        #0a0c0a;   /* page background */
  --text:      #c8dfc8;   /* body text */
  /* ... */
}
```

Change `--green` to any colour to re-theme the entire site instantly.

## Adding a new section

1. Create `src/components/MySection.astro`
2. Add your data type + export to `src/data/portfolio.ts`
3. Import and use the component in `src/pages/index.astro`

## Requirements

- Astro **v3+** (tested on v4)
- No additional integrations needed — pure static HTML output
- TypeScript is optional; rename `portfolio.ts` → `portfolio.js` and remove type annotations if preferred
