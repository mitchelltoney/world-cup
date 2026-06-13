/* ============================================================================
   USA — team config + squad data for the lineup app.
   Self-registers into window.TEAMS. To add a team: copy this file, edit the
   data, and add a matching <script src="data/<id>.js"> line in index.html.
   Coordinates: team attacks UP. GK y≈90 (bottom), striker y≈19 (top).
   ========================================================================== */
window.TEAMS = window.TEAMS || {};
window.TEAMS.usa = {
  id: "usa",
  name: "USA",
  manager: "Pochettino",
  headlineAccent: "Starting XI",
  context: "FIFA World Cup 2026 · Group Stage",
  formation: "4-2-3-1",
  ratingNote: "gold chip = consensus quality rating out of 10",
  hintCorner: "XI",
  footer: "Projected first-choice XI for the 2026 World Cup; the lineup rotates by opponent and fitness. Ratings are an editorial blend of club level, current form, and international standing — argue accordingly.",
  theme: {
    primary:   "#1f3a93",  /* number badge, panel stripe, chips */
    secondary: "#c9243f",  /* headline accent, panel eyebrow    */
    accent:    "#f2c14e",  /* rating gold                       */
    kitBody:   "#ffffff",  /* avatar shirt body                 */
    kitCollar: "#1f3a93",  /* avatar collar yoke                */
    kitV:      "#c9243f"   /* avatar neck V                     */
  },
  stripe: ["#c9243f", "#ffffff", "#1f3a93"],   /* panel stripe — flag order: red / white / blue */
  /* Abstract CSS-free flag chip (inline SVG, stretched to fill its box). */
  flag: `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect width="30" height="20" fill="#fff"/>
    <g fill="#c9243f">
      <rect y="0" width="30" height="1.54"/><rect y="3.08" width="30" height="1.54"/>
      <rect y="6.15" width="30" height="1.54"/><rect y="9.23" width="30" height="1.54"/>
      <rect y="12.31" width="30" height="1.54"/><rect y="15.38" width="30" height="1.54"/>
      <rect y="18.46" width="30" height="1.54"/>
    </g>
    <rect width="12" height="10.77" fill="#1f3a93"/>
    <g fill="#fff">
      <circle cx="2.4" cy="2" r="0.45"/><circle cx="4.8" cy="2" r="0.45"/><circle cx="7.2" cy="2" r="0.45"/><circle cx="9.6" cy="2" r="0.45"/>
      <circle cx="3.6" cy="4" r="0.45"/><circle cx="6" cy="4" r="0.45"/><circle cx="8.4" cy="4" r="0.45"/>
      <circle cx="2.4" cy="6" r="0.45"/><circle cx="4.8" cy="6" r="0.45"/><circle cx="7.2" cy="6" r="0.45"/><circle cx="9.6" cy="6" r="0.45"/>
      <circle cx="3.6" cy="8.4" r="0.45"/><circle cx="6" cy="8.4" r="0.45"/><circle cx="8.4" cy="8.4" r="0.45"/>
    </g>
  </svg>`,

  players: [
    {id:"freese", name:"Freese", full:"Matt Freese", num:24, pos:"Goalkeeper", club:"New York City FC", rating:6.7, fifa:73,
     x:50, y:90, skin:"#e9b98e", hair:"#5b3a24", style:"crop",
     type:"A reflex-first shot-stopper who plays with the calm of a former Ivy League captain — comfortable with the ball at his feet in Pochettino's build-up.",
     known:"Winning the No. 1 shirt late in the cycle and his penalty-shootout heroics for the U.S. in the 2025 Gold Cup.",
     strengths:["Reflex saves","Penalty situations","Distribution","Composure"]},
    {id:"freeman", name:"Freeman", full:"Alex Freeman", num:16, pos:"Right Back", club:"Villarreal", rating:6.9, fifa:72,
     x:82, y:71, skin:"#6f4428", hair:"#171008", style:"fade",
     type:"A big, rangy modern fullback — the son of an NFL receiver, and it shows in his stride. Overlaps relentlessly and defends with raw athletic power.",
     known:"His meteoric rise: MLS breakout to a La Liga move to a World Cup start, all inside two years, still only 21.",
     strengths:["Recovery speed","Physicality","Overlapping runs","Upside"]},
    {id:"richards", name:"Richards", full:"Chris Richards", num:3, pos:"Centre Back", club:"Crystal Palace", rating:7.8, fifa:79,
     x:65, y:76, skin:"#7a4a2b", hair:"#15100c", style:"twists",
     type:"The defensive cornerstone — an athletic, front-foot centre back who wins his duels in the air and steps into midfield with the ball.",
     known:"FA Cup-winning seasons at Palace and scoring big tournament goals for the U.S., including towering set-piece headers.",
     strengths:["Aerial duels","Pace for a CB","Ball progression","Big-game temperament"]},
    {id:"ream", name:"Ream (C)", full:"Tim Ream", num:13, pos:"Centre Back · Captain", club:"Charlotte FC", rating:7.0, fifa:75,
     x:35, y:76, skin:"#e9b98e", hair:"#8a7458", style:"receding",
     type:"The 38-year-old brain of the back line — a left-footed organizer who defends with positioning and reads the game two passes early.",
     known:"Remarkable longevity: a Premier League mainstay at Fulham deep into his 30s, now captaining the U.S. at a home World Cup.",
     strengths:["Reading the game","Left-footed passing","Leadership","Composure under press"]},
    {id:"robinson", name:"Robinson", full:"Antonee Robinson", num:5, pos:"Left Back", club:"Fulham", rating:8.4, fifa:80,
     x:18, y:71, skin:"#8a5a35", hair:"#15100c", style:"curls",
     type:"\"Jedi\" — arguably the best attacking left back in the Premier League. A vertical sprinter who turns defense into attack in three touches.",
     known:"Leading Premier League fullbacks in assists and his absurd recovery pace; back to full flight after a knee cleanup.",
     strengths:["Elite speed","Crossing & assists","1v1 defending","Engine"]},
    {id:"adams", name:"Adams", full:"Tyler Adams", num:4, pos:"Defensive Midfield", club:"Bournemouth", rating:7.9, fifa:80,
     x:38, y:57, skin:"#9c6b40", hair:"#1a120a", style:"coils",
     type:"The destroyer and emotional reference point. A swarming ball-winner who covers ground like two players and sets the press's tempo.",
     known:"Captaining the U.S. at Qatar 2022 at age 23 and being the engine room of Bournemouth's high-press machine.",
     strengths:["Tackling","Pressing intensity","Ground coverage","Leadership"]},
    {id:"mckennie", name:"McKennie", full:"Weston McKennie", num:8, pos:"Central Midfield", club:"Juventus", rating:8.0, fifa:80,
     x:63, y:55, skin:"#6f4428", hair:"#171008", style:"curlsBlond",
     type:"A chaos-positive box-to-box midfielder. Late runs into the area, monster aerial presence, and the versatility to play four positions.",
     known:"Surviving every Juventus rebuild on sheer usefulness — and his trademark dyed curls and big-moment goals for the U.S.",
     strengths:["Aerial threat","Late box arrivals","Versatility","Two-way motor"]},
    {id:"dest", name:"Dest", full:"Sergiño Dest", num:2, pos:"Right Attacking Mid", club:"PSV Eindhoven", rating:7.6, fifa:78,
     x:81, y:37, skin:"#a06a3e", hair:"#171008", style:"curls",
     type:"A fullback by trade pushed high as an inverted winger-creator — pure flair, tight-space dribbling, and audacious technique on either foot.",
     known:"His Barcelona pedigree, title-winning seasons at PSV, and being the most press-resistant dribbler in the U.S. pool.",
     strengths:["1v1 dribbling","Press resistance","Two-footed","Final-third creativity"]},
    {id:"tillman", name:"Tillman", full:"Malik Tillman", num:17, pos:"Attacking Midfield", club:"Bayer Leverkusen", rating:8.2, fifa:78,
     x:50, y:39, skin:"#8a5a35", hair:"#15100c", style:"fade",
     type:"The silk between the lines. A tall, gliding No. 10 who receives on the half-turn, slips defenders with feints, and arrives for goals himself.",
     known:"His breakout — MVP-level Eredivisie season at PSV, a big-money Bundesliga move, and becoming the U.S.'s creative hub.",
     strengths:["Between-the-lines receiving","Ball-striking","Goal threat from 10","Press resistance"]},
    {id:"pulisic", name:"Pulisic", full:"Christian Pulisic", num:10, pos:"Left Wing", club:"AC Milan", rating:9.0, fifa:83,
     x:19, y:35, skin:"#ecc096", hair:"#6b4a2e", style:"short",
     type:"Captain America. The face of American soccer — an explosive left winger who attacks the half-space, beats his man, and produces in the biggest moments.",
     known:"Career-best goal numbers at Milan, the goal-and-injury heroics vs Iran in 2022, and carrying U.S. hopes for a decade.",
     strengths:["Explosive first step","Cutting inside to finish","Big-game scoring","Set pieces"]},
    {id:"balogun", name:"Balogun", full:"Folarin Balogun", num:20, pos:"Striker", club:"AS Monaco", rating:7.5, fifa:79,
     x:50, y:19, skin:"#5f3a20", hair:"#15100c", style:"waves",
     type:"A penalty-box predator. Sharp shoulder-checks, darting runs across the front post, and a clean, early strike with either phase of play.",
     known:"Choosing the U.S. over England after his 20-goal Ligue 1 breakout at Reims — the most natural finisher in the pool.",
     strengths:["Movement off the shoulder","Clinical finishing","Channel runs","Pressing from the front"]}
  ],

  /* DEPTH / ROTATION — not rendered on the pitch. Move one into players[] to start it. */
  depth: [
    {id:"turner", name:"Turner", full:"Matt Turner", num:1, pos:"Goalkeeper", club:"New England Revolution", rating:6.6, fifa:79,
     x:50, y:90, skin:"#ecc096", hair:"#4a2c18", style:"short",
     type:"A reflex-first shot-stopper who was the incumbent No. 1 for much of the cycle — brave and quick off his line, if less involved in build-up than Freese.",
     known:"His Arsenal spell and standout displays at the 2022 World Cup and 2024 Copa América.",
     strengths:["Shot-stopping","Reaction saves","Big-game nerve","Experience"]},
    {id:"scally", name:"Scally", full:"Joe Scally", num:19, pos:"Right Back", club:"Borussia Mönchengladbach", rating:6.8, fifa:75,
     x:82, y:71, skin:"#ecc096", hair:"#c9a24a", style:"mullet",
     type:"A steady, Bundesliga-tested full back who can cover both flanks — positionally sound and tidy rather than flashy.",
     known:"Years of regular Bundesliga minutes at Gladbach since breaking through as a teenager.",
     strengths:["Positioning","Two-footed","Stamina","Versatility"]},
    {id:"ccv", name:"Carter-Vickers", full:"Cameron Carter-Vickers", num:15, pos:"Centre Back", club:"Celtic", rating:7.1, fifa:78,
     x:65, y:76, skin:"#6f4428", hair:"#15100c", style:"buzz",
     type:"A powerful, front-foot centre back who wins his duels and steps in early — a natural partner alongside Richards when a back four is needed.",
     known:"Serial trophy-winner at Celtic after a Tottenham academy upbringing.",
     strengths:["Strength","Duels","Recovery","Blocks"]},
    {id:"cardoso", name:"Cardoso", full:"Johnny Cardoso", num:18, pos:"Defensive Midfield", club:"Atlético Madrid", rating:7.2, fifa:77,
     x:38, y:57, skin:"#c08a5e", hair:"#2a1a0e", style:"short",
     type:"A composed deep-lying midfielder who breaks up play and keeps the ball moving — the like-for-like cover, or double-pivot partner, for Adams.",
     known:"His move to Atlético Madrid and growing role as the U.S.'s alternative midfield anchor.",
     strengths:["Interceptions","Press resistance","Passing range","Composure"]},
    {id:"musah", name:"Musah", full:"Yunus Musah", num:6, pos:"Central Midfield", club:"Atalanta (on loan)", rating:7.0, fifa:79,
     x:63, y:55, skin:"#7a4a2b", hair:"#15100c", style:"fade",
     type:"An explosive, ball-carrying midfielder who glides through pressure — brings legs and progression from a deeper or box-to-box role.",
     known:"Choosing the U.S. over three other nations, and his Valencia breakout as a teenager.",
     strengths:["Ball carrying","Press resistance","Acceleration","Energy"]},
    {id:"weah", name:"Weah", full:"Tim Weah", num:21, pos:"Right Wing", club:"Olympique de Marseille", rating:7.2, fifa:78,
     x:81, y:37, skin:"#7a4a2b", hair:"#15100c", style:"twists",
     type:"A flying wide man who can fill in at wing or wing-back — direct, tireless, and most dangerous attacking space in transition.",
     known:"Son of Ballon d'Or winner George Weah; a Ligue 1 and Serie A career and a World Cup goal in 2022.",
     strengths:["Speed","Directness","Transition runs","Work rate"]},
    {id:"reyna", name:"Reyna", full:"Gio Reyna", num:7, pos:"Attacking Midfield", club:"Borussia Mönchengladbach", rating:7.0, fifa:78,
     x:50, y:39, skin:"#ecc096", hair:"#5b3a24", style:"flow",
     type:"The pool's silkiest pure creator when fit — tight control, clever passing, and a shot from range; a different flavour of No. 10 to Tillman.",
     known:"His Dortmund pedigree and long-standing billing as a golden-boy talent of U.S. soccer.",
     strengths:["Creativity","Ball-striking","Tight control","Vision"]},
    {id:"pepi", name:"Pepi", full:"Ricardo Pepi", num:9, pos:"Striker", club:"PSV Eindhoven", rating:7.2, fifa:77,
     x:50, y:19, skin:"#d9a679", hair:"#2a1a0e", style:"short",
     type:"A relentless penalty-box striker and elite super-sub — constant movement and a habit of scoring in clusters when handed minutes.",
     known:"His prolific Eredivisie scoring rate at PSV and choosing the U.S. over Mexico.",
     strengths:["Movement","Poaching","Finishing","Pressing"]}
  ]
};
