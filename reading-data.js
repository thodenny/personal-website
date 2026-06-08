// ── Books finished ───────────────────────────────────────────────────────
//
// Each entry = a book finished on a specific date.
//   { date: 'YYYY-MM-DD', title, author, rating, slug }
//
// Add a new entry whenever you finish a book.
//
var booksFinished = [
  { date: '2026-01-09', title: 'Room',                     author: 'Emma Donoghue',    rating: 8, slug: '/book-notes-room',                  cover: 'room.jpg' },
  { date: '2026-01-13', title: 'A Marriage at Sea',        author: 'Sophie Elmhirst',  rating: 7, slug: '/book-notes-a-marriage-at-sea',     cover: 'marriage.jpg' },
  { date: '2026-01-19', title: 'The Tiger',                author: 'John Vaillant',    rating: 8, slug: '/book-notes-the-tiger',             cover: 'the-tiger.jpg' },
  { date: '2026-02-09', title: 'Co-Intelligence',          author: 'Ethan Mollick',    rating: 6, slug: '/book-notes-co-intelligence',       cover: 'cointelligence.jpg' },
  { date: '2026-02-16', title: 'The Art Thief',            author: 'Michael Finkel',   rating: 9, slug: '/book-notes-the-art-thief',         cover: 'art-thief.jpg' },
  { date: '2026-03-10', title: 'Fahrenheit 451',           author: 'Ray Bradbury',     rating: 7, slug: '/book-notes-fahrenheit-451',        cover: 'faranheit-451.jpg' },
  { date: '2026-03-25', title: "Man's Search for Meaning", author: 'Viktor E. Frankl', rating: 8, slug: '/book-notes-mans-search-for-meaning', cover: 'mans-search-for-meaning.jpg' },
  { date: '2026-05-04', title: 'If This Is A Man',         author: 'Primo Levi',       rating: 8, slug: '/book-notes-if-this-is-a-man',     cover: 'if-this-is-a-man.jpg' },
  { date: '2026-05-09', title: "I Didn't Do the Thing Today", author: 'Madeleine Dore', rating: 5, slug: '#book-09', cover: 'i-didnt-do-the-thing-today.jpg', dnf: true },
  { date: '2026-06-04', title: 'AI Snake Oil',               author: 'Arvind Narayanan & Sayash Kapoor', rating: 7, slug: '#book-10', cover: 'ai-snake-oil.png' },
  { date: '2026-06-05', title: 'Age of Invisible Machines',  author: 'Robb Wilson',                      slug: '#book-11', cover: 'age-of-invisible-machines.png', inProgress: true }
];
