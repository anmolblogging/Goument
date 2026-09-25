# Gourmet — Complete Project Tech & Design Inventory

Source audit date: 25 September 2026. Language: Hinglish + exact technical names.

Yeh document local project ke source code, package manifests, lockfiles, CSS aur assets se extract kiya gaya hai. Isme deployed website, live SEO ranking, external service connectivity ya browser-computed styles verify nahi kiye gaye. `Present in source` ka matlab har page par rendered/live hona nahi hai. Disabled pages aur reusable components bhi inventory mein included hain. Secrets aur .env values include nahi kiye gaye.

## 1. Project structure aur architecture

- `frontend_appview/`: Main, feature-rich Next.js app; corporate gifting catalogue, inquiries, occasions, admin/telemetry APIs, legacy ecommerce screens.
- `frontend_responsive/`: Separate Next.js frontend; pastel responsive storefront with navbar, hero and product grid. Main app se independently configured.
- `backend/`: Express REST API; MongoDB, Redis, payments, queues, uploads, authentication.
- Root `images/` and `fonts/`: Source/reference asset collections. Public copies dono frontends mein bhi hain; har duplicate file browser mein load nahi hoti.

Main app flow: Browser → Next.js App Router / React components → Next.js inquiry/geo/admin/telemetry endpoints OR Axios `/api/v1` → Express API → MongoDB / Redis / Stripe / Cloudinary. Main root layout wraps content in QueryProvider and ResponsiveShell.

Sources: `frontend_appview/src/app/layout.tsx`, `frontend_appview/next.config.ts`, `backend/src/app.js`, `backend/src/server.js`.

## 2. Technology stack

Main frontend: Next.js 16.2.10, React 19.2.4, TypeScript 5 range, Tailwind CSS 4 range, PostCSS integration, Framer Motion, GSAP + ScrollTrigger, Lucide icons, Zustand, TanStack Query, Axios, IndexedDB helpers, canvas-confetti, react-hot-toast.

Second frontend: Next.js 16.2.11, React 19.2.4, TypeScript, Tailwind 4, Framer Motion and Lucide. clsx, tailwind-merge and Zustand declared hain; static import inventory below batata hai source reference mila ya nahi.

Backend: Node.js JavaScript with CommonJS, Express 4, Mongoose 8 / MongoDB, ioredis, BullMQ, Socket.IO Redis adapter, Stripe, Cloudinary, JWT, bcryptjs, Joi, Winston, Opossum. Exact running Node version package manifests se pinned nahi hai; @types/node 20 actual runtime version ka proof nahi hai.

### 2.1 Complete direct dependency inventory

Declared range package.json ka hai; locked version package-lock.json ka. Import evidence direct source text scan hai; tooling dependencies config/build mein use ho sakti hain. Import milna active runtime reachability ka proof nahi hai.

### frontend_appview

| Package | Declared | Lockfile | Type | Source evidence (up to 2) |
| --- | --- | --- | --- | --- |
| @tanstack/query-sync-storage-persister | ^5.101.2 | 5.101.2 | dependencies | frontend_appview/src/shared/QueryProvider.tsx |
| @tanstack/react-query | ^5.101.2 | 5.101.2 | dependencies | frontend_appview/src/shared/QueryProvider.tsx; frontend_appview/src/hooks/useHeroData.ts |
| @tanstack/react-query-persist-client | ^5.101.2 | 5.101.2 | dependencies | frontend_appview/src/shared/QueryProvider.tsx |
| axios | ^1.18.1 | 1.18.1 | dependencies | frontend_appview/src/shared/api/client.ts |
| canvas-confetti | ^1.9.4 | 1.9.4 | dependencies | frontend_appview/src/features/shell/OnlineToast.tsx; frontend_appview/src/app/checkout/page.tsx |
| framer-motion | ^12.42.2 | 12.42.2 | dependencies | frontend_appview/src/components/Scrapbook.tsx; frontend_appview/src/components/ui/futuristic-nav.tsx |
| gsap | ^3.15.0 | 3.15.0 | dependencies | frontend_appview/src/app/page.tsx; frontend_appview/src/hooks/useScrollReveal.ts |
| idb-keyval | ^6.3.0 | 6.3.0 | dependencies | frontend_appview/src/shared/useCartSync.ts; frontend_appview/src/hooks/useCart.ts |
| lucide-react | ^1.25.0 | 1.25.0 | dependencies | frontend_appview/src/app/page.tsx; frontend_appview/src/app/not-found.tsx |
| next | 16.2.10 | 16.2.10 | dependencies | frontend_appview/src/proxy.ts; frontend_appview/src/app/sitemap.ts |
| nodemailer | ^9.0.6 | 9.0.6 | dependencies | frontend_appview/src/app/api/send-inquiry/route.ts |
| react | 19.2.4 | 19.2.4 | dependencies | frontend_appview/src/app/page.tsx; frontend_appview/src/app/not-found.tsx |
| react-dom | 19.2.4 | 19.2.4 | dependencies | No direct src import; declared/tooling |
| react-hot-toast | ^2.6.0 | 2.6.0 | dependencies | frontend_appview/src/components/modals/InquiryModal.tsx; frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| ua-parser-js | ^2.0.10 | 2.0.10 | dependencies | frontend_appview/src/proxy.ts |
| xlsx | ^0.18.5 | 0.18.5 | dependencies | frontend_appview/src/app/api/admin/export/route.ts |
| zustand | ^5.0.14 | 5.0.14 | dependencies | frontend_appview/src/hooks/useCart.ts; frontend_appview/src/hooks/useInquiryModal.ts |
| @tailwindcss/postcss | ^4 | 4.3.3 | devDependencies | No direct src import; declared/tooling |
| @types/canvas-confetti | ^1.9.0 | 1.9.0 | devDependencies | No direct src import; declared/tooling |
| @types/node | ^20 | 20.19.43 | devDependencies | No direct src import; declared/tooling |
| @types/nodemailer | ^8.0.1 | 8.0.1 | devDependencies | No direct src import; declared/tooling |
| @types/react | ^19 | 19.2.17 | devDependencies | No direct src import; declared/tooling |
| @types/react-dom | ^19 | 19.2.3 | devDependencies | No direct src import; declared/tooling |
| @types/ua-parser-js | ^0.7.39 | 0.7.39 | devDependencies | No direct src import; declared/tooling |
| eslint | ^9 | 9.39.5 | devDependencies | No direct src import; declared/tooling |
| eslint-config-next | 16.2.10 | 16.2.10 | devDependencies | No direct src import; declared/tooling |
| tailwindcss | ^4 | 4.3.3 | devDependencies | frontend_appview/src/app/globals.css |
| typescript | ^5 | 5.9.3 | devDependencies | No direct src import; declared/tooling |

Scripts: `dev` → `next dev`; `build` → `next build`; `start` → `next start`; `lint` → `eslint`

### frontend_responsive

| Package | Declared | Lockfile | Type | Source evidence (up to 2) |
| --- | --- | --- | --- | --- |
| clsx | ^2.1.1 | 2.1.1 | dependencies | No direct src import; declared/tooling |
| framer-motion | ^12.42.2 | 12.42.2 | dependencies | frontend_responsive/src/components/ResponsiveHero.tsx; frontend_responsive/src/components/ResponsiveNavbar.tsx |
| lucide-react | ^1.26.0 | 1.26.0 | dependencies | frontend_responsive/src/components/ResponsiveProductGrid.tsx; frontend_responsive/src/components/ResponsiveHero.tsx |
| next | 16.2.11 | 16.2.11 | dependencies | frontend_responsive/src/app/layout.tsx; frontend_responsive/src/components/ResponsiveNavbar.tsx |
| react | 19.2.4 | 19.2.4 | dependencies | frontend_responsive/src/app/page.tsx; frontend_responsive/src/components/ResponsiveProductGrid.tsx |
| react-dom | 19.2.4 | 19.2.4 | dependencies | No direct src import; declared/tooling |
| tailwind-merge | ^3.6.0 | 3.6.0 | dependencies | No direct src import; declared/tooling |
| zustand | ^5.0.14 | 5.0.14 | dependencies | No direct src import; declared/tooling |
| @tailwindcss/postcss | ^4 | 4.3.3 | devDependencies | No direct src import; declared/tooling |
| @types/node | ^20 | 20.19.43 | devDependencies | No direct src import; declared/tooling |
| @types/react | ^19 | 19.2.17 | devDependencies | No direct src import; declared/tooling |
| @types/react-dom | ^19 | 19.2.3 | devDependencies | No direct src import; declared/tooling |
| eslint | ^9 | 9.39.5 | devDependencies | No direct src import; declared/tooling |
| eslint-config-next | 16.2.11 | 16.2.11 | devDependencies | No direct src import; declared/tooling |
| tailwindcss | ^4 | 4.3.3 | devDependencies | frontend_responsive/src/app/globals.css |
| typescript | ^5 | 5.9.3 | devDependencies | No direct src import; declared/tooling |

Scripts: `dev` → `next dev`; `build` → `next build`; `start` → `next start`; `lint` → `eslint`

### backend

| Package | Declared | Lockfile | Type | Source evidence (up to 2) |
| --- | --- | --- | --- | --- |
| @socket.io/redis-adapter | ^8.3.0 | 8.3.0 | dependencies | backend/src/shared/utils/socket.js |
| bcryptjs | ^2.4.3 | 2.4.3 | dependencies | backend/src/features/auth/auth.model.js |
| bullmq | ^5.8.2 | 5.80.9 | dependencies | backend/src/shared/utils/bullQueue.js; backend/src/features/order/order.worker.js |
| cloudinary | ^2.2.0 | 2.10.0 | dependencies | backend/src/shared/utils/cloudinary.js |
| cookie-parser | ^1.4.7 | 1.4.7 | dependencies | backend/src/app.js |
| cors | ^2.8.5 | 2.8.6 | dependencies | backend/src/app.js |
| dotenv | ^16.4.5 | 16.6.1 | dependencies | backend/src/shared/config/index.js |
| express | ^4.19.2 | 4.22.2 | dependencies | backend/src/app.js; backend/src/features/order/order.routes.js |
| express-mongo-sanitize | ^2.2.0 | 2.2.0 | dependencies | backend/src/app.js |
| express-validator | ^7.1.0 | 7.3.2 | dependencies | backend/src/shared/middleware/validation.middleware.js; backend/src/features/order/order.validation.js |
| helmet | ^7.1.0 | 7.2.0 | dependencies | backend/src/app.js |
| ioredis | ^5.4.1 | 5.11.1 | dependencies | backend/src/shared/utils/socket.js; backend/src/shared/utils/redis.js |
| joi | ^17.13.1 | 17.13.4 | dependencies | backend/src/shared/config/index.js |
| jsonwebtoken | ^9.0.2 | 9.0.3 | dependencies | backend/src/shared/middleware/auth.middleware.js; backend/src/features/auth/auth.service.js |
| mongoose | ^8.4.1 | 8.24.1 | dependencies | backend/src/server.js; backend/src/shared/utils/testSetup.js |
| opossum | ^8.1.3 | 8.5.0 | dependencies | backend/src/shared/utils/circuitBreaker.js |
| slugify | ^1.6.6 | 1.6.9 | dependencies | backend/src/features/category/category.model.js; backend/src/features/product/product.model.js |
| socket.io | ^4.7.5 | 4.8.3 | dependencies | backend/src/shared/utils/socket.js |
| stripe | ^15.10.0 | 15.12.0 | dependencies | backend/src/shared/utils/stripe.js |
| uuid | ^9.0.1 | 9.0.1 | dependencies | No direct src import; declared/tooling |
| winston | ^3.13.0 | 3.19.0 | dependencies | backend/src/shared/utils/logger.js |
| ioredis-mock | ^8.13.1 | 8.13.1 | devDependencies | backend/src/shared/utils/redis.js |
| jest | ^29.7.0 | 29.7.0 | devDependencies | No direct src import; declared/tooling |
| mongodb-memory-server | ^9.2.0 | 9.5.0 | devDependencies | backend/src/shared/utils/testSetup.js |
| nodemon | ^3.1.2 | 3.1.14 | devDependencies | No direct src import; declared/tooling |
| supertest | ^7.0.0 | 7.2.2 | devDependencies | backend/src/features/cart/__tests__/cart.test.js; backend/src/features/health/__tests__/health.test.js |

Scripts: `start` → `node src/server.js`; `dev` → `nodemon src/server.js`; `test` → `jest --runInBand --detectOpenHandles --forceExit`

## 3. CSS system aur styling approach

Dono apps `@import "tailwindcss"` and `@tailwindcss/postcss` use karte hain. Styling mix hai: Tailwind utilities, arbitrary values (`text-[…]`, `bg-[#…]`), global CSS tokens, React inline style objects, component CSS, aur component-local style tags. Sass/SCSS, Bootstrap, MUI, styled-components dependencies manifests mein nahi hain.

Main CSS files: `frontend_appview/src/app/globals.css`, `src/components/ImageTypography.css`, `src/components/editorial/EditorialCollage.css`. Alternate app: `frontend_responsive/src/app/globals.css`.

Main visuals: warm ivory / charcoal / sage / gold palette, burgundy enquiry CTAs, editorial serif headings, image collages, torn-paper clip paths, tape strips, dashed vintage stamps, shadows, gradients, object-cover images, backdrop blur, hidden scrollbars. `gold-gradient-btn` alternate frontend mein naam ke bawajood purple gradient hai.

CSS custom properties declared hona aur actual usage alag hai. Legacy `--gourmet-*` aliases, newer `--satra-*` tokens aur direct hardcoded colors coexist karte hain. Component-specific utilities global typography ko override kar sakti hain.

### 3.1 Complete global CSS custom properties

### frontend_appview tokens

| Token | Declared value |
| --- | --- |
| --font-cormorant | 'Cormorant Garamond', Georgia, serif |
| --font-jakarta | 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif |
| --font-geist | 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif |
| --satra-obsidian | #141413 |
| --satra-charcoal | #1A1A18 |
| --satra-ivory | #F6F4EF |
| --satra-silk | #FAF8F5 |
| --satra-emerald | #243325 |
| --satra-emerald-soft | #7A8B6F |
| --satra-linen | #E0DDD6 |
| --satra-border | #DDD8CE |
| --satra-gold | #D4AF37 |
| --satra-taupe | #B5AFA6 |
| --satra-stone | #8A8680 |
| --satra-warm-gray | #6E6B65 |
| --satra-text-secondary | #78746D |
| --gourmet-ivory | #F6F4EF |
| --gourmet-cream | #EFEDE7 |
| --gourmet-charcoal | #1A1A18 |
| --gourmet-stone | #2C2B28 |
| --gourmet-warm-gray | #8A8680 |
| --gourmet-border | #E0DDD6 |
| --gourmet-taupe | #B5AFA6 |
| --gourmet-sage | #7A8B6F |
| --gourmet-white | #FDFCFA |
| --stone-50 | #F1F0EB |
| --stone-100 | #E8E5DE |
| --stone-200 | #D9D5CC |
| --stone-300 | #C7C1B7 |
| --stone-400 | #A9A39A |
| --stone-500 | #77736C |
| --stone-700 | #45433F |
| --stone-900 | #242321 |
| --stone-black | #11110F |
| --shadow-plinth | 0 32px 64px -16px rgba(36, 35, 33, 0.07), 0 2px 8px rgba(36, 35, 33, 0.03) |
| --shadow-slab | 0 20px 40px -12px rgba(36, 35, 33, 0.06), inset 1px 1px 0px rgba(255, 255, 255, 0.7) |
| --shadow-daylight | -12px 24px 48px -8px rgba(36, 35, 33, 0.06), 0 1px 2px rgba(36, 35, 33, 0.04) |
| --space-1 | 4px |
| --space-2 | 8px |
| --space-3 | 12px |
| --space-4 | 16px |
| --space-5 | 20px |
| --space-6 | 24px |
| --space-8 | 32px |
| --space-10 | 40px |
| --space-12 | 48px |
| --space-16 | 64px |
| --space-20 | 80px |
| --space-24 | 96px |
| --space-30 | 120px |
| --space-40 | 160px |
| --container-max | 1440px |
| --container-narrow | 1080px |
| --container-text | 720px |
| --nav-height | 64px |
| --nav-height-mobile | 56px |
| --ease-out-expo | cubic-bezier(0.16, 1, 0.3, 1) |
| --ease-out-quart | cubic-bezier(0.25, 1, 0.5, 1) |
| --ease-in-out | cubic-bezier(0.65, 0, 0.35, 1) |
| --ease-luxury | cubic-bezier(0.4, 0, 0.2, 1) |
| --transition-fast | 200ms var(--ease-out-quart) |
| --transition-base | 400ms var(--ease-out-expo) |
| --transition-slow | 700ms var(--ease-out-expo) |
| --transition-image | 900ms var(--ease-out-expo) |
| --transition-reveal | 1000ms var(--ease-luxury) |

### frontend_responsive tokens

| Token | Declared value |
| --- | --- |
| --color-blush-pink | #FADADD |
| --color-baby-blue | #DDEEFF |
| --color-lavender-mist | #E6D9FF |
| --color-mint-cream | #DFF5EA |
| --color-butter-yellow | #FFF2B3 |
| --color-plum-dark | #3A2342 |
| --color-plum-accent | #6B427B |
| --color-pastel-cream | #FAF8FC |
| --color-gold | #6B427B |
| --color-gold-dark | #3A2342 |
| --color-gold-light | #E6D9FF |
| --color-charcoal | #3A2342 |
| --color-cream | #FAF8FC |
| --color-cream-card | #FFFFFF |
| --color-border | #E6D9FF |
| --color-text-dark | #3A2342 |
| --color-text-muted | #7A6585 |

## 4. Fonts aur typography

### 4.1 Font loading / actual families

| Font | Main frontend | Responsive frontend | Role / detail |
| --- | --- | --- | --- |
| Cormorant Garamond | Google stylesheet link | next/font/google | Editorial headings; main weights 300/400/500/600/700 + italic 400; alternate explicit 400/600/700 |
| Plus Jakarta Sans | Google stylesheet link | next/font/google | Body/UI; main weights 300/400/500/600/700/800 |
| Playfair Display | No loader found; fallback variable in some components | next/font/google | Alternate loaded font, after Cormorant in heading fallback chain |
| Pagio | @font-face WOFF → OTF | next/font/local WOFF + @font-face | Special display family; not automatically all headings |
| TropicalScript | @font-face OTF | next/font/local OTF + @font-face | Handwritten/script accents |
| DreamAlways | @font-face OTF | next/font/local OTF + @font-face | Script accents and fallback |
| Geist | --font-geist maps to Plus Jakarta Sans | No loader | Variable name does not mean Geist font is loaded |
| Avocalipss, Rosta, Tropical-Qebalon | Public asset files present | Public asset files present | No matching font-face/loader in app source found |
| Enica, Astro and font variants | Root asset collection | Full font collection also copied | Available files, not evidence of active font loading |
| Georgia, system-ui, -apple-system, Helvetica, Arial, monospace | Fallbacks / SVG wordmarks / email | Fallbacks | No separate downloadable package implied |

Main Google fonts use preconnect to fonts.googleapis.com and fonts.gstatic.com with display=swap. Local @font-face uses font-display: swap. Main body uses Jakarta; h1–h4 use Cormorant by default. Tailwind `font-sans`/`font-serif` use framework theme stacks where applied; no @theme font-sans mapping to Jakarta found. Alternate heading rule uses !important and Cormorant first, even for `.font-pagio`.

