/* ============================================================================
   FRANCE — team config + squad data for the lineup app.
   Self-registers into window.TEAMS. See data/usa.js for the field guide.
   ========================================================================== */
window.TEAMS = window.TEAMS || {};
window.TEAMS.france = {
  id: "france",
  name: "FRANCE",
  manager: "Deschamps",
  headlineAccent: "Starting XI",
  context: "FIFA World Cup 2026 · Group Stage",
  formation: "4-2-3-1",
  ratingNote: "gold chip = consensus quality rating out of 10",
  hintCorner: "XI",
  footer: "Projected first-choice XI for the 2026 World Cup; Deschamps rotates the lineup by opponent and fitness. Ratings are an editorial blend of club level, current form, and international standing — argue accordingly.",
  theme: {
    primary:   "#2436a8",  /* number badge, panel stripe, chips */
    secondary: "#ef3340",  /* headline accent, panel eyebrow    */
    accent:    "#f2c14e",  /* rating gold                       */
    kitBody:   "#27409c",  /* avatar shirt body (blue France)   */
    kitCollar: "#ffffff",  /* avatar collar yoke                */
    kitV:      "#ef3340"   /* avatar neck V                     */
  },
  stripe: ["#2436a8", "#ffffff", "#ef3340"],   /* panel stripe — flag order: blue / white / red */
  /* Vertical tricolour: bleu | blanc | rouge. */
  flag: `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect width="10" height="20" fill="#2436a8"/>
    <rect x="10" width="10" height="20" fill="#fff"/>
    <rect x="20" width="10" height="20" fill="#ef3340"/>
  </svg>`,

  players: [
    {id:"maignan", name:"Maignan", full:"Mike Maignan", num:16, pos:"Goalkeeper", club:"AC Milan", rating:8.4, fifa:87,
     x:50, y:90, skin:"#6f4428", hair:"#15100c", style:"buzz",
     type:"A complete modern goalkeeper — commanding in the air, lightning reflexes, and arguably the best distributor of any keeper at the tournament. Sweeps the space behind a high line and starts attacks with his feet.",
     known:"Inheriting the France gloves after Lloris and his save-of-the-season years as AC Milan's No. 1.",
     strengths:["Shot-stopping","Distribution","Command of box","Sweeping"]},
    {id:"kounde", name:"Koundé", full:"Jules Koundé", num:5, pos:"Right Back", club:"Barcelona", rating:8.0, fifa:87,
     x:82, y:71, skin:"#7a4a2b", hair:"#15100c", style:"cornrows",
     type:"A centre-back by training converted into an elite, tournament-tested right back — quick, aggressive in the duel, and increasingly productive overlapping into the final third.",
     known:"Champions League and LaLiga titles at Barcelona, and being one of France's most reliable big-game performers since 2022.",
     strengths:["1v1 defending","Recovery pace","Overlaps","Tournament nous"]},
    {id:"saliba", name:"Saliba", full:"William Saliba", num:17, pos:"Centre Back", club:"Arsenal", rating:8.6, fifa:87,
     x:65, y:76, skin:"#6f4428", hair:"#15100c", style:"short",
     type:"The serene foundation of the defence — a long-striding, front-foot centre back who snuffs out danger early, wins his duels, and brings the ball out with total composure.",
     known:"Anchoring Arsenal's title charges and establishing himself as one of the very best defenders in world football.",
     strengths:["Anticipation","Pace","Aerial duels","Ball progression"]},
    {id:"upamecano", name:"Upamecano", full:"Dayot Upamecano", num:4, pos:"Centre Back", club:"Bayern Munich", rating:7.9, fifa:85,
     x:35, y:76, skin:"#5f3a20", hair:"#15100c", style:"fade",
     type:"A ferociously athletic centre back — explosive in the recovery, dominant in the air, and aggressive stepping out to win the ball high up the pitch.",
     known:"Years as a Champions League regular at Bayern Munich and a fixture in the France back line.",
     strengths:["Power","Pace","Aerial duels","Front-foot defending"]},
    {id:"theo", name:"T. Hernández", full:"Theo Hernández", num:19, pos:"Left Back", club:"AC Milan", rating:8.1, fifa:85,
     x:18, y:71, skin:"#ecc096", hair:"#2a1a0e", style:"slick",
     type:"A galloping, two-way left back who turns defence into attack in a few strides — devastating on the overlap with a fierce left foot, and brave defending one-on-one.",
     known:"His marauding Champions League nights at AC Milan and forming one of France's most dangerous left flanks.",
     strengths:["Driving runs","Left foot","Crossing","Athleticism"]},
    {id:"tchouameni", name:"Tchouaméni", full:"Aurélien Tchouaméni", num:8, pos:"Defensive Midfield", club:"Real Madrid", rating:8.2, fifa:85,
     x:63, y:55, skin:"#6f4428", hair:"#15100c", style:"crop",
     type:"The metronome and shield — a tall, elegant holding midfielder who screens the defence, wins the second ball, and dictates tempo with clean, forward passing.",
     known:"A marquee Real Madrid midfielder and Champions League winner, so reliable he is often used at centre back for his club.",
     strengths:["Positioning","Ball-winning","Passing range","Composure"]},
    {id:"rabiot", name:"Rabiot", full:"Adrien Rabiot", num:14, pos:"Defensive Midfield", club:"AC Milan", rating:7.8, fifa:84,
     x:38, y:57, skin:"#f2cfa6", hair:"#2a1a0e", style:"bun",
     type:"A rangy, left-footed all-action midfielder who covers enormous ground, arrives late in the box, and gives the pivot balance and bite alongside Tchouaméni.",
     known:"A revival to top form at AC Milan after long service, and a near-ever-present for France across three major tournaments.",
     strengths:["Engine","Late runs","Left foot","Duels"]},
    {id:"olise", name:"Olise", full:"Michael Olise", num:11, pos:"Right Attacking Mid", club:"Bayern Munich", rating:8.5, fifa:85,
     x:81, y:37, skin:"#a06a3e", hair:"#171008", style:"coils",
     type:"A silky, two-footed wide creator who drifts inside to manufacture chances — gliding dribbles, whipped deliveries, and a growing goal tally from the right.",
     known:"His breakout into world-class form at Bayern Munich after impressing in the Premier League.",
     strengths:["Creativity","Dribbling","Set pieces","Two-footed"]},
    {id:"doue", name:"Doué", full:"Désiré Doué", num:20, pos:"Attacking Midfield", club:"Paris Saint-Germain", rating:8.0, fifa:81,
     x:50, y:39, skin:"#7a4a2b", hair:"#15100c", style:"short",
     type:"A fearless young playmaker who plays with total freedom — quick feet in tight spaces, vertical dribbling, and the nerve to produce on the very biggest stage.",
     known:"Bursting onto the scene at PSG, including a star turn in their Champions League triumph.",
     strengths:["Dribbling","Press resistance","Vertical runs","Big-game temperament"]},
    {id:"mbappe", name:"Mbappé (C)", full:"Kylian Mbappé", num:10, pos:"Left Wing · Captain", club:"Real Madrid", rating:9.3, fifa:91,
     x:19, y:35, skin:"#8a5a35", hair:"#15100c", style:"fade",
     type:"The captain and the engine of everything — generational acceleration, ruthless finishing off either foot, and the ability to decide any match in a single moment, whether from the left or through the middle.",
     known:"A World Cup winner and final hat-trick hero, France's all-time talisman, and a Galáctico forward at Real Madrid.",
     strengths:["Explosive pace","Finishing","1v1 dribbling","Decisive moments"]},
    {id:"dembele", name:"Dembélé", full:"Ousmane Dembélé", num:7, pos:"Striker", club:"Paris Saint-Germain", rating:9.2, fifa:90,
     x:50, y:19, skin:"#6f4428", hair:"#c08a3a", style:"twists",
     type:"Reinvented as a relentless, two-footed forward who leads the line by dropping, carrying, and combining — unpredictable on the dribble and now a genuine match-winner from the front.",
     known:"His career-defining, trophy-laden season at PSG that pushed him to the very top of the individual awards.",
     strengths:["Two-footed dribbling","Final ball","Movement","Transition threat"]}
  ],

  /* DEPTH / ROTATION — not rendered on the pitch. Move one into players[] to start it. */
  depth: [
    {id:"samba", name:"Samba", full:"Brice Samba", num:1, pos:"Goalkeeper", club:"Stade Rennais", rating:7.0, fifa:81,
     x:50, y:90, skin:"#6f4428", hair:"#15100c", style:"buzz",
     type:"A vocal, athletic shot-stopper and reliable deputy to Maignan — quick reflexes and a calm presence with the ball at his feet.",
     known:"His standout Ligue 1 form and penalty-saving reputation.",
     strengths:["Reflexes","Penalties","Distribution","Communication"]},
    {id:"gusto", name:"Gusto", full:"Malo Gusto", num:2, pos:"Right Back", club:"Chelsea", rating:7.2, fifa:81,
     x:82, y:71, skin:"#c08a5e", hair:"#2a1a0e", style:"short",
     type:"An energetic, attack-minded right back who flies forward and crosses early — the natural rotation for Koundé.",
     known:"His Premier League development at Chelsea after breaking through at Lyon.",
     strengths:["Engine","Overlaps","Crossing","Youth"]},
    {id:"konate", name:"Konaté", full:"Ibrahima Konaté", num:3, pos:"Centre Back", club:"Liverpool", rating:8.0, fifa:85,
     x:65, y:76, skin:"#5f3a20", hair:"#15100c", style:"fade",
     type:"A powerhouse centre back with elite recovery pace — would walk into most XIs and rotates with Upamecano alongside Saliba.",
     known:"Anchoring Liverpool's defence next to Van Dijk and his big-tournament experience.",
     strengths:["Pace","Strength","Aerial duels","Front-foot defending"]},
    {id:"digne", name:"Digne", full:"Lucas Digne", num:21, pos:"Left Back", club:"Aston Villa", rating:7.1, fifa:80,
     x:18, y:71, skin:"#ecc096", hair:"#2a1a0e", style:"short",
     type:"An experienced, left-footed full back and dead-ball specialist — more measured than Theo, with pinpoint delivery.",
     known:"A long Premier League career and one of France's most accurate crossers.",
     strengths:["Crossing","Set pieces","Experience","Left foot"]},
    {id:"kante", name:"Kanté", full:"N'Golo Kanté", num:13, pos:"Defensive Midfield", club:"Al-Ittihad", rating:7.7, fifa:83,
     x:38, y:57, skin:"#6f4428", hair:"#15100c", style:"receding",
     type:"The tireless ball-winner whose engine and interceptions still tilt games — a more disruptive profile in the pivot.",
     known:"A World Cup, Champions League and Premier League winner regarded as one of the great modern midfielders.",
     strengths:["Interceptions","Stamina","Ball-winning","Humility"]},
    {id:"kone", name:"Koné", full:"Manu Koné", num:15, pos:"Central Midfield", club:"AS Roma", rating:7.4, fifa:80,
     x:63, y:55, skin:"#6f4428", hair:"#15100c", style:"twists",
     type:"A powerful, ground-covering box-to-box midfielder who carries the ball through lines — athletic insurance for the engine room.",
     known:"His rise to a key role at Roma after impressing in the Bundesliga.",
     strengths:["Ball carrying","Duels","Range","Energy"]},
    {id:"cherki", name:"Cherki", full:"Rayan Cherki", num:22, pos:"Attacking Midfield", club:"Manchester City", rating:7.8, fifa:82,
     x:50, y:39, skin:"#c08a5e", hair:"#171008", style:"quiff",
     type:"A dazzling, left-footed creator who unlocks low blocks with audacious passes and close control — a change-of-tempo option behind the striker.",
     known:"His big-money move to Manchester City and reputation as one of France's most gifted technicians.",
     strengths:["Vision","Tight control","Final ball","Flair"]},
    {id:"barcola", name:"Barcola", full:"Bradley Barcola", num:24, pos:"Left Wing", club:"Paris Saint-Germain", rating:7.8, fifa:83,
     x:19, y:35, skin:"#7a4a2b", hair:"#15100c", style:"fade",
     type:"A direct, frighteningly quick wide forward who beats his man on the outside and stretches defences — a like-for-like alternative on the left.",
     known:"His breakout into a key role for treble-chasing PSG.",
     strengths:["Speed","Directness","1v1","Final-third runs"]},
    {id:"mthuram", name:"M. Thuram", full:"Marcus Thuram", num:9, pos:"Striker", club:"Inter Milan", rating:7.9, fifa:84,
     x:50, y:19, skin:"#6f4428", hair:"#15100c", style:"headband",
     type:"A big, mobile centre-forward who leads the line with his back to goal, runs the channels, and offers a more orthodox No. 9 than Dembélé.",
     known:"His prolific Serie A goals for Inter and following his father Lilian into the France side.",
     strengths:["Hold-up play","Channel runs","Aerial threat","Finishing"]}
  ]
};
