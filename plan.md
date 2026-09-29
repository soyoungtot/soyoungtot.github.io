# Soyoung Han Website Deployment Plan

Last updated: 2026-09-28

## Purpose

This is the source of truth for moving the working local website to <https://soyounghan.com>. It is written as a guided checklist for a non-technical domain owner. We will complete one checkpoint at a time, answer questions before continuing, and avoid changing Namecheap DNS until the GitHub deployment is working.

## Status Legend

- `[ ]` Not started
- `[~]` In progress
- `[x]` Complete and verified
- `[!]` Blocked; the reason appears in **Open Questions and Blockers**

## Current Status

- Current checkpoint: Checkpoint 10 - Production acceptance
- Overall status: Production site live securely; final acceptance in progress
- Local demo: <http://localhost:4321>
- Intended production URL: <https://soyounghan.com>
- Framework: Astro with static output
- Hosting target: GitHub Pages through GitHub Actions
- Domain registrar: Namecheap
- DNS provider: Must be confirmed in Namecheap before editing records

## Working Agreement

### Soyoung will handle

- Signing in to GitHub and Namecheap.
- Creating or approving account-level settings.
- Reviewing screenshots and public content.
- Entering DNS records when instructed.
- Providing non-secret values shown by GitHub, such as a DNS TXT record.

### The technical assistant will handle

- Preparing and validating repository files.
- Creating the GitHub Actions deployment workflow.
- Giving one account action at a time with exact labels and values.
- Checking DNS, HTTPS, redirects, links, and production output.
- Updating this plan after each verified checkpoint.

### Never share in chat or commit to GitHub

- Passwords, passkeys, authentication codes, recovery codes, API keys, or access tokens.
- Namecheap payment information.
- Private documents that are not intended to be publicly downloadable.

Screenshots are useful, but crop or cover account email addresses, customer IDs, billing details, and security information. DNS record screenshots are normally safe after checking for unrelated private verification values.

## Deployment Strategy

The order is deliberate:

1. Approve public content and account choices.
2. Prepare the repository and deployment workflow locally.
3. Create the GitHub repository and deploy to its temporary GitHub Pages address.
4. Verify ownership of `soyounghan.com` using a harmless TXT record.
5. Add `soyounghan.com` to GitHub Pages before changing website DNS.
6. Inventory and back up existing Namecheap DNS records.
7. Point only the root and `www` web records to GitHub Pages.
8. Wait for DNS and HTTPS, then run production checks.

Do not start with Namecheap A or CNAME changes. GitHub recommends adding the custom domain to GitHub Pages before pointing DNS at it, which reduces domain-takeover risk.

## Verified Local Baseline

- [x] Single-page responsive Astro site is implemented.
- [x] Name, biography, email, research entries, coauthors, and abstracts render correctly.
- [x] Temporary portrait renders responsively at a stable 4:5 ratio.
- [x] Current CV is served at `/files/soyoung-han-cv.pdf`.
- [x] Job Market Paper is served at `/papers/health-insurance-fertility.pdf`.
- [x] Canonical paper registry uses stable, human-readable PDF paths.
- [x] Papers two and three display `Draft coming soon!` without links.
- [x] Desktop and narrow mobile layouts have no horizontal overflow.
- [x] Local CV and Job Market Paper links return valid PDFs.
- [x] `npm run build` completes with zero Astro diagnostics.
- [x] No application secrets or runtime environment variables are required.

## Checkpoint 1 - Account and Privacy Decisions

Status: Complete

We stop here until each answer is recorded.

### 1.1 GitHub account

- [x] Confirm whether Soyoung already has a GitHub account.
- [x] Record the GitHub username in **Deployment Record**.
- [x] Enable GitHub two-factor authentication if it is not already enabled.
- [x] Choose the repository owner: Soyoung's personal account is recommended.
- [x] Choose repository visibility: public after privacy cleanup and review.

Recommended repository setup:

- Repository name: `<GITHUB-USERNAME>.github.io`
- Visibility: Public
- Default branch: `main`

Using the special `<GITHUB-USERNAME>.github.io` repository name gives the cleanest temporary Pages URL and avoids subdirectory configuration.

### 1.2 Public-content approval

GitHub Pages and every file under `public/` should be treated as public and downloadable.

- [x] Approve the temporary portrait for public use.
- [x] Approve the Job Market Paper for public download.
- [x] Review the CV specifically for public personal information.
- [x] Publish the current CV exactly as supplied.

The supplied CV includes a street address, phone number, citizenship/residency information, and reference contact details. This is common in some academic contexts, but approval must be explicit before the repository is made public.

### 1.3 Initial-launch scope

- [x] Confirm that papers two and three may launch as `Draft coming soon!`.
- [x] Confirm that the current portrait may launch temporarily.
- [x] Confirm that the first paper contains this latest-version link:
  `https://soyounghan.com/papers/health-insurance-fertility.pdf`

### 1.4 Public-repository audit

- [x] Scan first-party source and configuration for credentials and secrets; none found.
- [x] Confirm no `.env`, key, certificate, or credential files are present.
- [x] Approve a public source repository after cleanup.
- [x] Add `.gitignore` exclusions for dependencies, build output, Astro cache/logs, editor files, and local environment files.
- [x] Remove Photoshop/XMP metadata from the temporary portrait without changing its decoded pixels.
- [x] Complete the separate CV personal-information decision.

Completion gate:

- [x] GitHub username, repository visibility, CV privacy, and initial content scope are approved.

## Checkpoint 2 - Production Readiness

Status: Complete

The technical assistant completes these tasks locally.

- [x] Update release validation so intentional `coming soon` papers do not block launch.
- [x] Continue rejecting a missing CV, missing linked paper, or development-only placeholder.
- [x] Add a production `robots.txt` referencing the sitemap.
- [x] Add a sitemap for the canonical home page.
- [x] Add canonical, Open Graph, and social metadata using `https://soyounghan.com`.
- [x] Add accurate `Person` JSON-LD without sensitive CV fields.
- [x] Add a metadata-free favicon.
- [x] Decide on the social sharing image: defer it until the final portrait is available.
- [x] Add a `.gitignore` that excludes dependencies, build output, editor files, and local artifacts.
- [x] Confirm the repository contains no passwords, tokens, unrelated personal files, or source PDFs not intended for publication.
- [x] Add `public/CNAME` containing only `soyounghan.com`.
- [x] Add the official Astro GitHub Pages workflow at `.github/workflows/deploy.yml`.
- [x] Configure the workflow for Node 24, npm lockfile installation, release validation, build, artifact upload, and deployment.
- [x] Run the complete release validation locally.
- [x] Build from a clean dependency installation.
- [x] Preview the production build locally and retest the CV, paper, portrait, email, canonical metadata, and mobile layout.

Required workflow permissions:

- `contents: read`
- `pages: write`
- `id-token: write`

Completion gate:

- [x] The production build passes locally and the repository is safe to publish.

## Checkpoint 3 - Create the GitHub Repository

Status: Complete

Soyoung completes the account action while the technical assistant guides and verifies.

1. Sign in to GitHub.
2. Select **New repository**.
3. Set the owner to the approved personal account.
4. Enter the exact approved repository name.
5. Select the approved visibility.
6. Do not initialize it with a README, `.gitignore`, or license because those files already exist locally.
7. Select **Create repository**.
8. Send the repository URL, which is not secret.

Then the technical assistant will:

- [x] Initialize local Git version control if needed.
- [x] Review every file that will be committed.
- [x] Create the reviewed initial commit.
- [x] Connect the local repository to the GitHub repository.
- [x] Push the `main` branch using the dedicated GitHub SSH key.
- [x] Confirm the source files and GitHub Actions workflow appear on GitHub.

Completion gate:

- [x] The complete reviewed source is on the `main` branch of the correct GitHub repository.

## Checkpoint 4 - First GitHub Pages Deployment

Status: Complete

1. In the GitHub repository, open **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**. `[x]`
4. Open the repository's **Actions** tab.
5. Watch the `Deploy to GitHub Pages` workflow.
6. If approval is requested, approve only the workflow from this repository.

Technical verification:

- [x] The build job succeeds.
- [x] The deploy job succeeds.
- [x] Record the temporary GitHub Pages URL.
- [x] Open the temporary URL without GitHub authentication.
- [x] Confirm the home page, image, fonts, CV, and Job Market Paper load.
- [x] Confirm papers two and three remain non-clickable and their future PDF paths return `404`.
- [x] Confirm mobile layout works from the deployed site.
- [x] Confirm a new push automatically triggers another deployment.

Do not change Namecheap DNS until this checkpoint passes.

Completion gate:

- [x] The site works at the temporary GitHub Pages URL.

## Checkpoint 5 - Verify Domain Ownership in GitHub

Status: Complete

This protects the domain from being claimed by another GitHub Pages user.

1. On GitHub, open the profile menu and choose **Settings**. This is the personal profile settings page, not repository settings.
2. Under **Code, planning, and automation**, open **Pages**.
3. Select **Add a domain**.
4. Enter `soyounghan.com`.
5. GitHub will show a TXT record name and TXT record value.
6. Copy the non-secret TXT name and value into **Deployment Record** or send them here.
7. In Namecheap, open **Domain List** → `soyounghan.com` → **Manage** → **Advanced DNS**.
8. Under **Host Records**, select **Add New Record** → **TXT Record**.
9. Enter the exact host and value supplied by GitHub. Use **Automatic** TTL.
10. Save the record.
11. Keep this TXT record permanently after verification.

Technical verification:

- [x] Confirm the TXT record is visible in public DNS.
- [x] Return to GitHub profile **Settings** → **Pages** and select **Verify**.
- [x] GitHub shows `soyounghan.com` as verified.

DNS updates may be quick but can take up to 24 hours. Waiting does not indicate failure.

Completion gate:

- [x] GitHub shows the domain as verified and the TXT record remains in Namecheap.

## Checkpoint 6 - Add the Custom Domain to the Repository

Status: Complete

Complete this before changing Namecheap A or CNAME records.

1. Open the GitHub repository.
2. Open **Settings** → **Pages**.
3. Under **Custom domain**, enter `soyounghan.com`.
4. Select **Save**.
5. Leave **Enforce HTTPS** alone if it is unavailable at this stage.

Technical verification:

- [x] GitHub recognizes `soyounghan.com` as the requested custom domain.
- [x] The latest workflow succeeds.
- [x] The built artifact contains the custom-domain configuration.

Completion gate:

- [x] The GitHub Pages repository is waiting for `soyounghan.com` DNS.

## Checkpoint 7 - Inventory Namecheap DNS

Status: Complete

This checkpoint prevents accidental email or service disruption.

1. In Namecheap, open **Domain List** → `soyounghan.com` → **Manage**.
2. Record the **Nameservers** selection. `[x]` Namecheap BasicDNS (`dns1` and `dns2.registrar-servers.com`)
3. Open **Advanced DNS**.
4. Capture the **Host Records** relevant to deployment before editing. `[x]`
5. Record existing entries for hosts `@`, `www`, and `*`. `[x]` Root redirect and `www` parking identified; no wildcard response.
6. Note conflicting web records for `@` and `www`. `[x]`
7. Preserve every MX record and email-related TXT record. `[x]`
8. Preserve the GitHub domain-verification TXT record. `[x]`
9. Do not create a wildcard `*` record. `[x]`

If Host Records cannot be edited, the domain may use custom nameservers and DNS may be managed outside Namecheap. Stop and identify that DNS provider before proceeding.

Completion gate:

- [x] Existing DNS is backed up and conflicting `@`/`www` web records were identified.