### 4.2 Main global typography scale

| Class | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| type-display | var(--font-cormorant), Georgia, serif | clamp(48px, 8vw, 120px) | 300 | 0.95 | -0.03em |
| type-heading | var(--font-cormorant), Georgia, serif | clamp(32px, 4.5vw, 64px) | 300 | 1.08 | -0.02em |
| type-title | var(--font-cormorant), Georgia, serif | clamp(22px, 2.5vw, 36px) | 600 | 1.2 | -0.01em |
| type-body | var(--font-jakarta), system-ui, sans-serif | 15px | 400 | 1.7 | 0.01em |
| type-meta | var(--font-jakarta), system-ui, sans-serif | 10px | 500 | 1.4 | 0.15em |
| type-nav | var(--font-jakarta), system-ui, sans-serif | 11px | 500 | 1 | 0.12em |
| type-micro | var(--font-geist), system-ui, sans-serif | 10px | 400 | 1.3 | 0.08em |
| type-serif-body | var(--font-cormorant), Georgia, serif | clamp(18px, 2vw, 24px) | 400 | 1.6 | 0 |

Base body: 15px, line-height 1.7, tracking 0.01em. `.dh-h2` uses Jakarta !important, weight 500, line-height 1.1, tracking -0.025em. Global classes are definitions; page-specific class inventories below show overrides.

### 4.3 Tailwind text-size defaults and responsive breakpoints

| Text utility | rem | px at 16px root |
| --- | --- | --- |
| xs | 0.75rem | 12.0 |
| sm | 0.875rem | 14.0 |
| base | 1rem | 16.0 |
| lg | 1.125rem | 18.0 |
| xl | 1.25rem | 20.0 |
| 2xl | 1.5rem | 24.0 |
| 3xl | 1.875rem | 30.0 |
| 4xl | 2.25rem | 36.0 |
| 5xl | 3rem | 48.0 |
| 6xl | 3.75rem | 60.0 |
| 7xl | 4.5rem | 72.0 |
| 8xl | 6rem | 96.0 |
| 9xl | 8rem | 128.0 |

| Breakpoint | rem | px at 16px root |
| --- | --- | --- |
| sm | 40rem | 640.0 |
| md | 48rem | 768.0 |
| lg | 64rem | 1024.0 |
| xl | 80rem | 1280.0 |
| 2xl | 96rem | 1536.0 |

Custom media queries from source:

frontend_appview: `@media (hover: none)`, `@media (max-width: 680px)`, `@media (max-width: 767px)`, `@media (max-width: 900px)`, `@media (min-width: 1200px)`, `@media (min-width: 1600px)`, `@media (min-width: 768px)`, `@media (prefers-reduced-motion: reduce)`.

frontend_responsive: .

`xs:` utilities exist in main source, but no custom xs breakpoint definition was found. 1rem=16px conversions above assume default browser root sizing; actual device/browser settings can change computed pixels. Main viewport maximumScale=5, alternate maximumScale=1.

### 4.4 Layout / sizing conventions

Main declared container max/narrow/text widths: 1440 / 1080 / 720px. Navigation tokens: 64px desktop, 56px mobile. Custom spacing tokens follow a 4px base with steps up to 160px; full values section 3.1 mein hain. Tailwind uses rem spacing and arbitrary px/vw/vh/% sizes too. Grids, flexbox, sticky and fixed elements, full viewport hero, aspect ratios, rounded corners, and object-fit are component driven.

Actual home composition `src/app/page.tsx` hai; `features/hero/HeroSection.tsx` is a separate component and should not be assumed to be the active home hero. Home uses separate phone/desktop hero images, priority loading, quality 90, and `sizes="100vw"`. Main CTA burgundy #3C0B1E with #4F1028 hover; cream text and gold accents recur.

## 5. Animations and interaction

| System | Use | Verified parameters / source |
| --- | --- | --- |
| GSAP + ScrollTrigger | Scroll reveals and parallax | hooks/useScrollReveal.ts: fadeUp y50, slide x±80, scale .92→1, mask bottom inset→0; 0.9s default, stagger .12s, power3.out, top 85%, once=true |
| GSAP home entrance | Hero child stagger | app/page.tsx: y35→0, opacity0→1, duration1.1s, stagger .18s, delay .2s |
| GSAP TextReveal | Word/line-style reveal | TextReveal.tsx: .7s duration, .04s stagger; DOM span splitting |
| GSAP parallax | Scroll-linked yPercent | useParallax default .15; ParallaxImage default .12, mobile <768 halves speed; scrub=true |
| Framer Motion | Enter/exit, hover/tap, accordions, modals, menus, carousels | motion components + AnimatePresence; per-component values below |
| AnimatedHeading | Word blur/fade/translate | blur10px, stagger .09s, duration .8s, y28, scale .96, ease [.22,1,.36,1] |
| CSS transitions | Hover zoom, grayscale, swaps, underlines | Image scale1.03 /900ms; grayscale650ms + scale1.02 /900ms; card image crossfade500ms |
| CSS keyframes | Editorial scroll pulse / company marquee | scrollPulse 2s ease-in-out infinite; marquee 60s linear infinite |
| canvas-confetti | Reconnection toast and checkout celebration | OnlineToast.tsx and disabled checkout page import package |
| Canvas 2D + requestAnimationFrame | Golden leaves / dust overlay | GoldPopperSprinkle.tsx:22 leaves +22 sparkles, #DFC299 and #FFF3D6; shell mounts globally |
| Alternate hero | Image and text transitions | ResponsiveHero.tsx: image1.2s easeOut, text.8s easeOut |
| Lucide React | UI icons | SVG icon components; not itself an animation engine |

Reduced-motion CSS and checks in GSAP reveal/parallax/home are present. Global CSS does not automatically stop every Framer Motion or custom canvas animation. GoldPopperSprinkle has no explicit reduced-motion check. ImageReveal accepts bottom/left/right/top but all map to the same maskReveal animation in current implementation. CSS utility reveal distances (40px/60px/.94) differ from GSAP defaults (50px/80px/.92).

## 6. SEO implementation

| Area | Existing implementation | Source |
| --- | --- | --- |
| Metadata | Corporate Gift Hampers India title, description, keywords, creator/publisher, metadataBase | src/app/layout.tsx |
| Canonical | Root canonical https://thegourmetgifts.co; dedicated page/dynamic route canonicals | layout.tsx and metadata-bearing routes |
| Social cards | OG website / en_IN; Twitter summary_large_image; meta.png declared1200×1200 | layout.tsx |
| Structured data | Organization, WebSite, WebPage, ItemList; Service/OfferCatalog; Product; LocalBusiness; FAQPage; breadcrumbs | layout.tsx, collections/occasions/contact pages, FaqSection.tsx |
| Sitemap | 22 generated entries: home +9 occasions + collections +10 categories +contact; now timestamp | src/app/sitemap.ts |
| Crawler controls | General/search crawling allowed; selected AI search bots allowed; listed training crawlers disallowed | public/robots.txt |
| Content-Signal | ai-train=no, search=yes, ai-input=yes in robots and response header | robots.txt / next.config.ts |
| AI-readable summary | llms.txt supplied | public/llms.txt |
| Admin indexing | index:false, follow:false, nocache/noarchive metadata; page also disabled | src/app/studio-admin/layout.tsx |
| Redirect | /collections?category=slug → /collections/slug permanent redirect | next.config.ts |
| Alias | /dealer-partner-gifting rewritten to occasion route | next.config.ts |
| Icons/manifest | favicon, apple icon, PNG/SVG assets, standalone web manifest | layout.tsx / manifest.ts |
| Alternate frontend | Only basic title/description and viewport in root metadata | frontend_responsive/src/app/layout.tsx |

SEO observations from source: sitemap omits allowed `/collections/3d-miniatures` and direct `/milestones-recognition` (it includes the occasion-path version). Root canonical and root WebPage schema live in shared layout, so child metadata/schema inheritance should be reviewed on rendered routes. `sameAs` array is empty. Sitemap lastModified uses generation time, not content edit history. Robots rules and Content-Signal express policy; they do not prove crawler compliance. JSON-LD presence does not prove rich-result eligibility or rankings. No live Search Console/Lighthouse data was inspected.

### 6.1 Metadata and structured-data source map

| File | Metadata | Schema types |
| --- | --- | --- |
| frontend_appview/src/app/layout.tsx | static metadata | Country, ItemList, ListItem, Organization, PostalAddress, WebPage, WebSite |
| frontend_appview/src/features/brand/FaqSection.tsx | schema only | Answer, FAQPage, Question |
| frontend_appview/src/app/contact/layout.tsx | static metadata | — |
| frontend_appview/src/app/contact/page.tsx | static metadata | BreadcrumbList, ContactPage, ContactPoint, ListItem, LocalBusiness, PostalAddress |
| frontend_appview/src/app/privacy/page.tsx | static metadata | — |
| frontend_appview/src/app/studio-admin/layout.tsx | static metadata | — |
| frontend_appview/src/app/milestones-recognition/page.tsx | static metadata | BreadcrumbList, BusinessAudience, Country, ListItem, Offer, OfferCatalog, PriceSpecification, Service, WebPage |
| frontend_appview/src/app/employee-gifting/page.tsx | static metadata | BreadcrumbList, BusinessAudience, Country, ListItem, Offer, OfferCatalog, PriceSpecification, Service, WebPage |
| frontend_appview/src/app/occasions/page.tsx | static metadata | BreadcrumbList, CollectionPage, ItemList, ListItem |
| frontend_appview/src/app/collections/layout.tsx | static metadata | — |
| frontend_appview/src/app/collections/page.tsx | static metadata | BreadcrumbList, CollectionPage, ItemList, ListItem |
| frontend_appview/src/app/collections/[category]/page.tsx | generateMetadata | Brand, BreadcrumbList, CollectionPage, ItemList, ListItem, Product |
| frontend_appview/src/app/occasions/[slug]/page.tsx | generateMetadata | BreadcrumbList, BusinessAudience, Country, ListItem, Offer, OfferCatalog, PriceSpecification, Service, WebPage |

## 7. Routes: existing code vs accessible pages

`isPageRouteActive()` currently uses a hardcoded activeWhitelist. PAGE_ROUTES_CONFIG flags alone are not the effective page access control. Proxy rewrites non-whitelisted pages to `/_not-found`; APIs use a separate prefix flag check, and unmatched API paths default to allowed at this layer. This does not replace endpoint authentication.

### 7.1 Effective page whitelist

`/`, `/collections`, `/contact`, `/offline`, `/employee-gifting`, `/milestones-recognition`, `/dealer-partner-gifting`, `/occasions/employee-gifting`, `/occasions/client-gifting`, `/occasions/festive-gifting`, `/occasions/events-conferences`, `/occasions/milestones-recognition`, `/occasions/dealer-partner-gifting`, `/occasions/weddings-celebrations`, `/occasions/cx-gifting`, `/occasions/onboarding-kits`, `/collections/gourmet-food`, `/collections/beverages`, `/collections/decor-spiritual`, `/collections/wellness-lifestyle`, `/collections/infinity-beyond`, `/collections/3d-miniatures`, `/collections/office-travel-bags`, `/collections/electronics-audio`, `/collections/stationery-desk`, `/collections/corporate-apparel`, `/collections/awards-recognition`

### 7.2 Page files and internal Next APIs

### frontend_appview

| File-system route | Type | File |
| --- | --- | --- |
| /account | page | frontend_appview/src/app/account/page.tsx |
| /api/admin/auth | API | frontend_appview/src/app/api/admin/auth/route.ts |
| /api/admin/data | API | frontend_appview/src/app/api/admin/data/route.ts |
| /api/admin/export | API | frontend_appview/src/app/api/admin/export/route.ts |
| /api/geo/detect | API | frontend_appview/src/app/api/geo/detect/route.ts |
| /api/send-inquiry | API | frontend_appview/src/app/api/send-inquiry/route.ts |
| /api/telemetry/collect | API | frontend_appview/src/app/api/telemetry/collect/route.ts |
| /cart | page | frontend_appview/src/app/cart/page.tsx |
| /checkout | page | frontend_appview/src/app/checkout/page.tsx |
| /collections/[category] | page | frontend_appview/src/app/collections/[category]/page.tsx |
| /collections | page | frontend_appview/src/app/collections/page.tsx |
| /contact | page | frontend_appview/src/app/contact/page.tsx |
| /corporate | page | frontend_appview/src/app/corporate/page.tsx |
| /customize | page | frontend_appview/src/app/customize/page.tsx |
| /employee-gifting | page | frontend_appview/src/app/employee-gifting/page.tsx |
| /gift-boxing/[type] | page | frontend_appview/src/app/gift-boxing/[type]/page.tsx |
| /gift-boxing | page | frontend_appview/src/app/gift-boxing/page.tsx |
| /gourmet-gifts/[slug] | page | frontend_appview/src/app/gourmet-gifts/[slug]/page.tsx |
| /gourmet-gifts | page | frontend_appview/src/app/gourmet-gifts/page.tsx |
| /gourmet | page | frontend_appview/src/app/gourmet/page.tsx |
| /house-of-satra | page | frontend_appview/src/app/house-of-satra/page.tsx |
| /inquire | page | frontend_appview/src/app/inquire/page.tsx |
| /milestones-recognition | page | frontend_appview/src/app/milestones-recognition/page.tsx |
| /occasions/[slug] | page | frontend_appview/src/app/occasions/[slug]/page.tsx |
| /occasions | page | frontend_appview/src/app/occasions/page.tsx |
| /offline | page | frontend_appview/src/app/offline/page.tsx |
| / | page | frontend_appview/src/app/page.tsx |
| /privacy | page | frontend_appview/src/app/privacy/page.tsx |
| /story | page | frontend_appview/src/app/story/page.tsx |
| /studio-admin | page | frontend_appview/src/app/studio-admin/page.tsx |
| /test-layout | page | frontend_appview/src/app/test-layout/page.tsx |

### frontend_responsive

| File-system route | Type | File |
| --- | --- | --- |
| / | page | frontend_responsive/src/app/page.tsx |

## 8. Backend, state, storage and integrations

- Express feature namespaces: auth, users, products, categories, gift-boxing, cart, orders, reviews, coupons, upload, admin; health endpoints also mounted globally and under `/api/v1`.
- Mongoose models: user/auth, product, category, order, coupon and review. Redis supports session/cart-related services, queues, rate-limit/idempotency logic and Socket.IO scaling infrastructure.
- Stripe backend utility and order webhook exist; webhook uses raw JSON body before normal express.json parser. Checkout page is currently disabled in frontend whitelist; payment code presence does not prove working live checkout.
- Cloudinary upload/backend utility and frontend image loader exist. Loader generates f_auto/q_auto for bare IDs, but returns absolute URLs and `/` local paths unchanged.
- TanStack Query: staleTime5min, gcTime24h, localStorage persistence. Zustand stores cart/inquiry-modal state; idb-keyval supplies IndexedDB helpers for cart logic.
- Axios uses NEXT_PUBLIC_API_BASE_URL or `/api/v1`, JSON headers and credentials. Next config rewrites `/api/v1/*` to localhost:5001. A separate BACKEND_BASE_URL config exists; rewrite destination itself is hardcoded.
- Inquiry endpoint: Nodemailer SMTP email with HTML template; records inquiry into encrypted file vault. SMTP/environment setup is required; delivery was not tested.
- Geo / telemetry: UAParser, client telemetry hook, geo resolution, local encrypted vault, admin export via XLSX. Main shell invokes useSilentTelemetry. Microsoft Clarity loads afterInteractive from root layout.
- Security mechanisms found: Helmet, cookie parser, Mongo sanitization, JWT/bcrypt, validation, Redis-backed limiter, admin cookie verification, Node crypto encrypted vault. These describe code, not a completed security audit.
- Manifest and offline UI exist; no service-worker registration was found in app source. Full offline application capability is not established by manifest alone.

Sources: backend/src/app.js, backend/src/shared, frontend_appview/src/shared, src/hooks, src/lib, src/app/api.

## 9. Images, fonts and formats

Static formats are listed below from disk, including duplicate files in different folders. Public asset presence does not imply every file is referenced. Stored file size is not final transfer size; Next image optimization may generate different output dimensions/formats. Next main app allows AVIF/WebP output, qualities75/80/90, minimumCacheTTL2592000seconds (30days), Cloudinary and Unsplash remote images. Raw `<img>` tags coexist with next/image and bypass that optimizer.

### 9.1 Asset counts and disk sizes by location/format

| Location | Format | Count | Total MiB |
| --- | --- | --- | --- |
| fonts | .otf | 9 | 0.75 |
| fonts | .ttf | 7 | 0.48 |
| fonts | .woff | 3 | 0.12 |
| fonts | .woff2 | 2 | 0.06 |
| frontend_appview/icons | .png | 3 | 0.06 |
| frontend_appview/public | .ico | 1 | 0.00 |
| frontend_appview/public | .jpeg | 30 | 4.74 |
| frontend_appview/public | .jpg | 208 | 31.73 |
| frontend_appview/public | .otf | 5 | 0.46 |
| frontend_appview/public | .png | 126 | 58.54 |
| frontend_appview/public | .svg | 7 | 1.32 |
| frontend_appview/public | .webp | 2 | 0.07 |
| frontend_appview/public | .woff | 1 | 0.04 |
| frontend_appview/public | .woff2 | 1 | 0.03 |
| frontend_responsive/public | .jpeg | 29 | 5.16 |
| frontend_responsive/public | .jpg | 4 | 0.72 |
| frontend_responsive/public | .otf | 13 | 1.11 |
| frontend_responsive/public | .png | 12 | 21.02 |
| frontend_responsive/public | .svg | 5 | 0.00 |
| frontend_responsive/public | .ttf | 7 | 0.48 |
| frontend_responsive/public | .woff | 4 | 0.16 |
| frontend_responsive/public | .woff2 | 3 | 0.09 |
| images | .jpeg | 29 | 5.16 |
| images | .jpg | 4 | 0.72 |
| images | .png | 40 | 75.92 |

### 9.2 Largest 20 stored assets

