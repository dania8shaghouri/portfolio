import SkillCard from "./SkillCard";
import { skillsData } from "../../data/skillsData";

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-[var(--bg-about)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="mb-4">
            <h2 className="border border-gray-300 py-1 px-3 rounded-xl text-xs font-semibold bg-[var(--bg-header)]">
              Skills
            </h2>
          </span>

          <h2 className="text-3xl font-bold mb-4">Technologies & Tools</h2>

          <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
            Technologies and tools I use to build modern, responsive, and
            scalable web applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center ">
          {skillsData.map((skill, i) => (
            <SkillCard
              key={i}
              title={skill.title}
              icon={skill.icon}
              items={skill.items}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
