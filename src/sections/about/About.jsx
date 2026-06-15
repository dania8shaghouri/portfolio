import { aboutText } from "./AboutText";
import AnimatedSection from "../../components/AnimatedSection";
// icons
import { SiLoop } from "react-icons/si";
// data
import { AboutSkills } from "../../data/AboutSkills";

const content = {
  en: {
    sectionTitle: "About Me",
    storyTitle: "My Professional Story",
  },

  tr: {
    sectionTitle: "Hakkımda",
    storyTitle: "Profesyonel Yolculuğum",
  },
};

export default function About({ language }) {
  const text = content[language];

  return (
    <section
      id="about"
      className="flex justify-center items-center 
       bg-[var(--bg-about)] py-20 px-5 min-h-screen"
    >
      <AnimatedSection direction="right">
        <div className="grid lg:grid-cols-1 max-w-4xl ">
          <span className="flex justify-center items-center mb-7">
            <h3
              className="
      border border-gray-300 
      py-1 px-2
      rounded-xl text-xs font-bold
      bg-[var(--bg-header)]"
            >
              {text.sectionTitle}
            </h3>
          </span>

          <div className="md:grid md:grid-cols-1 ">
            {/* Highlights */}
            <div
              className="flex flex-col gap-3 bg-white
           rounded-xl p-6 shadow-sm 
           border border-gray-300"
            >
              <div className="inline-flex gap-3 ">
                <SiLoop className="text-[#e462ab] text-2xl" />
                <h3 className="font-semibold mb-1">{text.storyTitle} </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ">
                {aboutText[language]}
              </p>
            </div>

            {/* skills */}
            <div className="grid sm:grid-cols-2 gap-3 mt-7 ">
              {AboutSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-2xl
                bg-white p-5 inline-flex"
                  >
                    <Icon className="text-[#e462ab] text-4xl" />
                    <div>
                      <h3 className="font-semibold mb-1 pl-4">
                        {skill.title[language]}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed pl-4">
                        {skill.description[language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
