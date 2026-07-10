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

## Contact form setup

The contact form (`contact.html`) posts to a placeholder endpoint:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

To make it functional:

1. Create a free form at [formspree.io](https://formspree.io) (or a similar
   service, e.g. Web3Forms).
2. Replace `YOUR_FORM_ID` in `contact.html` with your real form ID/endpoint.

Until configured, submitting the form shows a message directing visitors to
email `contact@evoghen.com` directly.

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
