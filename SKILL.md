---
name: lineup-pitch-card
description: >
  Build a self-contained, single-file HTML "starting lineup" visual: a top-down
  soccer pitch with players positioned by their role, each shown as a minimal
  flat-vector head avatar (skin tone + hair color/style only, identical kit
  otherwise) carrying a jersey-number badge and a quality rating chip out of 10,
  plus a click-to-open scouting panel describing each player's type, what they're
  known for, and their strengths. Use this whenever someone asks for a "lineup on
  a pitch / field," a "starting XI graphic," a "formation card," a "team rating
  board," or wants to recreate this exact style for a different team, sport, or
  set of players. Produces one .html file with no build step and no external JS
  dependencies (Google Fonts is the only network call, and it degrades gracefully).
license: Internal use.
---

# Lineup Pitch Card

A reusable recipe for an interactive "starting lineup" graphic. The output is a
**single self-contained `.html` file**: a vertical top-down pitch with
positioned player tokens on the left and a sticky scouting panel on the right.
Each token is a hand-drawn SVG head (skin + hair only, everyone in the same kit),
a jersey number, and a 0–10 rating chip. Clicking a token fills the panel with
that player's scouting card.

This document is the spec. Follow it section by section. The fastest path is:
read **Quick Start**, copy `reference/template.html`, then replace only the
two config blocks (`TEAM` and `PLAYERS`) and re-skin the CSS variables. Everything
else — pitch markings, layout, panel behavior, responsiveness, accessibility —
is already correct and should not be rebuilt from scratch.

---

## 0. Quick Start (the 90% path)

1. **Copy the template.** `reference/template.html` is the canonical, working
   implementation. Copy it to your output path. Do **not** retype the markup or
   the pitch geometry from memory — it is fiddly and easy to get subtly wrong.
2. **Gather real data.** If this is a real, current team, web-search the
   confirmed lineup/formation first (rosters change; don't trust training data
   for "who starts today"). For each starter you need: display surname, full
   name, shirt number, position label, club/affiliation, a 0–10 rating, a
   one-paragraph "what kind of player," a one-paragraph "known for," 3–5 strength
   tags, and three appearance fields (`skin`, `hair`, `style`).
3. **Edit two blocks only.** Replace the `TEAM` object and the `PLAYERS` array
   in the `<script>`. Set positions with the coordinate system in §4.
4. **Re-skin.** Change the CSS custom properties in `:root` and the two accent
   colors used in the avatar kit (§6.4) and the `.eyebrow .flag` (§3.4) to the
   team's colors.
5. **Verify.** Render it (headless browser screenshot if available) at desktop
   **and** ~390px mobile widths. Check: no token labels overlap, no token sits on
   a pitch line in a way that hides its number, the rating chips are legible, and
   clicking each token populates the panel. See §9 checklist.
6. **Ship one file.** Output to the deliverable folder and present it. No CSS/JS
   split — it must be portable and openable by double-click.

If the request is *exactly* "same style, different team," you are essentially
done after steps 1–5. The rest of this document explains the why, the knobs, and
how to extend it (different formations, sports, more data fields).

---

## 1. What you are building (anatomy)

```
┌─────────────────────────────────────────────────────────────┐
│  ▌ EYEBROW (flag chip + competition / context line)          │
│  BIG DISPLAY HEADLINE  (team — accent word)                  │
│  sub line: formation · what the rating means · how to use    │
│                                                              │
│  ┌───────────────────────┐   ┌────────────────────────────┐  │
│  │  PITCH (aspect 2/3)   │   │  ▬▬▬ tricolor stripe       │  │
│  │                       │   │                            │  │
│  │   ◯20  ← token:       │   │  EYEBROW (position)        │  │
│  │        badge+avatar   │   │  PLAYER NAME      #10      │  │
│  │        +rating+name   │   │  club                      │  │
│  │                       │   │                            │  │
│  │   ◯10  ◯17  ◯2        │   │  9.0 /10  ▓▓▓▓▓▓▓░░  bar   │  │
│  │                       │   │                            │  │
│  │   ◯4   ◯8             │   │  WHAT KIND OF PLAYER       │  │
│  │                       │   │  paragraph…                │  │
│  │  ◯5  ◯13 ◯3  ◯16      │   │  KNOWN FOR                 │  │
│  │       ◯24             │   │  paragraph…                │  │
│  │                       │   │  STRENGTHS                 │  │
│  └───────────────────────┘   │  [chip][chip][chip][chip]  │  │
│                              └────────────────────────────┘  │
│  footer: provenance + "ratings are editorial" disclaimer     │
└─────────────────────────────────────────────────────────────┘
```

