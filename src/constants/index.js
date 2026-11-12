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
    name: "Next.js",
    imgPath: "/images/logos/nextjs.svg",
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
    title: "IT/Technology Student Teacher",
    company: "Rondebosch Boys' High School",
    date: "January 2026 - Present",
    responsibilities: [
      "Teach programming (Delphi, HTML/CSS) and introductory AI to Grade 8 and 10 learners; designed programming exercises, exams and marking rubrics.",
      "Run coding and robotics projects, mentoring learners through debugging and team problem-solving.",
    ],
  },
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/aws.png",
    title: "Cloud Support Engineering Intern",
    company: "Amazon Web Services (AWS)",
    stack: "Next.js, AWS Amplify, Cognito, Lambda, S3, DynamoDB, Amazon Personalize",
    date: "February 2025 - August 2025",
    responsibilities: [
      "Led a 5-person team that built ProjectHub, a platform where engineers find and connect with project leads, taking it from concept to a working demo presented to AWS managers; handled stakeholder communication and delegated tasks.",
      "Built the Next.js front end and user workflows on Amplify with Cognito authentication, designed the DynamoDB data model, and integrated Amazon Personalize to recommend relevant projects to each engineer.",
      "Completed AWS technical training in cloud foundations, Linux, networking, highly available web applications, AI/ML and governance and compliance, and earned AWS Solutions Architect – Associate and AI Practitioner certifications during the programme.",
    ],
  },
  {
    laptopModel: WorkSectionExperience,
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/ist.png",
    title: "Junior Software Developer II",
    company: "Intergrators of System Technology (iST)",
    date: "February 2024 - August 2024",
    stack: "Magik, Python, SOAP/REST, SoapUI, Postman, ThingsBoard",
    responsibilities: [
      "Built an inbound integration service connecting a field workers’ mobile app to the GE SmallWorld server, handling data ingestion, validation and database insertion.",
      "Developed an outbound service that updates electrical-asset properties, tested against SoapUI mock servers and Postman before release",
      "Integrated 5 UPS devices into a ThingsBoard IoT dashboard over VPN and a reverse proxy, streaming real-time telemetry.",
      "Extended a Python SNMP trap handler to route UPS alerts to a designated network router.",
      "Configured SmallWorld Electric Office so surveyors can look up infrastructure by coordinates or address.",
    ],
  },
  {
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/ist.png",
    title: "Graduate Software Developer",
    company: "Intergrators of System Technology (iST)",
    date: "March 2023 - February 2024",
    stack: "Magik, SOAP/REST, SoapUI, Postman",
    responsibilities: [
      "Built a bulk-update tool that processes ~20 CSV files to update specifications for ~2,000 assets across SmallWorld and Excel, replacing a full day of manual data entry per update cycle.",
      "Developed a web service that takes user input and writes it to the SmallWorld database, with error handling across the full request path.",
      "Built a real-time notification service that alerts external systems when field data changes.",
      "Delivered across 4 Agile design sprints with cross-functional teams and client stakeholders.",
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
    name: "Local-Aware AI Job Matching",
    description:
    "Machine learning job recommendations for job seekers in Limpopo, South Africa.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "orange-text-gradient",
      },
      {
        name: "spaCy",
        color: "pink-text-gradient",
      },
      {
        name: "Recommender Systems",
        color: "green-text-gradient",
      },
      {
        name: "Sentence Transformers",
        color: "blue-text-gradient",
      },
      {
        name: "AI Fairness",
        color: "orange-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/Local-Aware AI Job Matching.png",
    source_code_link: "https://github.com/TseboSenpai/ai-job-matching-skills-za",
    live_link: "https://localmatchza.vercel.app/",
  },
  {
    name: "Hangman",
    description:
    "A retro pixel-art Hangman built with Python and Pygame, playable natively or in-browser via a WASM build. Features topic-based word banks, background music, and a hand-drawn UI. Web-demo available.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "pygame",
        color: "blue-text-gradient",
      },
      {
        name: "asyncio",
        color: "orange-text-gradient",
      },
      {
        name: "pygbag(WASM)",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/Hangman.png",
    source_code_link: "https://github.com/TseboSenpai/Hangman",
    live_link: "https://tsebosenpai.github.io/hangman_web/",
  },
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
    source_code_link: "https://github.com/TseboSenpai/SudokuLounge",
    live_link: "https://sudokulounge.vercel.app/",
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