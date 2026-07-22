# Phoenix Rising Coin Co.

**Live site:** [phoenixrisingcoinco.netlify.app](https://phoenixrisingcoinco.netlify.app)

A marketing and lead-generation website for a small local coin-buying business based in the Phoenix, AZ metro area. The site lets people who have inherited or found old copper, silver, or gold coins (plus older nickels and paper currency) submit photos for a free, no-obligation evaluation, with the goal of sourcing coins locally to grow a personal collection and resell the rest.

## What it does

- Explains what the business buys and how the process works, in plain language for people who aren't coin collectors themselves
- Lets visitors submit a contact form with photos of their coins directly from their phone
- Routes submissions straight to the owner's inbox with no backend server or database required
- Makes clear the service is local-only (in-person meetups in the Phoenix metro area, no mail-in)

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — value proposition, trust signals, and calls to action |
| `how-it-works.html` | Step-by-step walkthrough of the submission-to-payment process |
| `what-we-buy.html` | Detailed guide to what's accepted: copper, silver, gold, nickels, and currency |
| `faq.html` | Answers to common questions (pricing, condition, local-only service area, etc.) |
| `contact.html` | The submission form, with photo upload |
| `thanks.html` | Branded confirmation page shown after a successful submission |

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no dependencies. It's static, so it can be hosted anywhere (currently deployed on [Netlify](https://netlify.com)).

Form submissions (including photo uploads) are handled by [FormSubmit.co](https://formsubmit.co), a free form-backend service, so there's no server or database to maintain.

## Project structure

```
phoenix-rising-coins/
├── index.html
├── how-it-works.html
├── what-we-buy.html
├── faq.html
├── contact.html
├── thanks.html
├── css/style.css
├── js/main.js
└── README.md
```

## Local development

No build step — just open any `.html` file in a browser, or serve the folder with any static file server, e.g.:

```
python3 -m http.server 8000
```

Note: the contact form will show a FormSubmit "Unable to submit form" error if opened directly as a `file://` page — it needs to be served over `http(s)://` (either locally via a server, or once deployed).

---

## Setup & configuration notes

### Contact form (FormSubmit.co)

The form on `contact.html` posts to `https://formsubmit.co/phoenixrisingcoinco@gmail.com`, which emails every submission (including photos) straight to that inbox — no account or signup required on FormSubmit's side.

- **First-time activation:** the very first submission triggers a confirmation email with an "Activate Form" link that must be clicked before submissions start delivering normally. Already done for this site, but worth knowing if the form email address ever changes — it'll need to be reactivated.
- Free and unlimited submissions, no monthly cap.
- File uploads are capped at 10MB total per submission, which is why the form asks for 2–4 phone photos rather than unlimited high-res images.
- The file input field name must **not** use bracket-array syntax (e.g. `Photos[]`) — FormSubmit's server throws a 500 error on that specific pattern. The field is named `Photos` (no brackets) for this reason.

### Deployment (Netlify)

Currently deployed via Netlify's drag-and-drop deploy (`app.netlify.com/drop`), claimed under a full Netlify account so the site persists. To update the live site, re-drag the folder into the site's **Deploys** tab, or connect this GitHub repo to Netlify for automatic deploys on every push (Site settings → Build & deploy → Link repository).

The `_next` hidden field in `contact.html` points to this site's live `thanks.html` URL so submitters land on the branded confirmation page instead of FormSubmit's generic one — if the site ever moves to a new domain, that field needs updating to match.

### Social media

Social links are intentionally not included on the site right now. The CSS for a `.social-icons` footer block still exists in `css/style.css` (just unused) if/when Instagram or Facebook links get added back in.