Five regions, in source order:

1. **Header** — eyebrow (a tiny flag chip + a context string), a large display
   `<h1>` with one accent-colored word, and a sub line.
2. **Pitch** (`.pitch-frame > .pitch`) — a CSS-drawn vertical football pitch.
   Player tokens are absolutely positioned inside it by percentage.
3. **Player token** (`.player`) — a button containing a number badge, the SVG
   avatar, a rating chip, and a name label underneath.
4. **Scouting panel** (`.panel`) — sticky on desktop; shows an empty hint state
   until a token is clicked, then renders the selected player's card.
5. **Footer** — provenance (date/venue/source) and the "ratings are editorial"
   disclaimer. Always include the disclaimer; ratings are opinion.

---

## 2. Design system (tokens)

The visual identity lives in CSS custom properties on `:root`. The reference
theme is a **stadium-night** look: deep navy field-of-night background, a real
green pitch, chalk-white markings, a single gold accent for ratings, and a
team-derived primary/secondary used for the kit, badge, flag, and panel stripe.

### 2.1 Reference palette (USA build)

| Variable      | Value             | Used for                                          |
|---------------|-------------------|---------------------------------------------------|
| `--night`     | `#0b1530`         | Page background base                              |
| `--night-2`   | `#101d40`         | Panel background top                              |
| `--pitch-a`   | `#2c7a3b`         | Pitch mow-stripe A                                |
| `--pitch-b`   | `#2f8341`         | Pitch mow-stripe B                                |
| `--chalk`     | `rgba(255,255,255,.85)` | Pitch line markings                         |
| `--usa-red`   | `#c9243f`         | Accent word, panel eyebrow, stripe, flag          |
| `--usa-blue`  | `#1f3a93`         | Number badge, panel stripe, chip background       |
| `--gold`      | `#f2c14e`         | Rating chips, rating bar, active-token ring       |
| `--ink`       | `#f4f6fb`         | Default text                                      |
| `--muted`     | `#9aa6c4`         | Secondary text, labels                            |

> The two team-identity colors are deliberately named `--usa-red` / `--usa-blue`
> in the reference. When theming a new team, **either** rename them to neutral
> names (`--primary` / `--secondary`) and update all references, **or** just keep
> the names and change the values. Renaming is cleaner; see §7.

### 2.2 Re-theming rule of thumb

- Pick the team's **primary** (badge / stripe / flag) and **secondary** (accent
  word / panel eyebrow). These replace `--usa-blue` and `--usa-red`.
- Keep **gold** (`--gold`) for the rating system *unless* it clashes badly with
  the team colors (e.g. a gold-and-black team). If it clashes, switch the rating
  accent to a cool contrast (e.g. `#5ad1c4` teal or `#7aa2ff` periwinkle) and
  update `--gold` everywhere it's used (rating chip, rating bar gradient, active
  ring, empty-state hint). The rating accent should be the *one* color that is
  not a team color, so ratings read as an external/objective layer.
- Keep the background deep and desaturated so the green pitch and bright chips
  pop. Avoid a light background — the whole look depends on contrast.
- The pitch greens can shift to match grass mood (darker `#1f5e2c`/`#236a33`
  for an evening look) but keep two close shades for the mow stripes.

### 2.3 Typography

Two Google families, loaded with `<link>` and `preconnect`:

- **Display:** `Anton` (condensed, heavy, uppercase). Used for `h1`, the number
  badge, the big rating number, panel player name, and the empty-state hint.
- **Body/UI:** `Barlow` (400/500/600/700). Everything else.

