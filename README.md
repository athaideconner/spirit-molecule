# The Spirit Molecule

A static educational / harm-reduction site about DMT: guide, science, comparisons, history & law (with country lookup), healing retreats (directory + vetting checklist), hard-trip first aid, and FAQ.

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
| `retreats.html` | Healing retreats: evidence, vetting checklist, filterable directory, legal routes |
| `safety.html` | Hard-trip first-aid card (printable) |
| `faq.html` | Glossary & FAQ |

Print / Save PDF uses the browser print dialog (`print.css`).

## Host it online

This is a plain static site — drop the folder on any static host.

### GitHub Pages

1. Create a GitHub repo and push this folder.
2. Settings → Pages → Deploy from branch (`main` / root).
3. Site will be at `https://<user>.github.io/<repo>/`.

### Netlify

1. Drag this project folder onto [Netlify Drop](https://app.netlify.com/drop), **or**
2. Connect the GitHub repo; build command leave empty, publish directory `.`

### Cloudflare Pages / Vercel

Same idea: framework preset **None**, output directory = project root (no build step).

## Updating the legal lookup

Edit `legal-data.js`. Each entry needs `country`, `region`, `status` (`illegal` | `mixed` | `traditional`), `label`, and `summary`. Optional `aliases` (e.g. `["UK", "Britain"]`) are searched too. Keep the disclaimer language — statuses go stale quickly, so update the "last reviewed" date in `history.html` when you re-check them.

## Updating the retreat directory

The directory in `retreats.html` is plain HTML (so it works without JavaScript and prints in full); `retreats.js` only filters it. Each center is an `<article class="lookup-item dir-item" data-group="…">`, where `data-group` is one or more of `peru`, `costa-rica`, `brazil`, `program` (add a matching chip button for a new group).

Inclusion bar used for the November 2026 review: the center publishes its screening/safety practices, and searches found no credible reports of a participant death, sexual abuse, or a regulator warning about that specific center. Re-check every listing (and the "last reviewed" date) at least yearly, and remove any center when credible incident reports appear.
