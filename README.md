# Evoghen — Official Website

Static marketing site for Evoghen LLC, an Arizona-based federal technology
consulting firm (AI modernization, EdTech/Title IV compliance, Microsoft
365 & Azure, and technical business analysis).

Plain HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html                 Home
about.html                 About
services.html               Services
teaming.html                Teaming & Subcontracting
capability-statement.html   Capability Statement (printable — "Print / Save as PDF" button)
insights.html                Insights / Thought Leadership (static teaser page)
contact.html                Contact (form)
css/styles.css               Shared stylesheet (brand system v2.0 tokens)
js/main.js                   Mobile nav, footer year, contact form handling
assets/favicon.svg           Site icon
robots.txt / sitemap.xml
```

## Running locally

No build step required. Serve the folder with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Contact form

The contact form (`contact.html`) uses [Netlify Forms](https://docs.netlify.com/forms/setup/) —
no third-party service or API key needed. Netlify detects the form
automatically at deploy time because it's static HTML with a `name` and
`data-netlify="true"` attribute, plus a matching hidden `form-name` field.
Submissions show up in the Netlify dashboard under **Site → Forms**, and can
be forwarded to email from there (Site settings → Forms → Form notifications).
A hidden honeypot field (`bot-field`) provides basic spam filtering.

This only works once the site is actually deployed on Netlify — opening the
HTML files locally or serving them with a plain static server (e.g. for
local testing) will not receive form submissions, since detection and
handling happen on Netlify's infrastructure.

## Deploying on Netlify

1. Sign up / log in at [app.netlify.com](https://app.netlify.com) (GitHub
   login is easiest).
2. **Add new site → Import an existing project → GitHub** → select
   `jerameee/evoghen-website` → branch `main`.
3. Build settings: leave the build command blank and set the publish
   directory to `.` (also captured in `netlify.toml`, so Netlify should
   pick this up automatically).
4. Deploy — Netlify gives you a `https://<random-name>.netlify.app` URL
   immediately.
5. To use `evoghen.com`: **Site settings → Domain management → Add a
   custom domain**, enter `evoghen.com`, then follow Netlify's DNS
   instructions at your registrar (Namecheap).

## Personalizing content

A few sections still carry bracketed placeholders pending real details:

- `about.html` — founder bio (`[Your Name]`, headshot)
- UEI / CAGE numbers across `about.html` and `capability-statement.html`
  (currently "Pending")
- `insights.html` — Substack feed / real blog posts once written

## Brand

Colors, type, logo mark, taglines, and voice follow the Evoghen Brand
Identity System v2.0. The primary/secondary taglines ("Innovation Built
Forward." / "Generate. Deliver. Evolve.") appear together in the homepage
hero and the primary tagline alone in the footer/letterhead-style spots.
The logo mark (nav, footer, favicon) is reconstructed from the vector
paths in the brand system PDF — three concentric hexagons plus dashed
connector spokes — rather than the circular placeholder used in the
earlier one-pager/capability-statement drafts.
