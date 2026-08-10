export const profile = {
  name: "Gautam Vhavle",
  pronouns: "he/him",
  location: "Bengaluru, Karnataka, India",
  timezone: "IST (UTC+05:30)",
  role: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "GenAI Developer",
    "IoT Developer",
    "Context Engineer",
  ],
  status: "Available for work",
  email: "gautamvhavle@gmail.com",
  bio: "Software engineer. Patent holder. Builder at heart. I craft intelligent systems that bridge cutting-edge technology and real-world impact. At Siemens, I turn complex AI concepts into production-ready products that ship, scale, and matter.",
  links: {
    portfolio: "https://gautamvhavle.vercel.app",
    resume:
      "https://drive.google.com/file/d/11226IywvimrBUydAPa9DVyvfE1thKh2b/view?usp=sharing",
    github: "https://github.com/GautamVhavle",
    linkedin: "https://www.linkedin.com/in/gautamvhavle",
    x: "https://x.com/gautamvvvv",
    instagram: "https://instagram.com/gautam_vhavle",
    youtube: "https://youtube.com/@gautamvhavle",
    dev: "https://dev.to/gautamvhavle",
    spotify: "https://open.spotify.com/user/31pd44dwu42evyskhwyb3fh7t2yy",
    calendar: "https://cal.com/gautamvhavle/30min",
    company: "https://grigtechnologies.com",
  },
};

export const story = [
  {
    title: "Curiosity first",
    text: "Before I knew what engineering meant, I was taking apart remote controls, switches, electronics, and broken toys to understand how they worked. That instinct still drives everything I build.",
  },
  {
    title: "IoT made code physical",
    text: "Home automation pulled me into embedded systems and hardware integration. Code could suddenly sense and change the real world, where latency, power, and reliability actually matter.",
  },
  {
    title: "Full-stack connected the system",
    text: "I learned to build the whole path: frontend, backend, database, deployment, and CI/CD. The goal shifted from shipping isolated features to shipping complete solutions.",
  },
  {
    title: "AI is the natural evolution",
    text: "LLMs, agents, RAG, MCP, and orchestration add intelligence to the software and hardware foundation I already love. I am currently focused on systems that reason, adapt, and decide.",
  },
];

export const interests = [
  ["Gaming", "Competitive and story-driven games"],
  ["Music", "Hypertechno, EDM, and lossless audio"],
  ["Anime", "No explanation needed"],
  ["Drives", "Long drives with a great soundtrack"],
  ["Books", "Some knowledge hits better on paper"],
  ["Home automation", "Build smart systems once so life runs smoother"],
];

export const projects = [
  {
    name: "LearnerVerse",
    description:
      "An AI-native EdTech platform that turns any playlist into a structured, interactive course.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Razorpay",
    ],
    website: "https://learnerverse.xyz",
    source: "https://github.com/GautamVhavle/learner-verse",
  },
  {
    name: "CatGPT Gateway",
    description:
      "Turns the ChatGPT or Claude WebUI into a working OpenAI-compatible API through browser automation.",
    tech: ["Python", "FastAPI", "LangChain", "Bash", "Playwright", "NoVNC"],
    source: "https://github.com/GautamVhavle/CatGPT-Gateway",
    article:
      "https://dev.to/gautamvhavle/i-reverse-engineered-chatgpts-ui-into-an-openai-compatible-api-and-heres-why-you-shouldnt-ch",
  },
  {
    name: "BrowserLLM",
    description:
      "Runs more than 100 open-source language models entirely in the browser using WebGPU and WebLLM.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS", "WebGPU", "WebLLM"],
    website: "https://browserllm.vercel.app",
  },
  {
    name: "Universal JSON Agent MCP",
    description:
      "Lets developers explore very large JSON files with natural language using specialized MCP tools.",
    tech: ["Python", "MCP", "LangChain", "Langfuse", "VS Code"],
    source: "https://github.com/GautamVhavle/universal-json-agent",
    article:
      "https://dev.to/gautamvhavle/my-json-was-too-big-for-my-ai-so-i-built-an-mcp-server-to-fix-it-43m2",
  },
  {
    name: "Ventory",
    description: "An approachable inventory management platform for MSMEs.",
    tech: ["React", "JavaScript", "FastAPI", "Supabase", "Docker", "Figma"],
    website: "https://ventory.in",
  },
  {
    name: "GRIG Technologies",
    description: "A clean, modern company website for a technology business.",
    tech: ["Vite", "React", "Sass", "JavaScript", "Figma"],
    website: "https://grigtechnologies.com",
  },
  {
    name: "KYRA-AI",
    description:
      "A legal assistant chatbot built to answer legal queries using GPT-3.",
    tech: ["Vite", "React", "Sass", "JavaScript"],
    source: "https://github.com/GautamVhavle/KYRA-AI",
  },
  {
    name: "Parkive",
    description:
      "A smart parking solution with real-time IoT data visualization.",
    tech: ["React", "Sass", "JavaScript", "Espressif", "Figma"],
    website: "https://gautamvhavle.wixsite.com/website",
    source: "https://github.com/GautamVhavle/parkive",
  },
];

