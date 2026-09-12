const projects = [
  { id: "little-maker", 
    title: "Little Maker", 
    category: "Independent Developer", 
    description: "A 3D doll assembly prototype centered around physics-based object manipulation, where players assemble and customize a doll by positioning, rotating, and locking individual components.", 
    github: "", 
    media: [ 
      { type: "youtube", src: "l550jXHZWYI" },
      { type: "image", src: "art/doll1.png" }, 
      { type: "image", src: "art/doll2.png" }, 
      { type: "image", src: "art/doll3.png" } 
    ], 
    highlights: [ 
      "Object Manipulation - Developed physics-based pickup, throwing, and object handling mechanics for interacting with individual doll components.", 
      "Snap & Placement System - Programmed collision-driven placement that detects component categories and automatically snaps parts to designated workspace positions.", 
      "Assembly System - Implemented part locking mechanics that allow players to confirm component positions and progressively assemble the doll into a unified object.", 
      "Raycast Interaction - Developed camera-based raycast interactions for selecting, rotating, locking, and manipulating objects directly within the 3D environment.", 
      "Packing System - Created a staged packing workflow that transitions the assembled product through cardboard placement, opening, closing, and delivery states." ], 
    tools: ["Unity", "C#", "Physics", "Raycast", "RigidBody"] },
  {
    id: "broken-melody",
    title: "Broken Melody",
    category: "Independent Developer",
    description: "A 3D music-box puzzle prototype centered around a rotating mechanical cylinder, where players manipulate individual pins to configure and play a sequence of musical notes.",
    github: "",
    media: [
      { type: "youtube", src: "Vti0zEjJ9cU" },
      { type: "image", src: "art/bm1.png" },
      { type: "image", src: "art/bm2.png" },
      { type: "image", src: "art/bm3.png" }
    ],
    highlights: [
      "Interactive Pin Mechanism - Programmed individual pins to be pushed in and pulled out, with each pin maintaining its own position and state on the rotating cylinder.", 
      "Mechanical Music System - Implemented a rotating cylinder that detects pin positions and triggers corresponding musical strips, recreating the note-playing mechanism of a physical music box.", 
      "Dynamic Musical Strips - Programmed individual strips to play audio notes and physically move when struck by active pins, synchronizing mechanical movement with the melody.", 
      "Puzzle Configuration - Developed position-based puzzle logic to track player-configured pins and validate arrangements against predefined musical sequences.", 
      "3D Mechanical Design - Modeled the music-box cylinder, pins, musical strips, and surrounding mechanism in Blender, then integrated the custom assets and interactions into Unity."
    ],
    tools: ["Unity", "C#", "Blender", "Raycast"," 3D Animation"]
  },
  {
    id: "transmission",
    title: "Transmission",
    category: "Independent Developer | Brackeys Game Jam 2026.2",
    description: "A 2D narrative investigation game developed in five days, where players take on the role of a lighthouse watch operator, monitoring vessel traffic, tuning radio frequencies, and uncovering a branching story through intercepted transmissions.",
    github: "",
    media: [
      { type: "youtube", src: "d2pKG94bgH8" },
      { type: "image", src: "art/tm1.png" },
      { type: "image", src: "art/tm2.png" }
    ],
    highlights: [
      "Interactive Radio System - Developed frequency tuning and transmission handling mechanics for monitoring incoming vessel communications.",
      "Vessel Monitoring & Logbook - Implemented map and automatically updated logbook systems for tracking vessel routes, statuses, and discovered information.",
      "Branching Narrative - Programmed state-driven dialogue and branching choices, allowing player decisions and discoveries to influence interactions and story outcomes.",
      "2D Environment & Interface - Created and integrated custom 2D visual assets for the lighthouse environment and interactive interface."
    ],
    tools: ["Unity", "C#", "2D Game Design", "Narrative Systems"]
  },
  {
    id: "cinehouse-booking-system",
    title: "CineHouse",
    category: "Full-Stack Developer | IS3108",
    description:
      "CineHouse is a full-stack cinema booking platform with separate customer and admin portals, supporting movie discovery, seat selection, booking, and cinema operations management.",
    github: "",
    media: [
      { type: "image", src: "art/cinehouse1.png" },
      { type: "image", src: "art/cinehouse2.png" },
      { type: "image", src: "art/cinehouse3.png" },
      { type: "image", src: "art/cinehouse4.png" }
    ],
    highlights: [
      "Customer Booking Portal - Built the React portal for movie discovery, screening selection, seat booking, and confirmations.",
      "Interactive Seat Selection - Developed dynamic seat maps with availability validation and multi-seat selection.",
      "Concurrent Booking Handling - Prevented duplicate seat purchases during concurrent booking requests.",
      "Admin Management Portal - Built an EJS admin portal with CRUD workflows for movies, halls, seats, screenings, and bookings.",
      "Authentication & Access Control - Implemented session authentication, password hashing, and role-based middleware.",
      "Data Validation - Validated hall and screening data to ensure consistent and active booking workflows.",
    ],
    tools: ["React", "Node.js", "Express", "MongoDB", "CSS"]
  },
  {
    id: "where-to-go-next",
    title: "Where To Go Next",
    category: "Feature Developer | IS3108",
    description:
      "A collaborative travel planning web app developed as part of a 5-person team, combining itinerary discovery, Pinterest-style moodboards, and AI-powered recommendations to help users organize and explore travel ideas.",
    github: "https://github.com/chloe472/wheretogonext",
    media: [
      { type: "image", src: "art/wtgn1.png" },
      { type: "image", src: "art/wtgn2.png" },
      { type: "image", src: "art/wtgn3.png" },
      { type: "image", src: "art/wtgn4.png" }
    ],
    highlights: [
        "User Flow & Prototyping - Designed high-fidelity Figma prototypes for moodboard and trip-planning flows.",
        "Pinterest-Style Moodboard - Built the Moodboard feature with CRUD operations for folders, images, and user reactions.",
        "REST API Development - Implemented 8 authenticated API routes for moodboard management and AI analysis.",
        "AI-Powered Recommendations - Integrated Gemini image and text analysis for travel theme identification and destination recommendations.",
    ],
    tools: ["React", "Node.js", "Express", "MongoDB", "Figma"
    ]
  },
  {
    id: "last-tick",
    title: "The Last Tick",
    category: "Independent Developer | NoPoly Game Jam 2026",
    description: "A 3D puzzle game developed in four days, where players explore a study and solve four sequential text-based puzzles under a time limit.",
    github: "",
    media: [
      { type: "youtube", src: "mS1JucsuRZE" },
      { type: "image", src: "art/lasttick1.png" },
      { type: "image", src: "art/lasttick2.png" },
      { type: "image", src: "art/lasttick3.png" }
    ],
    highlights: [
      "3D Puzzle Gameplay - Developed four sequential text-based puzzles within an interactive study environment.",
      "Time-Based Puzzle System - Programmed a 50-second puzzle timer using Scriptable Objects, raycasts, and event-driven triggers.",
      "Dialogue & Game State - Implemented state-driven dialogue and gameplay systems for player input, events, animations, and narrative outcomes.",
      "3D Environment & Assets - Created the full 3D environment in Blender, including props, materials, and animations.",
    ],
    tools: ["Unity", "C#", "Blender", "Raycast"," 3D Animation"]
  },
  {
    id: "angklung",
    title: "NUSAE Website",
    category: "Independent Developer",
    description: "A responsive website designed and developed for NUS Angklung Ensemble AY25/26 to showcase events, recruitment, performances, and organizational information across desktop and mobile.",
    github: "https://github.com/Shesaurz/Angklung-Website",
    media: [
      { type: "image", src: "art/angklung1.png" },
      { type: "image", src: "art/angklung2.png" },
      { type: "image", src: "art/angklung3.png" },
      { type: "image", src: "art/angklung4.png" },
      { type: "image", src: "art/angklung5.png" }
    ],
    highlights: [
        "Responsive Web Design - Designed and developed layouts, navigation, and interfaces for desktop and mobile.",
        "Interactive Components - Implemented image carousels, animated transitions, and flippable information cards.",
        "Content Management - Maintained the website throughout AY25/26, managing recruitment, events, and organizational content.",
        "Interactive Multimedia - Integrated multimedia content and audio feedback for a more engaging user experience.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX"]
  },
  {
    id: "ecommerce",
    title: "Auroramart",
    category: "Full-Stack Developer | Oct - Nov 2025",
    description: "A full-stack e-commerce web application developed as part of a 2-person team, featuring customer shopping and checkout flows alongside an employee management portal for store operations.",
    github: "",
    media: [
      { type: "image", src: "art/ecommerce1.png" },
      { type: "image", src: "art/ecommerce2.png" },
      { type: "image", src: "art/ecommerce3.png" }
    ],
    highlights: [
        "Customer Shopping Experience - Developed responsive interfaces for product discovery, search, cart management, and checkout.",
        "E-Commerce Prototyping - Designed high-fidelity Figma prototypes for product, cart, checkout, and order workflows.",
        "Employee Management Portal - Built CRUD workflows for customers, products, vouchers, and orders using SQL.",
        "AI Product Recommendations - Implemented a Python recommendation algorithm for contextual suggestions during cart and checkout.",
    ],
    tools: ["Python", "Django", "CSS", "SQL", "Figma"]
  },
  {
    id: "mice-n-maven",
    title: "Mice N Maven",
    category: "Lead Technical Developer | CP2106 Orbital (Apollo)",
    description: "A 2D idle café simulation game developed as part of a 2-person team, featuring automated customer, cooking, seating, and upgrade progression systems built around a cumulative in-game economy.",
    github: "https://github.com/Shesaurz/Mice-N-Maven",
    media: [
      { type: "image", src: "art/mice1.png" },
      { type: "image", src: "art/mice2.png" },
      { type: "image", src: "art/mice3.png" },
      { type: "image", src: "art/mice4.png" }
    ],
    highlights: [
      "Core Café Gameplay - Developed the customer loop, cooking, seating, and upgrade progression systems.",
      "Automated Gameplay Systems - Engineered customer arrivals, dish preparation, dining, and coin collection across four seats.",
      "Modular Game Architecture - Developed reusable gameplay systems using component-based design principles.",
      "Progression & Economy - Implemented upgrade systems and a cumulative economy for automated progression.",
      "Iterative Playtesting - Conducted six rounds of playtesting to refine gameplay and upgrade systems.",
    ],
    tools: ["Unity", "C#", "2D Game Design", "Game System"]
  }
];