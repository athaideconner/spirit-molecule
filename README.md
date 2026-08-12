# The Spirit Molecule

A static educational / harm-reduction site about DMT: guide, science, comparisons, history & law (with country lookup), hard-trip first aid, and FAQ.

**Not medical or legal advice. Does not encourage illegal activity.**

## Local preview

```bash
npx serve .
```

Then open the URL shown in the terminal (e.g. `http://localhost:3000`).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Main guide |
| `science.html` | Mechanisms, trials, references |
| `compare.html` | DMT vs other psychedelics |
| `history.html` | Timeline + per-country legal lookup |
| `safety.html` | Hard-trip first-aid card (printable) |
| `faq.html` | Glossary & FAQ |

Print / Save PDF uses the browser print dialog (`print.css`).

## Production extras

- `favicon.svg` — site icon
- `robots.txt` + `sitemap.xml` — crawl hints for the GitHub Pages URL
- Open Graph / Twitter meta tags on every page
- Mobile nav menu (hamburger under ~760px)

## Host it online

This is a plain static site — drop the folder on any static host.

### GitHub Pages

1. Create a GitHub repo and push this folder.
2. Settings → Pages → Deploy from branch (`main` / root).
3. Site will be at `https://<user>.github.io/<repo>/`.

### Netlify

1. Drag the `dmt` folder onto [Netlify Drop](https://app.netlify.com/drop), **or**
2. Connect the GitHub repo; build command leave empty, publish directory `.`

### Cloudflare Pages / Vercel

Same idea: framework preset **None**, output directory = project root (no build step).

## Updating the legal lookup

Edit `legal-data.js`. Each entry needs `country`, `region`, `status` (`illegal` | `mixed` | `traditional`), `label`, and `summary`. Keep the disclaimer language — statuses go stale quickly.
