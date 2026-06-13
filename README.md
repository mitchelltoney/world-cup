# World Cup 2026 — Starting XI Board

Interactive starting-XI cards for eight World Cup 2026 national teams — USA,
France, Spain, Argentina, England, Portugal, Brazil and Germany. Pick a team from
the always-on switcher to see its projected first-choice XI laid out on a pitch,
tap any player for a scouting card (role, what they're known for, strengths), and
read a 0–10 editorial rating for each player.

**Live:** https://mitchelltoney.github.io/world-cup/
Direct team links: append a team hash to the URL — `#usa` · `#france` · `#spain` · `#argentina` · `#england` · `#portugal` · `#brazil` · `#germany`

## How it works

- **`index.html`** — the whole engine: styling, the CSS-drawn pitch, the avatar
  SVGs, the team switcher, per-team theming, and the scouting panel. No build
  step and no dependencies (Google Fonts is the only network call).
- **`data/<team>.js`** — one file per team. Each self-registers into
  `window.TEAMS` and carries the team's theme + flag, the starting XI
  (`players`), and the bench (`depth` — not shown on the pitch, ready to swap in
  for other games).

## Add a team

1. Copy `data/usa.js` to `data/<id>.js`; edit the meta, `theme`, `flag`,
   `players`, and `depth`.
2. Add `<script src="data/<id>.js"></script>` in `index.html`, next to the
   others.

The switcher, pitch, theming, and panel are all generic — nothing else to touch.

## Notes

- Lineups are the projected first-choice XI; `depth` holds the main rotation
  options for other matches. Ratings are editorial (a blend of level, current
  form, and standing).
- `template.html` + `SKILL.md` are the reusable single-file recipe these cards
  were built from.
