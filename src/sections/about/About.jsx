import { aboutText } from "./AboutText";
// icons
import { SiLoop } from "react-icons/si";
// data
import { AboutSkills } from "../../data/AboutSkills";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center 
       bg-[var(--bg-about)] py-20 px-5 min-h-screen"
    >
      <div className="grid lg:grid-cols-1 max-w-4xl ">
        <span className="flex justify-center items-center mb-7">
          <h3
            className="
      border border-gray-300 
      py-1 px-2
      rounded-xl text-xs font-bold
      bg-[var(--bg-header)]"
          >
            About Me
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
              <h3 className="font-semibold mb-1">My Professional Story </h3>
            </div>
            <p className="text-gray-600 leading-relaxed ">{aboutText}</p>
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
                    <h3 className="font-semibold mb-1 pl-4">{skill.title} </h3>
                    <p className="text-gray-500 text-sm leading-relaxed pl-4">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
