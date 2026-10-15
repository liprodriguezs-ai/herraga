---
name: HERRAGA Refacciones
description: The front of a Mexican tractocamión — cab-paint navy, chrome trim lettering, amber clearance lights, HERRAGA red and mud-flap rubber — selling diesel engine parts by engine model.
colors:
  cab: "#08303f"
  cab-deep: "#041d27"
  cab-line: "#1a4a5c"
  cab-glow: "#0d4256"
  cab-enamel: "#0b3647"
  cab-well: "#062634"
  cab-well-line: "#23495a"
  red: "#c0101f"
  red-hover: "#d4192a"
  red-deep: "#8f0915"
  red-bright: "#ff3b47"
  amber: "#ffb22e"
  amber-hot: "#ffd27a"
  rubber: "#15181b"
  rubber-well: "#0d0f11"
  rubber-line: "#3a4248"
  paint: "#f3f5f6"
  paint-2: "#e4e9ec"
  white: "#ffffff"
  ink: "#0b1b22"
  ink-soft: "#3d5360"
  text-on-cab: "#c9d6dc"
  text-on-cab-muted: "#9fb0b8"
  text-on-rubber-muted: "#8d999f"
  chrome-2: "#d9e1e6"
  chrome-5: "#a9b5bc"
  bezel-light: "#c9d2d7"
  bezel-dark: "#5c6a71"
  whatsapp-green: "#1faa53"
typography:
  display:
    fontFamily: "'Big Shoulders Display Variable', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(2.6rem, 1.8rem + 3.8vw, 5.2rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Big Shoulders Display Variable', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.9vw, 3.2rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Big Shoulders Display Variable', 'Barlow Condensed', sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2.05rem)"
    fontWeight: 850
    lineHeight: 0.95
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Barlow Condensed', Barlow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  tag: "3px"
  nav: "4px"
  base: "6px"
  plate: "10px"
  panel: "14px"
  pill: "999px"
spacing:
  s: "clamp(0.75rem, 0.6rem + 0.5vw, 1rem)"
  m: "clamp(1.25rem, 1rem + 1vw, 2rem)"
  l: "clamp(2rem, 1.5rem + 2vw, 3.5rem)"
  xl: "clamp(3.5rem, 2.5rem + 4.5vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0.7rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.red-hover}"
  button-chrome:
    textColor: "{colors.cab-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0.7rem 1.5rem"
    height: "3.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cab}"
    rounded: "{rounded.base}"
    padding: "0.7rem 1.5rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.cab}"
    textColor: "{colors.white}"
  button-sm:
    padding: "0.45rem 1.05rem"
    height: "2.6rem"
  input-cab:
    backgroundColor: "{colors.cab-well}"
    textColor: "{colors.white}"
    rounded: "{rounded.base}"
    padding: "0.7rem 0.9rem"
    height: "3.1rem"
  input-rubber:
    backgroundColor: "{colors.rubber-well}"
    textColor: "{colors.white}"
    rounded: "{rounded.base}"
    padding: "0.7rem 1rem 0.7rem 3rem"
    height: "3.4rem"
  engine-tag:
    textColor: "#17252d"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.3rem 1.25rem"
    height: "2.3rem"
  emblem-engine:
    backgroundColor: "{colors.cab-enamel}"
    textColor: "{colors.white}"
    rounded: "{rounded.plate}"
    padding: "0.7rem 1.2rem 0.6rem"
  emblem-part:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.plate}"
    padding: "0.7rem 1.2rem 0.6rem"
  point-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cab}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.85rem 0.45rem 0.6rem"
  whatsapp-fab:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    height: "3.6rem"
---

# Design System: HERRAGA Refacciones

## Overview

**Creative North Star: "Lodera y cromo"**

