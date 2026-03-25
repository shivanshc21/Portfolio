export const portfolioData = {
  personal: {
    name: "Shivansh Chaurasiya",
    tagline: "Software Developer | AI Enthusiast | Problem Solver",
    email: "shivanshchaurasiya2004@gmail.com",
    phone: "+91-9795449504",
    linkedin: "https://linkedin.com/in/shivansh-chaurasiya-3ab6422a0",
    github: "https://github.com/shivanshc21",
    intro: "A passionate software developer and competitive programmer pursuing B.Tech in Electronics and Communication Engineering at IIITDM Jabalpur. I specialize in full-stack development, building scalable web applications, and solving complex algorithmic challenges."
  },

  about: {
    description: "I'm a dedicated software developer with a strong foundation in data structures, algorithms, and full-stack development. With 680+ problems solved on LeetCode and hands-on experience building production-ready applications, I combine theoretical knowledge with practical implementation. My expertise spans from designing RESTful APIs and event-driven architectures to implementing real-time communication systems and AI-powered features.",
    highlights: [
      "Full-stack developer specializing in MERN stack",
      "LeetCode Knight with 680+ problems solved",
      "Experience with real-time systems and event-driven architecture",
      "Passionate about building scalable, user-centric applications"
    ]
  },

  skills: {
    frontend: ["React.js", "Redux", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Event-Driven Systems"],
    aiml: ["LLM Integration", "Prompt Engineering", "Context-Aware Systems"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose"],
    tools: ["Git", "GitHub", "Docker", "Postman"],
    services: ["Cloudinary", "ImageKit", "Clerk", "Inngest", "Nodemailer", "Stripe"],
    languages: ["C++", "Python", "JavaScript"]
  },

  projects: [
    {
      title: "PingUp - Social Networking Platform",
      description: "A full-stack social media platform with real-time messaging, user profiles, follow functionality, and an LLM-powered chat assistant for context-aware reply suggestions.",
      techStack: ["React.js", "Redux", "Express.js", "Node.js", "MongoDB", "SSE", "Inngest", "Clerk"],
      features: [
        "Real-time private messaging using Server-Sent Events (SSE)",
        "Event-driven architecture with Inngest for service synchronization",
        "LLM-powered chat assistant with context-aware suggestions",
        "User profiles, follow system, and personalized discovery"
      ],
      github: "https://github.com/shivanshc21/PingUp",
      live: "#",
      category: "fullstack"
    },
    {
      title: "Tomato - Food Delivery Platform",
      description: "A comprehensive food delivery website with secure authentication, cart management, online payments via Stripe, and role-based access control.",
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB", "JWT", "Stripe"],
      features: [
        "Secure user authentication with JWT and bcrypt",
        "RESTful APIs for user, food catalog, and order management",
        "Role-based access control for customers and admins",
        "Stripe integration for secure payment processing"
      ],
      github: "https://github.com/shivanshc21/Tomato",
      live: "#",
      category: "fullstack"
    },
    {
      title: "Video Tube Backend",
      description: "A YouTube-style video hosting backend with comprehensive features including authentication, video management, engagement system, and subscription functionality.",
      techStack: ["Express.js", "Node.js", "MongoDB", "JWT", "bcrypt", "Mongoose"],
      features: [
        "10+ core features: login, video upload, likes, comments, subscriptions",
        "Secure authentication with access/refresh tokens",
        "Industry-standard password hashing and session handling",
        "Comment threads, video engagement, and subscription management"
      ],
      github: "https://github.com/shivanshc21/VideoTube",
      live: "#",
      category: "backend"
    }
  ],

  experience: [
    {
      title: "B.Tech in Electronics and Communication Engineering",
      organization: "IIITDM Jabalpur",
      period: "Aug 2023 - Present",
      description: "CPI: 8.1 | Relevant Coursework: Data Structures and Algorithms, Computer Networking, OOP, Operating Systems, DBMS",
      type: "education"
    }
  ],

  achievements: [
    {
      title: "LeetCode Knight",
      description: "680+ problems solved with a maximum streak of 127 days",
      icon: "trophy"
    },
    {
      title: "CodeChef 3-Star",
      description: "250+ problems solved with 3-star rating",
      icon: "star"
    },
    {
      title: "CodeForces Pupil",
      description: "Pupil rank with 250+ problems solved",
      icon: "award"
    },
    {
      title: "Roborush 2.0 - 3rd Position",
      description: "Secured 3rd position in robotics competition organized by Electronics and Robotics Society IIITDMJ",
      icon: "medal"
    }
  ],

  volunteer: [
    {
      title: "Core Member - Jagrati IITDMJ",
      description: "Led social media strategy and community engagement, supporting educational programs for 100+ underprivileged children daily",
      period: "Ongoing"
    }
  ]
};
