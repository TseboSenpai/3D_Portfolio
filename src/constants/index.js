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
      "An elegantly architected Wordle clone featuring a responsive front-end and robust game logic to deliver a seamless, daily puzzle experience.",
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
    image: "/images/projects/Wordle.png",
    source_code_link: "https://github.com/TseboSenpai/Sudoku",
    live_link: "https://sudoku-lounge.vercel.app/",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
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