export const experience = [
  {
    company: "Siemens",
    companyUrl: "https://www.siemens.com/",
    role: "Graduate Engineer Trainee",
    period: "April 2025 — Present",
    location: "Bengaluru, India",
    bullets: [
      "Developing a Threat and Risk Assessment AI assistant for industrial cyber-risk analysis and mitigation workflows.",
      "Designing AI orchestration with LangChain, LangGraph, and vision models for dynamic decision-making and task automation.",
      "Building a React and FastAPI application that connects complex AI pipelines to an intuitive interface.",
      "Delivering risk categorization, scoring, and mitigation suggestions through a scalable assessment dashboard.",
    ],
  },
  {
    company: "Brand Context",
    companyUrl: "https://brandcontext.ai/",
    role: "IoT Developer Intern",
    period: "December 2024 — March 2025",
    location: "Remote",
    bullets: [
      "Prototyped an AI-driven modular bot for manufacturing updates, video streaming, barcode scanning, and monitoring.",
      "Contributed to CAD modeling and component selection to improve the bot's design and functionality.",
      "Built a Raspberry Pi AI camera for dashboard-panel monitoring and extended it into a smart factory helmet.",
    ],
  },
  {
    company: "GRIG Technologies",
    companyUrl: "https://grigtechnologies.com",
    role: "Full Stack IoT Developer",
    period: "August 2023 — January 2025",
    location: "Pune, India",
    bullets: [
      "Built a full-stack business management product for mid-sized stores from design through implementation.",
      "Maintained organizational GitHub workflows, CI/CD pipelines, deployments, and related DevOps systems.",
      "Led R&D for a lightweight hands-free Linux kiosk built around the Raspberry Pi Zero 2W.",
      "Developed an alert dashboard frontend for automated workflows and promotional email delivery.",
    ],
  },
  {
    company: "Golain",
    companyUrl: "https://golain.io/",
    role: "IoT Developer Intern",
    period: "June 2024 — August 2024",
    location: "Remote",
    bullets: [
      "Migrated PlatformIO SDKs to Arduino IDE for better cross-platform compatibility.",
      "Developed Espressif SDK integrations for Golain Cloud and improved serialization with Protocol Buffers and ArduinoJson.",
      "Delivered client prototypes including a smart bedside table and WLED automation system.",
      "Trained a TensorFlow Lite facial-recognition model for an AI-powered door lock.",
    ],
  },
  {
    company: "E4A Solutions",
    companyUrl: "https://e4asolution.com/",
    role: "Embedded Developer Intern",
    period: "April 2023 — July 2023",
    location: "Mumbai, India",
    bullets: [
      "Developed a hospital alert solution with NRF52, Raspberry Pi, Thread mesh networking, and MQTT.",
      "Integrated GPIO alert triggers and optimized NRF power management.",
      "Created a responsive web control interface with NoSQL-backed event logging and analysis.",
    ],
  },
];

export const skillGroups = [
  ["Languages", ["Python", "TypeScript", "JavaScript", "C++", "Bash"]],
  ["Frontend", ["React", "Vite", "Sass", "Tailwind CSS", "shadcn/ui"]],
  [
    "Backend & data",
    ["FastAPI", "PostgreSQL", "Supabase", "MSSQL", "MongoDB", "Razorpay"],
  ],
  [
    "AI & agents",
    [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "MCP",
      "WebLLM",
      "Ollama",
      "OpenRouter",
      "Gemini",
      "Claude",
      "Docling",
      "Langfuse",
    ],
  ],
  [
    "Infrastructure",
    ["Git", "GitHub", "Docker", "Kubernetes", "Helm", "n8n", "NoVNC"],
  ],
  ["Hardware & IoT", ["Raspberry Pi", "Espressif", "MQTT", "Embedded Linux"]],
  ["Quality & design", ["Postman", "Playwright", "Figma", "Canva"]],
  ["Developer tools", ["VS Code", "Cursor", "GitHub Copilot", "PyPI"]],
];

