// SAMPLE / DEMO DATA: illustrative records, not real attributions.
const records = [
  {
    id: "SHK-001",
    title: "Kolam of the Rising Sun",
    creator: "Sample contributor",
    source: "Family tradition (sample data)",
    region: "Tamil Nadu",
    culturalContext: "Drawn at doorsteps in the morning, including during Diwali.",
    reusePermission: "Free to reuse with credit",
    attributionText: "Credit: Sample contributor, Tamil Nadu",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [
      { date: "2026-11-07", action: "Record created" },
      { date: "2026-11-07", action: "Forked as SHK-011" }
    ]
  },
  {
    id: "SHK-002",
    title: "Rangoli of Lotus Petals",
    creator: "Sample contributor",
    source: "Community workshop (sample data)",
    region: "Maharashtra",
    culturalContext: "Made with coloured powder at the entrance during Diwali.",
    reusePermission: "Reuse for non-commercial only",
    attributionText: "Credit: Sample contributor, Maharashtra",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [
      { date: "2026-11-07", action: "Record created" },
      { date: "2026-11-07", action: "Forked as SHK-012" }
    ]
  },
  {
    id: "SHK-003",
    title: "Diya Lamp Pattern",
    creator: "Sample artisan",
    source: "Pottery tradition (sample data)",
    region: "Gujarat",
    culturalContext: "Clay lamps arranged in patterns for Diwali night.",
    reusePermission: "Ask the community first",
    attributionText: "Credit: Sample artisan, Gujarat",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-004",
    title: "Alpona Floor Art",
    creator: "Sample contributor",
    source: "Household tradition (sample data)",
    region: "West Bengal",
    culturalContext: "Rice-paste patterns painted on floors to welcome Lakshmi during festival season.",
    reusePermission: "Free to reuse with credit",
    attributionText: "Credit: Sample contributor, West Bengal",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-005",
    title: "Night of Many Lamps",
    creator: "Sample community group",
    source: "Neighbourhood celebration (sample data)",
    region: "West Bengal",
    culturalContext: "Rows of lamps lit along rooftops and windows on the festival night.",
    reusePermission: "Do not reuse",
    attributionText: "Credit: Sample community group, West Bengal",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-006",
    title: "Akash Kandil Lantern",
    creator: "Sample artisan",
    source: "Craft tradition (sample data)",
    region: "Maharashtra",
    culturalContext: "Star-shaped paper lanterns hung outside homes before Diwali.",
    reusePermission: "Reuse for non-commercial only",
    attributionText: "Credit: Sample artisan, Maharashtra",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [
      { date: "2026-11-07", reason: "Missing attribution", note: "Sample flag for demo: design seen online without credit." }
    ],
    history: [
      { date: "2026-11-07", action: "Record created" },
      { date: "2026-11-07", action: "Flagged: Missing attribution" }
    ]
  },
  {
    id: "SHK-007",
    title: "Annakut Food Offering",
    creator: "Sample contributor",
    source: "Temple tradition (sample data)",
    region: "Uttar Pradesh",
    culturalContext: "A mountain of foods arranged as an offering on the day after Diwali.",
    reusePermission: "Ask the community first",
    attributionText: "Credit: Sample contributor, Uttar Pradesh",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-008",
    title: "Chopda Pujan Ledger Blessing",
    creator: "Sample contributor",
    source: "Business family tradition (sample data)",
    region: "Gujarat",
    culturalContext: "New account books are blessed with prayers and symbols at the start of the new year.",
    reusePermission: "Free to reuse with credit",
    attributionText: "Credit: Sample contributor, Gujarat",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-009",
    title: "Mandana Wall Painting",
    creator: "Sample artist",
    source: "Folk art tradition (sample data)",
    region: "Rajasthan",
    culturalContext: "Geometric patterns painted on walls and floors with white on a red base.",
    reusePermission: "Reuse for non-commercial only",
    attributionText: "Credit: Sample artist, Rajasthan",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-010",
    title: "Early Morning Oil Bath",
    creator: "Sample contributor",
    source: "Family tradition (sample data)",
    region: "Tamil Nadu",
    culturalContext: "A ritual oil bath before dawn on Diwali morning, followed by new clothes and sweets.",
    reusePermission: "Free to reuse with credit",
    attributionText: "Credit: Sample contributor, Tamil Nadu",
    createdDate: "2026-11-07",
    forkedFrom: null,
    flags: [],
    history: [{ date: "2026-11-07", action: "Record created" }]
  },
  {
    id: "SHK-011",
    title: "Muggu of the Rising Sun (variant)",
    creator: "Sample contributor",
    source: "Fork of SHK-001 (Kolam of the Rising Sun)",
    region: "Andhra Pradesh",
    culturalContext: "Drawn at the doorstep at dawn with rice flour, including during Diwali.",
    reusePermission: "Free to reuse with credit",
    attributionText: "Credit: Sample contributor, Andhra Pradesh. Adapted from Kolam of the Rising Sun by Sample contributor (SHK-001).",
    createdDate: "2026-11-07",
    forkedFrom: "SHK-001",
    flags: [],
    history: [{ date: "2026-11-07", action: "Forked from SHK-001" }]
  },
  {
    id: "SHK-012",
    title: "Rangoli of Marigold Petals (variant)",
    creator: "Sample contributor",
    source: "Fork of SHK-002 (Rangoli of Lotus Petals)",
    region: "Goa",
    culturalContext: "Made with flower petals and coloured powder at the entrance during Diwali.",
    reusePermission: "Reuse for non-commercial only",
    attributionText: "Credit: Sample contributor, Goa. Adapted from Rangoli of Lotus Petals by Sample contributor (SHK-002).",
    createdDate: "2026-11-07",
    forkedFrom: "SHK-002",
    flags: [],
    history: [{ date: "2026-11-07", action: "Forked from SHK-002" }]
  }
];