| Asset | Pixel dimensions | MiB |
| --- | --- | --- |
| frontend_responsive/public/images/pics/thekuap.png | 941 × 1672 | 2.91 |
| images/pics/thekua.png | 1536 × 1024 | 2.87 |
| images/small_anipics/framee.png | 1672 × 941 | 2.53 |
| images/Category_image/Classics/ChatGPT Image Jul 25, 2026, 04_01_49 PM.png | 1448 × 1086 | 2.44 |
| images/brand/ChatGPT Image Sep 1, 2026, 10_41_09 AM (4).png | 1254 × 1254 | 2.42 |
| images/Category_image/Royale_tin_tin/newtin1.png | 1448 × 1086 | 2.40 |
| images/Category_image/Classics/ChatGPT Image Jul 25, 2026, 04_01_34 PM.png | 1448 × 1086 | 2.29 |
| images/ecom_final_boxes/7e0de300-4b01-40be-b9e3-d91b4af2ad3e.png | 1254 × 1254 | 2.27 |
| images/brand/ChatGPT Image Sep 1, 2026, 10_40_59 AM (3).png | 1254 × 1254 | 2.23 |
| images/brand/ChatGPT Image Sep 1, 2026, 10_41_19 AM (7).png | 1254 × 1254 | 2.21 |
| images/Category_image/Classics/thumb.png | 1058 × 1487 | 2.21 |
| frontend_responsive/public/images/Category_image/Classics/thumb.png | 1058 × 1487 | 2.21 |
| images/Category_image/Royale_tin_tin/tinnew1.png | 1448 × 1086 | 2.21 |
| images/brand/ChatGPT Image Sep 1, 2026, 10_40_21 AM (1).png | 1254 × 1254 | 2.17 |
| images/pics/festivecard.png | 1086 × 1448 | 2.15 |
| frontend_appview/public/cards/festivecard.png | 1086 × 1448 | 2.15 |
| frontend_appview/public/images/pics/festivecard.png | 1086 × 1448 | 2.15 |
| images/Product_images/CRAFTED IN-HOUSE/keepsake_small.png | 1535 × 1025 | 2.14 |
| frontend_responsive/public/images/Product_images/CRAFTED IN-HOUSE/keepsake_small.png | 1535 × 1025 | 2.14 |
| images/Category_image/Royale_tin_tin/ChatGPT Image Jul 25, 2026, 04_01_38 PM.png | 1448 × 1086 | 2.13 |

### 9.3 Local font file inventory (all copies)

| File | Format | KiB |
| --- | --- | --- |
| fonts/Avocalipss/OpenType-PS/Avocalipss-Italic.otf | .otf | 45.3 |
| fonts/Avocalipss/OpenType-PS/Avocalipss-Regular.otf | .otf | 43.1 |
| fonts/Avocalipss/OpenType-TT/Avocalipss-Italic.ttf | .ttf | 81.6 |
| fonts/Avocalipss/OpenType-TT/Avocalipss-Regular.ttf | .ttf | 79.6 |
| fonts/Avocalipss/Web-TT/Avocalipss-Italic.ttf | .ttf | 81.6 |
| fonts/Avocalipss/Web-TT/Avocalipss-Italic.woff | .woff | 40.7 |
| fonts/Avocalipss/Web-TT/Avocalipss-Italic.woff2 | .woff2 | 29.3 |
| fonts/Avocalipss/Web-TT/Avocalipss-Regular.ttf | .ttf | 103.6 |
| fonts/Avocalipss/Web-TT/Avocalipss-Regular.woff | .woff | 46.5 |
| fonts/Avocalipss/Web-TT/Avocalipss-Regular.woff2 | .woff2 | 32.8 |
| fonts/Dream Always Font/dreamalways-5153g.otf | .otf | 21.9 |
| fonts/Futuristic Font/Astro.ttf | .ttf | 32.4 |
| fonts/Pagio-Font/Pagio-BF6a47f35312389.woff | .woff | 36.7 |
| fonts/Pagio-Font/Pagio-BF6a47f3538375e.ttf | .ttf | 59.8 |
| fonts/Pagio-Font/Pagio-BF6a47f353d9af0.otf | .otf | 156.9 |
| fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Script-BF651410a9e87a1.otf | .otf | 133.2 |
| fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Script-Italic-BF651410a9e5d41.otf | .otf | 133.8 |
| fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Serif-BF651410a9b32c3.otf | .otf | 64.9 |
| fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Serif-Italic-BF651410a9c44ad.otf | .otf | 68.6 |
| fonts/enica/Enica Personal Use Only.ttf | .ttf | 54.4 |
| fonts/rosta.otf | .otf | 96.0 |
| frontend_appview/public/fonts/Avocalipss-Regular.woff2 | .woff2 | 32.8 |
| frontend_appview/public/fonts/DreamAlways.otf | .otf | 21.9 |
| frontend_appview/public/fonts/Pagio.otf | .otf | 156.9 |
| frontend_appview/public/fonts/Pagio.woff | .woff | 36.7 |
| frontend_appview/public/fonts/Rosta.otf | .otf | 96.0 |
| frontend_appview/public/fonts/Tropical-Qebalon.otf | .otf | 64.9 |
| frontend_appview/public/fonts/TropicalScript.otf | .otf | 133.2 |
| frontend_responsive/public/fonts/Avocalipss/OpenType-PS/Avocalipss-Italic.otf | .otf | 45.3 |
| frontend_responsive/public/fonts/Avocalipss/OpenType-PS/Avocalipss-Regular.otf | .otf | 43.1 |
| frontend_responsive/public/fonts/Avocalipss/OpenType-TT/Avocalipss-Italic.ttf | .ttf | 81.6 |
| frontend_responsive/public/fonts/Avocalipss/OpenType-TT/Avocalipss-Regular.ttf | .ttf | 79.6 |
| frontend_responsive/public/fonts/Avocalipss/Web-TT/Avocalipss-Italic.ttf | .ttf | 81.6 |
| frontend_responsive/public/fonts/Avocalipss/Web-TT/Avocalipss-Italic.woff | .woff | 40.7 |
| frontend_responsive/public/fonts/Avocalipss/Web-TT/Avocalipss-Italic.woff2 | .woff2 | 29.3 |
| frontend_responsive/public/fonts/Avocalipss/Web-TT/Avocalipss-Regular.ttf | .ttf | 103.6 |
| frontend_responsive/public/fonts/Avocalipss/Web-TT/Avocalipss-Regular.woff | .woff | 46.5 |
| frontend_responsive/public/fonts/Avocalipss/Web-TT/Avocalipss-Regular.woff2 | .woff2 | 32.8 |
| frontend_responsive/public/fonts/Avocalipss-Regular.woff2 | .woff2 | 32.8 |
| frontend_responsive/public/fonts/Dream Always Font/dreamalways-5153g.otf | .otf | 21.9 |
| frontend_responsive/public/fonts/DreamAlways.otf | .otf | 21.9 |
| frontend_responsive/public/fonts/Futuristic Font/Astro.ttf | .ttf | 32.4 |
| frontend_responsive/public/fonts/Pagio-Font/Pagio-BF6a47f35312389.woff | .woff | 36.7 |
| frontend_responsive/public/fonts/Pagio-Font/Pagio-BF6a47f3538375e.ttf | .ttf | 59.8 |
| frontend_responsive/public/fonts/Pagio-Font/Pagio-BF6a47f353d9af0.otf | .otf | 156.9 |
| frontend_responsive/public/fonts/Pagio.otf | .otf | 156.9 |
| frontend_responsive/public/fonts/Pagio.woff | .woff | 36.7 |
| frontend_responsive/public/fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Script-BF651410a9e87a1.otf | .otf | 133.2 |
| frontend_responsive/public/fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Script-Italic-BF651410a9e5d41.otf | .otf | 133.8 |
| frontend_responsive/public/fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Serif-BF651410a9b32c3.otf | .otf | 64.9 |
| frontend_responsive/public/fonts/Tropical Qebalon Font Duo/Tropical-Qebalon-Serif-Italic-BF651410a9c44ad.otf | .otf | 68.6 |
| frontend_responsive/public/fonts/Tropical-Qebalon.otf | .otf | 64.9 |
| frontend_responsive/public/fonts/TropicalScript.otf | .otf | 133.2 |
| frontend_responsive/public/fonts/enica/Enica Personal Use Only.ttf | .ttf | 54.4 |
| frontend_responsive/public/fonts/rosta.otf | .otf | 96.0 |

## 10. Configuration and verification notes

- npm package-lock.json exists for all three packages; each has its own scripts/config. Frontends use ESLint9 and eslint-config-next; backend declares Jest29, Supertest7, mongodb-memory-server9 and ioredis-mock8. Test sources exist for auth/cart/health/order.
- Main Next config has `typescript.ignoreBuildErrors: true`; a successful production build alone would not establish TypeScript correctness.
- Source CORS callback currently allows even origins outside the named list. Source includes fallback admin/encryption configuration; values intentionally not reproduced here.
- Project extraction was read-only apart from these docs. No application change, deployment, dependency installation or live API call was performed. No tests/build were run because this deliverable is documentation.
- No hosting platform is proven by source alone; serverless environment branches in code are not deployment evidence.

## 11. Full extracted design reference

Following appendices are literal source inventories, including disabled pages, templates and reusable components. They are not a computed-style/browser screenshot audit. Color occurrence counts refer to source literals; they do not measure visible area. Arbitrary font sizes retain expressions such as clamp(). Tailwind utility inventory includes layout, size, spacing, radius, shadows, borders and animation utilities; dynamic expressions can need runtime resolution.

### 11.1 Complete hex and functional color inventory

### frontend_appview colors

| Literal | Occurrences | Example source |
| --- | --- | --- |
| #1A1A18 | 357 | frontend_appview/src/app/page.tsx |
| #FAF8F5 | 100 | frontend_appview/src/app/layout.tsx |
| #2C3228 | 92 | frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx |
| #7A8B6F | 89 | frontend_appview/src/app/globals.css |
| #FAF7F2 | 65 | frontend_appview/src/components/ui/animated-testimonials.tsx |
| #D4AF37 | 59 | frontend_appview/src/app/globals.css |
| #78746D | 57 | frontend_appview/src/app/globals.css |
| #DFC299 | 52 | frontend_appview/src/app/page.tsx |
| #E8DFC8 | 49 | frontend_appview/src/components/ui/animated-testimonials.tsx |
| #EAE5DC | 41 | frontend_appview/src/components/brand/TrustedBusinessesMarquee.tsx |
| #E4E0D7 | 41 | frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx |
| #A6BD93 | 39 | frontend_appview/src/features/gourmet/EditionDetailModal.tsx |
| #3C0B1E | 36 | frontend_appview/src/app/page.tsx |
| #6E6259 | 33 | frontend_appview/src/shared/ImageWithShimmer.tsx |
| #2A231F | 33 | frontend_appview/src/components/ui/animated-testimonials.tsx |
| #8A8680 | 30 | frontend_appview/src/app/globals.css |
| #FFFFFF | 27 | frontend_appview/src/app/page.tsx |
| #D0CBC0 | 27 | frontend_appview/src/components/modals/InquiryModal.tsx |
| #B5AFA6 | 25 | frontend_appview/src/app/globals.css |
| #736E66 | 25 | frontend_appview/src/app/studio-admin/page.tsx |
| #8C867D | 24 | frontend_appview/src/components/brand/LocationPromptBar.tsx |
| #8C6228 | 23 | frontend_appview/src/components/modals/InquiryModal.tsx |
| #9E7B35 | 23 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #E0DDD6 | 22 | frontend_appview/src/app/globals.css |
| #BFA267 | 20 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #EADBCA | 19 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #F6F4EF | 18 | frontend_appview/src/app/globals.css |
| #8C7449 | 17 | frontend_appview/src/components/modals/InquiryModal.tsx |
| #DDD8CE | 15 | frontend_appview/src/app/globals.css |
| #7A8275 | 15 | frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx |
| #C5A880 | 14 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #9E9A92 | 14 | frontend_appview/src/features/inquiry/CuratedInquirySection.tsx |
| #5A564F | 14 | frontend_appview/src/app/test-layout/page.tsx |
| #ECE7DE | 14 | frontend_appview/src/app/test-layout/page.tsx |
| #7A1C29 | 13 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #6B427B | 13 | frontend_appview/src/features/shell/BottomNav.tsx |
| #4F1028 | 11 | frontend_appview/src/app/page.tsx |
| #1A1A1A | 11 | frontend_appview/src/features/shell/OnlineToast.tsx |
| #8C847B | 10 | frontend_appview/src/app/not-found.tsx |
| #E8E2D8 | 10 | frontend_appview/src/components/OccasionGiftingCarousel.tsx |
| #F0ECE1 | 10 | frontend_appview/src/components/modals/InquiryModal.tsx |
| #52604D | 10 | frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx |
| #DDD7CD | 10 | frontend_appview/src/app/studio-admin/page.tsx |
| #E5E0D8 | 9 | frontend_appview/src/features/brand/FaqSection.tsx |
| rgba(0,0,0,0.06) | 8 | frontend_appview/src/app/globals.css |
| #EBF3E8 | 8 | frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx |
| #3D5244 | 8 | frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx |
| #EFECE6 | 8 | frontend_appview/src/features/inquiry/CuratedInquirySection.tsx |
| #0F5132 | 8 | frontend_appview/src/features/customizer/GiftBoxCustomizerModal.tsx |
| #9A2C2C | 8 | frontend_appview/src/features/cart/CurationDrawer.tsx |
| #FAF8FC | 7 | frontend_appview/src/features/shell/BottomNav.tsx |
| #6E1A24 | 7 | frontend_appview/src/features/customizer/GiftBoxCustomizerModal.tsx |
| rgba(0,0,0,0.02) | 7 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #59554E | 7 | frontend_appview/src/app/studio-admin/page.tsx |
| #6B001A | 7 | frontend_appview/src/app/studio-admin/page.tsx |
| #EDE6DC | 6 | frontend_appview/src/app/page.tsx |
| #38332B | 6 | frontend_appview/src/components/brand/LocationPromptBar.tsx |
| #E8E4DC | 6 | frontend_appview/src/features/inquiry/StickyInquiryDrawer.tsx |
| #E6D9FF | 6 | frontend_appview/src/features/shell/BottomNav.tsx |
| #3A2342 | 6 | frontend_appview/src/features/shell/BottomNav.tsx |
| #F5F2EC | 5 | frontend_appview/src/shared/ImageWithShimmer.tsx |
| #ECE8DF | 5 | frontend_appview/src/components/Scrapbook.tsx |
| #FAF6F0 | 5 | frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx |
| #2C1820 | 5 | frontend_appview/src/features/ecommerce/CustomGiftBoxesSection.tsx |
| #451B27 | 5 | frontend_appview/src/features/inquiry/CuratedInquirySection.tsx |
| #5C564E | 5 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #F8F6F2 | 5 | frontend_appview/src/app/studio-admin/page.tsx |
| #8A857C | 5 | frontend_appview/src/app/studio-admin/page.tsx |
| #6B655D | 5 | frontend_appview/src/app/test-layout/page.tsx |
| #6E6B65 | 4 | frontend_appview/src/app/globals.css |
| #D9D5CC | 4 | frontend_appview/src/app/globals.css |
| #D5CFBF | 4 | frontend_appview/src/app/not-found.tsx |
| #D6C2A9 | 4 | frontend_appview/src/data/hampersData.ts |
| #C7C3B7 | 4 | frontend_appview/src/data/hampersData.ts |
| #D2C8B8 | 4 | frontend_appview/src/data/hampersData.ts |
| #C5CCC5 | 4 | frontend_appview/src/data/hampersData.ts |
| #D7CEC2 | 4 | frontend_appview/src/data/hampersData.ts |
| #A09A90 | 4 | frontend_appview/src/components/modals/InquiryModal.tsx |
| rgba(0,0,0,0.12) | 4 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #2D2A26 | 4 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #7A7268 | 4 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #000000 | 4 | frontend_appview/src/features/shell/Footer.tsx |
| #4A4742 | 4 | frontend_appview/src/features/shell/Footer.tsx |
| #34473A | 4 | frontend_appview/src/features/brand/WhyChooseSection.tsx |
| #E3DCCF | 4 | frontend_appview/src/app/studio-admin/page.tsx |
| #242321 | 3 | frontend_appview/src/app/globals.css |
| #FCFBF8 | 3 | frontend_appview/src/components/Scrapbook.tsx |
| #E0D8C8 | 3 | frontend_appview/src/components/Scrapbook.tsx |
| rgba(0,0,0,0.05) | 3 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #171A15 | 3 | frontend_appview/src/features/gourmet/EditionDetailModal.tsx |
| #FAF3E6 | 3 | frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx |
| #DDD5C7 | 3 | frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx |
| rgba(0,0,0,0.04) | 3 | frontend_appview/src/features/inquiry/CuratedInquirySection.tsx |
| #EFEAE2 | 3 | frontend_appview/src/features/brand/WhyChooseSection.tsx |
| #5C141F | 3 | frontend_appview/src/features/hero/ExperienceHighlightsSection.tsx |
| #6B655E | 3 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #3A3833 | 3 | frontend_appview/src/app/contact/ContactClientView.tsx |
| #E8E4DB | 3 | frontend_appview/src/app/house-of-satra/page.tsx |
| #F2EDE4 | 3 | frontend_appview/src/app/test-layout/page.tsx |
| #141413 | 2 | frontend_appview/src/app/globals.css |
| #EFEDE7 | 2 | frontend_appview/src/app/globals.css |
| rgba(36, 35, 33, 0.06) | 2 | frontend_appview/src/app/globals.css |
| #F4EFE6 | 2 | frontend_appview/src/shared/ImageWithShimmer.tsx |
| rgba(0,0,0,0.85) | 2 | frontend_appview/src/components/OccasionGiftingCarousel.tsx |
| #5A554A | 2 | frontend_appview/src/components/Scrapbook.tsx |
| #2E2B26 | 2 | frontend_appview/src/components/Scrapbook.tsx |
| #8A8478 | 2 | frontend_appview/src/components/Scrapbook.tsx |
| #2C2924 | 2 | frontend_appview/src/components/Scrapbook.tsx |
| #5A554D | 2 | frontend_appview/src/components/brand/TrustedBusinessesMarquee.tsx |
| rgba(0,0,0,0.22) | 2 | frontend_appview/src/components/modals/InquiryModal.tsx |
| rgba(0,0,0,0.1) | 2 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #FBF7F0 | 2 | frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx |
| #434B3E | 2 | frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx |
| #7A6585 | 2 | frontend_appview/src/features/shell/BottomNav.tsx |
| #3E8077 | 2 | frontend_appview/src/features/shell/MobileShell.tsx |
| #E07A5F | 2 | frontend_appview/src/features/shell/CartIcon.tsx |
| #A67C46 | 2 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #3B4C5A | 2 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #5C455B | 2 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #9B5368 | 2 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #2C4C5E | 2 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #6B665E | 2 | frontend_appview/src/features/brand/WhyChooseSection.tsx |
| #F2ECE1 | 2 | frontend_appview/src/features/search/SearchModal.tsx |
| rgba(0,0,0,0.25) | 2 | frontend_appview/src/features/cart/CurationDrawer.tsx |
| #F4D9A6 | 2 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #FFB5A7 | 2 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #B7DCD6 | 2 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #D6E4FA | 2 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #151912 | 2 | frontend_appview/src/app/gourmet/page.tsx |
| #6B855A | 2 | frontend_appview/src/app/inquire/page.tsx |
| #EFECE5 | 2 | frontend_appview/src/app/studio-admin/page.tsx |
| #1E6B39 | 2 | frontend_appview/src/app/studio-admin/page.tsx |
| #EAE0D1 | 2 | frontend_appview/src/app/studio-admin/page.tsx |
| #ECE8E1 | 2 | frontend_appview/src/app/house-of-satra/page.tsx |
| #333 | 2 | frontend_appview/src/app/house-of-satra/page.tsx |
| rgba(0,0,0,0.09) | 2 | frontend_appview/src/app/occasions/OccasionsIndexView.tsx |
| rgba(60,11,30,0.4) | 1 | frontend_appview/src/app/page.tsx |
| #54122B | 1 | frontend_appview/src/app/page.tsx |
| rgba(0,0,0,0.5) | 1 | frontend_appview/src/app/page.tsx |
| rgba(243, 239, 227, 0.78) | 1 | frontend_appview/src/app/globals.css |
| rgba(255,255,255,0.4) | 1 | frontend_appview/src/app/globals.css |
| rgba(160, 150, 135, 0.45) | 1 | frontend_appview/src/app/globals.css |
| #F8F6F0 | 1 | frontend_appview/src/app/globals.css |
| #243325 | 1 | frontend_appview/src/app/globals.css |
| #2C2B28 | 1 | frontend_appview/src/app/globals.css |
| #FDFCFA | 1 | frontend_appview/src/app/globals.css |
| #F1F0EB | 1 | frontend_appview/src/app/globals.css |
| #E8E5DE | 1 | frontend_appview/src/app/globals.css |
| #C7C1B7 | 1 | frontend_appview/src/app/globals.css |
| #A9A39A | 1 | frontend_appview/src/app/globals.css |
| #77736C | 1 | frontend_appview/src/app/globals.css |
| #45433F | 1 | frontend_appview/src/app/globals.css |
| #11110F | 1 | frontend_appview/src/app/globals.css |
| rgba(36, 35, 33, 0.07) | 1 | frontend_appview/src/app/globals.css |
| rgba(36, 35, 33, 0.03) | 1 | frontend_appview/src/app/globals.css |
| rgba(255, 255, 255, 0.7) | 1 | frontend_appview/src/app/globals.css |
| rgba(36, 35, 33, 0.04) | 1 | frontend_appview/src/app/globals.css |
| rgba(122, 139, 111, 0.15) | 1 | frontend_appview/src/app/globals.css |
| rgba(0,0,0,0.9) | 1 | frontend_appview/src/components/OccasionGiftingCarousel.tsx |
| #A39E93 | 1 | frontend_appview/src/components/OccasionGiftingCarousel.tsx |
| rgba(0, 0, 0, 0.35) | 1 | frontend_appview/src/components/ImageTypography.css |
| rgba(0, 0, 0, 0.65) | 1 | frontend_appview/src/components/ImageTypography.css |
| rgba(0, 0, 0, 0.6) | 1 | frontend_appview/src/components/ImageTypography.css |
| rgba(0, 0, 0, 0.45) | 1 | frontend_appview/src/components/ImageTypography.css |
| rgba(0, 0, 0, 0.5) | 1 | frontend_appview/src/components/ImageTypography.css |
| rgba(255, 255, 255, 0.1) | 1 | frontend_appview/src/components/ImageTypography.css |
| rgba(255, 255, 255, 0.4) | 1 | frontend_appview/src/components/ImageTypography.css |
| #F3EFE6 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #DFD9CE | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #E5E0D4 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #FAF6EC | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #DFD7C4 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #3D3A34 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #A39C90 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #666055 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #FAF8F2 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #E3DDCF | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #8C8375 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #FCFAF5 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #E8E2D4 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #5C564C | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #FAF4E6 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #2B2823 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #D6CDBC | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #6E675B | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #948C7E | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #E3DCCE | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #756E62 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #DFD8CA | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #EDE7D9 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #3D3830 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #8C8476 | 1 | frontend_appview/src/components/Scrapbook.tsx |
| #F4A896 | 1 | frontend_appview/src/data/hampersData.ts |
| #FADCD5 | 1 | frontend_appview/src/data/hampersData.ts |
| #98C1A9 | 1 | frontend_appview/src/data/hampersData.ts |
| #D5E8DD | 1 | frontend_appview/src/data/hampersData.ts |
| #F3E7D5 | 1 | frontend_appview/src/data/hampersData.ts |
| #E3A8BC | 1 | frontend_appview/src/data/hampersData.ts |
| #F5DCDE | 1 | frontend_appview/src/data/hampersData.ts |
| #F6D07A | 1 | frontend_appview/src/data/hampersData.ts |
| #FCF0CE | 1 | frontend_appview/src/data/hampersData.ts |
| #CFAFA3 | 1 | frontend_appview/src/data/hampersData.ts |
| #EFE2DC | 1 | frontend_appview/src/data/hampersData.ts |
| #EAE7E0 | 1 | frontend_appview/src/components/editorial/EditorialCollage.css |
| #DEDCD5 | 1 | frontend_appview/src/components/editorial/EditorialCollage.css |
| #DEDDD8 | 1 | frontend_appview/src/components/editorial/EditorialCollage.css |
| rgba(10,10,9,0.7) | 1 | frontend_appview/src/components/editorial/HouseOfSatraIntro.tsx |
| rgba(255,255,255,0.18) | 1 | frontend_appview/src/components/editorial/HouseOfSatraIntro.tsx |
| #C9AC83 | 1 | frontend_appview/src/components/brand/LocationPromptBar.tsx |
| #141311 | 1 | frontend_appview/src/components/brand/LocationPromptBar.tsx |
| #C5A265 | 1 | frontend_appview/src/components/brand/FloatingStickyInquireButton.tsx |
| rgba(60,11,30,0.35) | 1 | frontend_appview/src/components/brand/FloatingStickyInquireButton.tsx |
| rgba(60,11,30,0.55) | 1 | frontend_appview/src/components/brand/FloatingStickyInquireButton.tsx |
| #FFF3D6 | 1 | frontend_appview/src/components/effects/GoldPopperSprinkle.tsx |
| #8BA278 | 1 | frontend_appview/src/features/gourmet/EditionDetailModal.tsx |
| #F3EFEA | 1 | frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx |
| rgba(60,11,30,0.45) | 1 | frontend_appview/src/features/inquiry/StickyInquiryDrawer.tsx |
| #B8860B | 1 | frontend_appview/src/features/shell/OnlineToast.tsx |
| rgba(212, 175, 55, 0.12) | 1 | frontend_appview/src/features/shell/Footer.tsx |
| rgba(181, 175, 166, 0.04) | 1 | frontend_appview/src/features/shell/Footer.tsx |
| #5C5851 | 1 | frontend_appview/src/features/shell/Footer.tsx |
| rgba(246, 244, 239, 0.96) | 1 | frontend_appview/src/features/shell/ResponsiveShell.tsx |
| rgba(0,0,0,0.03) | 1 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| rgba(0,0,0,0.07) | 1 | frontend_appview/src/features/brand/IndustriesSection.tsx |
| #D1CCC2 | 1 | frontend_appview/src/features/brand/FaqSection.tsx |
| #6E6960 | 1 | frontend_appview/src/features/brand/FaqSection.tsx |
| #5C574F | 1 | frontend_appview/src/features/brand/FaqSection.tsx |
| #A6B2A3 | 1 | frontend_appview/src/features/brand/GiftingProcessSection.tsx |
| #FFF6D6 | 1 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #D98A2B | 1 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #3B6DB0 | 1 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #FFFCF5 | 1 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #2A1E1A | 1 | frontend_appview/src/features/hero/FeatureBadges.tsx |
| #FDFCF9 | 1 | frontend_appview/src/features/hero/OtherProductsSection.tsx |
| #F0EBE1 | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #524E48 | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #C8B28E | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| rgba(0,0,0,0.055) | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #EFE9DF | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #E5DDCF | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #332E27 | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #DFD7CA | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #8E7252 | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #785E40 | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| rgba(142,114,82,0.3) | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| rgba(142,114,82,0.45) | 1 | frontend_appview/src/features/occasions/OccasionPageTemplate.tsx |
| #0E110C | 1 | frontend_appview/src/app/gourmet/page.tsx |
| #A6A095 | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #E5DFD4 | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #9E988F | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #D6CEC1 | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #E7F6EC | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #D4EEDC | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #BDE3CA | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #FAF4EB | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #FDF0ED | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #A62B17 | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #F5C7BE | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #FBF6EE | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #8C2332 | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #D9C4A7 | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #D6CEBF | 1 | frontend_appview/src/app/studio-admin/page.tsx |
| #EBE7DF | 1 | frontend_appview/src/app/house-of-satra/page.tsx |
| #EAE6DE | 1 | frontend_appview/src/app/house-of-satra/page.tsx |
| rgba(0,0,0,0.08) | 1 | frontend_appview/src/app/test-layout/page.tsx |
| #E0D9CE | 1 | frontend_appview/src/app/collections/CollectionsClientView.tsx |
| #F8F5EE | 1 | frontend_appview/src/app/gourmet-gifts/[slug]/page.tsx |
| #C5BEB3 | 1 | frontend_appview/src/app/gourmet-gifts/[slug]/page.tsx |
| #E0D9CC | 1 | frontend_appview/src/app/gourmet-gifts/[slug]/page.tsx |
| #FFFFFFFF | 1 | frontend_appview/src/app/api/send-inquiry/route.ts |