The pairing is a deliberate "sports broadcast lower-third" feel: a condensed
display face shouting the names, a clean grotesque carrying the prose. If you
swap families, keep that contrast — a heavy condensed display + a neutral
sans body. Always include a `system-ui, sans-serif` fallback on `body` so the
file still reads correctly before/without the font fetch.

Type scale (don't drift from these without reason):

- `h1`: `clamp(34px, 6vw, 58px)`, line-height `1.02`, uppercase.
- eyebrow / section labels / chips-context: `11–12px`, weight `700`,
  `letter-spacing` `.18–.2em`, uppercase.
- panel player name: `clamp(26px, 3.4vw, 36px)`, uppercase.
- big rating: `34px` Anton.
- body paragraphs in panel: `14.5px`, line-height `1.6`.

---

## 3. Header region

### 3.1 Structure

```html
<header>
  <span class="eyebrow"><span class="flag" aria-hidden="true"></span>CONTEXT LINE</span>
  <h1>TEAM <span class="red">ACCENT WORD</span></h1>
  <p class="sub">formation · what the rating means · how to use</p>
</header>
```

### 3.2 Content rules

- **Eyebrow context line:** competition + stage + opponent or date, in caps.
  e.g. `FIFA WORLD CUP 2026 · GROUP D · VS PARAGUAY`. Keep it factual; this is
  where provenance starts. Drive it from `TEAM.context`.
- **Headline:** `TEAM.name` plus a short accent word/phrase
  (`TEAM.headlineAccent`, e.g. "Starting XI", "First Team", "Game Day"). Only the
  accent word gets the secondary color via `.red` (rename the class if you
  renamed the variable).
- **Sub line:** state the formation, explain the gold chip means "rating out of
  10," and tell the user to tap a player. This is functional copy — it teaches
  the interaction. Drive it from `TEAM.formation` + a fixed explanation.

### 3.3 The accent class

`.red` is just `color: var(--usa-red)`. If you rename the variable to
`--secondary`, rename this class to `.accent` and update the one `<span>`.

### 3.4 The flag chip

`.eyebrow .flag` is a 20×13px CSS-painted flag. The reference paints the US flag
with a `repeating`/layered `linear-gradient` plus an `::after` canton. For a new
team/nation:

- **Simple tricolor** (most flags): a single `linear-gradient`. Vertical thirds:
  `linear-gradient(90deg, A 0 33.33%, B 33.33% 66.66%, C 66.66%)`. Horizontal
  thirds: same with `180deg`.
- **Club crest:** don't try to draw it. Use two diagonal team colors
  (`linear-gradient(135deg, primary 50%, secondary 50%)`) as an abstract chip, or
  drop the flag entirely (remove the `<span class="flag">` and the gap closes).
- Keep it tiny and abstract; it's a flavor accent, not a literal reproduction.
  Do **not** fetch or embed real crest/flag image assets — keep the file self
  contained and avoid trademarked logos.

---

## 4. The pitch and the coordinate system

### 4.1 Pitch construction

The pitch is pure CSS — no SVG, no image. `.pitch` is `aspect-ratio: 2/3`
(portrait) with a `repeating-linear-gradient` of two greens for mow stripes and
an inset shadow for vignetting. Markings are absolutely-positioned `<div>`s with
`--chalk` borders: outer border, halfway line, center circle + spot, both
penalty boxes (18-yard), both six-yard boxes, both penalty spots, and both
penalty arcs (the "D"). The arcs use `border-radius` + a removed border-edge so
only the protruding curve shows.

**Do not regenerate this geometry by hand.** Copy the `.pitch` block and its
child `<div>`s verbatim from the template. The numbers (`3.5%` inset, `8.5%`
stripe, box widths, arc offsets) are tuned to look like a real pitch at a 2:3
ratio. If you must scale it, scale the container, not the internals.

### 4.2 Player coordinates

Each player has `x` and `y` as **percentages of the pitch box**, applied as
`left: x%` / `top: y%`, with the token centered via
`transform: translate(-50%,-50%)`.

- **Origin:** top-left of the pitch is `(0,0)`; bottom-right is `(100,100)`.
- **Your team attacks UP.** Your goalkeeper is at the **bottom** (`y ≈ 90`); your
  striker is near the **top** (`y ≈ 19`). Larger `y` = deeper (more defensive).
- `x = 50` is the central spine. `x < 50` is the left side of the pitch (from the
  attacking team's view), `x > 50` is the right.
- Keep tokens inside roughly `x ∈ [14, 86]` and `y ∈ [16, 92]` so labels don't
  clip the frame.

### 4.3 Coordinate presets by formation

Vertical bands (use as `y` anchors), back-to-front:

| Band            | `y`   |
|-----------------|-------|
| Goalkeeper      | ~90   |
| Back line       | ~73–78 (wider fullbacks slightly higher, ~71) |
| Defensive mid   | ~55–57 |
| Central / attacking mid | ~37–43 |
| Wingers         | ~35   |
| Striker(s)      | ~17–20 |

Horizontal anchors per line: spread evenly and keep the spine clear.

**4-2-3-1** (reference build):
```
GK  50,90
RB  82,71   CB 65,76   CB 35,76   LB 18,71
DM  63,55   DM 38,57
RW/RAM 81,37   AM 50,39   LW 19,35
ST  50,19
```

**4-3-3**:
```
GK 50,90
RB 84,73  CB 63,76  CB 37,76  LB 16,73
CM 68,52  CM 50,57  CM 32,52
RW 82,28  ST 50,20  LW 18,28
```

**4-4-2**:
```
GK 50,90
RB 84,74  CB 63,77  CB 37,77  LB 16,74
RM 84,50  CM 60,54  CM 40,54  LM 16,50
ST 60,20  ST 40,20
```

**3-5-2**:
```
GK 50,91
CB 70,78  CB 50,80  CB 30,78
RWB 88,52  CM 64,55  CM 50,60  CM 36,55  LWB 12,52
ST 60,20  ST 40,20
```

**3-4-3**:
```
GK 50,91
CB 70,78  CB 50,80  CB 30,78
RM 86,52  CM 60,55  CM 40,55  LM 14,52
RW 80,26  ST 50,20  LW 20,26
```

These are starting points. After placing, eyeball the render and nudge by 1–3%
to avoid overlapping name labels (the most common collision is two center backs'
labels, and the GK label vs the six-yard box — solved by giving the GK
`y:90` and CBs `y:76`).

### 4.4 Other sports

The coordinate model generalizes. To re-skin for another sport, swap the pitch
markings (`.pitch` background + the marking `<div>`s) and adjust bands:

- **Basketball (5):** half-court, `aspect-ratio: 1`; bands for PG/SG/SF/PF/C.
  Replace boxes with a key, free-throw circle, three-point arc.
- **American football (offense, 11):** horizontal field; a line of scrimmage,
  o-line clustered center, skill positions spread. Use a landscape pitch
  (`aspect-ratio: 16/9`) and rotate the coordinate intuition (deep = behind LOS).
- **Hockey / futsal / etc.:** same approach — redraw rink/court lines, redefine
  bands. Keep the token, panel, and rating machinery untouched.

Keep the token avatar generic (head + jersey) so it works across sports; only the
kit colors and the markings change.

---

## 5. Player token (`.player`)

### 5.1 Structure (generated in JS)

```html
<button class="player" style="left:50%;top:90%">
  <span class="player-wrap">
    <span class="badge">24</span>           <!-- number, top-left -->
    <span class="avatar">…SVG…</span>        <!-- the head -->
    <span class="rating">6.7</span>          <!-- rating, bottom-right -->
  </span>
  <span class="pname">Freese</span>          <!-- surname under token -->
</button>
```

It's a real `<button>` for free keyboard focus and semantics. `aria-label` spells
out name, number, position, and rating for screen readers.

### 5.2 Sizing & chips

- Avatar: `56px` circle desktop, `46px` mobile. White radial-gradient base with
  an inset white ring (reads as a clean sticker).
- **Badge** (number): top-left, primary-color fill, white border, Anton font.
- **Rating chip:** bottom-right, gold fill, dark text, white border. Always
  `toFixed(1)` so `7` shows as `7.0`.
- **Name label:** dark translucent pill under the token, white text, `nowrap`.
- **Active state:** selected token gets a gold ring + slight emphasis via
  `.player.active .avatar`.
- **Hover:** `scale(1.07)` (preserving the centering translate).

### 5.3 Number/rating placement gotcha

Badge and rating are absolutely positioned relative to `.player-wrap` (not
`.player`), so they hug the avatar regardless of the name label's width. Keep
that wrapper — without it the chips drift when names are long.

---

## 6. The avatar SVG (`avatarSVG(p)`)

This is the signature element: a flat-vector head that conveys identity using
**only skin tone and hair (color + style)**, with an identical kit on everyone.
It is intentionally minimal and stylized — not a portrait, not a likeness.

### 6.1 Canvas & anatomy

`viewBox="0 0 100 100"`. Layers, back to front:

1. **Shirt** — a rounded shoulder shape filling the bottom (white body +
   secondary-color collar yoke + a small accent V at the neck).
2. **Neck** — a rounded rect in skin tone.
3. **Head** — `ellipse cx=50 cy=50 rx=19 ry=21` in skin tone. (Top of skull
   ≈ y29, brow ≈ y42 — useful when editing hair paths.)
4. **Ears** — two small circles in skin tone at `y≈52`.
5. **Hair** — one of several `style` paths, filled with the hair color, drawn
   last so it sits on top of the skull.

There are deliberately **no facial features** (no eyes/nose/mouth). This keeps
everyone uniform and the focus on skin+hair, and it sidesteps any attempt at
real-person likeness. Do not add faces.

### 6.2 Inputs

Each player supplies three fields:

- `skin`: a hex skin tone. Suggested ramp (light→deep):
  `#f2cfa6, #ecc096, #e9b98e, #d9a679, #c08a5e, #a06a3e, #9c6b40, #8a5a35,
  #7a4a2b, #6f4428, #5f3a20, #4a2c18`. Pick what fits the player; you don't
  need to match these exactly.
- `hair`: a hex hair color. Common: black `#15100c`/`#171008`, dark brown
  `#2a1a0e`, brown `#5b3a24`, light brown `#7a5a3c`, blond `#caa24a`, auburn
  `#6b3a1e`, gray `#b8b3ad`, white `#e6e3df`.
- `style`: one of the hair-shape keys below.

### 6.3 Built-in hair styles

Implemented as a `switch` returning an SVG path (or group) per key. Provided:

| key          | look                                              |
|--------------|---------------------------------------------------|
| `short`      | close-cropped cap to the brow                     |
| `buzz`       | very short, slightly receding at the temples (lower opacity) |
| `curls`      | bumpy curly cap (lumpy top edge)                  |
| `curlsBlond` | curly cap with a blond-dyed top patch over a darker base |
| `twists`     | low cap + scattered circle "twists/locs"          |
| `waves`      | tight crop with a crisp straight hairline         |

Copy the exact path data from the template — the paths are tuned to the head
ellipse. To **add a style** (e.g. `long`, `ponytail`, `bald`, `manbun`,
`afro`, `mohawk`):

- Add a `case "yourkey":` returning a path filled `${h}`.
- Anchor it to the skull: the hairline arc should ride around `y≈42–45` at the
  sides and `y≈27–30` at the crown.
- `bald` = return `""` (no hair). `afro` = a large circle/rounded shape centered
  ~`(50,34)` extending past the skull width. `mohawk` = a narrow vertical
  strip down the center. Keep it abstract; a few curves is enough.
- Test the new style on a couple of skin tones to make sure it reads.

### 6.4 The kit (uniform) colors

The shirt is drawn inside `avatarSVG` with **hard-coded** colors in the
reference (white `#ffffff` body, `#1f3a93` collar, `#c9243f` neck V). When
theming:

- Replace the collar fill with the team **primary**, the neck V with the
  **secondary** (or vice-versa), and choose a shirt body that matches the team's
  primary kit (white, or a team color). Make these reference the CSS variables if
  you want them themeable, or hard-code per build — either is fine, but be
  consistent between the pitch tokens and the panel avatar (they call the same
  function, so changing it once updates both — good).
- Keep the kit identical for every player (that's the point — identity comes from
  the head, not the shirt).

### 6.5 Why this avatar (don't "improve" it into a portrait)

The brief is a stylized, uniform team where individuals are distinguished by the
two cheapest, most recognizable cues (complexion + hair). Adding faces, jersey
names, or per-player kit details breaks the visual system and invites
uncanny/likeness problems. If asked to make avatars "more realistic," prefer
adding hair styles and refining skin ramps over adding facial features.

---

## 7. Data model (the only blocks you edit)

### 7.1 `TEAM` config

Factor the header strings into one object so re-theming is centralized:

```js
const TEAM = {
  name: "USA",
  headlineAccent: "Starting XI",
  context: "FIFA World Cup 2026 · Group D · vs Paraguay",
  formation: "4-2-3-1",
  ratingNote: "gold chip = consensus quality rating out of 10",
  footer: "Lineup as named for the June 12, 2026 opener at Los Angeles Stadium. " +
          "Ratings are an editorial blend of club level, current form, and " +
          "international standing — argue accordingly.",
  hintCorner: "XI"          // big faded text in the empty panel state
};
```

(The reference inlines these in the HTML; pulling them into `TEAM` and writing
them into the DOM on load is the cleaner pattern for a reusable template — see
`reference/template.html`, which does exactly this.)

### 7.2 `PLAYERS` array

One object per starter. **All fields are required.**

```js
{
  id: "freese",                 // unique slug
  name: "Freese",               // surname on the token
  full: "Matt Freese",          // full name in the panel
  num: 24,                      // shirt number
  pos: "Goalkeeper",            // position label (append " · Captain" for the C)
  club: "New York City FC",     // club / affiliation line
  rating: 6.7,                  // 0–10, one decimal
  x: 50, y: 90,                 // pitch coordinates (§4)
  skin: "#e9b98e",              // hex (§6.2)
  hair: "#5b3a24",              // hex (§6.2)
  style: "short",               // hair-style key (§6.3)
  type:  "One paragraph: what kind of player, role, playing style.",
  known: "One paragraph: what they're famous for / signature moments.",
  strengths: ["Tag 1","Tag 2","Tag 3","Tag 4"]   // 3–5 short tags
}
```

Field-writing guidance:

- **`type`** — playing identity: position nuance, tempo, on/off ball role. One
  or two sentences. This is the "scout's one-liner."
- **`known`** — résumé/lore: clubs, trophies, iconic moments, nickname origin.
  Keep it to one or two sentences.
- **`strengths`** — concrete, skill-level tags ("Aerial duels", "Press
  resistance"), not vague praise ("Good", "Talented"). 3–5 is the sweet spot;
  more wraps awkwardly.
- **Captain:** put `" · Captain"` (or `"(C)"`) in `pos` and/or the token `name`,
  as the reference does with `"Ream (C)"`.
- Keep `type`/`known` free of unverified specifics if you couldn't confirm them;
  describe style/role rather than inventing stats or quotes.

### 7.3 Ratings: be honest that they're editorial

Ratings are opinion. The footer **must** say so. When choosing numbers, blend
level of competition, current form, and standing; keep spread realistic (most
starters land 6.5–8.5; reserve 9+ for genuine stars). Offer to adjust on request
rather than presenting them as objective fact.

---

## 8. Interaction & behavior (JS)

The script does three things; keep all three:

1. **Render tokens.** Loop `PLAYERS`, build each `.player` button, set
   `left/top` from `x/y`, fill badge/avatar/rating/name, attach a click handler,
   append to `#pitch`.
2. **Select handler.** On click: clear the previous `.active`, mark this token
   active, remove the panel's empty state, and inject the card markup
   (avatar, position eyebrow, name + number, club, big rating + animated bar,
   the two paragraphs, and the strength chips).
3. **Animate the rating bar.** Set the fill width to `0%`, then on a
   double-`requestAnimationFrame` set it to `rating*10 + "%"` so the CSS
   transition runs. On mobile, scroll the panel into view after selection.

Extras you may add (optional, keep them light):

- **Default selection:** auto-select the highest-rated player on load so the
  panel isn't empty. (Reference leaves it empty with a hint — either is fine.)
- **Keyboard:** the buttons are already focusable; arrow-key navigation between
  tokens is a nice-to-have, not required.
- **No external state / no frameworks.** Plain DOM. Do not introduce React,
  build steps, `localStorage`, or any non-CDN dependency. Google Fonts is the
  only allowed network call.

---

## 9. Quality checklist (run before shipping)

Render at desktop width **and** ~390px, then verify:

- [ ] **One file.** Everything inline; opens by double-click; no 404s except
      fonts, which degrade gracefully to system sans.
- [ ] **Data is real & current.** For real teams, the lineup/formation was
      web-searched, not recalled. Numbers and positions match a source.
- [ ] **No label collisions.** No two `.pname` pills overlap; the GK label
      doesn't sit on the six-yard line; CB labels are clear of each other.
- [ ] **Chips legible.** Number badge and rating chip aren't hidden behind a
      pitch line or another token; ratings show one decimal.
- [ ] **Avatars read.** Each player's skin+hair is distinguishable; hair sits on
      the skull (not floating, not clipping the ears oddly); kit is identical.
- [ ] **Panel works for every token.** Click each — name, number, club,
      paragraphs, and chips populate; the rating bar animates to the right width.
- [ ] **Empty state present.** Before any click, the panel shows the hint, not a
      broken/blank box.
- [ ] **Responsive.** On mobile the panel drops below the pitch, tokens shrink,
      and selecting scrolls the panel into view.
- [ ] **A11y floor.** Buttons are focusable with a visible gold focus ring;
      `aria-label`s describe each player; `prefers-reduced-motion` disables the
      transitions; color contrast on text is adequate.
- [ ] **Footer disclaimer.** Provenance + "ratings are editorial" present.
- [ ] **No trademarked logo/flag art embedded;** the flag chip is an abstract
      CSS gradient, not a fetched image.

---

## 10. Common requests & how to handle them

- **"Same style, new team."** Copy template → swap `TEAM` + `PLAYERS` → re-skin
  variables + kit + flag. §0.
- **"Different formation."** Use a preset from §4.3; nudge to avoid label
  overlap.
- **"Add bench / subs."** Either a second smaller list below the pitch, or render
  bench players as a row of tokens under the footer. Keep the pitch to the XI.
- **"Show stats instead of a rating."** The rating chip can hold any short
  metric; relabel the sub line and footer accordingly. The bar assumes a 0–10
  (or 0–100) scale — adjust the `*10`/width math if you change the scale.
- **"More detail per player."** Add fields to `PLAYERS` and corresponding
  `.sect` blocks in the panel (e.g. "Weakness," "Key stat"). Don't overload the
  token — extra data goes in the panel, never on the pitch.
- **"Make avatars look like the real players."** Decline the literal likeness;
  offer more hair styles / finer skin tones instead (§6.5). Keeps the system
  coherent and avoids likeness issues.
- **"Different sport."** §4.4 — swap markings and bands, keep token/panel/rating.

---

## 11. File & delivery conventions

- Output **one** `.html` file to the deliverable directory and present it.
- Name it descriptively: `<team>-<comp>-lineup.html`
  (e.g. `usmnt-world-cup-2026-lineup.html`).
- Self-contained: inline `<style>` and `<script>`; the only external reference is
  the Google Fonts `<link>`. No separate assets.
- If a sandbox/headless browser is available, screenshot desktop + mobile and
  eyeball against §9 before presenting. A picture catches collisions instantly.

---

## 12. Reference files

- `reference/template.html` — the canonical, fully-working implementation with
  the `TEAM`/`PLAYERS` config factored out and richly commented. **Start here:**
  copy it and edit the two config blocks. It is the source of truth for the pitch
  geometry, avatar paths, and panel behavior; this document explains it.