## Checkpoint 8 - Point Namecheap to GitHub Pages

Status: In progress

Only perform this after Checkpoints 4 through 7 pass.

### Root domain records

In Namecheap **Advanced DNS** → **Host Records**, create these four records:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

### `www` record

Create one record using the GitHub username recorded earlier:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME Record | `www` | `<GITHUB-USERNAME>.github.io` | Automatic |

Important rules:

- Remove or replace only conflicting web records for host `@` or `www` after they have been recorded in the backup.
- Do not delete MX records.
- Do not delete unrelated TXT records.
- Do not point `www` to `soyounghan.com`; point it directly to `<GITHUB-USERNAME>.github.io` so GitHub HTTPS works correctly.
- Do not include `https://`, a slash, or the repository name in the CNAME value.
- Do not add wildcard DNS records.
- IPv6 `AAAA` records are optional and can be added later; the four A records are sufficient for the initial launch.

Technical verification:

- [x] Public DNS returns all four GitHub Pages A records for `soyounghan.com` through Google and Cloudflare resolvers.
- [x] Public DNS returns `soyoungtot.github.io` as the CNAME for `www.soyounghan.com`.
- [x] Existing email-forwarding MX and SPF records still match the pre-change inventory.
- [x] GitHub Pages issued a certificate after the custom-domain provisioning reset.

Namecheap says records often begin updating within approximately 30 minutes; complete propagation can take up to 24 hours.

Completion gate:

- [x] Root and `www` DNS point to GitHub Pages without changing email or verification records.

## Checkpoint 9 - HTTPS and Redirects

Status: Complete

- [x] Wait for GitHub to provision the TLS certificate.
- [x] In repository **Settings** → **Pages**, enable **Enforce HTTPS**.
- [x] Confirm `http://soyounghan.com` redirects to `https://soyounghan.com`.
- [x] Confirm `https://www.soyounghan.com` redirects to `https://soyounghan.com`.
- [x] Confirm the Let's Encrypt certificate covers both apex and `www`, with no redirect loop or mixed content.
- [x] Confirm the temporary GitHub Pages address redirects to `https://soyounghan.com`.

Certificate provisioning can take up to 24 hours after DNS is correct. Do not repeatedly delete and recreate records while waiting.

Completion gate:

- [x] The root production URL is HTTPS-only and `www` redirects to it.

## Checkpoint 10 - Production Acceptance

Status: In progress

### Content and links

- [x] Name, biography, job-market wording, email, paper titles, and coauthors match the approved local site.
- [x] Portrait loads without overflow on desktop and mobile.
- [x] CV link opens the intended current CV.
- [x] Job Market Paper link opens the intended current paper.
- [x] Papers two and three display `Draft coming soon!` without broken links.
- [x] The first paper contains its canonical latest-version URL.

### Technical checks

- [x] `https://soyounghan.com` returns successfully.
- [x] Canonical metadata uses exactly `https://soyounghan.com/`.
- [x] No internal URL points to localhost or the temporary GitHub URL.
- [x] Page works at tested phone and desktop widths.
- [ ] Keyboard focus is visible and all links are usable.
- [x] No horizontal scrolling appears at narrow widths.
- [x] No missing image, font, PDF, favicon, or console error remains.
- [x] `robots.txt` and sitemap are reachable and use the production domain.
- [x] Structured metadata contains no inaccurate or sensitive fields.
- [ ] Lighthouse is run as a diagnostic.

### Launch record

- [ ] Record the launch date.
- [ ] Record the deployed commit identifier.
- [ ] Record final DNS values in **Deployment Record**.
- [ ] Mark all acceptable deferred content explicitly; do not leave ambiguous placeholders.

Completion gate:

- [ ] The website is approved and fully working at <https://soyounghan.com>.

## Rollback Plan

Use this only if the domain change causes a serious issue that cannot be resolved promptly.

