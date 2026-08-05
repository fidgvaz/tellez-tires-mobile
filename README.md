# TTM — Téllez Tires Mobile

## About This Project

I built this bilingual website for Téllez Tires Mobile, a small tire-service business in Gilroy, California.

The project started as a community-service contribution and also became part of my professional portfolio as a Computer Science student. It gave me practical experience working with a real business, organizing bilingual content, improving accessibility, managing images, testing responsive layouts, and using Git and GitHub throughout the development process.

The website is still in development while the business owner reviews the content and provides the remaining information needed for deployment.

## Website Overview

The site includes four pages in English and four matching pages in Spanish:

- Home
- Services
- Our Work
- Contact

Each language has its own complete set of pages. The English and Spanish versions share the same CSS, JavaScript, and image files so the design and behavior remain consistent.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub

The project does not use frameworks, package managers, build tools, a backend, or a database. It is a fully static website.

## Main Features

- English and Spanish versions
- Mobile-first responsive design
- Separate pages for Home, Services, Our Work, and Contact
- Accessible mobile navigation
- Click-to-call phone links
- Click-to-email contact link
- Google Maps location embed
- Responsive project photo gallery
- Keyboard-visible focus states
- Reduced-motion support
- Navigation that remains usable when JavaScript is disabled

## Design and Development Decisions

I built the layout mobile-first and added responsive breakpoints as the content needed more space.

The Services section uses Flexbox so seven tire-shaped service cards can appear as four cards on the first desktop row and three centered cards on the second row.

The Our Work gallery uses CSS Grid because the twelve photos divide evenly across the responsive column layouts.

The site uses one shared stylesheet and one shared JavaScript file. Since this project does not use templates or a framework, the header and footer are maintained manually across the eight HTML pages.

## Accessibility

Accessibility was included throughout the project rather than added at the end.

The site includes:

- A skip-to-content link
- Visible keyboard focus states
- One main heading on each page
- `aria-current="page"` on the active navigation link
- Accessible labels for page sections
- A mobile menu that updates its expanded state
- Large touch targets
- Navigation that still works without JavaScript
- Support for `prefers-reduced-motion`

## Project Structure

```text
ttm-tellez-tires-mobile/
├── index.html
├── services.html
├── our-work.html
├── contact.html
├── es/
│   ├── index.html
│   ├── services.html
│   ├── our-work.html
│   └── contact.html
├── assets/
│   └── images/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── README.md
└── .gitignore
