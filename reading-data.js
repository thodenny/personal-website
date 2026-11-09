// ── Reading data ─────────────────────────────────────────────────────────
//
// Everything on /books is drawn from this file: the timeline, Currently
// Reading, Top 8, stats, the Read the World map, authors, reading projects
// and the full list. Edit here, not in books/index.html.
//
// booksFinished: one entry per book, in the order read.
//   num         list number within its year ('01', '02' … '10', '11'); starts
//               again at '01' with the first book of a new year. The year
//               comes from date, and the page adds a year switcher by itself.
//   date        'YYYY-MM-DD' finish date (start date while inProgress)
//   approxDate  true → show "March 2026" instead of the exact day
//   started     'YYYY-MM-DD' start date (optional)
//   title, author   use ' & ' between co-authors
//   rating      N/10 (leave out while inProgress)
//   dnf / inProgress   true when they apply
//   cover       image file at the site root
//   notes       '/book-notes-…' page, if one exists (title links here)
//   goodreads   Goodreads URL
//   tags        genre slugs; labels live in bookTagLabels below
//   note        one-liner shown under the book (HTML allowed)
//   pages       page count
//   shelf       Library shelf (a key in libraryShelves below)
//   country     author's country, or an array for several — names must
//               match world-map-data.js (e.g. 'United States', 'United Kingdom')
//
var booksFinished = [
  { num: '01', shelf: 'fiction', date: '2026-01-09', title: 'Room', author: 'Emma Donoghue', rating: 8,
    cover: 'room.jpg', notes: '/book-notes-room', goodreads: 'https://www.goodreads.com/book/show/31685789-room',
    tags: ['fiction', 'literary'], pages: 321, country: 'Ireland',
    note: "My sister recommended this. A story told entirely from the POV of a five-year-old who has never left the room he was born in, which is actually a shed in someone's backyard. This book was inspired by the <a href=\"https://en.wikipedia.org/wiki/Fritzl_case\">Josef Fritzl</a> case. Messed up stuff." },

  { num: '02', shelf: 'stories', date: '2026-01-13', title: 'A Marriage at Sea', author: 'Sophie Elmhirst', rating: 7,
    cover: 'marriage.jpg', notes: '/book-notes-a-marriage-at-sea', goodreads: 'https://www.goodreads.com/book/show/220239083-a-marriage-at-sea',
    tags: ['nonfiction', 'adventure'], pages: 256, country: 'United Kingdom',
    note: 'A couple decides to sail across the Pacific with almost no experience. Their boat sinks. They spend 118 days on a raft. The survival story is gripping. Enjoyed this one.' },

  { num: '03', shelf: 'stories', date: '2026-01-19', title: 'The Tiger', author: 'John Vaillant', rating: 8,
    cover: 'the-tiger.jpg', notes: '/book-notes-the-tiger', goodreads: 'https://www.goodreads.com/book/show/7624594-the-tiger',
    tags: ['nonfiction', 'true-crime', 'adventure'], pages: 329, country: ['United States', 'Canada'],
    note: "A tiger in Siberia decides to hunt humans, methodically, over days. It's terrifying and the setting makes it worse. Vaillant writes the landscape so well you feel cold reading it." },

  { num: '04', shelf: 'tech', date: '2026-02-09', title: 'Co-Intelligence', author: 'Ethan Mollick', rating: 6,
    cover: 'cointelligence.jpg', notes: '/book-notes-co-intelligence', goodreads: 'https://www.goodreads.com/book/show/198678736-co-intelligence',
    tags: ['nonfiction', 'ai-tech'], pages: 243, country: 'United States',
    note: "Mollick is one of the clearest thinkers writing about AI right now, and there's a lot of noise out there. This is practical and genuinely interesting. I rated it a 6 mostly because I came in with a lot of context. If you're newer to the space, it's probably an 8." },

  { num: '05', shelf: 'stories', date: '2026-02-16', title: 'The Art Thief', author: 'Michael Finkel', rating: 9,
    cover: 'art-thief.jpg', notes: '/book-notes-the-art-thief', goodreads: 'https://www.goodreads.com/book/show/62873378-the-art-thief',
    tags: ['nonfiction', 'true-crime'], pages: 226, country: 'United States',
    note: 'The most successful art thief in history was doing it because he just genuinely loved the paintings. Stashed a billion dollars worth of art in his apartment. Finkel tells the story in a way that makes you almost root for the guy. Read in one sitting.' },

  { num: '06', shelf: 'fiction', date: '2026-03-10', approxDate: true, title: 'Fahrenheit 451', author: 'Ray Bradbury', rating: 7,
    cover: 'faranheit-451.jpg', notes: '/book-notes-fahrenheit-451', goodreads: 'https://www.goodreads.com/book/show/13079982-fahrenheit-451',
    tags: ['fiction', 'dystopian', 'classic'], pages: 249, country: 'United States',
    note: 'Books are banned and firemen set fire to any that are found. The story follows Guy Montag, a fireman, as he begins to question the society he lives in. This was fun read.' },

  { num: '07', shelf: 'philosophy', date: '2026-03-25', approxDate: true, title: "Man's Search for Meaning", author: 'Viktor E. Frankl', rating: 8,
    cover: 'mans-search-for-meaning.jpg', notes: '/book-notes-mans-search-for-meaning', goodreads: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
    tags: ['nonfiction', 'philosophy', 'translated'], pages: 165, country: 'Austria',
    note: "Viktor Frankl's account of surviving four Nazi concentration camps, and the psychological framework, logotherapy, he developed from the experience. The central argument: meaning, not pleasure or power, is the primary human drive. One of those books that makes you rethink suffering and choice." },

  { num: '08', shelf: 'memoir', date: '2026-05-04', title: 'If This Is A Man', author: 'Primo Levi', rating: 8,
    cover: 'if-this-is-a-man.jpg', notes: '/book-notes-if-this-is-a-man', goodreads: 'https://www.goodreads.com/book/show/6181.If_This_Is_a_Man_The_Truce',
    tags: ['nonfiction', 'history', 'memoir', 'translated'], pages: 398, country: 'Italy',
    note: "A firsthand account of survival in Auschwitz, written by Italian chemist Primo Levi. It's a precise and unflinching look at what the camp system did to human identity." },

  { num: '09', shelf: 'self', date: '2026-05-09', approxDate: true, title: "I Didn't Do the Thing Today", author: 'Madeleine Dore', rating: 5, dnf: true,
    cover: 'i-didnt-do-the-thing-today.jpg', notes: '/book-notes-i-didnt-do-the-thing-today', goodreads: 'https://www.goodreads.com/book/show/58210932-i-didn-t-do-the-thing-today',
    tags: ['nonfiction', 'productivity'], pages: 304, country: 'Australia',
    note: "Some decent ideas to sit with, but none of it felt new. A 5 for me because I'd already heard most of these conversations elsewhere — if it's your first pass through the productivity-guilt space, you'd probably get more out of it." },

  { num: '10', shelf: 'tech', date: '2026-06-04', title: 'AI Snake Oil', author: 'Arvind Narayanan & Sayash Kapoor', rating: 7,
    cover: 'ai-snake-oil.png', notes: '/book-notes-ai-snake-oil', goodreads: 'https://www.goodreads.com/book/show/210319458-ai-snake-oil',
    tags: ['nonfiction', 'ai-tech'], pages: 360, country: 'United States',
    note: "A clear-eyed takedown of AI hype. The distinction between predictive AI (mostly snake oil) and generative AI (genuinely capable, but not magic) is the book's best contribution. Worth reading if you work near this stuff and want the vocabulary to push back on inflated claims." },

  { num: '11', shelf: 'tech', date: '2026-11-07', approxDate: true, started: '2026-06-23', title: 'Ghost Work', author: 'Mary L. Gray & Siddharth Suri', rating: 5, dnf: true,
    cover: 'ghost_work.png', goodreads: 'https://www.goodreads.com/book/show/41963432-ghost-work',
    tags: ['nonfiction', 'ai-tech'], pages: 288, country: 'United States',
    note: "The hidden human labor behind AI — the on-demand workers who train models, moderate content, and fill the gaps machines can't close." },

  { num: '12', shelf: 'tech', date: '2026-11-07', title: 'Co-Existence', author: 'Ethan Mollick', rating: 7,
    cover: 'co-existence.png', goodreads: 'https://www.goodreads.com/book/show/245786509-co-existence',
    tags: ['nonfiction', 'ai-tech'], pages: 240, country: 'United States',
    note: "The Next Phase of AI. Mollick's follow-up to Co-Intelligence." },

  { num: '13', shelf: 'stories', date: '2026-11-07', started: '2026-11-07', title: 'Sapiens', author: 'Yuval Noah Harari', inProgress: true,
    cover: 'sapiens.png', goodreads: 'https://www.goodreads.com/book/show/23198201',
    tags: ['nonfiction', 'history'], pages: 466, country: 'Israel',
    note: 'A brief history of humankind, from 70,000 years ago through the cognitive, agricultural, and scientific revolutions.' }
];

