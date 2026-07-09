export const portfolioData = {
  personal: {
    name: "Shivansh Chaurasiya",
    tagline: "Software Developer | AI Enthusiast | Problem Solver",
    email: "shivanshchaurasiya2004@gmail.com",
    phone: "+91-9795449504",
    linkedin: "https://linkedin.com/in/shivansh-chaurasiya-3ab6422a0",
    github: "https://github.com/shivanshc21",
    leetcode: "https://leetcode.com/shivanshc21",
    codeforces: "https://codeforces.com/profile/shivanshc21",
    codechef: "https://www.codechef.com/users/shivanshc21",
    intro:
      "Aspiring Software Engineer with strong problem-solving skills, a solid foundation in computer science fundamentals, and a proven track record in competitive programming. Eager to contribute to impactful software products and grow as a developer.",
  },

  about: {
    description:
      "I am an Aspiring Software Engineer pursuing B.Tech in Electronics and Communication Engineering at IIITDM Jabalpur. With strong problem-solving skills, a solid foundation in computer science fundamentals, and a proven track record in competitive programming (including 800+ LeetCode problems solved and Knight badge), I am eager to build high-performance backend systems and multi-agent AI workflows.",
    highlights: [
      "B.Tech in ECE at PDPM IIITDM Jabalpur",
      "LeetCode Knight (Max Rating: 1987) with 800+ Solved",
      "Specializes in React.js, Node.js & FastAPI",
      "Proven track record in Competitive Programming",
    ],
  },

  skills: {
    languages: ["C++", "Python", "HTML", "CSS", "Typescript", "JavaScript"],
    frameworks: ["React.js", "Express.js", "Node.js", "Redux", "LangGraph", "FastAPI", "Next.js"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "pgvector"],
    tools: ["Git", "GitHub", "Docker", "Postman", "Redis", "Celery"],
    services: ["Cloudinary", "ImageKit", "Clerk", "Inngest", "Nodemailer"],
    coreAreas: ["Data Structures and Algorithms", "Backend Development", "REST APIs", "Event-Driven Systems"],
    coursework: ["Computer Networking", "Object-Oriented Programming (OOP)", "Operating Systems", "DBMS"],
    softSkills: ["Teamwork", "Problem Solving", "Leadership", "Adaptability", "Time Management", "Quick Learning"]
  },

  projects: [
    {
      title: "PingUp - Social Platform with Event-Driven Architecture",
      description:
        "A full-stack social networking platform with 10+ core features including profiles, discovery, messaging, and AI-assisted interactions.",
      techStack: [
        "React.js",
        "React Router DOM",
        "Redux",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Multer",
        "Inngest",
        "Clerk",
        "ImageKit",
        "SSE"
      ],
      features: [
        "Designed a full-stack social networking platform with profiles, discovery, messaging, and AI-assisted interactions",
        "Architected event-driven workflows using Inngest, Clerk, and ImageKit for authentication, media management, and cross-service synchronization",
        "Integrated AI-based contextual reply suggestions and Server-Sent Events (SSE) for intelligent, real-time user interactions"
      ],
      github: "https://github.com/shivanshc21/PingUp",
      live: "https://pingup-umber.vercel.app/",
      category: "fullstack",
    },
    {
      title: "AgentFlow - Multi-Agent AI Document Intelligence Platform",
      description:
        "A multi-agent AI document intelligence platform orchestrating agents for automated document analysis, RAG query pipelines, and task planning.",
      techStack: [
        "FastAPI",
        "Python",
        "LangGraph",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "Celery",
        "Next.js"
      ],
      features: [
        "Engineered a multi-agent AI platform using LangGraph, orchestrating Retriever, Planner, Writer, and Critic agents",
        "Implemented a RAG pipeline with document chunking, vector embeddings, and semantic search using pgvector",
        "Developed scalable backend services with FastAPI, Redis, and Celery for asynchronous document processing and real-time AI interactions"
      ],
      github: "https://github.com/shivanshc21/AgentFlow",
      live: "#",
      category: "ai",
    },
    {
      title: "VideoTube - Scalable Video Hosting Backend",
      description:
        "A YouTube-style video hosting backend with comprehensive user authentication, video processing, engagement tracking, and subscription system.",
      techStack: [
        "Express.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "JWT",
        "bcrypt",
        "Mongoose"
      ],
      features: [
        "Designed a YouTube-style video hosting backend with 10+ core features including login, sign-up, logout, video upload, likes/dislikes, comments, replies, and subscriptions",
        "Engineered backend using Node.js, Express.js, MongoDB, Mongoose, with secure authentication via JWT, bcrypt, and token-based session handling",
        "Implemented access and refresh token-based authentication with secure password hashing following industry-standard practices"
      ],
      github: "https://github.com/shivanshc21/VideoTube",
      live: "#",
      category: "backend",
    },
  ],

  experience: [
    {
      title: "Bachelor of Technology in Electronics and Communication Engineering",
      organization: "PDPM Indian Institute of Information Technology, Design and Manufacturing Jabalpur",
      period: "Aug 2023 - Present",
      description:
        "CPI: 8.1 | Coursework: Computer Networking, Object-Oriented Programming (OOP), Operating Systems, DBMS, Data Structures and Algorithms",
      type: "education",
    },
  ],

  achievements: [
    {
      title: "LeetCode Biweekly Contest 184",
      description: "Ranked in the Top 2% Globally (Rank 585/35,747)",
      icon: "trophy",
      link: "https://leetcode.com/shivanshc21",
    },
    {
      title: "LeetCode Knight",
      description: "Knight badge with Max Rating: 1987, and 800+ problems solved",
      icon: "award",
      link: "https://leetcode.com/shivanshc21",
    },
    {
      title: "CodeChef 3-Star",
      description: "3-star rating with Max Rating: 1602, and 250+ problems solved",
      icon: "star",
      link: "https://www.codechef.com/users/shivanshc21",
    },
    {
      title: "CodeForces Specialist",
      description: "Specialist rank with 250+ problems solved",
      icon: "award",
      link: "https://codeforces.com/profile/shivanshc21",
    },
    {
      title: "Roborush 2.0 - 3rd Position",
      description: "Secured 3rd position in competition organized by Electronics and Robotics Society IIITDMJ",
      icon: "medal",
    },
  ],

  volunteer: [
    {
      title: "Core Member - Jagrati IIITDMJ",
      description:
        "Led social media strategy and community engagement, supporting educational programs for 100+ underprivileged children daily",
      period: "Aug 2023 - Present",
    },
  ],
};
