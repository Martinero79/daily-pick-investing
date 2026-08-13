# One-time setup: putting this site online

Note: Cloudflare merged "Pages" into "Workers" during 2026. The classic
zero-config Pages flow described in older guides no longer applies —
follow the steps below, which reflect the current merged flow.

## 1. Create a GitHub account and repo

1. Sign up at github.com (free).
2. Click **New repository**, name it (e.g. `daily-pick-investing`), keep it Public, create it.
3. On the repo page, click **Add file → Upload files**, and drag in everything
   from this `daily-pick-site` folder, keeping the folder structure
   (`assets/` and `companies/` as subfolders). Commit.
4. Add one more file at the repo root named `wrangler.jsonc`, with this content
   (replace the `name` value with your repo name if different):

   ```
   {
     "name": "daily-pick-investing",
     "compatibility_date": "2026-08-01",
     "assets": {
       "directory": "./"
     }
   }
   ```

   This tells Cloudflare to serve everything in the repo as a plain static
   site. Without it, the deploy will fail or show a "Hello world" placeholder.

## 2. Connect Cloudflare

1. Sign up at dash.cloudflare.com (free).
2. Go to **Workers & Pages → Create application → Connect GitHub**.
3. Authorize GitHub, pick this repo, leave build command empty and deploy
   command as `npx wrangler deploy`, click **Deploy**.
4. **Important extra step:** the first Deploy click only takes a one-time
   snapshot — it does NOT automatically set up ongoing auto-deploy. Go to
   the project's **Settings → Build** tab and check if it says "Git
   repository: Connect" (not yet linked) — if so, click **Connect** there
   too and pick the same repo again. This is what actually wires up
   "every future commit redeploys the site automatically."
5. Push any small commit after connecting (e.g. edit `wrangler.jsonc`) to
   fire off the first real build through that pipeline.
6. By default the public URL is disabled. Go to the project's **Domains**
   tab and toggle on the **Production** `workers.dev` URL to make it live.

From then on, any commit you make to the GitHub repo (including the small
edits in HOW-TO-UPDATE.md) redeploys the live site automatically — no
need to repeat steps 2–6 again for this site.

## 3. (Optional) Add a custom domain

1. Buy a domain (~$10–11/year) at porkbun.com or via Cloudflare Registrar.
2. In the Cloudflare project, go to **Domains → Add Domain**,
   enter it, and follow the on-screen DNS steps. Free SSL is automatic.

## Repeating for your other sites

Each of your 5 sites is its own GitHub repo connected to its own Cloudflare
Pages project — same steps each time. Hosting stays $0/month per site;
your only recurring cost is the domain names (~$10–11/year each).