// Display names for tag slugs. A slug without an entry is title-cased.
var bookTagLabels = {
  'ai-tech': 'AI &amp; Tech',
  'true-crime': 'True Crime',
  'literary': 'Literary Fiction',
  'nonfiction': 'Nonfiction',
  'sci-fi': 'Sci-Fi',
  'short-stories': 'Short Stories',
  'graphic-novel': 'Graphic Novel',
  'self-help': 'Self-Help'
};

// Top 8 — titles, in display order. Can include books from any year.
// Picked Nov 2026 from the 2026 log and the library.
var topEight = [
  "Meditations",
  "If This Is A Man",
  "1984",
  "The Art Thief",
  "Deep Work",
  "Four Thousand Weeks",
  "The Monk Who Sold His Ferrari",
  "On the Shortness of Life"
];

// The Library: every book on Thomas's shelves at home (photographed Nov 2026).
// The books in booksFinished above are on the shelves too and show up in the
// Library automatically. Mark ones he's read with read: true (and a rating
// if he remembers one). shelf = one of the keys in libraryShelves. country =
// author's country, same rules as above; read books count on the Read the
// World map. Covers come from Open Library and live in covers/; books without
// one get a spine card.
var libraryShelves = {
  business: 'Business &amp; Leadership',
  self: 'Self-Improvement',
  money: 'Money',
  health: 'Health &amp; Fitness',
  running: 'Running',
  philosophy: 'Philosophy &amp; Stoicism',
  fiction: 'Fiction &amp; Classics',
  stories: 'History &amp; True Stories',
  memoir: 'Memoir &amp; Biography',
  ideas: 'Science &amp; Ideas',
  tech: 'AI &amp; Tech',
  faith: 'Faith &amp; Spirituality'
};

