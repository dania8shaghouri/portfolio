// Conditional Rendering (Koşullu Render Etme)

import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { CgMail } from "react-icons/cg";

export default function SocialLinks({
  className = "",
  show = ["github", "linkedin", "mail"],
}) {
  return (
    <div className={`inline-flex gap-7 ${className}`}>
      {show.includes("github") && (
        <a
          href="https://github.com/dania8shaghouri"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition-all duration-300 
            hover:bg-[var(--bg-header)] 
            hover:scale-110 
            hover:shadow-md 
            hover:rounded-md"
        >
          <FiGithub className="text-lg" />
        </a>
      )}

      {show.includes("linkedin") && (
        <a
          href="https://www.linkedin.com/in/dania-shaghouri-b4250b304/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition-all duration-300 
            hover:bg-[var(--bg-header)] 
            hover:scale-110 
            hover:shadow-md 
            hover:rounded-md"
        >
          <LuLinkedin className="text-lg" />
        </a>
      )}

      {show.includes("mail") && (
        <a
          href="mailto:daniashaghouri@gmail.com"
          className="p-2 transition-all duration-300 
            hover:bg-[var(--bg-header)] 
            hover:scale-110 
            hover:shadow-md 
            hover:rounded-md"
        >
          <CgMail className="text-xl" />
        </a>
      )}
    </div>
  );
}
