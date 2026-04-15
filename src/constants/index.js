import WorkSectionExperience from "../components/WorkModels/WorkSectionExperience";

const navLinks = [
  {
    name: "Work",
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
    logoPath: "/images/logos/aws.png",
    title: "Cloud Support Engineering Intern",
    company: "Amazon Web Services (AWS)",
    date: "February 2025 - August 2025",
    responsibilities: [
      "Completed a cloud computing program covering cloud foundations, network fundamentals, Linux, highly available web applications, AI/ML, and	governance and compliance.",
      "Gained hands-on experience through Bottlenose Labs, solving real-world	problems in the	AWS cloud environment.",
      "Contributed to a team project called ProjectHub, a fully AWS-hosted web application designed to connect engineers with project leaders. My primary focus: AWS Personalize, development	of webpages and core features, designing user workflows, DynamoDB, coordinating the progression of the project, scheduling meetings, assigning tasks, and	ensuring clear communication among team	members.",
    ],
    laptopModel: WorkSectionExperience,
  },
  {
    laptopModel: WorkSectionExperience,
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/ist.png",
    title: "Junior Software Developer II",
    company: "Intergrators of System Technology (iST)",
    date: "February 2024 - August 2024",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/ist.png",
    title: "Graduate Software Developer",
    company: "Intergrators of System Technology (iST)",
    date: "March 2023 - February 2024",
    responsibilities: [
      "Developed clean, efficient, and well-documented code using Java, Magik, SmallWorld, and REST APIs.",
      "Collaborated with team members and stakeholders to meet project deadlines and deliver high-quality solutions.",
      "Built an automated database update system that processes multiple CSV files to update specifications (Magik, Excel, SmallWorld).",
      "Developed a web service to process user input and update the SmallWorld database.",
      "Implemented and managed error handling across multiple systems (Magik, Postman, Kubernetes, SmallWorld).",
      "Created an outbound service to notify external customer systems of field updates (Magik, SmallWorld, SoapUI).",
      "Contributed to 4 design sprints, strengthening collaboration and communication skills across cross-functional teams."
    ],
    laptopModel: WorkSectionExperience,
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
};