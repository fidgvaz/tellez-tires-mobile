# TTM — Téllez Tires Mobile

## Project Purpose

This is a community-service website project, developed free of charge for a
small local tire business in Gilroy, California. It also serves as a
professional portfolio project for a Computer Science student.

## Project Status

This project is in active development and is being built in staged
increments. Business content is partially confirmed by the owner; any
details that remain unconfirmed are clearly marked as pending throughout
this documentation and in code comments. No unconfirmed information is
presented to site visitors as final.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub for version control

No frameworks, build tools, package managers, or external JavaScript
libraries are used. The site is fully static and requires no backend.

## Features

- Static, single-page website
- Mobile-first, fully responsive layout
- Semantic HTML with basic accessibility support
- Click-to-call telephone link

## Project Structure

```text
ttm-tellez-tires-mobile/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── assets/
    └── images/
```

- **index.html** — Single page containing all site sections
- **README.md** — This file
- **.gitignore** — Files and folders excluded from version control
- **css/styles.css** — All site styling (mobile-first, responsive)
- **js/main.js** — Small vanilla JS behaviors (e.g. nav toggle, footer year)
- **assets/images/** — Business photographs and logo

Folders and files are added incrementally as each is actually needed;
this repository does not contain empty placeholder folders.

### Reserved final image filenames

The following filenames are reserved for future, owner-approved production
images. They do not yet exist in this repository:

- `assets/images/ttm-logo.png`
- `assets/images/service-vehicle.jpg`
- `assets/images/tire-inventory.jpg`
- `assets/images/tire-service.jpg`
- `assets/images/gilroy-location.jpg`

Until these real images are provided and approved, the HTML/CSS will use
styled visual placeholder elements rather than broken image references.

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

Alternative (limited): the page can also be opened directly by double-clicking
`index.html` in a file browser. This works for basic viewing, but a local
server more closely matches how the site will behave once deployed, so it is
the preferred method for testing.

## Replacing Placeholder Content

As real business information is confirmed, it should replace the
corresponding placeholder:

- **Images** — replace the styled placeholder elements in `index.html`/`css/styles.css`
  with `<img>` tags pointing to the reserved filenames listed above, once those
  approved image files are added to `assets/images/`.
- **Business hours** — currently absent/pending; add once confirmed by the owner.
- **Social media links** — currently absent/pending; add real profile URLs once provided.
- **Exact street address** — currently absent/pending; add once verified by the owner.
- **Service list wording** — currently draft; update once the owner approves final wording.

## Current Limitations

- Exact street address is not yet confirmed (a general location description
  is used instead: behind Furniture Revolution on Monterey Road, Gilroy,
  California, across from Super Taqueria).
- Business hours are not yet published.
- Social media profile links (TikTok, Facebook, Instagram) are not yet available.
- A logo reference photograph has been provided. Final production-quality
  logo asset pending owner approval and preparation.
- Several services are pending final wording approval from the owner before
  publication.
- Mobile tire service is not currently active and is not advertised as
  available on this site.

## Future Improvements

- Add confirmed business hours.
- Add real, owner-approved social media links.
- Replace image placeholders with approved business photography and the
  final logo asset.
- Add a verified address and enable a live directions link once confirmed.
- Revisit mobile-service messaging if the owner resumes offering that service.

## Image and Logo Ownership

The TTM logo and business photographs are provided or authorized by the
business for use on this website. They are not owned by the developer and
may not be reused without appropriate permission.

## Developer Credit

(placeholder — developer name/credit to be added)
