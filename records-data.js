// ── Record collection ─────────────────────────────────────────────────────
//
// Real vinyl on the shelf. The record I'm spinning right now sits up top —
// on the homepage it doubles as the music player (the "Now Spinning" widget).
//
// nowSpinningId — the `id` of the record featured at the top of the page
//                 and in the homepage Now Spinning widget. Must match an
//                 `id` in the `recordCollection` array below.
//
// Each record:
//   id        — short unique slug (lowercase, no spaces) — used by nowSpinningId
//   artist    — band / musician
//   title     — album title
//   year      — release year of the album
//   cover     — image path to the cover art, or null for a label-style fallback
//   genre     — one short tag (e.g. 'soul', 'jazz', 'indie rock')
//   note      — one line: why this one earned a slot on the shelf
//   youtube   — link to a full-album video on YouTube; clicking the cover
//               opens it. These are third-party uploads — if one goes dead,
//               just paste a fresh URL here.
//   acquired  — optional: where / when you picked it up
//
// Audio fields — OPTIONAL, only needed on the record you want playable in
// the homepage Now Spinning widget (usually the nowSpinning one):
//   track     — the single track to feature / play (e.g. 'Burn This Disco Out')
//   audio     — path to a local mp3 of that track
//
// ░░ NOTE: the `note` lines below are factual placeholders, not my words.
//    Rewrite each one in your own voice — that's the whole point of the page.
//
var nowSpinningId = 'off-the-wall';

var nowSpinningSince = 'today';

