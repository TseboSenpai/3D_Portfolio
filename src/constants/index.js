import WorkSectionExperience from "../components/WorkModels/WorkSectionExperience";

const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Java Script",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "C#",
    imgPath: "/images/logos/csharp.png",
  },
  {
    name: "HTML",
    imgPath: "/images/logos/html.png",
  },
  {
    name: "CSS",
    imgPath: "/images/logos/css.png",
  },
  {
    name: "Database Management",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "AWS Cloud",
    imgPath: "/images/logos/aws1.png",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Script",
    modelPath: "/models/javascript.glb",
    scale: 3.5,
    rotation: [0, 10, 0],
  },
  {
    name: "C#",
    modelPath: "/models/c-sharp.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "HTML",
    modelPath: "/models/html.glb",
    scale: 5,
    rotation: [0, Math.PI, 0],
  },
  {
    name: "CSS",
    modelPath: "/models/css.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Database Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/RBHS.jpeg",
    title: "IT/Technology Teacher",
    company: "Rondebosch Boys' High School",
    date: "January 2026 - Present",
    responsibilities: [
      "Teach IT and Technology to 209 students across Grade 8 and 10 — web development (HTML & CSS), introductory AI, digital literacy, and Delphi programming.",
      "Ran a social media literacy and digital safety seminar for 190 Grade 8 students.",
      "Provide maths coaching on the side, which has sharpened how I break down complex problems for different learners.",
    ],
  },
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/aws.png",
    title: "Cloud Support Engineering Intern",
    company: "Amazon Web Services (AWS)",
    date: "February 2025 - August 2025",
    responsibilities: [
      "Completed an intensive programme covering cloud foundations, networking, Linux, AI/ML, and governance.",
      "Led a 5-person team to build ProjectHub — a platform where engineers browse and connect with project leads.",
      "Personally handled front-end development, user workflow design, DynamoDB data modelling, and AWS Personalize integration (recommendation engine that surfaces relevant projects to each engineer).",
    ],
  },
  {
    laptopModel: WorkSectionExperience,
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/ist.png",
    title: "Junior Software Developer II",
    company: "Intergrators of System Technology (iST)",
    date: "February 2024 - August 2024",
    responsibilities: [
      "Built services connecting a mobile app to a backend GIS database, handling data ingestion and storage.",
      "Developed and tested an outbound service to update electrical asset records, validated with SOAP UI and Postman.",
      "Configured a location-lookup tool used by surveyors for infrastructure assessments in the field.",
      "Connected UPS devices to a live IoT dashboard via VPN and reverse proxy, enabling real-time telemetry streaming.",
    ],
  },
  {
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/ist.png",
    title: "Graduate Software Developer",
    company: "Intergrators of System Technology (iST)",
    date: "March 2023 - February 2024",
    responsibilities: [
      "Built an automated system to bulk-update asset records across multiple databases by processing CSV files — cut out a lot of manual work.",
      "Developed web services for database updates and real-time notifications to external client systems.",
      "Participated in 4 Agile design sprints and got comfortable shipping real code in a team environment.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const projects = [
  {
    name: "Flordle",
    description:
    "A floral-themed Wordle variant built with Next.js and TypeScript. Guess a hidden five-letter word with real-time feedback using an on-screen keyboard and visual grid.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/Flordle.png",
    source_code_link: "https://github.com/TseboSenpai/Flordle",
    live_link: "https://flordle-wordle.vercel.app/",
  },
  {
    name: "Wordle Clone",
    description:
      "A compact Wordle-like game built with Next.js and TypeScript. It lets players guess a hidden five-letter word using an on-screen keyboard and guess grid, driven by a JSON word list and simple game state in a store.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/Wordle.png",
    source_code_link: "https://github.com/TseboSenpai/WordleDupe",
    live_link: "https://wordledupe.vercel.app",
  },
  {
    name: "Sudoku Lounge",
    description:
      "A React-based Sudoku game built with Vite, featuring an interactive grid, puzzle fetching from an API, and check/reset/new puzzle controls with visual feedback.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: "/images/projects/Sudoku.png",
    source_code_link: "https://github.com/TseboSenpai/Sudoku",
    live_link: "https://sudoku-lounge.vercel.app/",
  },
];

const education = [
  {
    title: "BSc Information Technology",
    school: "Eduvos",
    year: "2023",
  },
  {
    title: "BSc(Hons) Computing",
    school: "University of South Africa",
    year: "Ongoing",
  },
  {
    title: "AWS Certified AI Practioner",
    school: "Amazon Web Services",
    year: "2025",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    school: "Amazon Web Services",
    year: "2025",
  },
  {
    title: "GradStar Top 100 Student",
    school: "GradStar",
    year: "2022",
  },
];

const testimonials = [

];


const socials = [
  {
    name: "GitHub",
    url: "https://github.com/TseboSenpai",
    imgPath: "/images/github(white).png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/tsebo-molope-481b971b5/",
    imgPath: "/images/linkedin1.png",
  },
];

export {
  words,
  expCards,
  expLogos,
  testimonials,
  socials,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  education,
};