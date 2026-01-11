import { aboutText } from "./AboutText";
// icons
import { FiZap, FiUsers } from "react-icons/fi";
import { SiLoop } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center
       bg-[var(--bg-about)] py-20 min-h-screen"
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
          <div className="grid sm:grid-cols-2 gap-3 mt-7">
            {/* Performance */}
            <div
              className="bg-white rounded-2xl p-6 shadow-sm flex gap-4
            border border-gray-300"
            >
              <div className="text-[#e462ab] text-2xl">
                <FiZap />
              </div>

              <div>
                <h3 className="font-semibold mb-1">Performance Optimization</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  I improve page load times and optimize rendering to deliver
                  faster, smoother user experiences.
                </p>
              </div>
            </div>

            {/* Teamwork */}
            <div
              className="bg-white rounded-2xl p-6 shadow-sm flex gap-4
            border border-gray-300"
            >
              <div className="text-[#e462ab] text-2xl">
                <FiUsers />
              </div>

              <div>
                <h3 className="font-semibold mb-1">Team Collaboration</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  I collaborate effectively with teams, contribute to shared
                  goals and support clean, maintainable codebases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
