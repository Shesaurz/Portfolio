const projects = [
  {
    id: "cinehouse-booking-system",
    title: "CineHouse Booking System",
    category: "Full-Stack Developer | IS3108",
    description:
      "CineHouse is a full-stack cinema platform built with separate Admin and Customer portals on a shared backend.",
    github: "",
    images: [
      "art/cinehouse1.png",
      "art/cinehouse2.png",
      "art/cinehouse3.png",
      "art/cinehouse4.png"
    ],
    highlights: [
      "Built a dual-portal architecture with role-specific interfaces: Admin Panel (EJS) for operations management and Customer Panel (React + Vite) for booking journeys.",
      "Developed complete admin workflows for managing movies, halls, screenings, and bookings, including protected routes and session-based authentication.",
      "Implemented customer movie discovery and screening exploration flows, with detailed movie pages and screening-level booking entry points.",
      "Created interactive seat-map booking with hall-based row/column generation and support for seat states.",
      "Engineered reservation-safe seat booking logic to prevent duplicate seat purchases during concurrent requests.",
    ],
    tools: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs",
      "Session Authentication",
      "CSS",
      "Git/GitHub"
    ]
  },
  {
    id: "where-to-go-next",
    title: "Where To Go Next",
    category: "Feature Developer | IS3108 Team Project",
    description:
      "Travel planning web app featuring itinerary discovery, collaborative planning flows, and moodboard organization for trip inspiration.",
    github: "https://github.com/chloe472/wheretogonext",
    images: [
      "art/wtgn1.png",
      "art/wtgn2.png",
      "art/wtgn3.png",
      "art/wtgn4.png"
    ],
    highlights: [
      "Designed and iterated early product flows using Figma prototypes before implementation.",
      "Implemented the Moodboard feature end-to-end, including folder and image management.",
      "Built structured Moodboard folder interactions to support organized trip inspiration.",
      "Integrated AI-powered image analysis to suggest relevant destinations from user-uploaded content.",
      "Connected frontend components to backend APIs with authenticated request handling.",
      "Developed collaborative planning flows, including shared interactions and real-time updates.",
      "Contributed features within a MERN stack codebase following existing architecture patterns."
    ],
    tools: ["React", "Vite", "JavaScript", "CSS", "Node.js", "Express", "MongoDB", "REST APIs", "Git/GitHub", "Figma"
    ]
  },
  {
    id: "last-tick",
    title: "The Last Tick",
    category: "Independent Developer | NoPoly Game Jam 2026",
    description: "A 3D looping narrative puzzle enabling players to reconstruct sentences and trigger branching story outcomes.",
    github: "https://github.com/Shesaurz/Last-Tick",
    images: ["art/lasttick1.png","art/lasttick2.png","art/lasttick3.png","art/lasttick4.png"],
    highlights: [
      "Created a 3D looping narrative puzzle enabling players to reconstruct sentences and trigger branching story outcomes.",
      "Integrated 3D assets, including props and interactive objects, into Unity using prefabs and materials.",
      "Animated lighting and visual effects to enhance scene clarity and player orientation.",
      "Developed interactive 3D systems to manage object interactions and tick-based progression loops.",
      "Enhanced user experience with synchronized audio, UI, and animation feedback for player actions.",
      "Programmed branching dialogue, event-driven triggers, and multiple endings based on player choices."
    ],
    tools: ["Unity","C#","Blender","3D Systems","UI/UX Design"," 3D Animation"]
  },
  {
    id: "blank-screen",
    title: "Blank Screen",
    category: "Independent Developer",
    description: "Narrative-driven game integrating 2D and 3D elements with data-driven gameplay mechanics.",
    github: "https://github.com/Shesaurz/Black-Screen",
    images: ["art/blank1.png","art/blank2.png","art/blank3.png","art/blank4.png","art/blank5.png"],
    highlights: [
      "Modeled and textured all 3D assets, integrating them into Unity with prefabs and materials.",
      "Animated 2D elements and custom assets to support interactive storytelling and gameplay flow.",
      "Built modular, data-driven architecture for dialogues, steps, and progression logic.",
      "Engineered query-based mechanics for dynamic state updates and narrative progression.",
      "Designed branching dialogue system with dynamic story state management.",
      "Integrated audio and visual effects to reinforce narrative mood and immersion."
    ],
    tools: ["Unity","C#","Blender","Visual Design","User Experience (UX)","2D/3D Integration"]
  },
  {
    id: "angklung",
    title: "NUS Angklung Ensemble Website",
    category: "Independent Developer",
    description: "Responsive website showcasing events, multimedia content, and interactive elements for the ensemble.",
    github: "https://github.com/Shesaurz/Angklung-Website",
    images: ["art/angklung1.png","art/angklung2.png","art/angklung3.png","art/angklung4.png","art/angklung5.png"],
    highlights: [
      "Designed user flows and high-fidelity Figma prototypes to validate layout consistency.",
      "Built user-facing UI/UX with animated transitions, scrolling galleries, and event-focused banners.",
      "Developed interactive components such as flippable cards and clickable Angklung element with audio feedback.",
      "Built responsive layouts for desktop and mobile with structured navigation, header, footer, and FAQ sections."
    ],
    tools: ["HTML","CSS","JavaScript","Figma","Responsive Design","UI/UX"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web Application",
    category: "Full-Stack Developer | Oct - Nov 2025",
    description: "Full-stack e-commerce platform with customer shopping flows, checkout, and employee admin workflows.",
    github: "",
    images: ["art/ecommerce1.png","art/ecommerce2.png","art/ecommerce3.png"],
    highlights: [
      "Created high-fidelity Figma prototypes for shopping, checkout, and admin interaction workflows.",
      "Built responsive front-end components for product browsing, cart, checkout, and admin dashboards.",
      "Developed Django backend supporting user authentication, product management, order workflows, and admin user management.",
      "Integrated front-end with backend APIs for seamless data flow and real-time updates.",
      "Handled database modeling and queries for products, users, and orders.",
      "Tested and iterated on front-end and backend workflows to improve usability and reliability."
    ],
    tools: ["Django","Python","HTML","CSS","SQL","Figma","UI/UX"]
  },
  {
    id: "mice-n-maven",
    title: "Mice N Maven",
    category: "Lead Developer | CP2106 Orbital (Apollo)",
    description: "2D tap-based café idle simulation game with automated gameplay and interactive UI.",
    github: "https://github.com/Shesaurz/Mice-N-Maven",
    images: ["art/mice1.png","art/mice2.png","art/mice3.png","art/mice4.png"],
    highlights: [
      "Led a 2-person team to design and develop a 2D tap-based café idle simulation game.",
      "Conducted iterative usability testing and refined wireframes based on user feedback.",
      "Engineered core gameplay systems, including upgrade-based economy and automated progression loops.",
      "Designed and implemented 2D assets and animations for smooth gameplay experience.",
      "Applied 2D physics mini-games and intuitive UI to enhance player interaction.",
      "Managed version control and project workflow using Git/GitHub."
    ],
    tools: ["Unity","C#","Git/GitHub","2D Game Design","UI/UX Design","Animation"]
  }
];