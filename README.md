# TTM — Téllez Tires Mobile

## Project Purpose

This is a community-service website project, developed free of charge for a
small local tire business in Gilroy, California. It also serves as a
professional portfolio project for a Computer Science student.

## Project Status

The initial semantic HTML, responsive CSS, JavaScript behavior, and QA
review are complete. The project remains in development while final
business information and approved media are collected. It has not yet been
deployed.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Git for local version control
- GitHub planned for remote repository hosting and portfolio presentation

No frameworks, build tools, package managers, or external JavaScript
libraries are used. The site is fully static and requires no backend.

## Features

- Semantic multi-page HTML structure — Home, Services, Our Work, and
  Contact are separate pages, each in English and Spanish (8 pages total)
- Mobile-first, fully responsive design
- Yellow and purple brand styling with strong color contrast
- Photo hero on Home with a dark overlay for text legibility
- Click-to-call telephone links and a click-to-email contact link
- CSS-drawn, tire-shaped service elements (no images required)
- Responsive, square-card Our Work photo gallery
- A keyless Google Maps embed plus a plain directions link on Contact
- Accessible skip-to-content link
- Keyboard-visible focus states throughout
- Accessible mobile navigation (works with and without JavaScript)
- Progressive enhancement (see below)
- JavaScript-generated current year in the footer, with a static fallback
- Support for `prefers-reduced-motion`
- No frameworks, libraries, build tools, or backend of any kind

## Accessibility Features

- Skip link that becomes visible on keyboard focus, jumping past the header
  to the main content