The page is the front of a Mexican tractocamión, read top to bottom: amber clearance lights on the roof, a chrome nameplate headline over a radiator grille of chrome slats, a chrome bumper carrying engine brands, then the cab side and its mud flaps. Every surface is a material that exists on a decorated Mexican truck: cab-paint navy, white cab paint, black mud-flap rubber, polished chrome, HERRAGA red and amber lamp glass. Nothing is a generic "card"; containers are plates, bezels, flaps and emblems.

Sections alternate between dark cab paint (header, hero, brands, footer), black rubber (the engine catalog), white cab paint (pillars, products, branches) and solid HERRAGA red (the quote form). Density is workshop-legible: big condensed type, large tap targets (3.25rem buttons), short copy. Chrome is the jewelry; it sits on lettering, trim and bezels, and the eye reads it as metal because every chrome gradient reflects a horizon (bright sky, dark horizon line, warm ground).

The world explicitly refuses the stock parts-store template: dark hero with truck photo and an icon-card grid.

**Key Characteristics:**
- Truck materials, not UI chrome: every container is a nameplate, bezel, mud flap, emblem or bumper.
- Horizon-reflection chrome in three strengths, chosen by whether it carries lettering.
- Condensed uppercase display type for every heading; highway-sign Barlow Condensed for labels and buttons.
- Amber is light: lamps, focus, active switches, matches, and links on dark paint.
- Every section ends near a WhatsApp action; red is the color of that action.

## Colors

A two-paint palette (cab navy and HERRAGA red) on white cab paint and black rubber, with chrome as a material rather than a color and amber reserved for light.

### Primary
- **HERRAGA Red** (red): the incumbent brand red. Primary buttons (always the WhatsApp action), the quote section field, part-brand emblems, filete pinstripes, check discs and branch badges, the reflective tape stripe on mud flaps. `red-hover` is its hover state only; `red-deep` is the dark end of red gradients (quote section, part emblems).
- **Signal Red** (red-bright): red that has to read on navy: the hero subline, required-field asterisks, invalid-field borders, guarantee icons on the cab strip.

### Secondary
- **Cab Navy** (cab): the cab paint. Section titles on white paint, ghost buttons, the brands section and guarantee strip, `theme-color`.
- **Deep Cab** (cab-deep): the shadowed cab. Header, footer, the bottom of the hero gradient, the dark panels inside chrome bezels (branch list, quote form), text on chrome plates.
- **Cab Glow / Cab Enamel** (cab-glow, cab-enamel): `cab-glow` is the radial highlight that makes cab paint look curved (hero, brands); `cab-enamel` is the top of the enamel gradient inside emblems.
- **Cab Well** (cab-well, cab-well-line): input fields recessed into cab paint, with their 2px line.
- **Cab Line** (cab-line): hairline dividers and the menu toggle outline on navy.

### Tertiary
- **Clearance Amber** (amber, amber-hot): lamp light. The five roof lights, the focus ring, the active tab switch lamp, matching engine tags, the search icon, phone links and section labels on dark paint. `amber-hot` is the lamp core and the hover state of amber links.

### Neutral
- **Cab White** (paint, paint-2): page background and the light sections; `paint-2` is the hairline ring around chips and product photos.
- **White** (white): text on navy, rubber and red; the branches section background.
- **Ink** (ink, ink-soft): body text on white paint; `ink-soft` for ledes and body copy in light sections.
- **Mud-Flap Rubber** (rubber, rubber-well, rubber-line): the engine catalog section, recessed controls on rubber, their borders and the dashed empty state.
- **Text on Cab** (text-on-cab, text-on-cab-muted): secondary text on navy; `text-on-rubber-muted` is its rubber counterpart (placeholders, panel notes).
- **Chrome Tints** (chrome-2, chrome-5): flat chrome-colored text (nav links, form labels, emblem values) and the chrome filete tone.
- **Bezel Rings** (bezel-light, bezel-dark): the two-ring polished bezel drawn around dark panels and photos.
- **WhatsApp Green** (whatsapp-green): the floating WhatsApp disc only, where the platform's own color identifies the channel.

