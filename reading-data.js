// ── Reading log ──────────────────────────────────────────────────────────
//
// Single book session:
//   '2026-05-03': { pages: 30, book: 'If This Is A Man', note: 'optional' }
//
// Multiple books on the same day — use an array:
//   '2026-05-04': [
//     { pages: 25, book: 'Book A' },
//     { pages: 15, book: 'Book B' }
//   ]
//
// Skip the date entirely if no reading happened that day.
//
var reading = {
  '2026-04-05': { pages: 35, book: 'If This Is A Man' },
  '2026-04-08': { pages: 12, book: 'If This Is A Man' },
  '2026-04-10': { pages: 22, book: 'If This Is A Man' },
  '2026-04-11': { pages: 22, book: 'If This Is A Man' }
};