var library = [
  // Top shelf
  { title: 'Daniels\' Running Formula', author: 'Jack Daniels', shelf: 'running', country: 'United States', cover: 'covers/daniels-running-formula.jpg' },
  { title: 'Hansons Marathon Method', author: 'Luke Humphrey', shelf: 'running', country: 'United States', cover: 'covers/hansons-marathon-method.jpg' },
  { title: 'The Maffetone Method', author: 'Philip Maffetone', shelf: 'running', read: true, country: 'United States', cover: 'covers/the-maffetone-method.jpg' },
  { title: '80/20 Running', author: 'Matt Fitzgerald', shelf: 'running', read: true, country: 'United States', cover: 'covers/80-20-running.jpg' },
  { title: 'The Endurance Diet', author: 'Matt Fitzgerald', shelf: 'running', country: 'United States', cover: 'covers/the-endurance-diet.jpg' },
  { title: 'Performance Nutrition for Runners', author: 'Matt Fitzgerald', shelf: 'running', read: true, country: 'United States', cover: 'covers/performance-nutrition-for-runners.jpg' },
  { title: 'Endure', author: 'Alex Hutchinson', shelf: 'running', country: 'Canada', cover: 'covers/endure.jpg' },
  { title: 'Never Split the Difference', author: 'Chris Voss & Tahl Raz', shelf: 'business', read: true, country: 'United States', cover: 'covers/never-split-the-difference.jpg' },
  { title: 'Pitch Anything', author: 'Oren Klaff', shelf: 'business', country: 'United States', cover: 'covers/pitch-anything.jpg' },
  { title: 'Deep Work', author: 'Cal Newport', shelf: 'self', read: true, country: 'United States', cover: 'covers/deep-work.jpg' },
  { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', shelf: 'self', read: true, country: 'United States', cover: 'covers/the-subtle-art-of-not-giving-a-f-ck.jpg' },
  { title: 'The Knowledge Illusion', author: 'Steven Sloman & Philip Fernbach', shelf: 'ideas', country: 'United States', cover: 'covers/the-knowledge-illusion.jpg' },
  { title: 'Levers', author: 'Amos Schwartzfarb & Trevor Boehm', shelf: 'business', country: 'United States', cover: 'covers/levers.jpg' },
  { title: 'The Millionaire Real Estate Investor', author: 'Gary Keller', shelf: 'money', country: 'United States', cover: 'covers/the-millionaire-real-estate-investor.jpg' },
  { title: 'Eat Smarter', author: 'Shawn Stevenson', shelf: 'health', read: true, country: 'United States', cover: 'covers/eat-smarter.jpg' },
  { title: 'Never Finished', author: 'David Goggins', shelf: 'memoir', read: true, country: 'United States', cover: 'covers/never-finished.jpg' },
  { title: 'The 10X Rule', author: 'Grant Cardone', shelf: 'business', read: true, country: 'United States', cover: 'covers/the-10x-rule.jpg' },
  { title: 'The Power of Intention', author: 'Wayne W. Dyer', shelf: 'self', country: 'United States', cover: 'covers/the-power-of-intention.jpg' },
  { title: 'Million Dollar Habits', author: 'Brian Tracy', shelf: 'self', read: true, country: 'Canada', cover: 'covers/million-dollar-habits.jpg' },
  { title: 'Creative Mind and Success', author: 'Ernest Holmes', shelf: 'faith', country: 'United States', cover: 'covers/creative-mind-and-success.jpg' },
  { title: 'Salt Sugar Fat', author: 'Michael Moss', shelf: 'health', read: true, country: 'United States', cover: 'covers/salt-sugar-fat.jpg' },
  { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', shelf: 'self', country: 'United States', cover: 'covers/the-7-habits-of-highly-effective-people.jpg' },
  { title: 'How Not to Be Wrong', author: 'Jordan Ellenberg', shelf: 'ideas', country: 'United States', cover: 'covers/how-not-to-be-wrong.jpg' },
  { title: 'Grit', author: 'Angela Duckworth', shelf: 'self', country: 'United States', cover: 'covers/grit.jpg' },
  { title: 'Email Essentials', author: 'Shirley Taylor', shelf: 'business', country: 'United Kingdom', cover: 'covers/email-essentials.jpg' },
  { title: 'Six Sigma for Managers', author: 'Greg Brue', shelf: 'business', country: 'United States', cover: 'covers/six-sigma-for-managers.jpg' },
  { title: 'The Practicing Mind', author: 'Thomas M. Sterner', shelf: 'self', country: 'United States', cover: 'covers/the-practicing-mind.jpg' },
  { title: 'The Book of Mistakes', author: 'Skip Prichard', shelf: 'self', read: true, country: 'United States', cover: 'covers/the-book-of-mistakes.jpg' },
  { title: 'Leading Change', author: 'John P. Kotter', shelf: 'business', country: 'United States', cover: 'covers/leading-change.jpg' },
  { title: 'Option B', author: 'Sheryl Sandberg & Adam Grant', shelf: 'self', country: 'United States', cover: 'covers/option-b.jpg' },
  { title: 'Raised in Captivity', author: 'Chuck Klosterman', shelf: 'fiction', country: 'United States', cover: 'covers/raised-in-captivity.jpg' },
  { title: 'The Infinite Game', author: 'Simon Sinek', shelf: 'business', country: 'United States', cover: 'covers/the-infinite-game.jpg' },
  { title: 'Nonviolent Communication', author: 'Marshall B. Rosenberg', shelf: 'self', country: 'United States', cover: 'covers/nonviolent-communication.jpg' },
  // Classics & stoics shelf
  { title: 'Atlas Shrugged', author: 'Ayn Rand', shelf: 'fiction', country: ['Russia', 'United States'], cover: 'covers/atlas-shrugged.jpg' },
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', shelf: 'fiction', country: 'France', cover: 'covers/the-count-of-monte-cristo.jpg' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', shelf: 'fiction', country: 'Russia', cover: 'covers/crime-and-punishment.jpg' },
  { title: 'The Grapes of Wrath', author: 'John Steinbeck', shelf: 'fiction', country: 'United States', cover: 'covers/the-grapes-of-wrath.jpg' },
  { title: 'The Stranger', author: 'Albert Camus', shelf: 'fiction', read: true, country: 'France', cover: 'covers/the-stranger.jpg' },
  { title: 'Siddhartha', author: 'Hermann Hesse', shelf: 'fiction', read: true, country: 'Germany', cover: 'covers/siddhartha.jpg' },
  { title: 'The Kite Runner', author: 'Khaled Hosseini', shelf: 'fiction', country: ['Afghanistan', 'United States'], cover: 'covers/the-kite-runner.jpg' },
  { title: 'Four Thousand Weeks', author: 'Oliver Burkeman', shelf: 'self', read: true, country: 'United Kingdom', cover: 'covers/four-thousand-weeks.jpg' },
  { title: 'Essentialism', author: 'Greg McKeown', shelf: 'self', read: true, country: 'United Kingdom', cover: 'covers/essentialism.jpg' },
  { title: 'The Daily Stoic', author: 'Ryan Holiday & Stephen Hanselman', shelf: 'philosophy', country: 'United States', cover: 'covers/the-daily-stoic.jpg' },
  { title: 'The Essential Stoic', author: 'Marcus Aurelius, Epictetus & Seneca', shelf: 'philosophy', country: 'Italy', cover: 'covers/the-essential-stoic.jpg' },
  { title: 'How to Think Like a Roman Emperor', author: 'Donald Robertson', shelf: 'philosophy', read: true, country: 'United Kingdom', cover: 'covers/how-to-think-like-a-roman-emperor.jpg' },
  { title: 'Meditations', author: 'Marcus Aurelius', shelf: 'philosophy', read: true, country: 'Italy', cover: 'covers/meditations-penguin.jpg' },
  { title: 'Discipline Is Destiny', author: 'Ryan Holiday', shelf: 'philosophy', read: true, country: 'United States', cover: 'covers/discipline-is-destiny.jpg' },
  { title: 'The Obstacle Is the Way', author: 'Ryan Holiday', shelf: 'philosophy', read: true, country: 'United States', cover: 'covers/the-obstacle-is-the-way.jpg' },
  { title: 'On the Shortness of Life', author: 'Seneca', shelf: 'philosophy', read: true, country: 'Italy', cover: 'covers/on-the-shortness-of-life-great-ideas.jpg' },
  { title: 'I Who Have Never Known Men', author: 'Jacqueline Harpman', shelf: 'fiction', country: 'Belgium', cover: 'covers/i-who-have-never-known-men.jpg' },
  { title: 'The Magic of Thinking Big', author: 'David J. Schwartz', shelf: 'self', country: 'United States', cover: 'covers/the-magic-of-thinking-big.jpg' },
  { title: 'Show Your Work!', author: 'Austin Kleon', shelf: 'self', read: true, country: 'United States', cover: 'covers/show-your-work.jpg' },
  { title: 'Die with Zero', author: 'Bill Perkins', shelf: 'money', read: true, country: 'United States', cover: 'covers/die-with-zero.jpg' },
  { title: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma', shelf: 'self', read: true, country: 'Canada', cover: 'covers/the-monk-who-sold-his-ferrari.jpg' },
  { title: 'Chop Wood Carry Water', author: 'Joshua Medcalf', shelf: 'self', read: true, country: 'United States', cover: 'covers/chop-wood-carry-water.jpg' },
  { title: 'Ultralearning', author: 'Scott H. Young', shelf: 'self', read: true, country: 'Canada', cover: 'covers/ultralearning.jpg' },
  { title: 'Purple Cow', author: 'Seth Godin', shelf: 'business', country: 'United States', cover: 'covers/purple-cow.jpg' },
  { title: 'Dopamine Nation', author: 'Anna Lembke', shelf: 'health', read: true, country: 'United States', cover: 'covers/dopamine-nation.jpg' },
  { title: 'The War of Art', author: 'Steven Pressfield', shelf: 'self', read: true, country: 'United States', cover: 'covers/the-war-of-art.jpg' },
  { title: 'The Circadian Code', author: 'Satchin Panda', shelf: 'health', read: true, country: ['India', 'United States'], cover: 'covers/the-circadian-code.jpg' },
  { title: 'Winning with Accountability', author: 'Henry J. Evans', shelf: 'business', read: true, country: 'United States', cover: 'covers/winning-with-accountability.jpg' },
  { title: 'The Easy Way to Control Alcohol', author: 'Allen Carr', shelf: 'health', read: true, country: 'United Kingdom', cover: 'covers/the-easy-way-to-control-alcohol.jpg' },
  { title: 'Make Men Strong Again', author: 'Elliott Hulse', shelf: 'self', country: 'United States', cover: 'covers/make-men-strong-again.jpg' },
  { title: 'Yes!', author: 'Noah J. Goldstein, Steve J. Martin & Robert Cialdini', shelf: 'business', country: 'United States', cover: 'covers/yes.jpg' },
  { title: 'Natural Hormonal Enhancement', author: 'Rob Faigin', shelf: 'health', read: true, country: 'United States', cover: 'covers/natural-hormonal-enhancement.jpg' },
  { title: 'The Four', author: 'Scott Galloway', shelf: 'tech', country: 'United States', cover: 'covers/the-four.jpg' },
  // Fiction & money shelf
  { title: 'The Circle', author: 'Dave Eggers', shelf: 'fiction', read: true, country: 'United States', cover: 'covers/the-circle.jpg' },
  { title: 'Tiny Habits', author: 'BJ Fogg', shelf: 'self', read: true, country: 'United States', cover: 'covers/tiny-habits.jpg' },
  { title: 'The Handmaid\'s Tale', author: 'Margaret Atwood', shelf: 'fiction', country: 'Canada', cover: 'covers/the-handmaids-tale.jpg' },
  { title: 'Brave New World', author: 'Aldous Huxley', shelf: 'fiction', country: 'United Kingdom', cover: 'covers/brave-new-world.jpg' },
  { title: 'Julia', author: 'Sandra Newman', shelf: 'fiction', read: true, country: 'United States', cover: 'covers/julia.jpg' },
  { title: '1984', author: 'George Orwell', shelf: 'fiction', read: true, country: 'United Kingdom', cover: 'covers/1984-fairey.jpg' },
  { title: 'Animal Farm', author: 'George Orwell', shelf: 'fiction', read: true, country: 'United Kingdom', cover: 'covers/animal-farm.jpg' },
  { title: 'Amusing Ourselves to Death', author: 'Neil Postman', shelf: 'ideas', country: 'United States', cover: 'covers/amusing-ourselves-to-death.jpg' },
  { title: 'A Random Walk Down Wall Street', author: 'Burton G. Malkiel', shelf: 'money', country: 'United States', cover: 'covers/a-random-walk-down-wall-street.jpg' },
  { title: 'The Psychology of Money', author: 'Morgan Housel', shelf: 'money', read: true, country: 'United States', cover: 'covers/the-psychology-of-money.jpg' },
  { title: 'The Solomon Secret', author: 'Bruce Fleet', shelf: 'money', read: true, country: 'United States', cover: 'covers/the-solomon-secret.jpg' },
  { title: 'Tax Strategies for High Net-Worth Individuals', author: 'Adil N. Mackwani', shelf: 'money', read: true, country: 'United States', cover: 'covers/tax-strategies-for-high-net-worth-individuals.jpg' },
  { title: 'Taxes 101', author: 'Michele Cagan', shelf: 'money', read: true, country: 'United States', cover: 'covers/taxes-101.jpg' },
  { title: 'Budgeting 101', author: 'Michele Cagan', shelf: 'money', read: true, country: 'United States', cover: 'covers/budgeting-101.jpg' },
  { title: 'The Richest Man in Babylon', author: 'George S. Clason', shelf: 'money', read: true, country: 'United States', cover: 'covers/the-richest-man-in-babylon.jpg' },
  { title: 'Clapton', author: 'Eric Clapton', shelf: 'memoir', country: 'United Kingdom', cover: 'covers/clapton.jpg' },
  { title: 'Age of Invisible Machines', author: 'Robb Wilson & Josh Tyson', shelf: 'tech', country: 'United States', cover: 'covers/age-of-invisible-machines.jpg' },
  // Business & self shelf
  { title: 'The 5 Types of Wealth', author: 'Sahil Bloom', shelf: 'money', read: true, country: 'United States', cover: 'covers/the-5-types-of-wealth.jpg' },
  { title: 'The Book of Joy', author: 'Dalai Lama, Desmond Tutu & Douglas Abrams', shelf: 'faith', country: ['India', 'South Africa', 'United States'], cover: 'covers/the-book-of-joy.jpg' },
  { title: 'Think and Grow Rich', author: 'Napoleon Hill', shelf: 'self', read: true, country: 'United States', cover: 'covers/think-and-grow-rich.jpg' },
  { title: 'Zen and the Art of Motorcycle Maintenance', author: 'Robert M. Pirsig', shelf: 'philosophy', country: 'United States', cover: 'covers/zen-and-the-art-of-motorcycle-maintenance.jpg' },
  { title: 'Men Are from Mars, Women Are from Venus', author: 'John Gray', shelf: 'self', read: true, country: 'United States', cover: 'covers/men-are-from-mars-women-are-from-venus.jpg' },
  { title: 'Quit Like a Millionaire', author: 'Kristy Shen & Bryce Leung', shelf: 'money', country: 'Canada', cover: 'covers/quit-like-a-millionaire.jpg' },
  { title: 'Good Authority', author: 'Jonathan Raymond', shelf: 'business', country: 'United States', cover: 'covers/good-authority.jpg' },
  { title: 'Built to Last', author: 'Jim Collins & Jerry I. Porras', shelf: 'business', country: 'United States', cover: 'covers/built-to-last.jpg' },
  { title: 'The Power of Positive Thinking', author: 'Norman Vincent Peale', shelf: 'self', country: 'United States', cover: 'covers/the-power-of-positive-thinking.jpg' },
  { title: 'Ishmael', author: 'Daniel Quinn', shelf: 'fiction', country: 'United States', cover: 'covers/ishmael.jpg' },
  { title: 'The 48 Laws of Power', author: 'Robert Greene', shelf: 'business', read: true, country: 'United States', cover: 'covers/the-48-laws-of-power.jpg' },
  { title: 'The Concise 48 Laws of Power', author: 'Robert Greene', shelf: 'business', country: 'United States', cover: 'covers/the-concise-48-laws-of-power.jpg' },
  { title: 'Good to Great', author: 'Jim Collins', shelf: 'business', country: 'United States', cover: 'covers/good-to-great.jpg' },
  { title: 'Amazon Unbound', author: 'Brad Stone', shelf: 'stories', country: 'United States', cover: 'covers/amazon-unbound.jpg' },
  { title: 'Pre-Suasion', author: 'Robert Cialdini', shelf: 'business', country: 'United States', cover: 'covers/pre-suasion.jpg' },
  { title: 'Multipliers', author: 'Liz Wiseman', shelf: 'business', country: 'United States', cover: 'covers/multipliers.jpg' },
  { title: 'Personality Isn\'t Permanent', author: 'Benjamin Hardy', shelf: 'self', country: 'United States', cover: 'covers/personality-isnt-permanent.jpg' },
  { title: 'The Power of Habit', author: 'Charles Duhigg', shelf: 'self', read: true, country: 'United States', cover: 'covers/the-power-of-habit.jpg' },
  { title: 'Becoming Bulletproof', author: 'Evy Poumpouras', shelf: 'memoir', read: true, country: 'United States', cover: 'covers/becoming-bulletproof.jpg' },
  { title: 'The First 90 Days', author: 'Michael D. Watkins', shelf: 'business', read: true, country: 'Canada', cover: 'covers/the-first-90-days.jpg' },
  { title: 'Why We Sleep', author: 'Matthew Walker', shelf: 'health', read: true, country: 'United Kingdom', cover: 'covers/why-we-sleep.jpg' },
  { title: 'The Personal MBA', author: 'Josh Kaufman', shelf: 'business', country: 'United States', cover: 'covers/the-personal-mba.jpg' },
  { title: 'Enrique\'s Journey', author: 'Sonia Nazario', shelf: 'stories', country: 'United States', cover: 'covers/enriques-journey.jpg' },
  { title: 'The Coaching Habit', author: 'Michael Bungay Stanier', shelf: 'business', country: 'Canada', cover: 'covers/the-coaching-habit.jpg' },
  { title: 'Being One', author: 'Steven Harrison', shelf: 'faith', country: 'United States', cover: 'covers/being-one.jpg' },
  { title: 'The Perks of Being a Wallflower', author: 'Stephen Chbosky', shelf: 'fiction', country: 'United States', cover: 'covers/the-perks-of-being-a-wallflower.jpg' },
  { title: 'The Checklist Manifesto', author: 'Atul Gawande', shelf: 'ideas', read: true, country: 'United States', cover: 'covers/the-checklist-manifesto.jpg' },
  { title: 'Rhinoceros Success', author: 'Scott Alexander', shelf: 'self', read: true, country: 'United States', cover: 'covers/rhinoceros-success.jpg' },
  // Leadership & AI shelf
  { title: 'Moonwalking with Einstein', author: 'Joshua Foer', shelf: 'ideas', country: 'United States', cover: 'covers/moonwalking-with-einstein.jpg' },
  { title: 'The Five Dysfunctions of a Team', author: 'Patrick Lencioni', shelf: 'business', country: 'United States', cover: 'covers/the-five-dysfunctions-of-a-team.jpg' },
  { title: 'HBR Guide to Work-Life Balance', author: 'Harvard Business Review', shelf: 'business', read: true, country: 'United States', cover: 'covers/hbr-guide-to-work-life-balance.jpg' },
  { title: 'High Performance Habits', author: 'Brendon Burchard', shelf: 'self', read: true, country: 'United States', cover: 'covers/high-performance-habits.jpg' },
  { title: 'The 360 Degree Leader', author: 'John C. Maxwell', shelf: 'business', country: 'United States', cover: 'covers/the-360-degree-leader.jpg' },
  { title: 'The Talent Code', author: 'Daniel Coyle', shelf: 'ideas', country: 'United States', cover: 'covers/the-talent-code.jpg' },
  { title: 'Leaders Eat Last', author: 'Simon Sinek', shelf: 'business', country: 'United States', cover: 'covers/leaders-eat-last.jpg' },
  { title: 'Black Privilege', author: 'Charlamagne Tha God', shelf: 'memoir', country: 'United States', cover: 'covers/black-privilege.jpg' },
  { title: 'A Boy, a Burrito, and a Cookie', author: 'Richard Montañez', shelf: 'memoir', country: 'United States', cover: 'covers/a-boy-a-burrito-and-a-cookie.jpg' },
  { title: 'As a Man Thinketh', author: 'James Allen', shelf: 'self', read: true, country: 'United Kingdom', cover: 'covers/as-a-man-thinketh.jpg' },
  { title: 'The Alchemist', author: 'Paulo Coelho', shelf: 'fiction', read: true, country: 'Brazil', cover: 'covers/the-alchemist.jpg' },
  { title: 'The Energy Bus', author: 'Jon Gordon', shelf: 'business', country: 'United States', cover: 'covers/the-energy-bus.jpg' },
  { title: 'The Untethered Soul', author: 'Michael A. Singer', shelf: 'faith', country: 'United States', cover: 'covers/the-untethered-soul.jpg' },
  { title: 'How to Get Rich', author: 'Felix Dennis', shelf: 'money', country: 'United Kingdom', cover: 'covers/how-to-get-rich.jpg' },
  { title: 'Psycho-Cybernetics', author: 'Maxwell Maltz', shelf: 'self', read: true, country: 'United States', cover: 'covers/psycho-cybernetics.jpg' },
  { title: 'Everything Is F*cked', author: 'Mark Manson', shelf: 'self', country: 'United States', cover: 'covers/everything-is-f-cked.jpg' },
  { title: 'Economics in One Lesson', author: 'Henry Hazlitt', shelf: 'money', country: 'United States', cover: 'covers/economics-in-one-lesson.jpg' },
  { title: 'The Elements of Style', author: 'William Strunk Jr. & E. B. White', shelf: 'ideas', country: 'United States', cover: 'covers/the-elements-of-style.jpg' },
  { title: 'AI Engineering', author: 'Chip Huyen', shelf: 'tech', country: ['Vietnam', 'United States'], cover: 'covers/ai-engineering.jpg' },
  { title: 'Code', author: 'Charles Petzold', shelf: 'tech', country: 'United States', cover: 'covers/code.jpg' },
  { title: 'Getting Things Done', author: 'David Allen', shelf: 'self', read: true, country: 'United States', cover: 'covers/getting-things-done.jpg' },
  { title: 'Bullshit Jobs', author: 'David Graeber', shelf: 'ideas', country: 'United States', cover: 'covers/bullshit-jobs.jpg' },
  // Fitness & faith shelf
  { title: '$100M Leads', author: 'Alex Hormozi', shelf: 'business', country: 'United States', cover: 'covers/100m-leads.jpg' },
  { title: '$100M Offers', author: 'Alex Hormozi', shelf: 'business', country: 'United States', cover: 'covers/100m-offers.jpg' },
  { title: 'ESV Men\'s Study Bible', author: 'Crossway', shelf: 'faith', cover: 'covers/esv-mens-study-bible.jpg' },
  { title: 'Atlas Obscura', author: 'Joshua Foer, Dylan Thuras & Ella Morton', shelf: 'stories', country: 'United States', cover: 'covers/atlas-obscura.jpg' },
  { title: 'WIN', author: 'James DiNicolantonio, Siim Land & Tristin Kennedy', shelf: 'health', country: ['United States', 'Estonia'], cover: 'covers/win.jpg' },
  { title: 'Slash', author: 'Slash & Anthony Bozza', shelf: 'memoir', country: ['United Kingdom', 'United States'], cover: 'covers/slash.jpg' },
  { title: 'A Promised Land', author: 'Barack Obama', shelf: 'memoir', country: 'United States', cover: 'covers/a-promised-land.jpg' },
  { title: 'Musashi', author: 'Eiji Yoshikawa', shelf: 'fiction', country: 'Japan', cover: 'covers/musashi.jpg' },
  { title: 'The Creature from Jekyll Island', author: 'G. Edward Griffin', shelf: 'money', country: 'United States', cover: 'covers/the-creature-from-jekyll-island.jpg' },
  { title: 'Forever Strong', author: 'Gabrielle Lyon', shelf: 'health', read: true, country: 'United States', cover: 'covers/forever-strong.jpg' },
  { title: 'The Unplugged Alpha', author: 'Richard Cooper', shelf: 'self', country: 'United Kingdom', cover: 'covers/the-unplugged-alpha.jpg' },
  { title: 'Unbeatable Mind', author: 'Mark Divine', shelf: 'self', read: true, country: 'United States', cover: 'covers/unbeatable-mind.jpg' },
  { title: 'It Worked for Me', author: 'Colin Powell', shelf: 'memoir', country: 'United States', cover: 'covers/it-worked-for-me.jpg' },
  { title: 'This Is Your Brain on Music', author: 'Daniel J. Levitin', shelf: 'ideas', country: 'United States', cover: 'covers/this-is-your-brain-on-music.jpg' },
  { title: 'Quantum Bullsh*t', author: 'Chris Ferrie', shelf: 'ideas', country: 'Canada', cover: 'covers/quantum-bullsh-t.jpg' },
  { title: 'Max Out Your Life', author: 'Ed Mylett', shelf: 'self', read: true, country: 'United States', cover: 'covers/max-out-your-life.jpg' },
  { title: 'Holy Bible (King James Version)', shelf: 'faith', cover: 'covers/holy-bible-king-james-version.jpg' },
  { title: 'The Holy Quran', author: 'Maulana Muhammad Ali', shelf: 'faith', country: 'Pakistan', cover: 'covers/the-holy-quran.jpg' },
  { title: 'Bhagavad Gita As It Is', author: 'A. C. Bhaktivedanta Swami Prabhupada', shelf: 'faith', country: 'India', cover: 'covers/bhagavad-gita-as-it-is.jpg' },
  { title: 'The Book of Mormon', shelf: 'faith', cover: 'covers/the-book-of-mormon.jpg' },
  { title: 'Stand Strong', author: 'Nick Vujicic', shelf: 'faith', country: 'Australia', cover: 'covers/stand-strong.jpg' }
];

// Reading projects. A slot fills when a finished (not DNF) book carries
// any of the slot's tags. Tag a book above and the matching slot fills.
var readingProjects = [
  {
    name: 'Read Wide',
    desc: 'Most of what I read is nonfiction by American authors. The goal here is to branch out into new genres and read writers from other countries.',
    slots: [
      { label: 'Literary Fiction',     tags: ['literary'] },
      { label: 'Classic',              tags: ['classic'] },
      { label: 'Sci-Fi &amp; Dystopian', tags: ['sci-fi', 'dystopian'] },
      { label: 'Fantasy',              tags: ['fantasy'] },
      { label: 'Mystery &amp; Thriller', tags: ['mystery', 'thriller'] },
      { label: 'Horror',               tags: ['horror'] },
      { label: 'Short Stories',        tags: ['short-stories'] },
      { label: 'Poetry',               tags: ['poetry'] },
      { label: 'Graphic Novel',        tags: ['graphic-novel'] },
      { label: 'Play',                 tags: ['play'] },
      { label: 'Essays',               tags: ['essays'] },
      { label: 'History',              tags: ['history'] },
      { label: 'Memoir &amp; Biography', tags: ['memoir', 'biography'] },
      { label: 'Science',              tags: ['science'] },
      { label: 'Philosophy',           tags: ['philosophy'] },
      { label: 'True Crime',           tags: ['true-crime'] },
      { label: 'Adventure &amp; Travel', tags: ['adventure', 'travel'] },
      { label: 'In Translation',       tags: ['translated'] },
      { label: 'AI &amp; Tech',        tags: ['ai-tech'] },
      { label: 'Self-Help',            tags: ['self-help', 'productivity'] }
    ]
  }
];

// Want to read: books he plans to read, in the order added. Same fields as a
// library book: { title, author, country, tags, cover, note }. If he owns it,
// just the title is enough; the page pulls the rest from the library entry.
var wantToRead = [
  { title: 'The Death of Ivan Ilyich', author: 'Leo Tolstoy', country: 'Russia', cover: 'covers/the-death-of-ivan-ilyich.jpg', tags: ['fiction', 'classic', 'translated'],
    note: 'A man realizes, too late, that he spent his life on the wrong things.' },
  { title: 'The Remains of the Day', author: 'Kazuo Ishiguro', country: 'United Kingdom', cover: 'covers/the-remains-of-the-day.jpg', tags: ['fiction', 'literary'],
    note: 'A butler looks back on a life given entirely to duty and starts to wonder what it cost him.' }
];