1. Keep the GitHub repository and working temporary Pages deployment intact.
2. Use the DNS backup from Checkpoint 7.
3. In Namecheap, remove the four new GitHub A records and the new `www` CNAME.
4. Restore only the previous `@` and `www` web records exactly as recorded.
5. Do not alter MX or unrelated TXT records.
6. If the custom domain will remain disconnected from GitHub Pages, remove it from repository **Settings** → **Pages** to avoid takeover risk.
7. Keep the GitHub verification TXT record unless there is a reason to remove domain verification.
8. Wait for DNS propagation and verify the prior destination.

## After Launch - Routine Updates

### Text-only update

1. Edit `src/data/site.ts`.
2. Run the local checks and preview.
3. Commit and push to `main`.
4. GitHub Actions deploys automatically.
5. Verify the changed production content.

### Replace the CV

1. Replace `public/files/soyoung-han-cv.pdf` using the same filename.
2. Run the local build and open the local CV link.
3. Commit and push.
4. Verify the production URL after deployment.

### Replace or publish a paper

1. Add the canonical website URL inside the PDF before export.
2. Replace the exact file listed in `src/data/papers.json`.
3. Change registry status only when the PDF is ready for public access.
4. Change the research entry from `coming-soon` to `available` when applicable.
5. Run build and release validation.
6. Commit the PDF, registry, and content changes together.
7. Verify the stable canonical production URL.

Stable filenames must not include dates or version numbers. Git history preserves previous files while citations continue to use one latest-version URL.

## Open Questions and Blockers

| Question or blocker | Needed by | Status | Answer/Notes |
| --- | --- | --- | --- |
| GitHub account and username | Checkpoint 1 | Complete | Public account `soyoungtot` verified |
| Repository visibility | Checkpoint 1 | Complete | Public approved after repository cleanup |
| Approval to publish CV personal details | Checkpoint 1 | Complete | Current CV approved for public download as supplied |
| Papers two and three may launch as coming soon | Checkpoint 1 | Complete | Current non-clickable presentation approved |
| Temporary portrait may launch | Checkpoint 1 | Complete | Current image approved for initial launch |
| Canonical URL embedded in first paper | Production acceptance | Complete | Confirmed present in the supplied PDF |
| Canonical URLs inside CV | Production acceptance | Open | Current CV uses `http://www.soyounghan.com`; update to `https://soyounghan.com` before final export |
| DNS provider/nameservers | Checkpoint 7 | Complete | Namecheap BasicDNS confirmed publicly |
| Existing `@`, `www`, wildcard, MX, and TXT records | Checkpoint 7 | Complete | Web conflicts replaced; email, SPF, and verification TXT preserved; no wildcard found |
| Final copy approval | Production acceptance | Open | Review deployed preview before launch |
| Social preview image | Production acceptance | Deferred | Add with the final portrait; text metadata is complete |
| GitHub HTTPS certificate | Checkpoint 9 | Complete | Let's Encrypt certificate covers apex and `www`; Enforce HTTPS enabled |
| GitHub push authentication | Checkpoint 3 | Complete | Dedicated SSH key added to the `soyoungtot` account and verified |

## Deployment Record

Fill this in as we proceed. None of these values should be secret.

| Item | Value |
| --- | --- |
| GitHub username | `soyoungtot` |
| Repository owner | `soyoungtot` personal account |
| Repository name | `soyoungtot.github.io` |
| Repository URL | `https://github.com/soyoungtot/soyoungtot.github.io` |
| Temporary Pages URL | `https://soyoungtot.github.io` |
| Custom domain | `soyounghan.com` |
| Canonical URL | `https://soyounghan.com` |
| GitHub domain-verification TXT host | `_github-pages-challenge-soyoungtot` |
| GitHub domain-verification TXT value | `0702e4cf65b44ecb34816d5fbfb424` |
| Namecheap nameserver mode | BasicDNS: `dns1.registrar-servers.com`, `dns2.registrar-servers.com` |
| DNS backup date | 2026-09-28 |
| HTTPS enabled date | 2026-09-28 |
| Launch date | Pending |
| Deployed commit | `dc6806c` verified at the temporary Pages URL |
| Initial local commit | `233a0cf` |