### Chrome materials
Chrome is a gradient material defined on `:root`, never a flat swatch:
- **Text-bearing plate** (`--chrome-h`): a softened horizon plus a diagonal sheen. Used on every chrome surface that carries lettering: chrome buttons, the hero bumper face, the active tab, emblem bezels, photo frames in Pillars, social discs. Softened so dark lettering on it keeps AA contrast.
- **Trim bar** (`--chrome-bar`): the full-strength horizon with a dark horizon line. Used only on trim that carries no lettering: the header bottom edge, bumper lips, the mud-flap hanger and weight bar.
- **Lettering horizon** (`--chrome`, and the same stops hard-coded in `ChromeLetters` and `public/grille.svg`): the full horizon clipped into letters and the grille surround.

### Named Rules
**The Lettering Decides the Chrome Rule.** If a chrome surface carries text, it uses the text-bearing plate (`--chrome-h`). If it carries none, it uses the trim bar (`--chrome-bar`). The trim bar's dark horizon line would cut straight through lettering.

**The Red Means WhatsApp Rule.** A red button opens WhatsApp. The only other red primary in the build is the newsletter submit, which itself falls back to WhatsApp when no list provider is configured; nothing else gets the red plate.

**The Amber Is Light Rule.** Amber appears where a lamp would glow or where something is switched on: lights, focus, the active switch, search matches, links on dark paint. It is never a background field.

## Typography