### frontend_responsive colors

| Literal | Occurrences | Example source |
| --- | --- | --- |
| #3A2342 | 20 | frontend_responsive/src/app/layout.tsx |
| #6B427B | 17 | frontend_responsive/src/app/layout.tsx |
| #E6D9FF | 12 | frontend_responsive/src/app/globals.css |
| #FAF8FC | 8 | frontend_responsive/src/app/layout.tsx |
| #FFFFFF | 5 | frontend_responsive/src/app/globals.css |
| #7A6585 | 5 | frontend_responsive/src/app/globals.css |
| #FFF2B3 | 3 | frontend_responsive/src/app/globals.css |
| #FADADD | 1 | frontend_responsive/src/app/globals.css |
| #DDEEFF | 1 | frontend_responsive/src/app/globals.css |
| #DFF5EA | 1 | frontend_responsive/src/app/globals.css |
| #8E58A0 | 1 | frontend_responsive/src/app/globals.css |
| #B882CA | 1 | frontend_responsive/src/app/globals.css |
| rgba(107, 66, 123, 0.3) | 1 | frontend_responsive/src/app/globals.css |
| #3E8077 | 1 | frontend_responsive/src/components/ResponsiveNavbar.tsx |

### 11.2 Typography and layout utility inventory per source file

### frontend_appview

