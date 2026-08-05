# ZAC Meat & Food Portfolio

A production-ready, one-page corporate portfolio for ZAC Meat & Food. The site is built only from the supplied company profile PDF and presents the company introduction, mission, vision, promise, certification marks, product portfolio, customer testimonial, global expansion focus, and contact details.

## Technology

- Astro with static HTML output
- TypeScript-backed content and site configuration
- Semantic HTML and modern CSS
- Minimal vanilla JavaScript for the compact header, active navigation, mobile menu, and restrained reveal effects
- Locally bundled Fraunces and Manrope variable fonts
- `@astrojs/sitemap` for sitemap generation

There are no UI frameworks, client-side component frameworks, databases, CMS integrations, analytics, or third-party runtime scripts.

## Project structure

```text
.
├── public/
│   ├── assets/
│   │   ├── certifications/
│   │   ├── images/
│   │   │   └── products/
│   │   └── logo/
│   ├── favicon.svg
│   └── site.webmanifest
├── source-assets/
│   └── extracted/
├── src/
│   ├── components/
│   ├── config/
│   │   ├── content.ts
│   │   └── site.ts
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local setup

Node.js 20.19.5 or newer is required. An `.nvmrc` for Node.js 22.14.0 is included.

```bash
nvm use
npm install
npm run dev
```

The development server prints its local URL in the terminal.

## Validation and production build

```bash
npm run check
npm run build
npm run preview
```

`npm run build` runs Astro and TypeScript checks before generating the production site. The deployable static output is written to `dist/`.

The completed project was validated at 320, 375, 390, 768, 1024, 1280, and 1440 pixels. The production audit at completion scored 99 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO in Lighthouse 12.8.2.

## Content and configuration

- Update the final production domain in `src/config/site.ts`. The current value is the intentionally marked placeholder `https://example.com`.
- Update company contact information in `src/config/site.ts`.
- Update product groups and repeated page content in `src/config/content.ts`.
- Navigation labels and anchors are stored in `src/config/site.ts`.

The canonical URL, Open Graph metadata, Twitter card metadata, Organization JSON-LD, robots sitemap URL, and Astro sitemap integration all read from the same central site configuration.

## PDF asset inventory and extraction

The supplied six-page PDF was inspected page by page. Embedded images were extracted at their native resolution with Poppler. Where the PDF stored transparency separately, the embedded soft mask was restored before optimization.

Directly extracted assets include:

- 1,655 × 843 livestock hero photograph
- 581 × 581 livestock collage
- 760 × 1,084 mission livestock cutout
- 1,655 × 666 landscape livestock photograph
- 1,655 × 1,102 global expansion meat photograph
- Individual source images for every beef, camel, goat, lamb, veal, and lamb-cut product listed in the profile
- One 859 × 98 transparent certification strip containing eight marks

The certification strip was split along its original transparent gaps so each supplied mark could remain legible and responsive. The marks were not redrawn, renamed, or altered.

The PDF logo was vector artwork rather than a separately embedded image. It was the only asset cropped from a page render: page one was rendered at 600 DPI, the white logo was isolated from its solid background, and transparency was restored. This fallback preserves a sharp 1,000 × 516 source logo for normal website display sizes.

Uncompressed, restored PNG sources are kept in `source-assets/extracted/` and are excluded from the production output. Public photographs use responsive WebP variants. Logos and certification marks remain PNG/SVG where transparency or edge sharpness matters. The social-sharing image combines the authentic livestock photograph and extracted logo with source-supported portfolio text.

## Original asset limitations

The hero, supporting livestock photographs, and global expansion image have strong source resolution. Several small lamb-cut images in the PDF are only about 177–297 pixels wide, and some carcass images are narrow cutouts. The website keeps these images contained at or below their useful source dimensions and does not stretch them to fill the product cards.

When replacing an image:

1. Preserve its original aspect ratio.
2. Use transparent PNG for logos or certification marks.
3. Use WebP for photographs.
4. Keep explicit `width` and `height` values in `src/config/content.ts` or the relevant component.
5. Do not enlarge a replacement beyond its native dimensions.

## SEO files

- Metadata and Organization JSON-LD: `src/layouts/BaseLayout.astro`
- Site-wide SEO values: `src/config/site.ts`
- Sitemap generation: `astro.config.mjs`
- Robots output: `src/pages/robots.txt.ts`
- Social image: `public/assets/images/social-share.jpg`
- Manifest and favicon: `public/site.webmanifest` and `public/favicon.svg`

After setting the final domain, rebuild the project so canonical URLs, robots output, structured data, and the generated sitemap contain the production URL.

## Static deployment

Upload the contents of `dist/` to the web root of ordinary Apache or Nginx hosting.

### Apache

Point `DocumentRoot` at the deployed `dist/` directory. Static file serving is sufficient. Configure the server’s 404 handling to use `/404.html` if desired:

```apache
ErrorDocument 404 /404.html
```

### Nginx

Point `root` at the deployed `dist/` directory:

```nginx
location / {
    try_files $uri $uri/ =404;
}

error_page 404 /404.html;
```

No server-side application process is required after the static build is generated.