**Display Font:** Big Shoulders Display Variable (with Barlow Condensed, sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Label Font:** Barlow Condensed (with Barlow, sans-serif)

**Character:** Big Shoulders is the stamped, condensed lettering of a cab nameplate; Barlow is the highway-sign grotesque that carries everything a buyer reads at arm's length in a workshop.

### Hierarchy
- **Display** (850, step 4 `clamp(2.6rem…5.2rem)`, 0.95): section titles, always uppercase, `text-wrap: balance`. Three of them (hero, Busca tu motor, Las mejores marcas) render as chrome SVG lettering at weight 900; the live text stays in the heading as visually hidden text.
- **Headline** (850, step 3 `clamp(2rem…3.2rem)`, 0.95): pillar row titles, catalog panel titles, the newsletter title.
- **Title** (850–900, step 2 `clamp(1.5rem…2.05rem)`): product names, big phone numbers in the branches panel, quote and footer.
- **Plate** (900, `clamp(1.75rem, 1.35rem + 1vw, 2.3rem)`, 1): engine-brand nameplates on mud flaps; emblems use `clamp(1.35rem, 1.1rem + 0.9vw, 2rem)`.
- **Lede** (400, step 1, 1.45): section ledes, max 60ch (44–52ch inside split layouts), in `ink-soft` on paint or `text-on-cab` on navy.
- **Body** (400, step 0, 1.6): paragraphs, max ~52ch.
- **Label** (600–700, 1–1.2rem, letter-spacing 0.03–0.08em, uppercase): buttons (0.06em), nav (0.08em), form labels (0.08em), engine tags (0.04em), chips and spec lines (0.03em). Group headings on dark paint open it up to 0.14–0.16em in amber.

### Named Rules
**The Live Text Rule.** Chrome lettering is decorative SVG with `aria-hidden`; the same words exist as real heading text. Text never lives only in an image.

**The All-Caps Display Rule.** Every h1–h4 is uppercase Big Shoulders at 850+. Sentence case belongs to body copy and ledes only.

## Layout

A single 1240px column (`--wrap: min(1240px, 100% - 2 * clamp(1rem, 4vw, 2.5rem))`) with full-bleed section backgrounds. Vertical rhythm is the fluid `--space-*` scale: sections pad `xl` top and bottom; headers sit `l` above their content.

Recurring compositions:
- **Split rows**: two unequal columns (1.15fr/0.85fr hero, 1.1fr/0.9fr pillars, 0.9fr/1.1fr quote) that alternate media side in the pillars (`flip`).
- **Catalog**: a sticky 0.32fr intro column (photo, title) beside an auto-fill grid of mud flaps (`minmax(15.5rem, 1fr)`).
- **Shelf**: 3 / 2 / 1 columns of products at >1024 / ≤1024 / ≤640px.
- **Bands**: full-bleed strips (bumper, guarantee strip with a red motto wedge cut by `clip-path`).

Responsive rules: two-column layouts collapse to one at 900px (pillars 860px); the header swaps to a toggle menu at 920px that unrolls with `clip-path`; the hero grille becomes a 10rem (7.5rem at ≤520px) horizontal band with the emblem laid flat; at ≤520px hero CTAs go full width and the header WhatsApp button collapses to an icon square. Scroll padding is 5.5rem to clear the sticky header.

## Elevation & Depth

Depth is physical, not interface elevation: light comes from above, so things are bevelled (inset top highlight, inset bottom shade) and cast soft shadows downward. Dark panels are recessed into chrome bezels; inputs are wells with inner shadow; chrome parts carry specular highlights.

### Shadow Vocabulary
- **Lift** (`--shadow-lift: 0 10px 24px -12px rgb(4 29 39 / 0.45), 0 2px 4px -2px rgb(4 29 39 / 0.3)`): product photos and pillar frames on white paint.
- **Bevelled plate** (`inset 0 1px 0 rgb(255 255 255 / 0.28), inset 0 -2px 0 rgb(0 0 0 / 0.25), 0 8px 18px -10px rgb(0 0 0 / 0.6)`): buttons; the cast part deepens on hover.
- **Polished bezel** (`0 0 0 4px #c9d2d7, 0 0 0 6px #5c6a71, <soft cast>`): two rings around dark panels (branch list, quote form) and catalog photos; 3px/5px around the hero emblem.
- **Well** (`inset 0 2px 6px rgb(0 0 0 / 0.6)`): search field, tab rail, emblem enamel.
- **Lamp glow** (`0 0 18px 4px rgb(255 178 46 / 0.55)` and wider): roof lights, the active switch, matching tags.

### Named Rules
**The Light From Above Rule.** Highlights sit on top edges, shade on bottom edges, and cast shadows fall down. A shadow cast sideways or upward breaks the material.

**The Recessed Panel Rule.** A dark panel on a light or red field sits inside a polished bezel; it is mounted on the truck, not floating over it.

## Shapes

Corners are slight and functional (6px base), growing only for mounted parts: tags 3px, nav hovers 4px, buttons and inputs 6px, emblems and photo plates 10px, bezelled panels 14px, the grille surround 26px. Fully round shapes are reserved for lamps, rivets, badges, chips, social discs and the WhatsApp disc.

Silhouettes come from the truck: the mud flap is clipped with a slight bottom flare and cut lower corners; the guarantee strip's motto is a red wedge with a slanted left edge; filete pinstripes are a double line with a hand-painted centre scroll. Riveted parts (flap hangers, engine tags) show their rivets as small radial-gradient discs.

## Components

### Buttons
Trim plates: tactile, bevelled, uppercase Barlow Condensed.
- **Shape:** gently squared (6px); min-height 3.25rem, small variant 2.6rem.
- **Primary (red):** HERRAGA red, white label, WhatsApp icon leading. Always the WhatsApp action.
- **Chrome:** text-bearing chrome plate with deep-cab label; used for secondary navigation ("Busca tu motor") and the quote submit on red.
- **Ghost:** transparent with a 2px inset navy ring; fills navy on hover. Used for the phone-call secondary action on white paint.
- **Hover / Active:** lifts 2px with a deeper cast shadow (180ms, `--ease-out`); primary brightens to `red-hover`, chrome brightens 6%; active returns to rest. Disabled is 60% opacity, not-allowed cursor.
- **Focus:** global 3px amber outline, 3px offset.

### Engine tags
Stamped brushed-steel tags riveted to the mud flap, one per engine code, each a WhatsApp link with the engine prefilled.
- **Style:** brushed vertical grain over a light steel gradient, 3px corners, two rivets, dark label with a white letterpress text-shadow.
- **States:** hover lifts 2px and turns amber; a search match (`is-hit`) turns amber with an amber ring and glow; a non-match (`is-miss`) drops to 28% opacity in greyscale.

### Mud flaps (signature)
Moulded black rubber with a riveted chrome hanger (trim bar) on top, three rivets, a faint vertical grain, cut lower corners, and a chrome weight bar carrying red/white reflective tape. The brand nameplate on top is chrome lettering with a shallower horizon gradient so it stays legible at small size.

### Chrome nameplate lettering (signature)
`ChromeLetters` renders headings as SVG: a dark outline-and-cast-shadow layer under a horizon-gradient fill with a specular bevel filter. In the hero it is revealed by a left-to-right `polish` wipe after the lights ignite.

### Tabs (dash switches)
A recessed rail on rubber. Each tab carries a lamp dot that lights amber with a glow when selected; the selected tab becomes a chrome plate. A count badge shows matching engines and updates while searching. Arrow keys move between tabs. Without JS, all panels stay visible.

### Inputs / Fields
- **On cab (quote, newsletter):** cab-well fill, 2px cab-well-line border, 6px corners, chrome-tinted uppercase labels, red-bright asterisk.
- **On rubber (engine search):** rubber-well fill, 2px rubber-line border, inner well shadow, amber search icon.
- **Focus:** border turns amber (no outline). **Error:** border red-bright, message in light pink (`#ffb3b8`) below; success status in light green.

### Emblems
Bolt-on brand emblems: a 4px chrome bezel around an enamel centre (navy for engine brands, red for HERRAGA's part brands) with debossed white Big Shoulders lettering. Hover tilts −1° and lifts 3px.

### Chips
White pills with a paint-2 hairline and a red icon, uppercase label type. Used for payment and service points in pillar rows.

### Navigation
Sticky deep-cab bar with a chrome trim edge; uppercase chrome-tinted links that turn white over a 7% white wash; the national phone in amber. Gains a cast shadow after 24px of scroll. Below 920px it becomes a full-width dropdown that unrolls with a `clip-path` wipe (320ms) and closes on Escape or link click.

### Clearance lights
Five amber lamp pills across the hero top, each with a dark bezel ring and glow, igniting in sequence (900ms each, 110ms stagger).

### WhatsApp floating button
A green pill with a white ring, bottom-right. Shows its label while the hero is in view and collapses to a disc past it (always a disc under 640px).

### Filete
A hand-painted double pinstripe with a centre scroll, in red, chrome or amber tone. Used as a section divider and close.

## Do's and Don'ts

### Do:
- **Do** build every new container from a truck material: chrome plate, bezelled dark panel, mud-flap rubber, emblem, bumper band.
- **Do** pick chrome by content: `--chrome-h` under lettering, `--chrome-bar` on bare trim.
- **Do** keep heading text in the DOM when it is drawn as chrome lettering.
- **Do** end each section near a red WhatsApp button, and prefill the message with the engine or part when known.
- **Do** use amber for anything lit, focused, selected or matched.
- **Do** keep motion short and eased (`cubic-bezier(0.16, 1, 0.3, 1)`, 160–380ms for state, up to 1100ms for the hero entrance), and let `prefers-reduced-motion` collapse it.

### Don't:
- **Don't** use the stock parts-store template: a dark hero with a truck photo and a grid of icon cards.
- **Don't** put lettering on the full-strength trim bar or the raw lettering horizon at small sizes; its dark horizon line breaks legibility.
- **Don't** use the red primary button for anything that is not the WhatsApp channel.
- **Don't** use amber as a background field or a large fill.
- **Don't** cast shadows sideways or upward; light comes from above.
- **Don't** put essential text inside images.
