# Luma – Front-End Coding Challenge

A responsive landing page for **Luma**, an online learning platform, built from the supplied Figma design (desktop and mobile) for the Buzzvel Front-End Engineer challenge.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4

---

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# type-check
npm run typecheck

# production build + run
npm run build
npm start
```

---

## Project structure

```
app/
  layout.tsx          # fonts (next/font), metadata, viewport
  page.tsx            # page composition
  globals.css         # Tailwind import + design tokens (@theme) + base styles
components/
  Header.tsx          # sticky header, accessible mobile menu
  Hero.tsx
  Categories.tsx      # CategoryCard + section
  FeaturedCourse.tsx
  HowItWorks.tsx
  Testimonial.tsx     # quote + stats
  People.tsx
  PeopleCollage.tsx   # absolutely-positioned photo collage over a circle
  Contact.tsx
  ContactForm.tsx     # client-side validation + mocked submit
  CallToAction.tsx
  Footer.tsx
  ui/
    Button.tsx        # Button (link or button) + TextLink
    AvatarStack.tsx   # overlapping avatar images
    Section.tsx       # Container + Eyebrow
    Icons.tsx         # inline SVG icons
lib/
  content.ts          # all mock data and shared types
public/images/        # optimized WebP assets
```

All content is local mock data in `lib/content.ts`; no backend or CMS is required.

---

## Implemented features

- **Fully responsive** layout for mobile, tablet and desktop (mobile-first Tailwind breakpoints).
- **All sections** from both designs: header, hero, categories, featured course, how it works, testimonial and stats, people collage, contact, call to action and footer.
- **Interactions**
  - Sticky header with a mobile menu (toggle button with `aria-expanded` / `aria-controls`, closes on `Esc` and when a link is selected).
  - Smooth in-page anchor navigation with a scroll offset for the sticky header.
  - Contact form with validation (name, email, message), per-field error messages, a mocked asynchronous submit, a loading state and a success message announced through a live region.
  - Hover and focus states on all interactive elements.
- **Reusable, typed components** (`Button`, `TextLink`, `AvatarStack`, `CategoryCard`, `PeopleCollage`, …) driven by typed data.

---

## Key decisions

- **Typography:** Plus Jakarta Sans for headings and Inter for body text, both loaded with `next/font` (self-hosted, `display: swap`). Headings use a base-layer rule on `h1`–`h6`; non-heading display text (logo, stat numbers, quote) uses the `font-display` utility. Only the weights used by the design are loaded.
- **Design tokens:** colors and font families are defined once in `@theme` in `globals.css`, so components use semantic utilities (`bg-blue`, `text-muted`, `bg-sun-soft`, …) instead of hard-coded values.
- **Photo collage (`PeopleCollage`):** each of the 10 photos is positioned from its Figma coordinates, stored in `lib/content.ts` as pixel values relative to a reference frame and converted to percentages at render time. The collage therefore scales proportionally at every width, and the blue circle sits behind the photos by DOM order (no `z-index` needed).
- **Avatar stacks:** the hero and the call-to-action use the same `AvatarStack` component with different image sets, sizes and ring colors, instead of baking the avatars into a single image.
- **Images:** `next/image` everywhere, with responsive `sizes`, a priority hero image, intrinsic dimensions to avoid layout shift, and WebP assets. Decorative images use `alt=""`; content images have descriptive alt text.
- **No animation libraries.** Transitions are limited to hover/focus states, and a `prefers-reduced-motion` rule disables smooth scrolling and transitions.
- **Server Components by default.** Only the header (menu state) and the contact form (form state) are client components.

### Design ambiguities and how I resolved them

- The mobile design shows the contact form in Portuguese ("Nome completo", "Enviar mensagem", …). I used English everywhere for consistency with the desktop design.
- All three "How Luma works" steps are labelled "STEP 01" in the design. I numbered them 01, 02 and 03.
- Navigation links, "Log in" and the course buttons have no destination in the design. Since only one page is required, they scroll to the most relevant section (the "Log in" link goes to the contact form; there is no authentication).
- The "Meet international students & teachers" paragraph is placeholder text in the design, so I kept it as is.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a logical heading order, with each section labelled by its heading.
- "Skip to content" link and a visible `:focus-visible` outline on all interactive elements.
- Keyboard-operable menu and form; labels are tied to inputs, errors use `aria-invalid` and `aria-describedby`, and the success message uses `role="status"`.
- Lists are real lists (`ul` / `ol` / `dl`) for categories, steps, stats, avatars and footer links.
- Card links include screen-reader-only context (for example "Explore Product Design courses").
- Page metadata: title, description, Open Graph tags, `lang="en"` and theme color.

## Performance

- Self-hosted fonts with limited weights, optimized images with explicit sizes, and no third-party scripts.
- Mostly static, server-rendered output with a very small client-side JavaScript footprint.

---

## Known gaps and issues

- Spacing, font sizes and radii were matched visually against the design exports; they have not been verified with a pixel-diff tool, so small differences may remain.
- No automated tests or Storybook (both optional in the brief).
- **"What will you learn next?" section:** the background is a flat yellow and does not include the decorative shapes (circles, rounded squares and icons) from the design. I prioritized the rest of the page and ran out of time to recreate them accurately; they can be added as absolutely positioned, `aria-hidden` elements inside the section.
- The footer and navigation "Careers", "Journal", "Terms" and "Privacy" links point to `#` because the design has no destination pages.

---

## Time spent

Approximately **8 hours**.

---

## AI tools

I used an AI assistant as an aid in some parts of this project, mainly for scaffolding boilerplate, refactoring a few components, and helping draft this README. I reviewed and edited everything it produced, and I can walk through any part of the code. I checked the result by running the type-check and a production build, testing the page on mobile and desktop, and navigating it with the keyboard only.