## Official References

- Astro GitHub Pages deployment: <https://docs.astro.build/en/guides/deploy/github/>
- GitHub custom-domain setup: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>
- GitHub domain verification: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages>
- Namecheap A-record instructions: <https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/>

DNS values and GitHub Action versions must be rechecked against these official sources immediately before use because service requirements can change.

## Change Log

| Date | Change | Result |
| --- | --- | --- |
| 2026-09-27 | Created implementation plan from discovery decisions. | Local implementation began. |
| 2026-09-27 | Added canonical paper registry. | Papers received stable latest-version URLs. |
| 2026-09-27 | Installed supplied CV, Job Market Paper, and temporary portrait. | Core public assets became locally functional. |
| 2026-09-28 | Reoriented the plan around guided deployment. | GitHub Pages and Namecheap launch now follow ten controlled checkpoints. |
| 2026-09-28 | Verified the GitHub account. | Deployment will use the `soyoungtot` personal account. |
| 2026-09-28 | Audited the codebase for public release. | No credentials found; public source approved after generated-file and portrait-metadata cleanup. |
| 2026-09-28 | Stripped portrait metadata. | Removed Photoshop/XMP metadata while preserving dimensions and decoded pixels. |
| 2026-09-28 | Approved current CV for public release. | Personal and reference details are intentionally publishable. |
| 2026-09-28 | Completed deployment Checkpoint 1. | Account, security, public visibility, privacy, and launch content are approved. |
| 2026-09-28 | Completed deployment Checkpoint 2. | Clean release build, metadata, discovery files, custom domain, and GitHub Actions workflow are ready. |
| 2026-09-28 | Created and connected the GitHub repository. | Public empty repository verified at `soyoungtot/soyoungtot.github.io`; reviewed files staged locally. |
| 2026-09-28 | Created the initial local commit. | Commit `233a0cf` is ready; first push is waiting for secure GitHub authentication. |
| 2026-09-28 | Completed deployment Checkpoint 3. | Source pushed to `main`; Pages source changed from branch deployment to GitHub Actions. |
| 2026-09-28 | Completed deployment Checkpoint 4. | Astro workflow build and deploy succeeded; temporary URL and all intended routes verified. |
| 2026-09-28 | Completed deployment Checkpoints 5 and 6. | Domain ownership verified; repository configured for `soyounghan.com` before web DNS changes. |
| 2026-09-28 | Inventoried public DNS. | Existing root redirect, `www` parking, email-forwarding MX/SPF, and verification TXT records identified. |
| 2026-09-28 | Updated Namecheap web records. | Apex and `www` resolve correctly through public DNS; GitHub edge serves the site and redirects `www` to apex. |
| 2026-09-28 | Restarted GitHub certificate provisioning. | Confirmed fallback `*.github.io` certificate, audited both authoritative nameservers, then removed and re-added the verified custom domain per GitHub guidance. |
| 2026-09-28 | Enabled and verified production HTTPS. | Valid certificate covers apex and `www`; all HTTP and default Pages URLs redirect to `https://soyounghan.com`. |
| 2026-09-28 | Revised the production research section. | Blue Cross draft link hidden; Varsity Sports moved last without an abstract; State Investments paper added with a future canonical URL. |

## Plan Maintenance Rules

1. Complete checkpoints in order unless this document explicitly says tasks are independent.
2. Mark a task `[~]` when work begins and `[x]` only after its verification passes.
3. Stop at every completion gate and update **Deployment Record** before continuing.
4. Add questions or blockers immediately instead of guessing account or DNS details.
5. Preserve a DNS backup before changing any record.
6. Never place account credentials or secret values in this document.
7. Recheck official GitHub and Namecheap guidance on the day DNS is changed.
