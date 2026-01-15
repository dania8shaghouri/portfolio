import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaCode,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
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
      {
        name: "HTML5",
        icon: FaHtml5,
        iconColor: "text-orange-600",
        description: "Semantic markup for structured web pages",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        iconColor: "text-[#F7DF1E]",
        description:
          "Building interactive and dynamic functionality on the web",
      },
      {
        name: "React",
        icon: FaReact,
        iconColor: "text-cyan-400",
        description: "Component-based approach for building user interfaces",
      },
      {
        name: "Vue.js",
        icon: FaVuejs,
        iconColor: "text-[#41B883]",
        description: "Reactive framework for developing front-end applications",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        iconColor: "text-blue-600",
        description: "Styling layouts using modern CSS features",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "text-blue-700",
        description: "Utility-first CSS for fast and consistent UI development",
      },
    ],
    color: "text-blue-600",
  },
  {
    title: "Backend & Database",
    icon: LuDatabase,
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        iconColor: "text-[#339933]",
        description: "Server-side JavaScript runtime for building APIs",
      },
      {
        name: "Express",
        icon: SiExpress,
        iconColor: "text-black",
        description: "Minimal framework for building RESTful APIs",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        iconColor: "text-[#47A248]",
        description: "NoSQL database for storing application data",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        iconColor: "text-black",
        description: "Token-based authentication and authorization",
      },
    ],
    color: "text-green-600",
  },
  {
    title: "Tools & Workflow",
    icon: MdSettings,
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        iconColor: "text-[#F05032]",
        description: "Version control for tracking code changes",
      },
      {
        name: "Postman",
        icon: SiPostman,
        iconColor: "text-[#FF6C37]",
        description: "API testing and request debugging tool",
      },
      {
        name: "Vite",
        icon: SiVite,
        iconColor: "text-[#646CFF]",
        description: "Fast development build tool for modern projects",
      },
    ],
    color: "text-purple-600",
  },
];
