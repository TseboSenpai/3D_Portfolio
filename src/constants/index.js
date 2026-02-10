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
  {
    name: "Testimonials",
    link: "#testimonials",
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

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
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
      "Wrote clean, efficient, and well-documented code using a variety of programming languages and tools, including	but	not limited	to Java, Magik, SmallWorld, and	REST APIs.",
      "Communicated effectively	with team	members and	other	stakeholders to ensure that project deadlines are	met.",
      "Developed an automatic	updating system	for	the	company	database that reads	multiple CSV files and uses	the	information	within them to update the	various	specifications as required (Magik, Excel, SmallWorld,	Databases).",
      "Developed a web service that takes in user input from Postman and updates the SmallWorld	database accordingly.",
      "Managed error handling for multiple different instances (Magik, Postman, Kubernetes, SmallWorld). Managed error handling for multipledifferent instances (Magik, Postman, Kubernetes, SmallWorld).",
      "Developed an outbound service that allows the internal system to notify the customer system that updates	have been	received from the	field	(Magik, SmallWorld,	SoapUI).",
      "Contributed to various solutions in 4 different design sprints for	EOH. Worked with various people throughout the 4 different design sprints, which grew	my interpersonal communication skills	as well as team	collaboration.",
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

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};