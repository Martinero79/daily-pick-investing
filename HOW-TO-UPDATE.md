# Adding a new daily highlight

Two things to do, both inside GitHub's website — no software to install.

## 1. Add the dashboard file

1. Get the new dashboard HTML file from Claude (unchanged, exactly as generated).
2. In your GitHub repo, open the `companies` folder.
3. Click **Add file → Upload files**, drop the HTML file in, and commit.
   Give it a short filename with no spaces, e.g. `nvidia.html`.

## 2. Add one entry to the company list

1. Open `assets/companies.js` in the repo (click the file, then the pencil/edit icon).
2. Scroll to the bottom of the `COMPANIES` list.
3. Copy the last `{ ... }` block, paste it right after it, and edit the values:

```js
{
  slug: "nvidia",
  name: "NVIDIA Corporation",
  ticker: "NASDAQ: NVDA",
  sector: "AI Compute / GPUs",
  dateFeatured: "2026-08-12",
  price: "$182.40",
  score: "9 / 11",
  blurb: "One-sentence summary of the thesis.",
  file: "companies/nvidia.html"
}
```

4. Make sure `file` matches the filename you uploaded in step 1, and `slug` is unique.
5. Commit the change.

That's it — Cloudflare Pages redeploys automatically within about a minute.
The homepage always shows whichever entry is **last** in the list; the archive
shows everything, newest first. Nothing else needs editing, and you never
need to touch the dashboard HTML file itself.

## Removing or fixing a company

Edit or delete its `{ ... }` block in `companies.js`. Delete the matching file
in `companies/` too if you're removing it for good.
