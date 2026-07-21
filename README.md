# Phoenix Rising Coin Co. — Website

A 6-page static site: `index.html`, `how-it-works.html`, `what-we-buy.html`, `faq.html`, `contact.html`, `thanks.html`, plus `css/style.css` and `js/main.js`. No build step — it's plain HTML/CSS/JS, so it runs anywhere.

Placeholder info to replace before launch (find/replace across all files):

| Placeholder | Replace with |
|---|---|
| `phoenixrisingcoinco@gmail.com` | already set to your real email |
| `https://YOUR-DEPLOYED-SITE-URL/thanks.html` (in `contact.html`, the `_next` hidden field) | your live site URL once deployed (e.g. `https://phoenix-rising-coins.netlify.app/thanks.html`) |
| "Phoenix Rising Coin Co." | swap in a different name if you decide against this one |

---

## 1. Contact form (FormSubmit.co) — set up, one step left

We switched the form from Formspree to **FormSubmit.co** because Formspree's free plan doesn't support photo uploads at all (that's a paid-only feature there). FormSubmit is completely free, requires no account or signup, and supports file uploads natively — up to 10MB total per submission, which is why the form now has a note asking people to keep it to 2–4 phone photos.

The form already points to `https://formsubmit.co/phoenixrisingcoinco@gmail.com`. One important step before it works:

1. **Activate it.** The very first time someone submits the form (this can be you, as a test), FormSubmit sends a confirmation email to `phoenixrisingcoinco@gmail.com` with an "Activate Form" link. That submission itself won't go through — you have to click the activation link first. After that, every submission after delivers normally straight to your inbox.
2. So: deploy the site (step 2 below), then submit a test entry with a photo, then check your Gmail (including spam folder) for the FormSubmit activation email and click it.
3. Submit a second test to confirm it now arrives as a normal email with the photo attached.

A couple of things to know:
- Unlimited free forms and submissions — no monthly cap like Formspree's free tier.
- A reCAPTCHA-style verification step may appear briefly on submission — this is expected and helps keep spam out.
- Submitted files aren't stored/retrievable after the email is sent, so nothing to manage on your end.

---

## 2. Deploy for free (Netlify)

No domain needed to start:

1. Go to **app.netlify.com/drop**.
2. Drag the whole `phoenix-rising-coins` folder onto the page.
3. Netlify gives you a live URL immediately, like `https://phoenix-rising-coins.netlify.app`.
4. You can rename the subdomain for free in Site settings → Change site name.

To update the site later, just re-drag the folder (or connect it to a GitHub repo in Netlify for auto-deploys if you get comfortable with git).

**After you deploy:** copy your live Netlify URL and update the `_next` hidden field in `contact.html` (currently `https://YOUR-DEPLOYED-SITE-URL/thanks.html`) so submitters land on your branded `thanks.html` page instead of FormSubmit's generic one. Re-deploy (re-drag the folder) after making that change.

**Adding a custom domain later** (e.g. `phoenixrisingcoin.com`, ~$12–20/yr from Namecheap or similar): buy the domain, then in Netlify go to Domain settings → Add custom domain, and follow the DNS instructions Netlify gives you. Takes effect within a few hours.

---

## 3. Social media presence (not currently on the site)

Social links have been removed from the site for now, at your request. If you want to add them back later:

1. Create your Instagram and/or Facebook accounts.
2. Ask me (or re-add manually) a `.social-icons` block in each page's footer — the CSS for it is still in `css/style.css`, just unused, so it's a quick add whenever you're ready.

Suggestions for whenever you do start:
- **Instagram** tends to work best for this niche — post photos of interesting coins you've acquired, "coin of the week" spotlights, before/after cleaning myths (why NOT to clean coins), and local pickup stories. Use hashtags like `#coincollecting`, `#numismatics`, `#phoenixarizona`, `#silvercoins`.
- **Facebook** is useful for local buy/sell groups — search "Phoenix buy sell trade" or "Arizona coin collectors" groups and post there (following each group's rules) linking back to your contact page.
- Consider a Google Business Profile too (free) — even as a home-based/by-appointment business, it helps you show up in local searches like "sell coins Phoenix."

---

## 4. One important thing to check before you launch

Arizona (and the City of Phoenix) may require registration or a permit for buying precious metals/secondhand goods from the public — this exists to prevent trafficking in stolen goods, and rules vary by city. Before actively buying, look into:
- Arizona's secondhand dealer / precious metals dealer requirements (ARS Title 44).
- Phoenix (or your specific city's) secondhand dealer permit/license process.
- Basic recordkeeping practices (ID verification, transaction logs) that most jurisdictions require of precious metal buyers.

This isn't legal advice — a quick call to the city clerk's office or a local business attorney can confirm exactly what applies to you before you start transacting.

---

## File structure

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
