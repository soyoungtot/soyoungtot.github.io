# Soyoung Han Academic Website

Static Astro website for <https://soyounghan.com>.

## Local Development

```bash
npm install
npm run dev
```

Use `npm run build` for normal local validation. Use `npm run build:release` to enforce the public release rules and create the deployment build.

## Canonical Paper URLs

The registry at `src/data/papers.json` is the source of truth for public paper URLs. Each paper uses a stable slug and a matching PDF path:

| Paper ID | Canonical latest-version URL |
| --- | --- |
| `health-insurance-fertility` | <https://soyounghan.com/papers/health-insurance-fertility.pdf> |
| `human-capital-varsity-sports` | <https://soyounghan.com/papers/human-capital-varsity-sports.pdf> |
| `black-high-schools` | <https://soyounghan.com/papers/black-high-schools.pdf> |

Use the canonical URL in the footer or title-page note inside each PDF:

> For the latest version of this paper, visit https://soyounghan.com/papers/PAPER-ID.pdf

To publish or update a paper:

1. Export the PDF with its canonical URL embedded in the document.
2. Save it to the registry's exact `sourceFile` path under `public/papers/`.
3. Change that registry entry's `status` from `coming-soon` to `ready`.
4. Run `npm run build` and open the canonical path locally.
5. Commit the PDF and registry change together. Git history preserves older versions while the public URL remains stable.

Do not put dates or version numbers in canonical filenames. Use Git tags or GitHub Releases if a separately downloadable historical archive is ever needed.

`npm run validate:release` requires every ready paper to have a valid PDF and prevents coming-soon papers from exposing files at their future canonical paths.