# Adding another quarter

The page layout and calendar logic do not need to change for a new quarter.
Quarter-specific content lives in `dist/data.js`.

## Data to add

1. Create term-specific arrays for courses, workshops, portfolios, and important dates.
2. Create a term-specific source ledger.
3. Add one entry to `courseTerms` with:
   - a stable lowercase ID such as `winter-2027`;
   - its visible label, snapshot date, description, and planning flags;
   - the four metric values;
   - references to the new courses, workshops, portfolios, dates, and sources.
   - a `publishedPlan` containing its publication time, note, and default course IDs.
4. Add the term ID to `courseTermOrder` in the desired menu order.

Once those data changes are published, the quarter automatically appears in the selector. Each quarter receives its own saved shortlist in the visitor's browser.

## Publishing a shared plan

The browser shortlist is a local draft. To make a selected schedule the default on every new device, copy its course IDs into that quarter's `publishedPlan.courseIds`, set `publishedPlan.updated`, and deploy the changed `dist/data.js`. Existing devices keep their local drafts until the user chooses **Load published plan**; new devices start from the published plan automatically.

## Course record requirements

Keep course IDs unique within a quarter. Each course needs the existing fields used by the cards and filters, especially `id`, `num`, `title`, `field`, `status`, `time`, `location`, `meetings`, `scores`, `tags`, and `sources`.

Calendar meetings use 24-hour strings:

```js
meeting("Tue", "09:30", "10:50")
meeting("Fri", "13:00", "13:50", "Discussion")
```

Use an empty `meetings` array when a meeting is TBA or when a course should not appear on the weekly calendar.

## Publishing

Publish the changed `dist/data.js` with the existing static site. The hosting provider should invalidate or revalidate that file during deployment, so no interface file needs to change.
