import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";
import { projects } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="skills" className="flexcenter section-padding">
        <div className="w-full h-full md:px-10 px-5">
        <TitleHeader 
            title="My Projects"
            sub="👩🏾‍💻 Done by yours truly (Not AI)"
            />
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.name} className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB] overflow-hidden rounded-2xl">
                              <img
                              src={project.image}
                              alt="project_image"
                              className="w-full h-full object-cover rounded-2xl"
                              />
                                <div className='absolute top-3 right-3 flex flex-col gap-3 z-10 card-img_hover'>
                                  <button
                                  onClick={() => window.open(project.live_link, "_blank")}
                                  className='space-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                  >
                                  <img
                                    src="/images/link.png"
                                    alt='live link'
                                    className='w-1/2 h-1/2 object-contain'
                                  />
                                  </button>
                                  <button
                                  onClick={() => window.open(project.source_code_link, "_blank")}
                                  className='space-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                  >
                                  <img
                                    src="/images/github.png"
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                  />
                                  </button>
                                </div>
                            </div>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-3">
                              {project.tags.map((tag) => (
                                <span
                                  key={`${project.name}-${tag.name}`}
                                  className={`text-[14px] ${tag.color}`}
                                >
                                  #{tag.name}
                                </span>
                              ))}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Projects;