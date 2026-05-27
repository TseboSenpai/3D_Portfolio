import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { education } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.15 * i,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="education" className="w-full section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education & Certifications"
          sub="🎓 Qualifications & Achievements"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {education.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="edu-card card card-border rounded-2xl overflow-hidden"
            >
              <div className="glow" />
              <div className="edu-card-accent" />
              <div className="p-8 flex flex-col h-full">
                <div className="edu-icon-wrap">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mt-5 text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-white-50 text-base flex-1">{item.school}</p>
                <span className="edu-year-badge mt-5 self-start">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