export const certifications = [
  [
    "Retrieval Augmented Generation (RAG)",
    "DeepLearning.AI",
    "Dec 2025",
    "https://coursera.org/share/78ea2fd0831171b2b6b78bb9bf978c05",
    ["RAG", "Retrieval", "Chunking", "Agents"],
  ],
  [
    "Quickstart: LangGraph Essentials — Python",
    "LangChain",
    "Nov 2025",
    "https://academy.langchain.com/certificates/ndqtwkxtu0",
    ["Agentic AI", "Graphs", "Human-in-the-loop", "Memory"],
  ],
  [
    "Quickstart: LangChain Essentials — Python",
    "LangChain",
    "Oct 2025",
    "https://academy.langchain.com/certificates/cyjulhh0ma",
    ["Agents", "Tools", "Orchestration", "Context"],
  ],
  [
    "ChatGPT Prompt Engineering for Developers",
    "DeepLearning.AI",
    "Sep 2025",
    "https://learn.deeplearning.ai/accomplishments/109eb03d-bf30-49a5-99cd-1a08514940cc",
    ["Chatbots", "GenAI", "Prompt engineering"],
  ],
  [
    "Foundation: Introduction to LangGraph",
    "LangChain",
    "Sep 2025",
    "https://academy.langchain.com/certificates/xok3d0t5ig",
    ["Graphs", "LangChain", "Code structure"],
  ],
  [
    "Generative AI: Working with Large Language Models",
    "LinkedIn",
    "Sep 2025",
    "https://www.linkedin.com/learning/certificates/559b5a260a0f44154094bce1d5648adaa9a8440d9e8878235766448d846b5da2",
    ["NLP", "Transformers", "LLMs"],
  ],
  [
    "Introduction to Generative AI",
    "Google",
    "Sep 2025",
    "https://www.coursera.org/account/accomplishments/verify/250W63NDY3MK",
    ["Generative AI"],
  ],
  [
    "Advanced AI: Transformers for Computer Vision",
    "LinkedIn",
    "Jun 2025",
    "https://www.linkedin.com/learning/certificates/15694683211d1a2f4c7fa4b47a7d25795099a53a34c6199e8fcde5cd8f5d407f",
    ["Transformers", "GANs"],
  ],
  [
    "Multi-Agent LangChain: Real-World Applications",
    "LinkedIn",
    "May 2025",
    "https://www.linkedin.com/learning/certificates/a32498e2f5f258365e4a66cd7acd08c6b389552c8af17b1d103a9a42801c4e1f",
    ["Multi-agent systems", "LangChain", "GenAI"],
  ],
  [
    "Advanced Prompt Engineering Techniques",
    "LinkedIn",
    "Apr 2025",
    "https://www.linkedin.com/learning/certificates/c5da172389710fa740c9d70d7b52d2e51fde6d7784c6750e3f70be52bca9efec",
    ["Prompt engineering"],
  ],
  [
    "Data Analysis and Visualization Foundations",
    "IBM",
    "Dec 2024",
    "https://coursera.org/share/ca6e32cece9fc170783744ad00387069",
    ["Data analysis", "Visualization"],
  ],
  [
    "Network Security",
    "Cisco Networking Academy",
    "Nov 2024",
    "https://coursera.org/share/2ccfca1309e8fb91c39512629f479d72",
    ["Network security"],
  ],
  [
    "Advanced Data Structures in Java",
    "UC San Diego",
    "Nov 2024",
    "https://coursera.org/share/58e29c5cbf54e4c28a707017557aee4e",
    ["Java", "Data structures"],
  ],
  [
    "The Complete 2024 Web Development Bootcamp",
    "Udemy",
    "Sep 2024",
    "https://www.udemy.com/certificate/UC-2aa8c26a-ae6f-45ed-aab1-6ad460d75067/",
    ["Web development"],
  ],
  [
    "Namaste JavaScript",
    "NamasteDev",
    "May 2023",
    "https://www.linkedin.com/in/gautamvhavle/details/certifications/1761978876804/single-media-viewer?type=DOCUMENT&profileId=ACoAAC6E1WYBWokDe2wF2sZ9e5PzyPvtjjYc45w",
    ["JavaScript"],
  ],
  [
    "Foundations of Project Management",
    "Google",
    "Dec 2022",
    "https://coursera.org/share/609f1e59c0c0e3e22c915ca54ae7ee92",
    ["Project management"],
  ],
].map(([name, issuer, issued, url, skills]) => ({
  name,
  issuer,
  issued,
  url,
  skills,
}));

export const highlights = [
  "Patent holder and product-focused engineer",
  "Engineering production GenAI solutions at Siemens",
  "Built across AI, full-stack, DevOps, embedded systems, and IoT",
  "Shipped EdTech, developer tooling, business software, and hardware prototypes",
  "Open-source builder and technical writer",
];
