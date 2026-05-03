// ── Deep Work data ────────────────────────────────────────────────────────
//
// Single session:
//   '2026-05-01': { h: 3, cat: 'build', note: 'What you worked on.' }
//
// Multiple sessions on the same day — use an array:
//   '2026-05-02': [
//     { h: 3, cat: 'build',    note: 'Personal website.' },
//     { h: 1, cat: 'practice', note: 'Guitar lesson with Mark.' },
//   ]
//
// cat options: 'build' | 'study' | 'practice' | 'read' | 'write'
// Leave a day out entirely if it was a rest day.
//
var deepWork = {
  '2026-04-04': [
    { h: 3, cat: 'build',    note: 'Personal website creation' },
    { h: 1, cat: 'practice', note: 'Guitar lesson with Mark' },
  ],
   '2026-04-05': [
    { h: 1.5, cat: 'build',    note: 'Deep Work dashboard creation' },
    { h: 1.5, cat: 'read', note: 'Reading - If This Is A Man' },
  ],
    '2026-04-06': [
    { h: 0.5, cat: 'build',    note: 'ResumeIQ bug fixes' },
    { h: 1, cat: 'study', note: 'Tech Bootcamp: Claude Code 101' },
    { h: 1.5, cat: 'study', note: 'The Rundown: AI Foundations Course' },

  ],
   '2026-04-07': [
    { h: 1.5, cat: 'build',    note: 'Automations for work' },
    { h: 1, cat: 'build', note: 'Project strategy for work' },
    { h: 1, cat: 'study', note: 'The Rundown: AI Foundations Course' },

  ],
   '2026-04-08': [
    { h: 2, cat: 'build',    note: 'Updated "Books" section' },
    { h: 1, cat: 'build', note: 'Worked on automations for work' },
    { h: 0.5, cat: 'read', note: 'Reading - If This Is A Man' },

  ],
   '2026-04-09': [
    { h: 2, cat: 'build',    note: 'Created the knowledge base and seach bar' },
    { h: 1, cat: 'build', note: 'Finished weekly report automations for work' },
    { h: 1.5, cat: 'study', note: 'Weekly GenAI study group' },
    { h: 1, cat: 'study', note: 'Agentic AI lectures' },

  ],
   '2026-04-10': [
    { h: 1, cat: 'build',    note: 'Created additional weekly metric reports for teammates' },
    { h: 1, cat: 'read', note: 'Read "If This Is A Man"' },

   ],
   '2026-04-11': [
    { h: 6, cat: 'build',    note: 'Created a family finance app for Jenny and I' },
    { h: 1, cat: 'read', note: 'Read "If This Is A Man"' },
    { h: 1.5, cat: 'practice', note: 'Weekly guitar lesson' },

    ],
   '2026-04-12': [
    { h: 1, cat: 'build',    note: 'Made updates to the finance app' },
    { h: 2, cat: 'practice', note: 'Guitar practice' },

    ],
   '2026-04-13': [
    { h: 1, cat: 'build',    note: 'Added categories to the Deep Work dashboard' },
    { h: 1, cat: 'build', note: 'Created multiple guitar practice routines' },
    { h: 1, cat: 'study', note: 'Agentic AI module' }

  ],
   '2026-05-01': [
    { h: 0.5, cat: 'build', note: 'AI Demo video' },
    { h: 2,   cat: 'build', note: 'Agent building' }
  ],
   '2026-05-03': [
    { h: 2, cat: 'build', note: 'Professional website update (thomasdenny.co)' }
  ]
};

// ── Daily Notes ───────────────────────────────────────────────────────────
//
// Add per-day notes and links here. Keys match the deepWork object.
// 'note' supports multiple lines (use \n).
// 'links' is an optional array of { label, url } objects.
//
var dayNotes = {
  '2026-04-08': {
    note: 'Updated the Books section. Also made progress on a few work automations.',
    links: []
  },

  '2026-04-09': {
    note: 'Reviewed the levenshtein distance, tiny language models, and reasoning in LLMs.',
    links: [
      {label: 'Wiki page', url: 'https://en.wikipedia.org/wiki/Levenshtein_distance'}
    ]
   },

  '2026-04-12': {
    note: 'Started practicing sweep picking and arpeggios (G Major and C Major). Picked up a metronome to dial in rhythm.',
    links: [
      {label: 'Sweep Picking', url: 'https://www.youtube.com/watch?v=oH6pZBheyXE'},
      {label: 'Metronome', url: 'https://www.youtube.com/watch?v=TzUAl4xiLcE'}
    ]
  },

  '2026-04-13': {
    note: 'Reviewed ReAct agents, the ReAct prompt, agent architecture, and MCP servers',
    links: [
      {label: 'ReAct agents', url: 'https://www.ibm.com/think/topics/react-agent'},
      {label: 'ReAct prompt', url: 'https://www.geeksforgeeks.org/artificial-intelligence/react-reasoning-acting-prompting/'},
      {label: 'MCP servers', url: 'https://modelcontextprotocol.io/docs/getting-started/intro'}
    ]
   },

  '2026-05-03': {
    note: 'Updates to professional site.',
    links: [
      {label: 'thomasdenny.co', url: 'https://thomasdenny.co/'}
    ]
   }

};