| Source | Extracted utilities / CSS typography |
| --- | --- |
| frontend_appview/src/app/page.tsx | border-[#54122b]; border-white/60; duration-300; font-bold; font-light; font-mono; font-normal; font-sans; font-serif; gap-3; h-screen; hover:border-white; leading-[1.08]; leading-[1.12]; leading-relaxed; leading-snug; lg:px-12; lg:px-16; lg:text-6xl; lg:text-[24px]; lg:text-[68px]; max-w-2xl; max-w-4xl; max-w-[1440px]; max-w-[760px]; max-w-lg; mb-2.5; md:pb-12; md:pt-14; md:text-2xl; md:text-5xl; md:text-6xl; md:text-lg; mx-auto; pb-7; pt-3; pt-6; px-5; px-6; py-3; rounded-lg; shadow-[0_-20px_60px_rgba(0,0,0,0.5)]; shadow-[0_8px_20px_rgba(60,11,30,0.4)]; sm:gap-4; sm:leading-[1.04]; sm:pb-10; sm:pt-10; sm:px-10; sm:px-7; sm:px-8; sm:py-3.5; sm:text-2xl; sm:text-4xl; sm:text-5xl; sm:text-[11.5px]; sm:text-base; sm:text-left; sm:w-auto; text-2xl; text-[10.5px]; text-[31px]; text-base; text-center; text-sm; text-xs; tracking-[-0.02em]; tracking-[0.16em]; tracking-[0.18em]; tracking-[0.32em]; tracking-tight; w-full; xs:text-[35px]; z-0; z-10 |
| frontend_appview/src/app/globals.css | font-display; font-face; font-family; font-handwriting; font-script; font-size; font-style; font-weight; text-transform; font-family: 'DreamAlways'; font-family: 'DreamAlways', 'TropicalScript', cursive; font-family: 'Pagio'; font-family: 'TropicalScript'; font-family: 'TropicalScript', 'DreamAlways', cursive; font-family: var(--font-cormorant), Georgia, serif; font-family: var(--font-geist), system-ui, sans-serif; font-family: var(--font-jakarta), system-ui, -apple-system, sans-serif; font-family: var(--font-jakarta), system-ui, -apple-system, sans-serif !important; font-family: var(--font-jakarta), system-ui, sans-serif; font-size: 10px; font-size: 11px; font-size: 15px; font-size: clamp(18px, 2vw, 24px); font-size: clamp(22px, 2.5vw, 36px); font-size: clamp(32px, 4.5vw, 64px); font-size: clamp(48px, 8vw, 120px); font-weight: 300; font-weight: 400; font-weight: 500; font-weight: 600; font-weight: normal; letter-spacing: -0.01em; letter-spacing: -0.025em; letter-spacing: -0.02em; letter-spacing: -0.03em; letter-spacing: 0; letter-spacing: 0.01em; letter-spacing: 0.08em; letter-spacing: 0.12em; letter-spacing: 0.15em; line-height: 0.95; line-height: 1; line-height: 1.08; line-height: 1.1; line-height: 1.2; line-height: 1.3; line-height: 1.4; line-height: 1.6; line-height: 1.7 |
| frontend_appview/src/app/not-found.tsx | border-[#D5CFBF]; duration-300; font-bold; font-light; font-sans; gap-2; gap-3; h-4; hover:border-[#1A1A18]; leading-relaxed; leading-tight; max-w-md; min-h-screen; pt-4; px-4; px-6; py-20; py-3.5; rounded-lg; shadow-md; sm:text-5xl; sm:text-sm; text-4xl; text-center; text-xs; tracking-[-0.02em]; tracking-[0.16em]; tracking-[0.28em]; w-4; w-full |
| frontend_appview/src/utils/format.tsx | font-normal; mt-0.5; text-[0.95em] |
| frontend_appview/src/shared/ImageWithShimmer.tsx | duration-300; font-medium; h-8; h-full; mb-1; p-3; text-[11px]; text-center; tracking-tight; w-8; w-full; z-10 |
| frontend_appview/src/components/OccasionGiftingCarousel.tsx | aspect-[3/4.2]; border-[#E8E2D8]; duration-300; duration-400; duration-500; duration-700; ease-out; font-bold; font-light; font-mono; font-normal; font-sans; font-semibold; gap-1.5; gap-2; gap-3.5; h-11; h-2; h-3.5; h-5; leading-[1.08]; leading-normal; leading-relaxed; leading-tight; lg:px-12; lg:w-[calc((100%-4*1rem)/5.35)]; max-w-3xl; max-w-4xl; max-w-[1580px]; max-w-[215px]; mb-8; md:mb-12; md:pt-14; md:px-8; md:text-5xl; md:text-[19px]; md:text-sm; md:w-[280px]; mt-auto; mx-auto; p-5; pb-1; pb-4; pb-[3px]; pt-1; pt-2; pt-6; px-2; px-4; rounded-2xl; rounded-full; shadow-lg; sm:gap-4; sm:leading-[1.04]; sm:mb-10; sm:p-6; sm:pt-10; sm:px-0; sm:px-6; sm:text-4xl; sm:text-[11px]; sm:text-[12.5px]; sm:text-[12px]; sm:text-lg; sm:w-[270px]; text-2xl; text-[10.5px]; text-[11px]; text-base; text-center; text-xs; tracking-[-0.02em]; tracking-[0.22em]; tracking-[0.2em]; tracking-wider; w-11; w-2; w-3.5; w-5; w-7; w-[240px]; w-full; z-0; z-10; z-20 |
| frontend_appview/src/components/ImageTypography.css | ease-in-out; font-family; font-size; font-weight; text-align; text-orientation; text-shadow; text-transform; z-index; font-family: 'Helvetica Neue', Helvetica, Arial, -apple-system, sans-serif; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-family: var(--font-cormorant), Georgia, 'Times New Roman', serif; font-size: 10px; font-size: 11px; font-size: 18px; font-size: 26px; font-size: 8.5px; font-size: clamp(110px, 12vw, 210px); font-size: clamp(14px, 3.8vw, 17px); font-size: clamp(20px, 2.4vw, 26px); font-size: clamp(40px, 11.5vw, 64px); font-size: clamp(60px, 11vw, 110px); font-size: clamp(75px, 11vw, 200px); font-weight: 400; font-weight: 700; font-weight: 900; letter-spacing: -0.01em; letter-spacing: -0.04em; letter-spacing: -0.06em; letter-spacing: 0.16em; letter-spacing: 0.22em; letter-spacing: 0.25em; line-height: 0.78; line-height: 0.8; line-height: 0.82; line-height: 1.3; line-height: 1.35 |
| frontend_appview/src/components/Scrapbook.tsx | aspect-[16/10]; aspect-[3/4]; aspect-[4/3]; aspect-square; border-[#1A1A18]; border-[#D6CDBC]; border-[#DFD7C4]; border-[#DFD8CA]; border-[#DFD9CE]; border-[#E0D8C8]; border-[#E3DCCE]; border-[#E3DDCF]; border-[#E5E0D4]; border-[#E8E2D4]; border-[#EDE7D9]; border-[2px]; border-b; border-dashed; border-t; duration-300; duration-500; font-black; font-bold; font-handwriting; font-light; font-script; font-semibold; font-serif; gap-2; h-2.5; h-36; h-44; h-6; h-full; leading-[1.08]; leading-none; leading-relaxed; leading-snug; leading-tight; lg:px-12; max-w-[1240px]; max-w-[800px]; max-w-lg; mb-2; mb-8; md:mb-12; md:min-h-[1100px]; md:py-20; md:text-5xl; md:text-[220px]; md:w-[28%]; md:w-[30%]; md:w-[32%]; md:w-[34%]; md:w-[48%]; min-h-[1050px]; mt-0.5; mt-1; mt-1.5; mt-2.5; mt-3; mx-auto; my-0.5; p-3; p-4; pb-2; pb-6; pb-7; pt-1.5; pt-2; pt-2.5; px-2.5; px-4; py-1; py-12; rounded-full; rounded-sm; rounded-xs; shadow-2xs; shadow-lg; shadow-md; sm:h-56; sm:leading-[1.04]; sm:mb-10; sm:min-h-[1180px]; sm:p-4; sm:p-5; sm:px-6; sm:py-16; sm:text-4xl; sm:text-[160px]; sm:text-sm; sm:text-xl; sm:w-56; sm:w-[44%]; sm:w-[46%]; sm:w-[48%]; sm:w-[68%]; text-3xl; text-[10.5px]; text-[10px]; text-[8.5px]; text-[9.5px]; text-[90px]; text-[9px]; text-base; text-center; text-lg; text-sm; text-xl; text-xs; tracking-[-0.02em]; tracking-[0.25em]; tracking-wide; tracking-wider; tracking-widest; w-2.5; w-24; w-28; w-36; w-44; w-[84%]; w-[86%]; w-[88%]; w-[92%]; w-full; z-10; z-20; z-30 |
| frontend_appview/src/components/ui/futuristic-nav.tsx | border-gray-200/50; dark:border-gray-700/50; dark:hover:text-blue-400; gap-6; h-14; h-16; hover:text-blue-500; mb-2; px-2; px-6; py-1; py-3; rounded-full; rounded-md; shadow-xl; text-xs; w-14; w-16; z-10; z-50 |
| frontend_appview/src/components/ui/animated-testimonials.tsx | border-[#E8DFC8]; border-t; duration-300; font-bold; font-semibold; font-serif-luxury; gap-1.5; gap-2; gap-6; grid-cols-1; h-1.5; h-4; h-5; h-64; h-8; h-full; leading-relaxed; mb-4; p-5; pt-1; pt-2; px-1; px-4; py-6; rounded-2xl; rounded-3xl; rounded-full; shadow-md; shadow-sm; text-lg; text-xl; text-xs; tracking-wider; w-1.5; w-4; w-5; w-6; w-8; w-full |
| frontend_appview/src/components/editorial/EditorialCollage.css | aspect-ratio |
| frontend_appview/src/components/editorial/EditorialSpread.tsx | font-bold; font-light; font-semibold; gap-1.5; h-3.5; leading-[1.08]; max-w-[1440px]; max-w-xl; mb-10; mb-3; md:mb-16; md:pb-20; md:pt-32; md:text-5xl; mt-5; mx-auto; pb-12; pt-16; pt-4; px-0; px-5; px-6; sm:leading-[1.04]; sm:mb-14; sm:pb-16; sm:pt-24; sm:px-10; sm:text-4xl; sm:text-[10.5px]; text-3xl; text-[10px]; text-[9.5px]; text-[9px]; text-center; tracking-[-0.02em]; tracking-[0.25em]; tracking-[0.32em]; w-3.5; w-full |
| frontend_appview/src/components/editorial/HouseOfSatraIntro.tsx | font-light; font-mono; font-semibold; font-serif; h-12; leading-none; mb-2; mb-4; md:text-7xl; mt-3; px-4; px-6; py-2; sm:h-16; sm:text-5xl; sm:text-[11px]; sm:text-base; sm:tracking-[0.14em]; sm:w-22; text-3xl; text-[10px]; text-[9px]; text-center; text-xs; tracking-[0.08em]; tracking-[0.25em]; w-16; z-[9999] |
| frontend_appview/src/components/editorial/EditorialCTA.tsx | gap-2; h-3; w-3 |
| frontend_appview/src/components/editorial/ProductShowcase.tsx | aspect-[4/3]; duration-[700ms]; duration-[900ms]; ease-[cubic-bezier(0.16,1,0.3,1)]; gap-1.5; h-3; h-full; leading-relaxed; max-w-md; pt-2; pt-5; text-left; text-sm; w-3; w-full |
| frontend_appview/src/components/editorial/SectionHeader.tsx | h-px; max-w-[560px]; max-w-[720px]; mt-6; mx-auto; text-center; text-left; w-16 |
| frontend_appview/src/components/brand/TrustedBusinessesMarquee.tsx | border-[#EAE5DC]; border-t; duration-300; font-light; gap-12; h-6; h-7; h-8; leading-[1.08]; max-w-[1440px]; max-w-md; mb-8; md:py-22; md:text-4xl; mx-auto; px-2; px-4; py-14; py-3; sm:gap-20; sm:h-10; sm:h-8; sm:h-9; sm:leading-[1.04]; sm:mb-12; sm:py-18; sm:text-3xl; sm:text-sm; sm:w-40; text-2xl; text-center; text-xs; tracking-[-0.02em]; w-20; w-auto; z-10 |
| frontend_appview/src/components/brand/LocationPromptBar.tsx | border-[#38332B]; border-b; duration-300; font-bold; font-mono; font-sans; gap-2; gap-3; h-3.5; max-w-[1440px]; mx-auto; p-1; px-3; py-1; py-2; rounded-sm; sm:gap-4; sm:px-6; sm:text-xs; text-[10px]; text-[11px]; tracking-wider; w-3.5; w-full; z-30 |
| frontend_appview/src/components/brand/FloatingStickyInquireButton.tsx | border-2; border-[#C5A265]; duration-300; h-14; h-full; hover:border-[#DFC299]; hover:shadow-[0_12px_32px_rgba(60,11,30,0.55)]; p-1.5; rounded-full; shadow-[0_8px_24px_rgba(60,11,30,0.35)]; sm:h-16; sm:w-16; w-14; w-full; z-40 |
| frontend_appview/src/components/modals/InquiryModal.tsx | border-0; border-[#D0CBC0]; border-[#EAE5DC]; border-[#F0ECE1]; border-b; focus:border-[#1A1A18]; font-bold; font-light; font-medium; font-mono; font-semibold; gap-2.5; gap-5; grid-cols-1; h-3.5; h-5; hover:shadow-lg; leading-tight; max-h-[82vh]; mb-4; p-1.5; p-5; pb-3; pr-14; pt-0.5; pt-2; px-0; px-1; py-0.5; py-1.5; py-3.5; rounded-3xl; rounded-full; rounded-none; rounded-xl; shadow-[0_20px_60px_rgba(0,0,0,0.22)]; shadow-md; sm:gap-6; sm:grid-cols-2; sm:grid-cols-3; sm:p-7; sm:text-2xl; sm:text-sm; sm:w-[480px]; text-[10px]; text-[9.5px]; text-xl; text-xs; tracking-[0.18em]; tracking-[0.2em]; tracking-wider; w-3.5; w-5; w-[calc(100vw-2rem)]; w-full; z-50 |
| frontend_appview/src/components/motion/ImageReveal.tsx | aspect-[4/5]; h-full; w-full |
| frontend_appview/src/components/motion/TextReveal.tsx | text-reveal-word |
| frontend_appview/src/components/motion/AnimatedHeading.tsx | mr-2; sm:mr-3.5 |
| frontend_appview/src/components/motion/ParallaxImage.tsx | aspect-[4/5]; h-[120%]; h-full; w-full |
| frontend_appview/src/components/effects/GoldPopperSprinkle.tsx | h-full; w-full; z-[100] |
| frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx | aspect-[4/3]; border-[#C5A880]; border-[#F0ECE1]; duration-200; duration-300; duration-500; duration-700; ease-out; font-bold; font-medium; font-mono; font-normal; font-sans; font-semibold; gap-1; gap-1.5; gap-2; gap-3.5; gap-4; group-hover:w-3; h-0.5; h-20; h-3; h-3.5; h-full; hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)]; hover:shadow-xs; leading-snug; leading-tight; lg:gap-10; lg:gap-7; lg:grid-cols-4; lg:h-32; lg:px-8; lg:w-32; max-w-[120px]; max-w-[1360px]; max-w-[300px]; md:gap-8; md:h-28; md:rounded-[29px]; md:rounded-[32px]; md:text-[12px]; md:w-28; mt-1.5; mt-3; mx-auto; p-4; p-5; p-[2.5px]; pb-4; pb-6; pt-1; pt-2; pt-6; px-1; px-2.5; px-3; px-3.5; px-4; px-6; py-1; py-1.5; py-3.5; rounded-2xl; rounded-[21px]; rounded-[24px]; rounded-full; rounded-lg; rounded-none; shadow-2xs; shadow-[0_12px_28px_rgba(0,0,0,0.12)]; shadow-[0_4px_20px_rgba(0,0,0,0.05)]; shadow-md; shadow-xs; sm:gap-6; sm:grid-cols-2; sm:h-26; sm:mx-0; sm:p-6; sm:p-[3.5px]; sm:pb-0; sm:pb-10; sm:pb-6; sm:pt-10; sm:pt-2; sm:pt-4; sm:px-0; sm:px-2; sm:px-6; sm:py-3; sm:rounded-[25px]; sm:rounded-[28px]; sm:text-[11px]; sm:text-[13px]; sm:text-[19px]; sm:text-base; sm:w-26; sm:w-auto; text-[11px]; text-[17px]; text-[9.5px]; text-[9px]; text-center; text-left; text-sm; text-xs; tracking-[0.2em]; tracking-tight; tracking-wide; tracking-wider; w-0; w-20; w-3; w-3.5; w-6; w-[80vw]; w-full |
| frontend_appview/src/features/gourmet/EditionDetailModal.tsx | border-[#a6bd93]; border-t; border-white/10; border-white/20; font-bold; font-normal; font-sans; font-serif; font-serif-luxury; gap-2; gap-2.5; gap-3; gap-4; grid-cols-1; h-1.5; h-4; h-5; h-[320px]; h-full; leading-relaxed; max-h-[90vh]; max-w-4xl; md:text-5xl; md:text-base; my-6; p-2; p-2.5; p-3; p-4; p-6; pt-4; px-3; px-6; py-1; py-3; rounded-2xl; rounded-3xl; rounded-full; rounded-xl; shadow-2xl; shadow-md; sm:grid-cols-2; sm:grid-cols-3; sm:h-[420px]; sm:p-10; sm:p-6; sm:text-4xl; sm:text-sm; text-3xl; text-[10px]; text-[11px]; text-[9px]; text-left; text-xs; tracking-[0.25em]; tracking-tight; tracking-wider; tracking-widest; w-1.5; w-4; w-5; w-full; z-10; z-20; z-50 |
| frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx | border-[#E4E0D7]; focus:border-[#2C3228]; font-bold; font-sans; font-serif-luxury; gap-2; gap-3; grid-cols-1; h-12; h-4; leading-relaxed; max-w-md; max-w-xl; mx-auto; my-8; p-2; p-4; p-6; pt-1; px-4; px-8; py-2; py-2.5; py-3; py-3.5; py-8; shadow-2xl; sm:grid-cols-2; sm:p-10; sm:p-6; sm:text-3xl; sm:text-sm; text-2xl; text-[10px]; text-center; text-left; text-xs; tracking-[0.25em]; tracking-wider; tracking-widest; w-12; w-4; w-full; z-10; z-50 |
| frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx | border-[#7A8B6F]; border-[#DDD5C7]; border-[#DFC299]; border-[#E0D8C8]; border-[#E8E2D8]; border-[#EADBCA]; font-bold; font-light; font-medium; font-mono; font-semibold; gap-1.5; gap-2; gap-3.5; h-14; h-3.5; h-4; h-7; h-8; leading-relaxed; leading-tight; max-w-[460px]; max-w-sm; min-w-0; mx-auto; p-4; p-6; pt-1; pt-2; px-2; py-0.5; py-3; py-3.5; rounded-2xl; rounded-full; rounded-lg; rounded-xl; shadow-2xl; shadow-2xs; shadow-md; shadow-xs; sm:p-6; sm:p-8; sm:rounded-3xl; sm:text-3xl; sm:text-sm; text-2xl; text-[10.5px]; text-[10px]; text-center; text-left; text-xs; tracking-[0.14em]; tracking-[0.16em]; tracking-[0.24em]; tracking-tight; w-14; w-3.5; w-4; w-7; w-8; w-full; z-10; z-50 |
| frontend_appview/src/features/ecommerce/CustomGiftBoxesSection.tsx | aspect-[4/3.8]; border-[#C5A880]; border-[#F0ECE1]; duration-200; duration-300; font-bold; font-light; font-normal; font-sans; font-semibold; gap-1; gap-1.5; gap-2.5; gap-4; h-3; h-3.5; h-4; h-9; hover:border-[#3c0b1e]; hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)]; hover:shadow-xs; leading-[1.08]; leading-relaxed; leading-snug; lg:px-6; lg:px-8; max-w-4xl; max-w-[1580px]; max-w-xl; mb-8; md:mb-12; md:pb-16; md:pt-12; md:text-5xl; md:w-[340px]; mx-auto; p-4; pb-10; pb-4; pt-1; pt-2; px-2; px-2.5; px-4; py-1; py-2; rounded-2xl; rounded-full; rounded-lg; shadow-2xs; shadow-[0_4px_20px_rgba(0,0,0,0.05)]; shadow-md; shadow-xs; sm:gap-6; sm:h-10; sm:leading-[1.04]; sm:mb-10; sm:p-5; sm:pb-14; sm:pt-8; sm:px-4; sm:px-6; sm:py-4; sm:rounded-3xl; sm:text-4xl; sm:text-[19px]; sm:text-sm; sm:w-10; sm:w-[320px]; text-2xl; text-[17px]; text-[9.5px]; text-[9px]; text-center; text-xs; tracking-[-0.02em]; tracking-tight; tracking-wide; tracking-wider; w-3; w-3.5; w-4; w-9; w-[280px]; w-full |
| frontend_appview/src/features/ecommerce/KeepsakeEcommerceSection.tsx | duration-300; duration-500; duration-700; font-light; font-sans; font-semibold; gap-x-3; gap-y-6; grid-cols-3; group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)]; h-24; h-full; leading-[1.08]; leading-[1.25]; leading-normal; lg:h-36; lg:px-10; lg:rounded-[34px]; lg:rounded-[38px]; lg:w-36; max-w-3xl; max-w-4xl; max-w-[1580px]; max-w-[170px]; max-w-[96px]; mb-8; md:gap-x-6; md:gap-y-10; md:grid-cols-6; md:h-32; md:mb-12; md:pb-20; md:pt-14; md:rounded-[30px]; md:rounded-[34px]; md:text-5xl; md:text-sm; md:w-32; mt-2; mx-auto; p-[3px]; pb-12; pt-6; px-2; px-4; rounded-[23px]; rounded-[26px]; shadow-inner; sm:gap-x-4; sm:gap-y-8; sm:grid-cols-4; sm:h-28; sm:leading-[1.04]; sm:max-w-[130px]; sm:mb-10; sm:mt-3; sm:p-[4px]; sm:pb-16; sm:pt-10; sm:px-6; sm:rounded-[26px]; sm:rounded-[30px]; sm:text-4xl; sm:text-[12px]; sm:tracking-[0.16em]; sm:w-28; text-2xl; text-[9.5px]; text-center; text-xs; tracking-[-0.02em]; tracking-[0.06em]; w-24; w-full; xs:max-w-[104px]; xs:text-[10.5px]; xs:tracking-[0.08em] |
| frontend_appview/src/features/inquiry/CuratedInquirySection.tsx | border-0; border-[#7A8B6F]; border-[#D0CBC0]; border-[#D9D5CC]; border-[#DDD8CE]; border-[#EFECE6]; border-b; border-none; border-t; focus:border-[#1A1A18]; font-bold; font-light; font-medium; font-mono; gap-0.5; gap-2; gap-4; grid-cols-1; h-14; h-3.5; h-7; leading-[1.08]; leading-normal; leading-relaxed; lg:px-8; lg:text-[340px]; max-w-2xl; max-w-3xl; max-w-[1000px]; max-w-md; mb-8; md:mb-12; md:p-12; md:pt-12; md:text-5xl; md:text-[280px]; md:text-sm; mx-auto; my-auto; p-0.5; p-6; pb-8; pr-14; pt-0.5; pt-1; pt-3; pt-4; px-0; px-1; px-2; px-4; px-6; px-8; py-0.5; py-2; py-2.5; py-3.5; py-8; rounded-[28px]; rounded-full; rounded-lg; rounded-md; rounded-none; shadow-2xs; shadow-[0_8px_30px_rgba(0,0,0,0.04)]; shadow-md; sm:gap-6; sm:grid-cols-2; sm:grid-cols-3; sm:h-16; sm:h-8; sm:leading-[1.04]; sm:mb-10; sm:p-10; sm:pb-14; sm:pt-8; sm:px-6; sm:py-12; sm:rounded-[36px]; sm:text-3xl; sm:text-4xl; sm:text-[11px]; sm:text-[180px]; sm:text-sm; sm:w-16; sm:w-8; text-2xl; text-[10px]; text-[11px]; text-[72px]; text-[9.5px]; text-center; text-xs; tracking-[-0.02em]; tracking-[0.18em]; tracking-[0.2em]; tracking-wider; w-14; w-3.5; w-7; w-full; z-0; z-10 |
| frontend_appview/src/features/inquiry/StickyInquiryDrawer.tsx | border-[#7A8B6F]; border-[#D0CBC0]; border-[#D9D5CC]; border-[#DDD8CE]; border-[#DFC299]; border-[#E8E4DC]; border-b; border-l; duration-300; focus:border-[#1A1A18]; font-bold; font-light; font-medium; font-mono; font-semibold; gap-2; gap-2.5; gap-3; grid-cols-1; h-14; h-3.5; h-4; h-7; h-8; hover:border-[#DFC299]; leading-relaxed; max-w-lg; mt-4; mx-auto; p-5; pr-14; pt-1; pt-2; px-2.5; px-3; px-4; px-6; py-12; py-2; py-2.5; py-3; rounded-full; rounded-lg; shadow-2xl; shadow-[0_8px_30px_rgba(60,11,30,0.45)]; shadow-md; sm:grid-cols-2; sm:h-4; sm:p-6; sm:p-7; sm:px-5; sm:py-3; sm:text-2xl; sm:text-sm; sm:text-xs; sm:w-4; text-2xl; text-[10.5px]; text-[10px]; text-[11px]; text-[9.5px]; text-[9px]; text-center; text-xl; text-xs; tracking-[0.18em]; tracking-[0.22em]; tracking-wider; tracking-widest; w-14; w-3.5; w-4; w-7; w-8; w-full; z-40; z-50 |
| frontend_appview/src/features/shell/BottomNav.tsx | border-[#E6D9FF]; font-bold; font-semibold; gap-0.5; h-0.5; h-5; max-w-md; mx-auto; pb-3; px-3; px-4; py-1; py-2; rounded-2xl; rounded-full; shadow-2xl; text-[10px]; tracking-tight; w-4; w-5; w-full; z-50 |
| frontend_appview/src/features/shell/MobileShell.tsx | border-[#E6D9FF]; border-b; border-transparent; duration-300; font-bold; font-medium; font-sans; gap-3.5; h-5.5; leading-none; leading-tight; max-w-md; mb-0.5; min-h-screen; mt-0.5; p-1; pb-28; px-4; py-2; shadow-2xl; shadow-md; text-[7.5px]; text-lg; text-sm; tracking-[0.14em]; tracking-[0.32em]; w-5.5; w-full; z-40 |
| frontend_appview/src/features/shell/Footer.tsx | border-b; border-black/10; border-t; duration-200; font-bold; font-light; font-mono; font-serif; gap-2.5; gap-3; gap-5; gap-x-2; grid-cols-2; h-[250px]; leading-tight; lg:px-12; lg:text-6xl; max-w-[1440px]; max-w-full; md:gap-8; md:grid-cols-4; md:text-5xl; md:text-[12px]; mx-auto; pb-0.5; pb-6; pt-5; pt-8; px-5; py-6; sm:gap-4; sm:gap-6; sm:gap-x-3.5; sm:h-[350px]; sm:pb-8; sm:pt-10; sm:px-8; sm:py-8; sm:text-4xl; sm:text-[11px]; sm:text-[12.5px]; sm:text-[9.5px]; sm:text-right; sm:text-sm; sm:tracking-[0.22em]; sm:w-[500px]; text-2xl; text-[10.5px]; text-[9.5px]; text-[9px]; text-left; text-xs; tracking-[-0.01em]; tracking-[0.18em]; tracking-wide; tracking-widest; w-[350px]; xs:text-[11.5px]; z-0; z-10 |
| frontend_appview/src/features/shell/ResponsiveShell.tsx | border-[var(--satra-charcoal)]; border-b; border-color; border-t; border-white; duration-200; duration-300; font-bold; font-light; font-medium; font-mono; font-semibold; gap-2; gap-2.5; gap-5; gap-7; h-16; h-20; h-4; h-5; h-8; h-9; h-[1.2px]; leading-none; lg:gap-5; lg:h-[68px]; lg:px-10; lg:text-[20px]; max-w-[1440px]; min-h-screen; min-w-0; ml-1; mx-auto; pb-4; px-2.5; px-3.5; px-8; py-1; py-1.5; py-2.5; py-3.5; py-6; rounded-lg; rounded-sm; shadow-md; shadow-xs; sm:gap-3; sm:gap-4; sm:h-10; sm:px-3.5; sm:px-6; sm:text-[10.5px]; sm:text-[18px]; sm:text-[30px]; sm:tracking-[0.04em]; sm:tracking-[0.16em]; sm:w-10; text-[11.5px]; text-[13px]; text-[26px]; text-[9.5px]; text-xs; tracking-[0.03em]; tracking-[0.12em]; tracking-[0.16em]; tracking-[0.18em]; tracking-tight; w-5; w-6; w-8; w-full; xl:gap-8; xs:text-[14px]; z-40; z-50 |
| frontend_appview/src/features/shell/CartIcon.tsx | font-bold; h-4; h-5; rounded-full; shadow-md; text-[9px]; w-4; w-5 |
| frontend_appview/src/features/customizer/GiftBoxCustomizerModal.tsx | border-2; border-[#D4AF37]; border-[#E8DFC8]; border-b; border-t; border-white; font-bold; font-semibold; font-serif-luxury; gap-1; gap-1.5; gap-2; gap-3; grid-cols-2; h-12; h-4; h-5; h-6; h-7; h-full; max-h-[90vh]; max-w-md; mt-1; p-0; p-1; p-2; p-3; p-4; p-5; pb-1; pb-3; pr-1; pt-1; pt-3; px-2; px-3; px-5; px-6; py-2; py-2.5; py-3; rounded-2xl; rounded-bl-full; rounded-full; rounded-t-3xl; rounded-xl; shadow-2xl; shadow-md; shadow-sm; shadow-xs; sm:p-4; sm:rounded-3xl; text-[10px]; text-[9px]; text-left; text-lg; text-right; text-sm; text-xs; tracking-wider; w-12; w-4; w-5; w-6; w-7; w-full; z-10; z-50 |
| frontend_appview/src/features/brand/IndustriesSection.tsx | border-[#EAE5DC]; border-[#F0ECE1]; border-b; duration-300; duration-500; ease-out; font-bold; font-light; font-sans; gap-2; gap-2.5; gap-3.5; gap-4; grid-cols-1; h-32; h-5; h-full; hover:border-[#8C6228]; hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)]; leading-[1.08]; leading-[1.3]; leading-none; leading-normal; leading-relaxed; lg:grid-cols-3; lg:grid-cols-4; lg:px-8; max-w-3xl; max-w-4xl; max-w-[1110px]; max-w-[1480px]; max-w-[310px]; mb-3; mb-8; md:gap-6; md:h-40; md:mb-12; md:pt-14; md:text-5xl; md:text-[13px]; md:w-40; mt-auto; mx-auto; p-5; pb-2; pb-2.5; pt-0.5; pt-6; px-2; px-3.5; rounded-2xl; shadow-[0_2px_10px_rgba(0,0,0,0.03)]; sm:gap-3; sm:gap-5; sm:grid-cols-2; sm:h-36; sm:h-6; sm:leading-[1.04]; sm:mb-10; sm:p-5.5; sm:pt-10; sm:px-6; sm:text-4xl; sm:text-[12.5px]; sm:text-sm; sm:text-xs; sm:tracking-[0.16em]; sm:w-36; sm:w-6; text-2xl; text-[11px]; text-center; text-left; text-xs; tracking-[-0.02em]; tracking-[0.14em]; w-32; w-5; w-[82vw]; w-full; z-0; z-10 |
| frontend_appview/src/features/brand/WhyChooseSection.tsx | border-[#34473A]; border-[#DDD5C7]; border-[#E8E2D8]; duration-700; font-bold; font-light; font-medium; gap-1.5; gap-2; grid-cols-12; grid-cols-2; h-[195px]; h-[235px]; h-[280px]; h-full; leading-[1.08]; leading-relaxed; leading-snug; lg:px-6; lg:text-[46px]; max-w-[1580px]; md:p-10; md:pt-12; md:text-5xl; min-h-[475px]; mx-auto; my-1; p-5; p-6; pb-6; pt-1; pt-4; px-2; rounded-2xl; rounded-bl-3xl; rounded-br-3xl; rounded-none; rounded-tl-3xl; rounded-tr-3xl; sm:h-[340px]; sm:leading-[1.04]; sm:p-6; sm:p-7; sm:p-8; sm:pb-10; sm:pt-8; sm:px-4; sm:text-2xl; sm:text-3xl; sm:text-4xl; sm:text-[11px]; sm:text-lg; sm:text-sm; sm:text-xl; text-2xl; text-3xl; text-[10px]; text-[11px]; text-[9.5px]; text-base; text-lg; text-xl; text-xs; tracking-[-0.02em]; tracking-[0.24em]; tracking-[0.28em]; tracking-tight |
| frontend_appview/src/features/brand/FaqSection.tsx | border-[#D1CCC2]; border-[#E5E0D8]; border-[#EAE5DC]; border-b; border-t; duration-200; duration-300; font-bold; font-light; font-medium; font-mono; gap-4; group-hover:border-[#3c0b1e]; h-4; h-9; leading-[1.12]; leading-relaxed; leading-snug; lg:px-12; max-w-2xl; max-w-4xl; mb-10; md:py-24; md:text-5xl; md:text-[19px]; md:text-base; mx-auto; pb-6; pr-6; px-5; py-16; py-5; rounded-full; shadow-md; sm:gap-6; sm:h-10; sm:h-[18px]; sm:mb-14; sm:pr-14; sm:px-8; sm:py-20; sm:py-6; sm:text-4xl; sm:text-base; sm:text-lg; sm:text-sm; sm:w-10; sm:w-[18px]; text-3xl; text-[11px]; text-base; text-center; text-left; text-sm; text-xs; tracking-[-0.02em]; tracking-[0.24em]; w-4; w-9; w-full |
| frontend_appview/src/features/brand/GiftingProcessSection.tsx | border-[#DFC299]; border-white/15; border-y; first:pt-0; font-bold; font-light; font-mono; font-sans; gap-3.5; grid-cols-5; h-10; last:pb-0; leading-[1.08]; leading-relaxed; leading-snug; lg:h-11; lg:pl-4; lg:px-12; lg:px-6; lg:py-7; lg:text-[11.5px]; lg:text-[13px]; lg:text-base; lg:w-11; max-w-4xl; max-w-[1580px]; mb-8; md:mb-12; md:py-20; md:text-5xl; min-w-0; mt-1; mx-auto; pl-3.5; pt-0.5; px-2; px-4; px-5; py-12; py-3.5; py-6; rounded-full; sm:leading-[1.04]; sm:mb-10; sm:px-8; sm:py-16; sm:text-4xl; text-2xl; text-[10px]; text-[11px]; text-center; text-left; text-sm; text-xs; tracking-[-0.02em]; tracking-wider; w-10; w-6; w-full; xs:text-[12.5px]; xs:text-base; xs:text-xs; z-10 |
| frontend_appview/src/features/brand/PackagingExperienceSection.tsx | aspect-square; border-[#EAE5DC]; duration-300; duration-700; font-light; gap-4; h-full; leading-[1.08]; leading-normal; lg:gap-10; lg:w-[320px]; max-w-3xl; max-w-4xl; mb-4; mb-8; md:gap-8; md:mb-12; md:mb-8; md:pb-20; md:pt-20; md:text-5xl; md:text-sm; md:w-[280px]; mx-auto; pb-12; product:shadow-2xl; pt-12; px-2; rounded-2xl; shadow-[0_4px_20px_rgba(0,0,0,0.06)]; sm:gap-6; sm:leading-[1.04]; sm:mb-10; sm:mb-6; sm:pb-16; sm:pt-16; sm:rounded-3xl; sm:text-4xl; sm:w-[240px]; text-2xl; text-center; text-xs; tracking-[-0.02em]; w-[150px]; w-full; w-max; xl:w-[340px]; xs:w-[185px] |
| frontend_appview/src/features/search/SearchModal.tsx | border-[#DDD8CE]; border-[#E0DDD6]; border-b; border-t; font-bold; font-semibold; gap-1; gap-3; grid-cols-1; h-12; h-3; h-5; h-8; hover:border-[#BFA267]; hover:shadow-xs; max-h-[80vh]; max-w-2xl; mb-2; min-w-0; mx-auto; p-1; p-1.5; p-3; p-4; pt-16; px-2.5; px-4; py-1; py-12; rounded-2xl; rounded-full; rounded-lg; rounded-xl; shadow-2xl; shadow-2xs; sm:grid-cols-2; sm:p-5; sm:p-6; sm:pt-24; sm:text-base; text-[10px]; text-center; text-left; text-sm; text-xs; tracking-wider; w-12; w-3; w-5; w-8; w-full; z-50 |
| frontend_appview/src/features/cart/CurationDrawer.tsx | border-[#7A8B6F]; border-[#C5A880]; border-[#DDD8CE]; border-[#E0DDD6]; border-[#E5E0D8]; border-[#E8E4DC]; border-[#EADBCA]; border-b; border-l; border-t; font-bold; font-light; font-medium; font-mono; font-semibold; gap-1; gap-1.5; gap-2; gap-2.5; h-10; h-2; h-2.5; h-3; h-3.5; h-4; h-5.5; h-7; h-9; leading-relaxed; max-h-[46vh]; max-h-[78vh]; max-w-[140px]; max-w-[200px]; max-w-[360px]; min-w-0; min-w-[16px]; ml-0.5; mx-auto; p-2.5; p-3.5; pt-1; px-2; px-2.5; px-4; py-0.5; py-2.5; py-3; py-3.5; py-8; rounded-2xl; rounded-full; rounded-l-2xl; rounded-lg; rounded-md; rounded-xl; shadow-2xl; shadow-2xs; shadow-[0_20px_60px_rgba(0,0,0,0.25)]; shadow-md; sm:max-w-[170px]; sm:max-w-[380px]; sm:p-4; sm:px-5; sm:py-3.5; sm:text-xl; text-[10.5px]; text-[10px]; text-[11px]; text-[9.5px]; text-[9px]; text-base; text-center; text-left; text-lg; text-xs; tracking-[0.16em]; tracking-[0.2em]; tracking-tight; w-10; w-2; w-2.5; w-3; w-3.5; w-4; w-5.5; w-7; w-9; w-[92vw]; w-full; z-40 |
| frontend_appview/src/features/hero/GiftBoxingCards.tsx | aspect-square; border-[#6B427B]; border-[#E6D9FF]; border-t; duration-500; font-bold; font-semibold; font-serif-luxury; gap-1; gap-4; h-3.5; h-full; hover:border-[#6B427B]; leading-relaxed; min-w-0; mt-2; p-3.5; pt-2.5; px-1; px-2.5; px-4; py-0.5; py-1; py-6; rounded-2xl; rounded-full; rounded-xl; shadow-xs; text-[10px]; text-base; text-xl; text-xs; tracking-wider; w-3.5; w-[35%]; w-full |
| frontend_appview/src/features/hero/FeatureBadges.tsx | border-[#B7DCD6]; border-[#D6E4FA]; border-[#F4D9A6]; border-[#FFB5A7]; border-y; font-semibold; gap-1.5; gap-2; grid-cols-4; h-10; h-5; leading-tight; my-2; px-4; py-5; rounded-full; shadow-2xs; text-[10px]; text-center; w-10; w-5 |
| frontend_appview/src/features/hero/LuxuryValuePropsBar.tsx | border-[#E4E0D7]; border-y; duration-300; font-semibold; font-serif-luxury; gap-8; grid-cols-2; group-hover:border-[#a6bd93]; h-12; h-6; leading-tight; lg:grid-cols-5; max-w-7xl; md:gap-10; md:h-14; md:h-7; md:px-8; md:py-14; md:text-base; md:w-14; md:w-7; mx-auto; px-4; py-10; rounded-full; shadow-2xs; sm:grid-cols-3; text-center; text-sm; tracking-tight; w-12; w-6 |
| frontend_appview/src/features/hero/ExperienceHighlightsSection.tsx | border-0; border-[#E4E0D7]; font-bold; font-normal; font-sans; font-serif-luxury; gap-10; gap-2; gap-5; grid-cols-1; h-10; h-4; h-[360px]; h-[380px]; h-full; leading-[1.15]; leading-none; leading-relaxed; lg:grid-cols-12; m-0; max-w-7xl; max-w-xl; md:border-[#E4E0D7]; md:gap-16; md:h-[480px]; md:h-[500px]; md:ml-0; md:px-8; md:py-20; md:rounded-3xl; md:shadow-md; md:text-5xl; md:text-base; md:text-sm; md:w-full; mx-auto; p-0; pt-2; px-4; px-8; py-16; py-3.5; rounded-full; shadow-2xs; shadow-md; shadow-none; sm:h-[420px]; sm:h-[440px]; sm:text-4xl; text-3xl; text-[10px]; text-left; text-sm; text-xl; text-xs; tracking-[0.25em]; tracking-tight; tracking-wider; w-10; w-4; w-[calc(100%+2rem)]; w-full; z-20 |
| frontend_appview/src/features/hero/GiftBoxingCardSkeleton.tsx | border-[#E8DFC8]; gap-4; h-3; h-32; h-4; h-5; h-full; mt-3; my-4; p-3; px-4; rounded-2xl; rounded-xl; shadow-sm; w-20; w-28; w-3/4; w-full |
| frontend_appview/src/features/hero/HeroSection.tsx | duration-300; duration-500; ease-out; font-bold; font-normal; font-sans; font-serif-luxury; gap-3; group-hover:w-full; h-4; h-[2px]; h-[540px]; h-full; leading-[1.15]; leading-relaxed; lg:h-[680px]; lg:text-7xl; max-w-2xl; max-w-3xl; max-w-7xl; md:h-[620px]; md:px-12; md:text-6xl; md:text-lg; md:text-sm; mx-auto; pt-4; px-6; py-12; py-2; rounded-none; sm:text-5xl; sm:text-base; text-4xl; text-center; text-sm; text-xs; tracking-[0.2em]; tracking-tight; w-0; w-4; w-full; z-0; z-10 |
| frontend_appview/src/features/hero/HeroSkeleton.tsx | h-10; h-4; h-56; h-[520px]; max-w-[65%]; mt-4; p-6; pt-6; rounded-2xl; rounded-full; w-24; w-3/4; w-44; w-48; w-full |
| frontend_appview/src/features/hero/OtherProductsSection.tsx | aspect-[4/3]; border-[#E4E0D7]; border-b; border-t; border-transparent; duration-300; duration-500; duration-700; font-bold; font-normal; font-sans; font-serif-luxury; gap-1.5; gap-4; gap-8; grid-cols-1; group-hover:w-full; h-3.5; h-[1px]; h-full; hover:border-[#a6bd93]; hover:shadow-xl; leading-relaxed; max-w-7xl; max-w-md; md:grid-cols-3; md:px-8; md:text-4xl; md:text-sm; mt-6; mx-auto; pb-6; px-2.5; px-4; px-6; py-1; py-20; py-4; rounded-none; shadow-2xs; shadow-xs; text-3xl; text-[10px]; text-[9px]; text-lg; text-xs; tracking-[0.25em]; tracking-tight; tracking-wider; tracking-widest; w-0; w-3.5; w-full |
| frontend_appview/src/features/hero/BestsellersCarousel.tsx | aspect-[4/3]; duration-700; ease-out; font-bold; font-sans; font-semibold; font-serif-luxury; gap-3.5; grid-cols-2; h-full; lg:text-6xl; max-w-7xl; md:gap-10; md:gap-12; md:grid-cols-2; md:grid-cols-3; md:pb-16; md:pt-6; md:px-8; md:text-2xl; md:text-5xl; md:text-xl; mx-auto; pb-12; pt-1; pt-4; px-4; rounded-none; sm:gap-8; sm:text-4xl; sm:text-lg; sm:text-xl; text-3xl; text-center; text-xs; tracking-tight; tracking-wide; w-full |
| frontend_appview/src/features/hero/SpottedSection.tsx | border-[#E4E0D7]; border-b; border-transparent; duration-300; duration-700; focus:border-[#7A1C29]; font-bold; font-medium; font-sans; font-serif-luxury; gap-2; gap-3; gap-3.5; gap-5; gap-8; grid-cols-2; grid-cols-3; h-16; h-3.5; h-7; h-[260px]; h-[320px]; h-[680px]; h-full; max-w-2xl; max-w-7xl; md:gap-12; md:gap-6; md:grid-cols-4; md:px-8; md:py-16; md:text-5xl; md:text-base; mx-auto; pb-5; pb-6; pt-2; pt-4; px-4; px-5; px-8; py-10; py-2; py-3.5; py-4; rounded-2xl; rounded-3xl; rounded-full; shadow-2xs; shadow-md; sm:gap-10; sm:h-8; sm:text-4xl; sm:text-sm; sm:tracking-normal; sm:w-8; text-2xl; text-[10px]; text-center; text-xs; tracking-[0.25em]; tracking-tight; tracking-widest; w-3.5; w-7; w-[200px]; w-full; w-max; z-10 |
| frontend_appview/src/features/occasions/OccasionPageTemplate.tsx | aspect-[4/5]; border-0; border-[#3c0b1e]; border-[#785E40]; border-[#7A8B6F]; border-[#C8B28E]; border-[#D0CBC0]; border-[#D9D5CC]; border-[#DFD7CA]; border-[#E8E2D8]; border-[#EAE5DC]; border-[#F0ECE1]; border-b; border-t; duration-200; duration-300; focus:border-[#1A1A18]; font-bold; font-light; font-medium; font-mono; font-normal; font-sans; font-semibold; gap-10; gap-2; gap-2.5; gap-3; gap-3.5; gap-4; gap-5; gap-6; gap-8; grid-cols-1; h-10; h-14; h-28; h-3; h-3.5; h-4; h-5; h-7; h-full; hover:border-[#3c0b1e]; hover:shadow-[0_16px_34px_rgba(142,114,82,0.45)]; hover:shadow-lg; leading-[1.08]; leading-relaxed; leading-snug; leading-tight; lg:gap-10; lg:gap-16; lg:grid-cols-12; lg:grid-cols-4; lg:px-10; lg:px-12; lg:text-[68px]; max-w-2xl; max-w-3xl; max-w-4xl; max-w-[1280px]; max-w-[1320px]; max-w-[1480px]; max-w-[150px]; max-w-[560px]; max-w-md; max-w-xl; mb-10; mb-5; md:gap-12; md:gap-3; md:h-36; md:mt-16; md:my-16; md:p-11; md:pb-11; md:pb-22; md:pt-12; md:pt-32; md:pt-6; md:py-22; md:text-2xl; md:text-4xl; md:text-5xl; md:text-6xl; md:text-[18px]; md:text-base; md:text-sm; md:w-36; mt-3; mt-4; mt-6; mt-7; mt-8; mx-auto; my-10; my-auto; p-2; p-3; p-4; p-7; pb-14; pb-4; pb-6; pb-7; pr-8; pt-1; pt-2; pt-20; pt-3; pt-4; pt-5; pt-7; px-0; px-2; px-4; px-5; px-6; px-7; px-8; py-14; py-2; py-2.5; py-3; py-3.5; py-4; py-8; rounded-[18px]; rounded-[20px]; rounded-[24px]; rounded-full; rounded-none; rounded-xl; shadow-2xl; shadow-[0_10px_26px_rgba(142,114,82,0.3)]; shadow-[0_10px_30px_rgba(0,0,0,0.055)]; shadow-[0_1px_2px_rgba(0,0,0,0.02)]; shadow-[0_8px_25px_rgba(0,0,0,0.25)]; shadow-md; sm:gap-2.5; sm:gap-5; sm:gap-6; sm:gap-8; sm:grid-cols-2; sm:grid-cols-3; sm:h-32; sm:leading-[1.04]; sm:max-w-4xl; sm:mb-14; sm:mb-7; sm:mt-10; sm:mt-12; sm:mt-5; sm:mt-6; sm:mt-9; sm:my-14; sm:p-6; sm:p-9; sm:pb-10; sm:pb-18; sm:pb-9; sm:pt-28; sm:pt-4; sm:pt-6; sm:pt-9; sm:px-5; sm:px-6; sm:px-8; sm:py-18; sm:py-2.5; sm:py-3; sm:py-4; sm:rounded-[20px]; sm:rounded-[32px]; sm:text-3xl; sm:text-4xl; sm:text-5xl; sm:text-[11px]; sm:text-[13.5px]; sm:text-[13px]; sm:text-base; sm:text-lg; sm:text-sm; sm:text-xl; sm:text-xs; sm:w-32; text-2xl; text-[10px]; text-[11px]; text-[28px]; text-base; text-center; text-left; text-sm; text-xs; tracking-[-0.02em]; tracking-[0.14em]; tracking-[0.16em]; tracking-[0.18em]; tracking-[0.2em]; tracking-tight; tracking-wide; tracking-wider; w-10; w-14; w-28; w-3; w-3.5; w-4; w-5; w-7; w-full; xl:gap-12; xl:gap-20; xs:text-3xl; z-10; z-50 |
| frontend_appview/src/app/corporate/page.tsx | font-light; leading-[1.02]; leading-relaxed; lg:px-10; lg:text-[84px]; max-w-2xl; max-w-4xl; max-w-[1360px]; md:pt-24; md:text-7xl; md:text-base; min-h-screen; mx-auto; pb-16; pb-2; pt-16; px-4; sm:pb-3; sm:pt-20; sm:px-6; sm:text-6xl; sm:text-sm; text-4xl; text-center; text-xs; tracking-tight; w-full; xl:text-[94px] |
| frontend_appview/src/app/gourmet/page.tsx | aspect-[16/11]; border-t; border-white/10; border-white/20; duration-500; duration-700; ease-out; font-bold; font-light; font-mono; font-sans; font-serif-luxury; gap-10; gap-2; grid-cols-1; h-3.5; h-full; hover:border-[#a6bd93]; leading-none; leading-relaxed; max-w-5xl; max-w-7xl; max-w-xl; md:grid-cols-2; md:text-7xl; min-h-screen; mx-auto; p-6; pb-16; pb-32; pt-24; pt-4; px-3; px-4; px-6; py-1; py-1.5; rounded-3xl; rounded-full; shadow-2xl; sm:aspect-[4/3]; sm:gap-14; sm:p-8; sm:pb-24; sm:pt-32; sm:px-8; sm:text-3xl; sm:text-6xl; sm:text-[11px]; sm:text-sm; text-2xl; text-4xl; text-[10px]; text-[9px]; text-center; text-left; text-xs; tracking-[0.25em]; tracking-[0.2em]; tracking-[0.35em]; tracking-tight; tracking-wide; w-3.5; w-full |
| frontend_appview/src/app/contact/ContactClientView.tsx | border-[#E0DDD6]; border-b; focus:border-[#1A1A18]; font-light; font-medium; gap-1.5; gap-16; gap-2; gap-6; grid-cols-1; h-10; h-3; leading-relaxed; lg:gap-24; lg:grid-cols-12; lg:pt-2; lg:px-10; max-w-[1280px]; max-w-lg; max-w-md; mb-4; md:grid-cols-2; md:pb-[100px]; md:pb-[160px]; md:pt-[160px]; mt-5; mx-auto; pb-[120px]; pb-[80px]; pt-2; pt-[140px]; px-0; px-6; py-16; py-3; sm:text-[13.5px]; text-[10.5px]; text-sm; text-xs; tracking-[0.2em]; w-10; w-3; w-full |
| frontend_appview/src/app/inquire/page.tsx | border-[#E4E0D7]; border-t; border-white/15; focus:border-[#2C3228]; font-bold; font-normal; font-sans; font-serif-luxury; gap-1.5; gap-2; gap-3.5; gap-4; gap-8; grid-cols-1; h-16; h-4; leading-relaxed; lg:grid-cols-12; max-w-5xl; max-w-md; max-w-xl; md:px-8; md:py-16; md:text-5xl; md:text-base; min-h-screen; mt-4; mx-auto; p-2.5; p-6; pt-4; px-4; px-6; py-12; py-2.5; py-3; py-4; py-8; rounded-3xl; rounded-full; rounded-xl; shadow-md; shadow-xl; sm:grid-cols-2; sm:p-8; sm:text-4xl; text-2xl; text-3xl; text-[10px]; text-[11px]; text-center; text-left; text-sm; text-xl; text-xs; tracking-[0.25em]; tracking-tight; tracking-wider; tracking-widest; w-16; w-4; w-full |
| frontend_appview/src/app/privacy/page.tsx | border-[#EAE5DC]; border-[#F0ECE1]; border-t; font-light; font-medium; font-semibold; gap-1.5; gap-2.5; h-3; h-5; leading-[1.08]; leading-relaxed; lg:px-8; max-w-2xl; max-w-[1080px]; max-w-[900px]; mb-3; mb-8; md:p-12; md:text-5xl; min-h-screen; mx-auto; p-6; pb-16; pl-7; pt-24; pt-6; px-4; rounded-2xl; shadow-xs; sm:gap-2; sm:leading-[1.04]; sm:mb-12; sm:mb-4; sm:p-10; sm:pt-28; sm:px-6; sm:text-4xl; sm:text-[13.5px]; sm:text-lg; sm:text-sm; sm:text-xs; text-3xl; text-[11px]; text-base; text-center; text-xs; tracking-[-0.02em]; tracking-tight; w-3; w-5 |
| frontend_appview/src/app/studio-admin/page.tsx | border-2; border-[#BDE3CA]; border-[#C5A880]; border-[#DDD7CD]; border-[#E3DCCF]; border-[#E5DFD4]; border-[#EAE0D1]; border-[#EAE5DC]; border-[#F5C7BE]; border-b; border-red-200; border-t; border-t-transparent; duration-500; focus:border-[#1A1A18]; font-bold; font-medium; font-mono; font-normal; font-sans; font-semibold; font-serif; gap-1; gap-1.5; gap-2; gap-2.5; gap-3; gap-3.5; gap-4; grid-cols-1; grid-cols-2; h-10; h-14; h-2; h-2.5; h-3; h-3.5; h-4; h-5; h-6; h-8; h-9; h-full; hover:border-[#D6CEC1]; hover:border-red-200; leading-none; leading-relaxed; lg:grid-cols-4; max-w-[1400px]; max-w-md; max-w-sm; mb-1; mb-1.5; mb-2; mb-3; mb-4; md:grid-cols-3; min-h-screen; min-w-0; ml-1; mt-0.5; mt-1; mt-2; mt-7; mx-auto; p-1; p-10; p-12; p-2; p-3.5; p-4; p-8; pb-2; pl-10; placeholder:text-xs; placeholder:tracking-normal; pr-4; px-2; px-2.5; px-4; px-5; py-0.5; py-1; py-1.5; py-10; py-2; py-3; py-3.5; py-6; rounded-2xl; rounded-full; rounded-lg; rounded-md; rounded-xl; shadow-[0_10px_35px_rgba(0,0,0,0.05)]; shadow-[0_1px_3px_rgba(0,0,0,0.02)]; shadow-[0_1px_4px_rgba(0,0,0,0.02)]; shadow-[0_2px_10px_rgba(0,0,0,0.02)]; shadow-xs; sm:gap-4; sm:p-5; sm:p-6; sm:p-9; sm:px-8; sm:py-8; sm:text-2xl; sm:text-3xl; sm:text-base; sm:text-lg; sm:text-sm; text-2xl; text-[10px]; text-[11px]; text-base; text-center; text-left; text-lg; text-right; text-sm; text-xl; text-xs; tracking-[0.12em]; tracking-[0.14em]; tracking-[0.16em]; tracking-[0.1em]; tracking-[0.25em]; tracking-tight; tracking-wider; w-10; w-14; w-2; w-3; w-3.5; w-4; w-5; w-6; w-8; w-9; w-full; z-40 |
| frontend_appview/src/app/gift-boxing/page.tsx | aspect-[4/5]; border-[#E4E0D7]; border-b; border-t; duration-300; duration-500; font-bold; font-sans; font-serif-luxury; gap-3; gap-6; grid-cols-2; group-hover:border-[#a6bd93]; h-18; h-3.5; h-7; h-full; hover:shadow-md; leading-snug; leading-tight; lg:grid-cols-4; max-w-7xl; max-w-[100px]; md:gap-14; md:gap-6; md:grid-cols-3; md:h-28; md:pb-20; md:px-8; md:text-3xl; md:text-base; md:w-28; min-h-screen; mt-2; mt-2.5; mx-auto; p-0.5; p-3; pb-28; pb-6; pt-2.5; pt-6; px-2; px-3; px-4; py-2; rounded-full; rounded-none; shadow-2xs; sm:aspect-square; sm:gap-10; sm:gap-5; sm:grid-cols-2; sm:h-24; sm:h-4; sm:h-8; sm:max-w-[110px]; sm:p-4; sm:px-6; sm:text-sm; sm:text-xs; sm:w-24; sm:w-4; sm:w-8; text-[10px]; text-[11px]; text-center; text-xl; text-xs; tracking-wider; w-18; w-3.5; w-7; w-full; z-10 |
| frontend_appview/src/app/checkout/page.tsx | border-2; border-[#D4AF37]; border-[#E8DFC8]; border-b; focus:border-[#D4AF37]; font-bold; font-serif-luxury; gap-1.5; gap-2; gap-3; grid-cols-2; h-10; h-16; h-3.5; h-4; h-5; mb-1; min-h-screen; p-1.5; p-4; p-6; pb-2; pt-1; px-3; px-8; py-1; py-2; py-3; py-3.5; rounded-2xl; rounded-full; rounded-xl; shadow-lg; shadow-xs; text-2xl; text-[10px]; text-[11px]; text-center; text-left; text-sm; text-xl; text-xs; tracking-[0.2em]; tracking-wider; w-10; w-16; w-3.5; w-4; w-5; w-full |
| frontend_appview/src/app/house-of-satra/page.tsx | aspect-[16/10]; aspect-[4/3]; aspect-square; border-[#DDD8CE]; border-[#E0DDD6]; border-[#EAE6DE]; border-b; border-t; border-white/10; border-white/15; duration-300; duration-500; duration-700; font-bold; font-light; font-medium; font-mono; font-normal; font-script; font-semibold; font-serif; gap-1.5; gap-12; gap-3; gap-4; gap-6; grid-cols-1; h-12; h-3; h-4; h-8; h-px; hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]; hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]; leading-[1.05]; leading-[1.08]; leading-relaxed; lg:gap-8; lg:grid-cols-12; lg:grid-cols-3; lg:px-12; max-w-2xl; max-w-3xl; max-w-[1360px]; max-w-full; max-w-md; mb-1; mb-1.5; mb-10; mb-12; mb-2; mb-3; mb-4; mb-5; mb-6; md:grid-cols-3; md:pb-28; md:py-24; md:py-28; md:text-4xl; md:text-7xl; min-h-screen; mt-auto; mx-auto; p-1; p-3; p-4; p-5; p-6; p-8; pb-20; pb-8; pt-0; pt-2; pt-32; pt-4; px-2; px-2.5; px-4; px-5; px-6; py-0.5; py-1; py-16; py-2; py-2.5; py-20; rounded-full; shadow-2xl; shadow-sm; sm:grid-cols-2; sm:leading-[1.04]; sm:p-6; sm:p-8; sm:pt-40; sm:text-3xl; sm:text-4xl; sm:text-5xl; sm:text-6xl; sm:text-base; sm:text-sm; sm:text-xs; text-2xl; text-3xl; text-4xl; text-[10px]; text-[11px]; text-[8.5px]; text-[9px]; text-base; text-center; text-lg; text-sm; text-xs; tracking-[-0.02em]; tracking-[-0.03em]; tracking-[0.22em]; tracking-[0.25em]; tracking-[0.32em]; tracking-[0.3em]; tracking-wider; tracking-widest; w-16; w-3; w-4; w-8; w-full; xl:grid-cols-4; z-[100] |
| frontend_appview/src/app/cart/page.tsx | border-[#E8DFC8]; border-t; font-bold; font-sans; font-semibold; font-serif-luxury; gap-1; gap-2; gap-3; h-16; h-20; h-3.5; h-4; h-8; h-full; leading-snug; min-h-screen; min-w-0; my-12; p-0.5; p-3; p-4; p-8; pt-2; px-2; px-6; py-0.5; py-1; py-2.5; py-3.5; rounded-2xl; rounded-full; rounded-xl; shadow-lg; shadow-xs; text-2xl; text-center; text-lg; text-sm; text-xs; tracking-wider; w-16; w-20; w-3.5; w-4; w-8; w-full |
| frontend_appview/src/app/test-layout/page.tsx | aspect-[4/3]; border-[#7A8B6F]; border-[#C5A880]; border-[#DDD8CE]; border-[#E5E0D8]; border-[#E8E4DC]; border-[#EADBCA]; border-[#ECE7DE]; border-[#F2EDE4]; border-b; border-t; border-transparent; duration-300; duration-500; duration-700; font-bold; font-light; font-medium; font-mono; font-sans; font-semibold; gap-1; gap-1.5; gap-2; gap-2.5; gap-3; gap-3.5; gap-4; gap-6; grid-cols-1; grid-cols-2; h-10; h-18; h-2; h-2.5; h-3; h-3.5; h-4; h-5; h-6; h-9; h-full; hover:border-[#3c0b1e]; hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]; leading-relaxed; leading-tight; lg:grid-cols-12; lg:p-8; max-h-[calc(100vh-100px)]; max-w-[120px]; max-w-[1720px]; max-w-[180px]; mb-4; min-h-screen; min-w-0; min-w-[16px]; min-w-[18px]; ml-0.5; mt-1; mt-2.5; mx-auto; my-1; p-0.5; p-2.5; p-3; p-4; p-5; p-[2.5px]; pb-3; pt-2; px-2; px-2.5; px-3; px-4; py-0.5; py-1; py-1.5; py-12; py-2.5; py-3.5; rounded-2xl; rounded-[16px]; rounded-[18px]; rounded-[21px]; rounded-[24px]; rounded-full; rounded-lg; rounded-md; rounded-xl; shadow-2xs; shadow-[0_4px_16px_rgba(0,0,0,0.04)]; shadow-[0_8px_20px_rgba(0,0,0,0.12)]; shadow-md; shadow-sm; shadow-xs; sm:gap-4; sm:gap-5; sm:grid-cols-2; sm:h-20; sm:max-w-[140px]; sm:p-5; sm:p-6; sm:px-8; sm:rounded-[20px]; sm:rounded-[22px]; sm:rounded-[25px]; sm:rounded-[28px]; sm:text-3xl; sm:text-xl; sm:text-xs; sm:w-20; text-2xl; text-[10.5px]; text-[10px]; text-[11px]; text-[9.5px]; text-[9px]; text-base; text-center; text-left; text-lg; text-right; text-sm; text-xl; text-xs; tracking-[0.14em]; tracking-[0.15em]; tracking-[0.16em]; tracking-[0.1em]; tracking-[0.22em]; tracking-[0.2em]; tracking-tight; tracking-wider; w-10; w-18; w-2; w-2.5; w-3; w-3.5; w-4; w-5; w-6; w-9; w-full; xl:grid-cols-3; z-10; z-30 |
| frontend_appview/src/app/account/page.tsx | border-[#D4AF37]; border-[#E8DFC8]; border-b; focus:border-[#D4AF37]; font-bold; font-medium; font-semibold; font-serif-luxury; gap-2; gap-3; gap-3.5; h-12; h-4; mb-1; min-h-screen; mt-1; mt-2; p-3.5; p-4; p-5; pb-3; pl-9; pr-3; px-1; px-2; py-0.5; py-2; py-3; rounded-2xl; rounded-full; rounded-xl; shadow-md; shadow-xs; text-2xl; text-[10px]; text-[11px]; text-base; text-lg; text-sm; text-xs; tracking-wider; w-12; w-4; w-full |
| frontend_appview/src/app/occasions/OccasionsIndexView.tsx | aspect-[16/10.5]; aspect-[3/4.2]; border-white/10; border-white/20; duration-300; duration-500; duration-700; font-bold; font-light; font-medium; font-mono; font-normal; font-sans; font-semibold; gap-1; gap-1.5; gap-3; gap-5; h-3; h-3.5; h-7; hover:shadow-[0_20px_44px_rgba(0,0,0,0.22)]; leading-[1.08]; leading-relaxed; leading-snug; leading-tight; lg:grid-cols-4; lg:px-12; lg:px-8; max-w-2xl; max-w-3xl; max-w-[1240px]; max-w-[1440px]; max-w-lg; mb-1; mb-14; mb-3; mb-6; md:gap-6; md:p-14; md:p-6; md:pt-28; md:text-4xl; md:text-5xl; md:text-[17px]; md:text-base; min-h-screen; mx-auto; p-4.5; p-5; p-6; pb-16; pt-1; pt-20; pt-4; px-2; px-2.5; px-4; px-6; py-1; py-3; rounded-2xl; rounded-full; rounded-xl; shadow-[0_6px_22px_rgba(0,0,0,0.09)]; shadow-[0_8px_24px_rgba(0,0,0,0.12)]; shadow-md; shadow-xl; shadow-xs; sm:gap-2; sm:grid-cols-2; sm:h-4; sm:h-8; sm:leading-[1.04]; sm:mb-12; sm:mb-20; sm:mb-4; sm:p-10; sm:pt-24; sm:px-6; sm:rounded-3xl; sm:text-3xl; sm:text-4xl; sm:text-[11px]; sm:text-sm; sm:w-4; sm:w-8; sm:w-auto; text-2xl; text-[10.5px]; text-[10px]; text-[11.5px]; text-[11px]; text-[15px]; text-base; text-center; text-left; text-xs; tracking-[-0.02em]; tracking-[0.16em]; tracking-[0.18em]; tracking-[0.24em]; tracking-wider; tracking-widest; w-3; w-3.5; w-7; w-full; z-0; z-10 |
| frontend_appview/src/app/collections/CollectionsClientView.tsx | aspect-[4/3]; border-[#D5CFBF]; border-[#E0D9CE]; border-[#E5E0D8]; border-[#ECE7DE]; border-[#EFEAE2]; border-b; border-dashed; duration-200; duration-300; duration-700; ease-out; font-bold; font-light; font-medium; font-mono; font-sans; font-semibold; gap-1; gap-1.5; gap-2.5; gap-3; gap-3.5; gap-6; grid-cols-1; grid-cols-2; group-hover:shadow-xs; h-14; h-16; h-2.5; h-3; h-4; h-full; hover:border-[#3c0b1e]; hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)]; leading-[1.08]; leading-[1.25]; leading-relaxed; leading-tight; lg:gap-8; lg:grid-cols-12; lg:px-8; lg:text-6xl; max-h-[calc(100vh-120px)]; max-w-2xl; max-w-[1580px]; max-w-[160px]; max-w-lg; mb-2; mb-3; mb-4; md:gap-6; md:p-5; md:text-5xl; md:text-[16px]; min-h-screen; mt-1; mt-1.5; mt-2.5; mt-auto; mx-auto; p-10; p-3; p-4; p-[2.5px]; p-[2px]; pb-16; pb-2; pb-3; pt-1; pt-18; pt-2; pt-2.5; px-1; px-2.5; px-3; px-4; py-1; py-1.5; py-2; rounded-2xl; rounded-[15px]; rounded-[18px]; rounded-full; rounded-lg; rounded-xl; shadow-[0_2px_12px_rgba(0,0,0,0.04)]; shadow-md; shadow-xs; sm:gap-2; sm:gap-4; sm:gap-5; sm:grid-cols-2; sm:h-18; sm:leading-[1.04]; sm:max-w-none; sm:mb-3; sm:mb-6; sm:p-12; sm:p-4; sm:p-5; sm:pt-24; sm:pt-3.5; sm:px-6; sm:py-2; sm:rounded-2xl; sm:rounded-[17px]; sm:rounded-[20px]; sm:text-4xl; sm:text-[10px]; sm:text-[11px]; sm:text-[12px]; sm:text-[15px]; sm:text-base; sm:text-sm; sm:text-xs; sm:w-18; text-2xl; text-[10.5px]; text-[10px]; text-[11px]; text-[8px]; text-[9.5px]; text-[9px]; text-center; text-sm; text-xs; tracking-[-0.02em]; tracking-[0.06em]; tracking-[0.12em]; tracking-[0.2em]; tracking-tight; tracking-wider; w-14; w-16; w-2.5; w-3; w-4; w-[74px]; w-full; xl:grid-cols-3; z-10 |
| frontend_appview/src/app/story/page.tsx | aspect-[4/5]; gap-10; gap-8; grid-cols-1; grid-cols-2; h-px; lg:gap-16; lg:grid-cols-12; lg:px-10; max-w-2xl; max-w-[1280px]; max-w-[720px]; max-w-[960px]; max-w-md; mb-16; mb-2; mb-4; md:gap-12; md:grid-cols-4; md:pb-[140px]; md:pb-[80px]; md:pt-[160px]; md:py-[120px]; md:py-[140px]; md:py-[160px]; mt-12; mx-auto; pb-[100px]; pb-[60px]; pt-[140px]; px-6; py-[100px]; py-[120px]; py-[80px]; text-center; text-sm; w-16; w-full |
| frontend_appview/src/app/offline/page.tsx | border-2; border-[#D4AF37]; font-bold; font-serif-luxury; gap-2; h-12; h-24; h-4; h-5; leading-relaxed; max-w-xs; min-h-screen; p-6; pt-1; px-8; py-3; rounded-full; shadow-lg; shadow-xl; text-2xl; text-center; text-xs; tracking-wider; tracking-widest; w-12; w-24; w-4; w-5 |
| frontend_appview/src/app/gourmet-gifts/[slug]/page.tsx | aspect-[4/3]; border-2; border-[#9E7B35]; border-[#C5A880]; border-[#E0D9CC]; border-[#E0DDD6]; border-[#EADBCA]; border-[#F0ECE1]; border-b; border-t; duration-300; duration-500; font-bold; font-light; font-medium; font-mono; font-semibold; gap-1; gap-1.5; gap-10; gap-2; gap-2.5; gap-3; gap-4; gap-6; grid-cols-1; h-16; h-3; h-3.5; h-4; hover:shadow-md; hover:shadow-xs; leading-[1.08]; leading-relaxed; lg:gap-14; lg:grid-cols-12; lg:grid-cols-3; lg:px-10; max-w-[1280px]; mb-1; mb-6; mb-8; md:text-4xl; md:text-5xl; min-h-screen; mt-16; mx-auto; p-5; pb-20; pt-1; pt-12; pt-2; pt-24; pt-3; px-3; px-4; px-6; py-1; py-1.5; py-3; py-3.5; py-4; rounded-2xl; rounded-3xl; rounded-full; rounded-lg; rounded-xl; shadow-2xs; shadow-[0_8px_30px_rgba(0,0,0,0.06)]; shadow-md; shadow-sm; shadow-xs; sm:aspect-[1/1]; sm:grid-cols-2; sm:grid-cols-3; sm:h-20; sm:leading-[1.04]; sm:mb-8; sm:mt-24; sm:pt-28; sm:px-6; sm:text-3xl; sm:text-4xl; sm:text-[11px]; sm:text-base; sm:text-sm; sm:w-20; text-2xl; text-3xl; text-[10.5px]; text-[10px]; text-[11px]; text-[9px]; text-center; text-left; text-lg; text-sm; text-xs; tracking-[-0.02em]; tracking-[0.18em]; tracking-[0.25em]; tracking-wider; tracking-widest; w-16; w-3; w-3.5; w-4; w-full |
| frontend_appview/src/app/api/send-inquiry/route.ts | border-bottom; border-collapse; border-left; border-radius; border-top; font-family; font-size; font-style; font-weight; text-align; text-decoration; text-transform; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-family: Georgia, serif; font-size: 11px; font-size: 12px; font-size: 13px; font-size: 14px; font-size: 15px; font-size: 16px; font-size: 26px; font-weight: 300; font-weight: 500; font-weight: 600; font-weight: 700; font-weight: bold; letter-spacing: 0.05em; letter-spacing: 0.15em; letter-spacing: 0.1em; letter-spacing: 0.25em; line-height: 1.6 |
| frontend_appview/src/app/gift-boxing/[type]/page.tsx | aspect-[4/5]; border-[#E4E0D7]; border-b; border-t; duration-300; duration-500; font-bold; font-medium; font-sans; font-serif-luxury; gap-3; gap-6; grid-cols-2; group-hover:border-[#a6bd93]; h-18; h-3.5; h-4; h-7; h-full; hover:shadow-md; leading-snug; leading-tight; lg:grid-cols-4; max-w-7xl; max-w-[100px]; md:gap-14; md:gap-6; md:grid-cols-3; md:h-28; md:pb-20; md:px-8; md:text-2xl; md:text-3xl; md:text-base; md:w-28; min-h-screen; mt-2; mt-2.5; mx-auto; p-0.5; p-2.5; p-3; pb-28; pb-6; pt-2.5; pt-4; pt-6; px-2; px-3; px-4; py-2; rounded-full; rounded-none; shadow-2xs; sm:aspect-square; sm:gap-10; sm:gap-5; sm:grid-cols-2; sm:h-24; sm:h-4; sm:h-8; sm:max-w-[110px]; sm:p-4; sm:px-6; sm:text-[10px]; sm:text-sm; sm:text-xs; sm:w-24; sm:w-4; sm:w-8; text-[10px]; text-[11px]; text-[9px]; text-center; text-left; text-xl; text-xs; tracking-wider; w-18; w-3.5; w-4; w-7; w-full; z-10 |

### frontend_responsive

| Source | Extracted utilities / CSS typography |
| --- | --- |
| frontend_responsive/src/app/layout.tsx | font-sans; min-h-screen; w-full |
| frontend_responsive/src/app/page.tsx | md:pb-12; min-h-screen; pb-20 |
| frontend_responsive/src/app/globals.css | font-display; font-dream-always; font-face; font-family; font-pagio; font-serif-luxury; font-style; font-tropical-script; font-weight; font-family: 'DreamAlways'; font-family: 'DreamAlways', var(--font-dream-always), sans-serif !important; font-family: 'Pagio'; font-family: 'TropicalScript'; font-family: 'TropicalScript', var(--font-tropical-script), cursive !important; font-family: var(--font-cormorant), var(--font-playfair), 'Pagio', Georgia, serif !important; font-family: var(--font-jakarta), system-ui, -apple-system, sans-serif; font-weight: normal |
| frontend_responsive/src/components/ResponsiveProductGrid.tsx | border-[#E6D9FF]; border-b; border-white/20; duration-500; font-bold; font-medium; font-normal; font-sans; font-semibold; font-serif-luxury; gap-2; gap-3; gap-4; grid-cols-2; h-4; h-64; h-8; h-full; leading-snug; leading-tight; lg:grid-cols-4; max-w-7xl; md:gap-6; md:grid-cols-3; md:h-80; md:text-3xl; md:text-base; md:text-sm; md:text-xs; mt-1; mt-3; mx-auto; p-2.5; p-4; pt-2; px-4; px-6; py-10; py-2; py-2.5; rounded-3xl; rounded-full; rounded-xl; shadow-2xs; shadow-lg; shadow-md; shadow-xs; sm:grid-cols-2; text-2xl; text-[11px]; text-center; text-sm; text-xs; tracking-tight; w-4; w-8; w-full; z-0; z-10; z-20 |
| frontend_responsive/src/components/ResponsiveHero.tsx | border-[#E6D9FF]; border-b; font-bold; font-normal; gap-2.5; h-4; h-[520px]; h-full; leading-[1.08]; leading-relaxed; lg:h-[650px]; lg:text-7xl; max-w-7xl; max-w-md; max-w-xl; md:h-[600px]; md:pb-20; md:text-5xl; md:text-6xl; md:text-base; mx-auto; pb-12; pt-1; pt-2; px-6; px-8; py-4; rounded-full; shadow-xl; sm:text-4xl; sm:text-5xl; sm:text-sm; text-3xl; text-4xl; text-xs; tracking-normal; tracking-wider; w-4; w-full; z-0; z-10 |
| frontend_responsive/src/components/ResponsiveNavbar.tsx | border-[#E6D9FF]; border-b; border-transparent; duration-300; font-bold; font-medium; font-semibold; gap-0.5; gap-2; gap-3; gap-5; gap-8; h-0.5; h-4; h-5; h-6; leading-none; leading-tight; max-w-7xl; max-w-md; mb-0.5; md:text-2xl; md:text-[9px]; mt-0.5; mx-auto; p-1; p-2; pb-3; px-3; px-4; px-6; py-1; py-2; py-3; py-4; rounded-2xl; rounded-full; shadow-2xl; shadow-md; shadow-xs; text-[10px]; text-[8px]; text-[9px]; text-base; text-sm; text-xl; text-xs; tracking-[0.16em]; tracking-[0.34em]; tracking-tight; w-4; w-5; w-6; w-full; z-50 |

### 11.3 Animation parameter and CSS rule source map

### frontend_appview

| Source | Literal settings (line references) |
| --- | --- |
| frontend_appview/src/app/page.tsx | L50: duration: 1.1,; L51: stagger: 0.18,; L52: ease: 'power3.out', |
| frontend_appview/src/app/globals.css | L337: transition: transform var(--transition-image);; L352: transition: filter 650ms var(--ease-luxury), transform 900ms var(--ease-out-expo);; L368: transition: opacity 500ms var(--ease-luxury);; L375: transition: opacity 500ms var(--ease-luxury);; L392: transition: color var(--transition-fast);; L403: transition: width var(--transition-base);; L466: transition: none;; L472: transition: none;; L476: animation-duration: 0.01ms !important;; L478: transition-duration: 0.01ms !important; |
| frontend_appview/src/components/ImageTypography.css | L29: background-repeat: no-repeat;; L99: background-repeat: no-repeat;; L181: animation: scrollPulse 2s ease-in-out infinite;; L184: @keyframes scrollPulse {; L314: animation: none !important; |
| frontend_appview/src/components/Scrapbook.tsx | L77: transition={{ duration: 0.6, ease: 'easeOut' }}; L121: transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}; L163: transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}; L216: transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}; L257: transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }} |
| frontend_appview/src/hooks/useScrollReveal.ts | L54: duration = 0.9,; L55: stagger = 0.12,; L83: stagger: children ? stagger : 0,; L84: ease: 'power3.out',; L120: ease: 'none',; L157: ease: 'none', |
| frontend_appview/src/components/ui/futuristic-nav.tsx | L37: transition={{ type: "spring", stiffness: 500, damping: 30 }} |
| frontend_appview/src/components/ui/animated-testimonials.tsx | L86: duration: 0.5,; L87: ease: 'easeInOut',; L108: transition={{ duration: 0.4, ease: 'easeInOut' }} |
| frontend_appview/src/components/editorial/EditorialCollage.css | L108: transition: |
| frontend_appview/src/components/editorial/HouseOfSatraIntro.tsx | L44: transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}; L65: ? { duration: 1.6, ease: [0.16, 1, 0.3, 1] }; L66: : { duration: 2.5, ease: [0.4, 0, 0.2, 1] }; L86: transition={{ duration: 0.8, delay: 0.25 }}; L104: transition={{ duration: 0.8, delay: 0.4 }} |
| frontend_appview/src/components/editorial/EditorialCollage.tsx | L20: transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}; L38: transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}; L58: transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}; L75: transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}; L95: transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}; L112: transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}; L132: transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} |
| frontend_appview/src/components/editorial/ProductShowcase.tsx | L30: const ref = useScrollReveal<HTMLDivElement>({ animation: 'fadeUp', duration: 0.8 }); |
| frontend_appview/src/components/editorial/SectionHeader.tsx | L32: <ScrollReveal animation="fadeUp" duration={0.7}> |
| frontend_appview/src/components/brand/TrustedBusinessesMarquee.tsx | L169: @keyframes marquee {; L178: animation: marquee 60s linear infinite; |
| frontend_appview/src/components/modals/InquiryModal.tsx | L123: transition={{ type: 'spring', damping: 24, stiffness: 280 }} |
| frontend_appview/src/components/motion/ImageReveal.tsx | L30: duration = 1.0,; L33: animation: directionMap[direction], |
| frontend_appview/src/components/motion/TextReveal.tsx | L23: stagger = 0.04,; L24: duration = 0.7,; L67: ease: 'power3.out', |
| frontend_appview/src/components/motion/AnimatedHeading.tsx | L19: stagger = 0.09,; L20: duration = 0.8,; L40: transition: { staggerChildren: stagger, delayChildren: 0.1 },; L59: transition: {; L61: ease: [0.22, 1, 0.36, 1] as [number, number, number, number], |
| frontend_appview/src/components/motion/ScrollReveal.tsx | L21: duration = 0.9,; L22: stagger = 0.12, |
| frontend_appview/src/features/corporate/CorporateArchitecturalCatalogue.tsx | L266: duration: 1500,; L281: duration: 1500,; L296: toast(`${item.name} removed from curation tray`, { duration: 1200 }); |
| frontend_appview/src/features/gourmet/EditionDetailModal.tsx | L52: transition={{ duration: 0.35, ease: 'easeOut' }} |
| frontend_appview/src/features/gourmet/PrivateCatalogueModal.tsx | L63: transition={{ duration: 0.25, ease: 'easeOut' }} |
| frontend_appview/src/features/ecommerce/BoxCapacityModal.tsx | L71: transition={{ type: 'spring', damping: 25, stiffness: 300 }} |
| frontend_appview/src/features/ecommerce/CustomGiftBoxesSection.tsx | L141: duration: 1200,; L154: duration: 1200,; L171: duration: 1200, |
| frontend_appview/src/features/inquiry/CuratedInquirySection.tsx | L118: duration: 4000, |
| frontend_appview/src/features/inquiry/StickyInquiryDrawer.tsx | L108: transition={{ type: 'spring', damping: 28, stiffness: 260 }} |
| frontend_appview/src/features/shell/OnlineToast.tsx | L28: duration: 3000, |
| frontend_appview/src/features/shell/BottomNav.tsx | L53: transition={{ type: 'spring', stiffness: 400, damping: 30 }} |
| frontend_appview/src/features/shell/Footer.tsx | L78: transition: { staggerChildren: 0.08 },; L94: transition: {; L95: duration: 0.7,; L96: ease: [0.22, 1, 0.36, 1], |
| frontend_appview/src/features/shell/ResponsiveShell.tsx | L123: transition: 'background-color 400ms cubic-bezier(0.4,0,0.2,1), border-color 400ms cubic-bezier(0.4,0,0.2,1), backdrop-filter 400ms cubic-bezier(0.4,0,0.2,1)',; L178: transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}; L195: transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}; L234: transition={{ duration: 0.3 }}; L240: transition={{ duration: 0.15 }}; L246: transition={{ duration: 0.3 }}; L265: transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}; L279: transition={{ duration: 0.3, delay: 0.08 + i * 0.04, ease: [0.4, 0, 0.2, 1] }} |
| frontend_appview/src/features/customizer/GiftBoxCustomizerModal.tsx | L99: transition={{ type: 'spring', stiffness: 350, damping: 30 }} |
| frontend_appview/src/features/brand/PackagingExperienceSection.tsx | L80: const springConfig = { stiffness: 220, damping: 28, bounce: 100 }; |
| frontend_appview/src/features/search/SearchModal.tsx | L61: duration: 1500,; L73: transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} |
| frontend_appview/src/features/cart/CurationDrawer.tsx | L70: transition={{ type: 'spring', damping: 25, stiffness: 260 }}; L98: transition={{ type: 'spring', damping: 28, stiffness: 300, mass: 0.7 }}; L155: transition={{ duration: 0.18 }} |
| frontend_appview/src/features/hero/GiftBoxingCards.tsx | L36: transition={{ duration: 0.5, delay: idx * 0.1 }} |
| frontend_appview/src/features/hero/SpottedSection.tsx | L43: duration = 20,; L55: ease: 'linear',; L56: repeat: Infinity,; L86: duration: 25,; L87: ease: 'linear',; L88: repeat: Infinity,; L183: <VerticalMarqueeColumn images={COLUMN_1_IMAGES} duration={24} />; L184: <VerticalMarqueeColumn images={COLUMN_2_IMAGES} duration={18} reverse />; L185: <VerticalMarqueeColumn images={COLUMN_3_IMAGES} duration={22} /> |
| frontend_appview/src/app/corporate/page.tsx | L19: stagger={0.08}; L20: duration={0.75} |
| frontend_appview/src/app/test-layout/page.tsx | L51: duration: 1200,; L66: duration: 1200,; L81: toast(`${item.name} removed`, { duration: 1000 }); |
| frontend_appview/src/app/story/page.tsx | L51: stagger={0.03}; L136: stagger={0.03} |
| frontend_appview/src/app/gourmet-gifts/[slug]/page.tsx | L58: duration: 2000, |

### frontend_responsive

| Source | Literal settings (line references) |
| --- | --- |
| frontend_responsive/src/components/ResponsiveHero.tsx | L48: transition={{ duration: 1.2, ease: 'easeOut' }}; L62: transition={{ duration: 0.8, ease: 'easeOut' }} |

### 11.4 Source file coverage

frontend_appview: 126 source files scanned; .css=3, .ts=29, .tsx=94.

frontend_responsive: 6 source files scanned; .css=1, .tsx=5.

backend: 69 source files scanned; .js=69.

Source evidence paths are relative to repository root. For visual decisions, start with global tokens and active page source; use inventories to find component overrides. Snapshot ends here.
