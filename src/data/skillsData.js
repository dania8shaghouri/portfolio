import { FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaCode } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVite,
  SiJsonwebtokens,
  SiJavascript,
} from "react-icons/si";

import { LuDatabase } from "react-icons/lu";
import { MdSettings } from "react-icons/md";

export const skillsData = [
  {
    title: "Frontend Development",
    icon: FaCode,
    items: [
      { name: "React", icon: FaReact, iconColor: "text-cyan-400" },
      { name: "Vue.js", icon: FaVuejs, iconColor: "text-[#41B883]" },
      { name: "JavaScript", icon: SiJavascript, iconColor: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-blue-700" },
    ],
    color: "text-blue-600",
  },
  {
    title: "Backend & Database",
    icon: LuDatabase,
    items: [
      { name: "Node.js", icon: FaNodeJs, iconColor: "text-[#339933]" },
      { name: "Express", icon: SiExpress, iconColor: "text-[#000000]" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]" },
      { name: "JWT", icon: SiJsonwebtokens, iconColor: "#000000" },
    ],
    color: "text-green-600",
  },
  {
    title: "Tools & Workflow",
    icon: MdSettings,
    items: [
      { name: "Git", icon: FaGitAlt, iconColor: "text-[#F05032]" },
      { name: "Postman", icon: SiPostman, iconColor: "text-[#FF6C37]" },
      { name: "Vite", icon: SiVite, iconColor: "text-[#646CFF]" },
    ],
    color: "text-purple-600",
  },
];