var recordCollection = [
  {
    id:       'off-the-wall',
    artist:   'Michael Jackson',
    title:    'Off the Wall',
    year:     1979,
    cover:    'off-the-wall.jpg',
    genre:    'funk & soul',
    note:     'The album where he stopped being a kid star and became Michael Jackson.',
    youtube:  'https://www.youtube.com/watch?v=CwwOmi7ewAc',
    acquired: null,
    track:    'Burn This Disco Out',
    audio:    'burn-this-disco-out.mp3'
  },
  {
    id:       'thriller',
    artist:   'Michael Jackson',
    title:    'Thriller',
    year:     1982,
    cover:    'thriller.png',
    genre:    'pop',
    note:     'The best-selling album of all time. I remember watching the "Thriller" video as a kid and being hooked.',
    youtube:  'https://www.youtube.com/watch?v=KqUp1uFkDF4',
    acquired: null
  },
  {
    id:       'purple-rain',
    artist:   'Prince',
    title:    'Purple Rain',
    year:     1984,
    cover:    'purple-rain.png',
    genre:    'funk & soul',
    note:     "Soundtrack, rock record, and Prince's breakthrough all at once. My parents always played this around the house.",
    youtube:  'https://www.youtube.com/watch?v=iGVExzKXA1I',
    acquired: null
  },
  {
    id:       'sign-o-the-times',
    artist:   'Prince',
    title:    "Sign o' the Times",
    year:     1987,
    cover:    'sign-o-the-times.png',
    genre:    'funk & soul',
    note:     'Prince alone in the studio, playing nearly every instrument himself.',
    youtube:  'https://www.youtube.com/playlist?list=PLH_QLWlQVieWsi68dNd8qg19DNFjc37w0',
    acquired: null
  },
  {
    id:       'kool-and-the-gang',
    artist:   'Kool & the Gang',
    title:    'Greatest Hits',
    year:     1975,
    cover:    'kool-and-the-gang.png',
    genre:    'funk & soul',
    note:     'The funk catalog in one place. This reminds me of my grandfather.',
    youtube:  'https://www.youtube.com/watch?v=jghyKdwHnSg&list=PLaHPXz2US_n8yDyar9qc0wu-Oy8Y4HhXD',
    acquired: null
  },
  {
    id:       'random-access-memories',
    artist:   'Daft Punk',
    title:    'Random Access Memories',
    year:     2013,
    cover:    'random-access-memories.jpg',
    genre:    'electronic',
    note:     'Nile Rodgers was a beast on guitar on this album.',
    youtube:  'https://www.youtube.com/watch?v=wIMSU8otS-g',
    acquired: null
  },
  {
    id:       'shango',
    artist:   'Santana',
    title:    'Shango',
    year:     1982,
    cover:    'shango.png',
    genre:    'rock',
    note:     'Santana in his early-eighties run. Latin rock and funk locked together.',
    youtube:  'https://www.youtube.com/watch?v=MBemfKbjZYw&list=PLQvL6GLJiX930jbIvHdDQt4J_SocCZMzd',
    acquired: null
  },
  {
    id:       'supernatural',
    artist:   'Santana',
    title:    'Supernatural',
    year:     1999,
    cover:    'supernatural.jpg',
    genre:    'rock',
    note:     "Santana's late-career comeback. Nine Grammys. Primavera is on repeat.",
    youtube:  'https://www.youtube.com/watch?v=XxJDpyETDjE',
    acquired: null
  },
  {
    id:       '461-ocean-blvd',
    artist:   'Eric Clapton',
    title:    '461 Ocean Boulevard',
    year:     1974,
    cover:    '461-ocean-blvd.png',
    genre:    'blues',
    note:     'Named for the Florida house where Clapton made it. "I Shot the Sheriff" is my go-to.',
    youtube:  'https://www.youtube.com/watch?v=L0xLLPJ0bOw',
    acquired: null
  },
  {
    id:       'journeyman',
    artist:   'Eric Clapton',
    title:    'Journeyman',
    year:     1989,
    cover:    'journeyman.png',
    genre:    'blues',
    note:     'Clapton in late-eighties studio mode, guests stacked deep.',
    youtube:  'https://www.youtube.com/watch?v=yWBgm2k7sLs&list=PLYpy7HpyE4nO9VDmavE4nAYDuahVohl4v',
    acquired: null
  },
  {
    id:       'layla',
    artist:   'Derek and the Dominos',
    title:    'Layla and Other Assorted Love Songs',
    year:     1970,
    cover:    'layla.jpg',
    genre:    'blues',
    note:     'Clapton and Duane Allman, the Layla sessions.',
    youtube:  'https://www.youtube.com/watch?v=-KG2O5PSCSs',
    acquired: null
  },
  {
    id:       'in-session',
    artist:   'Albert King & Stevie Ray Vaughan',
    title:    'In Session',
    year:     1983,
    cover:    'in-session.png',
    genre:    'blues',
    note:     'Two generations of blues guitar, caught on tape in 1983.',
    youtube:  'https://www.youtube.com/watch?v=4AGEhCLq23Y',
    acquired: null
  },
  {
    id:       'led-zeppelin-iv',
    artist:   'Led Zeppelin',
    title:    'Led Zeppelin IV',
    year:     1971,
    cover:    'led-zeppelin-iv.png',
    genre:    'rock',
    note:     'The untitled one. Stairway to Heaven is the song that made me love guitar.',
    youtube:  'https://www.youtube.com/watch?v=0hLESLXqBLI',
    acquired: null
  },
  {
    id:       'appetite-for-destruction',
    artist:   "Guns N' Roses",
    title:    'Appetite for Destruction',
    year:     1987,
    cover:    'appetite-for-destruction.png',
    genre:    'rock',
    note:     'The best-selling debut album in US history. I can listen to this front to back on repeat.',
    youtube:  'https://www.youtube.com/watch?v=1w7OgIMMRc4',
    acquired: null
  },
  {
    id:       'master-of-puppets',
    artist:   'Metallica',
    title:    'Master of Puppets',
    year:     1986,
    cover:    'master-of-puppets.png',
    genre:    'metal',
    note:     "Metallica's peak. First heard \"Master of Puppets\" in the car with my mom.",
    youtube:  'https://www.youtube.com/watch?v=kyakFcgBwDk',
    acquired: null
  },
  {
    id:       'ride-the-lightning',
    artist:   'Metallica',
    title:    'Ride the Lightning',
    year:     1984,
    cover:    'ride-the-lightning.png',
    genre:    'metal',
    note:     'The second record. "Fade to Black" is my favorite guitar solo.',
    youtube:  'https://www.youtube.com/watch?v=rPnFNF_r63g',
    acquired: null
  },
  {
    id:       'metallica-black-album',
    artist:   'Metallica',
    title:    'Metallica (The Black Album)',
    year:     1991,
    cover:    'metallica-black-album.png',
    genre:    'metal',
    note:     "Metallica's turn toward radio — 16x platinum.",
    youtube:  'https://www.youtube.com/watch?v=9XkUUNR0nyI',
    acquired: null
  },
  {
    id:       'meteora',
    artist:   'Linkin Park',
    title:    'Meteora',
    year:     2003,
    cover:    'meteora.png',
    genre:    'metal',
    note:     "Linkin Park's second album. Packed full of classics. Reminds me of childhood and teenage angst.",
    youtube:  'https://www.youtube.com/watch?v=0RDXd0_KT60',
    acquired: null
  },
  {
    id:       'logic-under-pressure',
    artist:   'Logic',
    title:    'Under Pressure',
    year:     2014,
    cover:    'logic-under-pressure.png',
    genre:    'hip-hop',
    note:     "Logic's debut studio album.",
    youtube:  'https://www.youtube.com/watch?v=N70w91TK9AQ',
    acquired: null
  }
];
