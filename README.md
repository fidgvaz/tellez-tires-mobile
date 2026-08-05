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
```

## Current Status

The main website structure and design are complete. So far, I have finished:

- Four English pages and four matching Spanish pages
- Responsive layouts for phones, tablets, and desktop computers
- Mobile navigation
- Accessibility improvements
- The Home page hero image
- The Our Work photo gallery
- Contact information and click-to-call links
- The Google Maps location
- Version control with Git and GitHub

A few details still need to be confirmed by the business owner before the website is ready for deployment:

- Business hours
- TikTok and Instagram profile links
- Final approved logo
- Final wording for the services
- Approval of the selected gallery photos
- Final developer credit
- Choice of hosting provider

## Business Information

- **Business:** TTM — Téllez Tires Mobile
- **Location:** 6980 Monterey Road, Gilroy, California 95020
- **Phone:** (408) 841-2040
- **Email:** enrique408delgadillo@gmail.com

The photographs and logo used in this project were provided or authorized by the business. They are not available for reuse without permission.

## Testing

I tested the website on mobile, tablet, and desktop screen sizes. I also checked:

- English and Spanish navigation
- Keyboard navigation
- Mobile-menu behavior
- The website with JavaScript disabled
- Image loading
- Phone and email links
- Responsive gallery behavior
- Horizontal scrolling
- Reduced-motion preferences

I will repeat the final tests after the business owner approves the remaining information and before the website is published.

## Deployment

The business owner has not chosen a hosting provider yet. The website will be deployed to either Hostinger or GoDaddy after the customer decides which service is the better fit.

Before deployment, I will confirm the remaining business information, test all eight pages again, and create a final production commit.

Some small adjustments may still be needed after the website goes live. For example, the customer may notice missing information, request a wording change, or want something adjusted after seeing the website online.

## Repository

I use this GitHub repository to keep the project organized, preserve its development history, prepare future updates, and present the work as part of my portfolio.

As the project continues, I will commit each meaningful and tested update before pushing it to GitHub.
