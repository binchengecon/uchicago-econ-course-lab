# UChicago Economics PhD Course Lab

A static, multi-quarter course-planning site for the University of Chicago Economics PhD program.

## Website

After GitHub Pages finishes deploying, the site is available at:

<https://binchengecon.github.io/uchicago-econ-course-lab/>

## Updating course data

Quarter-specific course information and the shared published plan live in `dist/data.js`. Edit that file, commit the change, and push it to the `main` branch. GitHub Actions then publishes the new version automatically.

The planner also keeps a separate local draft in each browser. To publish a default plan that appears on new devices, update the relevant quarter's `publishedPlan` in `dist/data.js`. See `ADDING_A_QUARTER.md` for details.

## Site files

- `dist/index.html` — page structure
- `dist/styles.css` — layout, calendar, and responsive styling
- `dist/data.js` — quarter and course data
- `dist/app.js` — planner behavior
- `dist/bootstrap.js` — cache-safe script loader
- `ADDING_A_QUARTER.md` — instructions for future quarters

