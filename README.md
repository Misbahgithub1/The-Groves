## The Groves Frontend

This project is a modern React + TypeScript single-page application, built with Vite and SCSS modules. It implements a fully bilingual (English / Arabic) marketing site for **The Groves**, including a hero carousel, attractions and cuisine sections, interactive map, and a localized navigation/header/footer.

### Tech stack

- **Framework**: React + TypeScript
- **Bundler / Dev server**: Vite
- **Styling**: SCSS modules (`*.module.scss`) with design tokens imported from `src/styles/variables`
- **Icons**: Font Awesome
- **Layout**: React-Bootstrap grid (`Container`, `Row`, `Col`)
- **Internationalization (i18n)**:
  - JSON-based translations in `src/locales/en.json` and `src/locales/ar.json`
  - RTL/LTR layout support driven by the current language

### Project structure (high level)

- `src/App.tsx` – application root; owns the current language state and passes it to all sections.
- `src/locales/en.json` / `src/locales/ar.json` – all static copy for English and Arabic:
  - Navbar, top bar, hero slides, mall, attractions, cuisine, experience, map, footer, login button, language labels, etc.
- `src/components/LanguageSelector` – dropdown to switch between `en` and `ar`, with flags and labels.
- `src/components/Navbar` – main navigation:
  - `Navbar.tsx` – desktop nav, language-aware items.
  - `TopBar.tsx` – logo, social icons, login button, language selector.
  - `MobileSidebar.tsx` – mobile menu with login and social icons.
- `src/components/Hero` – hero image with dark overlay and text carousel.
- `src/components/Carousel` – generic fading carousel used by the hero (RTL-aware indicators).
- `src/components/MasonryCarousel` – horizontal masonry-style slider used in attractions/experience.
- `src/components/MallSection` – “Mall of Endless Possibilities” section.
- `src/components/AttractionsSection` – general access + attractions masonry carousel.
- `src/components/CuisineSection` – cuisine cards grid.
- `src/components/ExperienceSection` – “Curate your experience” + masonry carousel.
- `src/components/MapSection` – embedded Google Map + copy + CTA button.
- `src/components/Footer` – multi-column footer, social icons, payment methods, and legal links.
- `src/components/Button` – shared gradient CTA button, RTL-aware arrow.

### Internationalization & RTL behavior

- **Language state** lives in `App.tsx` (`language: 'en' | 'ar'`).
  - On language change, `document.documentElement.dir` is set to `ltr` or `rtl`.
  - `language` is passed as a prop to: `Navbar`, `Hero`, `MallSection`, `AttractionsSection`, `CuisineSection`, `ExperienceSection`, `MapSection`, and `Footer`.
- **Translations**:
  - Each section reads from `en.json` / `ar.json` and uses only keys (no hard-coded text in JSX).
  - Example namespaces: `hero`, `navbar`, `topBar`, `mallSection`, `attractionsSection`, `cuisineSection`, `experienceSection`, `mapSection`, `footer`, `loginButton`, `languageSelector`.
- **RTL styling**:
  - Hero: `heroRtl` class moves the dark overlay to the right and right-aligns text.
  - Carousel: `isRtl` prop adds `rootRtl` which mirrors indicators and adjusts spacing.
  - Buttons: `isRtl` prop mirrors the arrow, moves it to the left, and flips direction.
  - Experience section: `rtl` class on the row and masonry carousel for Arabic.

### Running the project

1. **Install dependencies** (from the repo root):

```bash
npm install
```

2. **Start the dev server**:

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) where you can view the site.

3. **Build for production**:

```bash
npm run build
```

4. **Preview the production build**:

```bash
npm run preview
```

### How to add or edit translations

1. Open `src/locales/en.json` and `src/locales/ar.json`.
2. Add a new key under the appropriate namespace (for example, `cuisineSection` or `footer`).
3. In the corresponding component, import the JSON (if not already) and read from that key instead of hard-coding strings.
4. For any new section that depends on language:
   - Accept a `language: LanguageCode` prop.
   - Select translations as:

```ts
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

const translations = { en: enTranslations, ar: arTranslations } as const;
const t = translations[language] || translations.en;
```

### Coding conventions

- Prefer **function components** with **TypeScript props interfaces**.
- Use **SCSS modules** for styling and keep them colocated with the component.
- Avoid hard-coded UI strings; put them in `en.json` / `ar.json`.
- Keep RTL logic explicit via:
  - `language === 'ar' ? styles.rtlClass : ''`
  - `isRtl` boolean props on reusable components.

### Known limitations / notes

- Image assets (flags, logos, etc.) should be added under `src/assets/images`. If you change filenames, update imports in `Navbar`, `TopBar`, and other components.
- Masonry and hero carousels rely on external image URLs; you can swap these for local assets later.
