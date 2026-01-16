import { useState } from "react";

import { projects } from "../data/Projects";
import { iconMap } from "../utils/iconMap";

export default function Projects() {
  // null modal suan kapal
  const [activeScreenshots, setActiveScreenshots] = useState(null);
  //   sonraki onceki buttonlar icin
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-5 py-20">
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
                  {/* company */}
                  <h3 className="text-lg font-semibold text-black">
                    {project.company}
                  </h3>

                  {/* role */}
                  <p className="text-sm font-medium text-[#e462ab] mb-3">
                    {project.role}
                  </p>

                  {/* meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mb-4">
                    {project.meta.map((item, i) => {
                      const Icon = iconMap[item.icon];
                      if (!Icon) return null;

                      return (
                        <span key={i} className="flex items-center gap-1">
                          <Icon size={14} className="text-[#005b4b]" />
                          {item.value}
                        </span>
                      );
                    })}
                  </div>

                  {/* description */}
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 marker:text-[#e462ab]">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {/* tech */}
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

                  {/* actions */}
                  <div className="mt-4 flex items-center gap-4">
                    {/* icon-based links */}
                    {project.links &&
                      Object.entries(project.links).map(([key, url]) => {
                        const Icon = iconMap[key];
                        if (!Icon) return null;

                        return (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={
                              key === "live" ? "Live Demo" : "GitHub Repository"
                            }
                            className="flex items-center gap-1 text-[#005b4b] hover:text-[#e462ab] transition"
                          >
                            <Icon size={19} />
                          </a>
                        );
                      })}

                    {/* screenshots fallback (text button) */}
                    {project.screenshots && (
                      <button
                        onClick={() => {
                          setActiveScreenshots(project.screenshots);
                          setCurrentIndex(0);
                        }}
                        className="text-sm font-medium text-[#005b4b] hover:underline"
                      >
                        View Screenshots →
                      </button>
                    )}
                  </div>
                </div>

                {/* modal */}
                {activeScreenshots && (
                  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-xl p-4 max-w-4xl w-full relative flex items-center">
                      {/* close */}
                      <button
                        onClick={() => setActiveScreenshots(null)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                      >
                        ✕
                      </button>

                      {/* prev */}
                      {currentIndex > 0 && (
                        <button
                          onClick={() => setCurrentIndex((i) => i - 1)}
                          className="absolute left-3 text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                          ‹
                        </button>
                      )}

                      {/* image */}
                      <img
                        src={activeScreenshots[currentIndex]}
                        alt={`Project screenshot ${currentIndex + 1}`}
                        className="mx-auto max-h-[75vh] rounded-lg border"
                      />

                      {/* next */}
                      {currentIndex < activeScreenshots.length - 1 && (
                        <button
                          onClick={() => setCurrentIndex((i) => i + 1)}
                          className="absolute right-3 text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                          ›
                        </button>
                      )}

                      {/* counter */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white bg-black/50 px-3 py-1 rounded-full">
                        {currentIndex + 1} / {activeScreenshots.length}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
