
import { projects } from "../data/Projects";
import { iconMap } from "../utils/iconMap";
export default function Projects() {

  return (
    <section className="relative max-w-6xl mx-auto px-5 py-20">
      {/* INTRO */}
      <div className="flex flex-col items-center text-center mb-20">
        <span className="mb-4">
          <h2 className="border border-gray-300 py-1 px-3 rounded-xl text-xs font-semibold bg-[var(--bg-header)]">
            Projects & Experience
          </h2>
        </span>

        <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>

        <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
          A summary of my professional journey, internships, and hands-on
          projects, focusing on frontend development and modern web
          technologies.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative">
        {/* center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

        <div className="space-y-20">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* dot */}
                <span className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e462ab] rounded-full hidden md:block" />

                {/* card */}
                <div
                  key={index}
                  className={`w-full md:w-[45%] bg-white border border-gray-300 rounded-xl p-6 shadow-sm ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  
                  <h3 className="text-lg font-semibold text-black">
                    {project.company}
                  </h3>

                  
                  <p className="text-sm font-medium text-[#e462ab] mb-3">
                    {project.role}
                  </p>

                  
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mb-4">
                    {project.meta.map((item, i) => {
                      const Icon = iconMap[item.icon];

                      if (!Icon) return null;

                      return (
                        <span
                          key={i}
                          className="flex items-center gap-1 "
                        >
                          <Icon size={14} className="text-[#005b4b]"/>
                          {item.value}
                        </span>
                      );
                    })}
                  </div>

                  
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 marker:text-[#e462ab]">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs border border-gray-300 py-1 px-3 rounded-xl font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm font-medium text-[#005b4b] hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
