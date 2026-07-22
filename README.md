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

- Semantic single-page HTML structure
- Mobile-first, fully responsive design
- Yellow and purple brand styling with strong color contrast
- Click-to-call telephone links
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
- Logical heading hierarchy: one `h1`, followed by `h2`s for each major
  section
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
actual content (header, navigation, service cards) needs more room, not
around specific named devices. The header navigation expands to a single
row, and the services gallery expands from one to four columns, at the same
breakpoint (60em) for visual consistency.

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
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── styles.css
└── js/
    └── main.js
```

- **index.html** — Single page containing all site sections
- **README.md** — This file
- **.gitignore** — Files and folders excluded from version control
- **css/styles.css** — All site styling (mobile-first, responsive)
- **js/main.js** — Vanilla JS behaviors (mobile nav toggle, footer year)

Folders and files are added incrementally as each is actually needed; this
repository does not contain empty placeholder folders. An `assets/images/`
folder does not exist yet — see "Reserved Final Image Filenames" below.

## Reserved Final Image Filenames

The following filenames are reserved for future, owner-approved production
images. They do not yet exist in this repository, and no real business
photographs have been added:

- `assets/images/ttm-logo.png`
- `assets/images/service-vehicle.jpg`
- `assets/images/tire-inventory.jpg`
- `assets/images/tire-service.jpg`
- `assets/images/gilroy-location.jpg`

Until these real images are provided and approved, the HTML/CSS use styled
visual placeholder elements rather than broken image references.

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

After starting the local server and opening `http://localhost:8000`,
manually verify:

- **Mobile widths** (~320–599px): single-column layout, mobile menu toggle
  visible and functional, no horizontal scrolling
- **Tablet widths** (~600–959px): two-column services grid, layout remains
  comfortable with no crowding
- **Desktop widths** (960px+): full horizontal navigation, four-column
  services grid, sticky header
- **Keyboard navigation**: press Tab repeatedly from the top of the page;
  confirm the skip link appears first, every interactive element shows a
  visible focus outline, and tab order follows the visual layout
- **Mobile menu behavior**: below 960px, click/tap the "Menu" button and
  confirm it opens and closes the navigation, updates its own label
  ("Menu" / "Close Menu"), and closes automatically when a nav link or
  Call Now is selected
- **JavaScript-disabled behavior**: disable JavaScript in the browser and
  reload; confirm navigation links remain visible and usable, the Menu
  button does not appear, and the footer year still shows a value
- **Telephone links**: confirm the phone number is clickable in the header
  nav, hero, and contact section, and that all three use the same
  `tel:+14088412040` link
- **Current-year behavior**: with JavaScript enabled, confirm the footer
  year matches the current year
- **Horizontal scrolling**: at every width tested above, confirm the page
  never scrolls horizontally

## Confirmed Business Information

The following facts have been confirmed and are safe to treat as final:

- Business name: **TTM — Téllez Tires Mobile**
- Phone: **(408) 841-2040**
- Click-to-call link: **tel:+14088412040**
- Current status wording: *"Currently serving customers at our Gilroy
  location. Call for current service availability."*
- Location/landmark wording: *"Behind Furniture Revolution on Monterey Road
  in Gilroy, California, across from Super Taqueria."*

## Pending Business Information

The following remain pending owner input and are intentionally omitted or
marked as placeholders in the codebase:

- Exact verified street address or an approved map pin
- Business hours
- Social media profile URLs (TikTok, Facebook, Instagram)
- Final approved logo asset (a reference photo has been provided; the
  production-quality asset is not ready)
- Real business photographs (service vehicle, tire inventory, tire service,
  Gilroy location)
- Final wording approval for the services list
- A decision on future mobile-service messaging, if that service resumes
- Final developer credit wording

## Replacing Placeholder Content

As the items above are confirmed, they should replace the corresponding
placeholder:

- **Images** — replace the styled placeholder elements in `index.html` /
  `css/styles.css` with `<img>` tags pointing to the reserved filenames,
  once approved image files are added to `assets/images/`.
- **Business hours, social links, address** — add once confirmed by the
  owner.
- **Service list wording** — update once the owner approves final wording.

## Current Limitations

- No real business photographs or final logo asset have been added; all
  visual placeholders are CSS-based development placeholders only
- Exact street address is not yet confirmed
- Business hours are not yet published
- Social media profile links are not yet available
- Several services are pending final wording approval from the owner
- Mobile tire service is not currently active and is not advertised as
  available on this site
- The project has not yet been deployed to a live hosting environment
- No open-source license has been selected. This client project is not
  intended for reuse without permission.

## Future Improvements

- Add confirmed business hours
- Add real, owner-approved social media links
- Replace image placeholders with approved business photography and the
  final logo asset
- Add a verified address and enable a live directions link once confirmed
- Revisit mobile-service messaging if the owner resumes offering that
  service

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

- [ ] Replace development image placeholders with real photographs
- [ ] Add the final approved logo asset
- [ ] Verify the exact business street address
- [ ] Add an approved map embed or directions link
- [ ] Verify the phone number is correct
- [ ] Confirm final wording for all listed services
- [ ] Add business hours, if provided
- [ ] Add verified social media links
- [ ] Remove development-only HTML comments if no longer useful
- [ ] Verify final developer credit wording
- [ ] Test on mobile, tablet, and desktop widths
- [ ] Test full keyboard accessibility
- [ ] Test the site with JavaScript disabled
- [ ] Validate HTML (e.g. via the W3C validator)
- [ ] Verify there are no broken links
- [ ] Confirm a favicon decision (add one or intentionally omit)
- [ ] Confirm final page title and meta description wording
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