- Visible focus outlines on every interactive element (links, buttons)
- Logical heading hierarchy: each page has exactly one `h1` (its main
  heading — the business name on Home, "Our Services"/"Nuestros
  Servicios" on Services, etc.)
- Each page's own nav link carries `aria-current="page"`, so assistive
  technology can announce which page is currently open
- Sections are labeled via `aria-labelledby`, linking each `<section>` to
  its heading for assistive-technology landmark navigation
- Mobile navigation remains fully visible and usable even if JavaScript
  never loads
- The mobile menu button's `aria-expanded` state and label text stay
  synchronized with whether the menu is open or closed
- No color-only meaning: interactive states are also communicated through
  underlines, borders, or shape, not color alone
- Touch targets sized to approximately 44px minimum
- Animations and transitions are disabled for users with
  `prefers-reduced-motion` enabled

## Responsive Design Approach

The stylesheet is written mobile-first: base styles target the smallest
screens, and `min-width` media queries progressively enhance the layout as
more space becomes available. Breakpoints were chosen based on where the
actual content needs more room, not around specific named devices.

- Header navigation expands to a single row at 60em.
- The Services tire grid uses **Flexbox**, not Grid, specifically so 7
  tires lay out as 4 on the first row and 3 *centered* on the second row
  at desktop width (60em) — standard Grid auto-placement leaves an
  incomplete last row flush-left instead of centered, so Flexbox's
  per-line `justify-content: center` is used deliberately here. It scales
  1 → 2 (30em) → 3 (48em) → 4 (60em) columns.
- The Our Work gallery uses Grid (12 photos divide evenly at every column
  count, so there's no centering problem to work around) and scales
  1 → 2 (30em) → 3 (50em) → 4 (60em) columns, always as square,
  `object-fit: cover` cards.

## Progressive Enhancement

The site is fully usable with JavaScript disabled:

- **Without JavaScript**: all navigation links remain visible and usable;
  the mobile "Menu" toggle button stays hidden, since it would otherwise
  have no function; the footer year shows a static fallback value.
- **With JavaScript, below the 60em breakpoint**: the "Menu" toggle button
  becomes visible and controls a collapsible navigation menu; the footer
  year is updated dynamically to the current year.
- **With JavaScript, at or above the 60em breakpoint**: the toggle button
  stays hidden and the full navigation remains visible, matching the
  no-JavaScript behavior at that width.

## Project Structure

```text
ttm-tellez-tires-mobile/
├── index.html          (English Home)
├── services.html        (English Services)
├── our-work.html        (English Our Work)
├── contact.html         (English Contact)
├── es/
│   ├── index.html       (Spanish Home)
│   ├── services.html    (Spanish Services)
│   ├── our-work.html    (Spanish Our Work)
│   └── contact.html     (Spanish Contact)
├── README.md
├── .gitignore
├── assets/
│   └── images/
│       ├── ttm-logo.png
│       ├── background.jpeg   (Home hero photo)
│       └── work-01.jpg … work-12.jpg   (Our Work gallery photos)
├── css/
│   └── styles.css
└── js/
    └── main.js
```

- **index.html / services.html / our-work.html / contact.html** — the
  four English pages
- **es/index.html / es/services.html / es/our-work.html /
  es/contact.html** — the four Spanish pages; each is a hand-mirrored
  translation of its English counterpart with the same structure, ids,
  and classes (see "Multi-Page & Bilingual Site" below)
- **README.md** — This file
- **.gitignore** — Files and folders excluded from version control
- **assets/images/** — Site images (logo, hero photo, Our Work gallery
  photos) — shared by all 8 pages
- **css/styles.css** — All site styling (mobile-first, responsive) —
  shared by all 8 pages
- **js/main.js** — Vanilla JS behaviors (mobile nav toggle, footer year)
  — shared by all 8 pages, unchanged by the multi-page conversion

## Multi-Page & Bilingual Site

The site is 8 separate static pages — Home, Services, Our Work, and
Contact, each in English and Spanish — not one long page or a
single-page-per-language document. Every page is a hand-maintained,
complete HTML document; there is no build step, templating, include
mechanism, or server-side logic generating one page from another.

- **Shared, not duplicated**: all 8 pages link to the exact same
  `css/styles.css`, `js/main.js`, and `assets/images/` files. The four
  `es/*.html` pages reach them via `../` (e.g. `../css/styles.css`,
  `../assets/images/ttm-logo.png`) since they live one directory deeper;
  English pages reference them directly.
- **Header and footer are hand-duplicated across all 8 files** — there is
  no include/templating mechanism in this build-tool-free project, so
  they are copy-pasted, nearly-identical blocks. **Any future header or
  footer change (e.g. a new nav item, a logo swap) must be applied to all
  8 files by hand.** This is a known, accepted trade-off of staying
  framework-free; each page's header block differs only in `lang`,
  translated nav text, its own `aria-current="page"` placement, and the
  language-switch link target (see the navigation table below).
- **Ids and classes are identical (in English) across every page** —
  `#hero`, `#services`, `#our-work`, `#contact`, `.tire`, `.work-gallery`,
  `.contact-card`, etc. — because every page depends on the same shared
  CSS/JS targeting those selectors. Only visible text, `lang`, `alt` text,
  and a few specific attributes (`aria-label`, page title, meta
  description, `hreflang`) differ per page/language.
- **Navigation is real page-to-page links, not anchors** — every nav item
  opens a separate HTML file. Each page's own nav link is marked
  `aria-current="page"`.
- **Language switcher**: a plain link in the nav on every page, pointing
  to the *equivalent* page in the other language (e.g. `contact.html`
  ↔ `es/contact.html`, not just back to the homepage). It's a normal
  anchor with no JavaScript involved, so it works identically with
  JavaScript on or off.
- **`hreflang` is page-specific**: each page's `<head>` links to its own
  translated counterpart (e.g. `services.html` ↔ `es/services.html`), not
  just homepage-to-homepage.
- **Shared JS, per-page labels**: the mobile menu toggle button's text
  ("Menu"/"Close Menu" vs. "Menú"/"Cerrar menú") comes from
  `data-label-open` / `data-label-closed` attributes set on the `<button>`
  in each page's HTML, read by the one shared `js/main.js`. This keeps the
  script itself byte-identical across every page while still showing the
  correct language.
- **Not translated** (same on every page): the business name
  "TTM — Téllez Tires Mobile", the phone number, the email address, the
  street address, and all image filenames.
- **Maintenance**: any future content change (new service, new gallery
  photo, edited wording, header/footer change) must be applied across the
  relevant pages by hand — there's no single source of truth that
  generates them.

### Navigation paths

| From page | Home | Services | Our Work | Contact | Language switch |
|---|---|---|---|---|---|
| `index.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `es/index.html` |
| `services.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `es/services.html` |
| `our-work.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `es/our-work.html` |
| `contact.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `es/contact.html` |
| `es/index.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `../index.html` |
| `es/services.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `../services.html` |
| `es/our-work.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `../our-work.html` |
| `es/contact.html` | `index.html` | `services.html` | `our-work.html` | `contact.html` | `../contact.html` |

### Purple pages

`services.html`, `our-work.html`, and their Spanish equivalents use a
purple page background (`body.page--purple` in `css/styles.css`) instead
of the site's usual light backgrounds. Home and Contact are unaffected.

### Google Maps embed

The Contact page embeds a map via Google's free `output=embed` iframe URL
format — **no API key or billing account required** (this is distinct
from the JS Maps Embed API, which does require a key). A plain "Get
Directions" / "Cómo llegar" link is included alongside it as a
progressive-enhancement fallback and a more actionable link on mobile.

### TikTok & Instagram — pending

The Contact page reserves visual space for TikTok and Instagram, but the
business owner has not yet supplied the actual profile URLs. Per
instruction, **no placeholder or invented links were published** — the
labels render as plain, unlinked text ("TikTok (coming soon)" /
"Instagram (coming soon)"), with an HTML comment at each location marking
exactly where to add the real `<a href="...">` once the URLs are
confirmed.

Folders and files are added incrementally as each is actually needed; this
repository does not contain empty placeholder folders — see "Image
Filenames" below for what currently exists in `assets/images/`.

## Image Filenames

- `assets/images/ttm-logo.png` — header logo (in place)
- `assets/images/background.jpeg` — Home hero photo (the TTM service
  vehicle), in place. Optimized from the owner-supplied source photo:
  resized and compressed with `sips` to keep it lightweight since it
  loads on every Home page visit and isn't lazy-loadable.
- `assets/images/work-01.jpg` … `work-12.jpg` — Our Work gallery photos,
  sequentially numbered, in place. Optimized the same way from 12 of 14
  owner-supplied source photos (2 near-duplicate shots were excluded for
  a more visually balanced gallery). Reserved slots up to `work-16.jpg`
  remain open if the owner supplies more photos later — add each as a
  matching `<li><img></li>` in both `our-work.html` and
  `es/our-work.html`.

The four filenames previously reserved for service-section photos
(`service-vehicle.jpg`, `tire-inventory.jpg`, `tire-service.jpg`,
`gilroy-location.jpg`) are no longer needed — the Services section uses
CSS-drawn tire shapes instead of photographs.

## Running Locally

This project requires no build step or installation.

Recommended: serve the project through a local static file server. From the
project root, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Alternative (limited): the page can also be opened directly by
double-clicking `index.html` in a file browser. This works for basic
viewing, but a local server more closely matches how the site will behave
once deployed, so it is the preferred method for testing.

## Testing the Site

After starting the local server, repeat every relevant check below on
**all 8 pages** — `/`, `/services.html`, `/our-work.html`,
`/contact.html`, `/es/`, `/es/services.html`, `/es/our-work.html`,
`/es/contact.html` — since each is a separate document:

- **Mobile widths** (~320–599px): single-column tire grid / gallery,
  mobile menu toggle visible and functional, tire tread pattern falls
  back to a flat ring below ~384px, no horizontal scrolling
- **Tablet widths** (~600–959px): tire grid at 2–3 columns, gallery at
  2–3 columns, layout remains comfortable with no crowding
- **Desktop widths** (960px+): full horizontal navigation, sticky header,
  **Services**: 4 tires on row one and 3 *centered* on row two (not
  flush-left), **Our Work**: 4-column square-card gallery
- **Tire legibility**: at every width, confirm each service name stays
  fully readable inside its (now substantially larger) tire, wraps only
  at word boundaries, and never shows a mid-word hyphen break
- **Purple pages**: on Services and Our Work (both languages), confirm
  heading and body text is clearly readable (white) against the purple
  background
- **Home hero**: confirm the service-vehicle photo is visible with the
  dark overlay, the heading/tagline/status notice/buttons are all
  legible, and the vehicle itself isn't cropped out at short/wide desktop
  heights or narrow mobile widths
- **Gallery images**: confirm all 12 photos load as square,
  non-distorted crops with accurate `alt` text, and lazy-load correctly
- **Contact page**: confirm phone/email/address render in the larger
  text size, the map embed loads and shows the correct location, the
  "Get Directions"/"Cómo llegar" link opens Google Maps, and
  TikTok/Instagram render as plain, non-clickable text
- **Keyboard navigation**: press Tab repeatedly from the top of each
  page; confirm the skip link appears first, every interactive element
  shows a visible focus outline, and tab order follows the visual layout
- **Mobile menu behavior**: below 960px, click/tap the menu button and
  confirm it opens/closes the navigation, updates its own label, and
  closes automatically when a nav link or Call Now is selected
- **JavaScript-disabled behavior**: disable JavaScript and reload each
  page; confirm navigation links remain visible and usable, the menu
  button does not appear, and the footer year still shows a value
- **Telephone links**: confirm the phone number is clickable everywhere
  it appears and always uses `tel:+14088412040`
- **Email link**: confirm the Contact page email opens the default mail
  client via `mailto:enrique408delgadillo@gmail.com`
- **Current-year behavior**: with JavaScript enabled, confirm the footer
  year matches the current year on every page
- **Horizontal scrolling**: at every width tested above, confirm no page
  ever scrolls horizontally
- **Full navigation**: from every page, click each nav item and confirm
  it opens the correct separate page (not an anchor jump) — cross-check
  against the "Navigation paths" table above
- **`aria-current`**: confirm each page's own nav link (and only that
  one) carries `aria-current="page"`
- **Language switcher**: from each page, confirm "Español"/"English"
  opens the *equivalent* page in the other language (e.g.
  `contact.html` → `es/contact.html`, not just the Spanish homepage);
  repeat with JavaScript disabled
- **No broken assets on Spanish pages**: confirm the stylesheet, script,
  and every image load correctly (no 404s) via their `../`-prefixed
  relative paths
- **`lang` and `hreflang`**: view-source on each page and confirm the
  correct `<html lang="...">` and page-specific `hreflang` alternate tags
- **Menu button translation**: on Spanish pages, confirm the mobile menu
  button reads "Menú" / "Cerrar menú"

## Confirmed Business Information

The following facts have been confirmed and are safe to treat as final:

- Business name: **TTM — Téllez Tires Mobile**
- Phone: **(408) 841-2040**
- Click-to-call link: **tel:+14088412040**
- Email: **enrique408delgadillo@gmail.com** (mailto: link on the Contact page)
- Address: **6980 Monterey Rd, Gilroy, CA 95020** (also used for the
  Google Maps embed and directions link on Contact)
- Current status wording: *"Currently serving customers at our Gilroy
  location. Call for current service availability."*
- Home hero photo (`assets/images/background.jpeg`) and 12 Our Work
  gallery photos (`work-01.jpg`–`work-12.jpg`) are in place, supplied by
  the owner and optimized for the web

## Pending Business Information

The following remain pending owner input and are intentionally omitted or
marked as placeholders in the codebase:

- Business hours
- TikTok and Instagram profile URLs — space is reserved on the Contact
  page as plain, unlinked text ("coming soon") until the real URLs are
  supplied; nothing was invented or linked (see "TikTok & Instagram —
  pending" above). Facebook/WhatsApp icons appear on the physical vehicle
  signage but were not requested for the website and are not included.
- Final approved logo asset (a reference photo has been provided; the
  production-quality asset is not ready)
- Additional Our Work gallery photos — 12 of a ~12–16 photo target are in
  place; up to 4 more slots remain open if the owner supplies more
  (see "Image Filenames" above)
- Final wording approval for the services list
- Final owner sign-off on the specific 12 photos selected and their
  display order (a visually balanced order was chosen since the owner
  had no preference; 2 near-duplicate source photos were excluded)
- A decision on future mobile-service messaging, if that service resumes
- Final developer credit wording

## Replacing Placeholder Content

As the items above are confirmed, they should replace the corresponding
placeholder:

- **Additional Our Work gallery photos** — add each new owner-approved
  photo as the next `work-0N.jpg` in `assets/images/` and a matching
  `<li><img></li>` in both `our-work.html` and `es/our-work.html`.
- **TikTok/Instagram** — once the owner supplies the real profile URLs,
  wrap each pending label in `contact.html` and `es/contact.html` in an
  `<a href="...">` per the HTML comment already in place at that spot.
- **Business hours** — add once confirmed by the owner.
- **Service list wording** — update once the owner approves final wording.

## Current Limitations

- No final logo asset has been added
- Business hours are not yet published
- TikTok and Instagram URLs are not yet available (reserved, unlinked
  placeholders only — see above)
- Several services are pending final wording approval from the owner
- The Our Work gallery has 12 of a ~12–16 photo target; a few slots
  remain open for future photos
- Mobile tire service is not currently active and is not advertised as
  available on this site
- The project has not yet been deployed to a live hosting environment
- No open-source license has been selected. This client project is not
  intended for reuse without permission.

## Future Improvements

- Add confirmed business hours
- Add real, owner-approved TikTok and Instagram links once supplied
- Add the final approved logo asset
- Add remaining Our Work gallery photos as the owner supplies them (up to
  the ~16 target)
- Revisit mobile-service messaging if the owner resumes offering that
  service
- Consider a lightweight static-site generator or include mechanism if
  the header/footer duplication across 8 hand-maintained files becomes
  hard to keep in sync — not needed today, but worth revisiting if the
  page count grows further

## Image and Logo Authorization

The TTM logo and business photographs are provided or authorized by the
business for use on this website. They are not owned by the developer and
may not be reused without appropriate permission.

## Developer Credit

(placeholder — developer name/credit to be added.) This documentation-only
placeholder is not displayed on the public-facing webpage.

## Deployment Notes

This is a static site with no build step, no backend, and no database —
it can be deployed to any static file host (for example GitHub Pages,
Netlify, or Vercel) simply by uploading the project files. As of this
writing, the site has not been deployed anywhere. A specific hosting
provider has not yet been selected.

## Deployment Checklist

Before this site goes live, complete the following:

- [ ] Add the final approved logo asset
- [ ] Verify the Google Maps embed pin is accurate for
      6980 Monterey Rd, Gilroy, CA 95020
- [ ] Confirm owner approval of the 12 selected Our Work photos and their
      display order
- [ ] Add any remaining Our Work photos the owner supplies (up to ~16)
- [ ] Verify the phone number is correct
- [ ] Confirm final wording for all listed services
- [ ] Add business hours, if provided
- [ ] Add real TikTok/Instagram links once the owner supplies the URLs
      (currently unlinked "coming soon" placeholders)
- [ ] Remove development-only HTML comments if no longer useful
- [ ] Verify final developer credit wording
- [ ] Test on mobile, tablet, and desktop widths — all 8 pages
- [ ] Test full keyboard accessibility — all 8 pages
- [ ] Test the site with JavaScript disabled — all 8 pages
- [ ] Have a native Spanish speaker review all 4 `es/*.html` pages
- [ ] Validate HTML (e.g. via the W3C validator) — all 8 pages
- [ ] Verify there are no broken links, including the full cross-page
      navigation table in "Multi-Page & Bilingual Site" above
- [ ] Confirm a favicon decision (add one or intentionally omit)
- [ ] Confirm final page titles and meta descriptions for all 8 pages
- [ ] Confirm final client/owner approval of all content
- [ ] Create a final production commit
- [ ] Push to GitHub
- [ ] Deploy to the selected hosting provider

## GitHub Repository Notes

- **Repository name (suggested):** `ttm-tellez-tires-mobile`
- **Description (suggested):** "Static, mobile-first website for TTM —
  Téllez Tires Mobile, a local tire-service business in Gilroy, California.
  Built with vanilla HTML, CSS, and JavaScript as a community-service and
  portfolio project."
- **Suggested topics:** `html`, `css`, `javascript`, `responsive-design`,
  `accessibility`, `static-website`, `small-business`, `portfolio-project`

## Recommended GitHub Visibility

Recommended visibility: private during development. Change the repository
to public only after the business owner approves the final content,
development placeholders are replaced or removed, and the project is ready
for portfolio presentation.
