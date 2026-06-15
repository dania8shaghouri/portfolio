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
    title: {
      en: "Frontend Development",
      tr: "Frontend Geliştirme",
    },
    icon: FaCode,
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        iconColor: "text-orange-600",
        description: {
          en: "Semantic markup for structured web pages",
          tr: "Yapısal web sayfaları için semantik HTML kullanımı",
        },
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        iconColor: "text-[#F7DF1E]",
        description: {
          en: "Building interactive and dynamic functionality on the web",
          tr: "Web üzerinde etkileşimli ve dinamik özellikler geliştirme",
        },
      },
      {
        name: "React",
        icon: FaReact,
        iconColor: "text-cyan-400",
        description: {
          en: "Component-based approach for building user interfaces",
          tr: "Component tabanlı kullanıcı arayüzü geliştirme",
        },
      },
      {
        name: "Vue.js",
        icon: FaVuejs,
        iconColor: "text-[#41B883]",
        description: {
          en: "Reactive framework for developing front-end applications",
          tr: "Frontend uygulamalar geliştirmek için reaktif framework",
        },
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        iconColor: "text-blue-600",
        description: {
          en: "Styling layouts using modern CSS features",
          tr: "Modern CSS özellikleri ile arayüz tasarımı",
        },
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "text-blue-700",
        description: {
          en: "Utility-first CSS for fast and consistent UI development",
          tr: "Hızlı ve tutarlı UI geliştirme için utility-first CSS",
        },
      },
    ],
    color: "text-blue-600",
  },

  {
    title: {
      en: "Backend & Database",
      tr: "Backend & Veritabanı",
    },
    icon: LuDatabase,
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        iconColor: "text-[#339933]",
        description: {
          en: "Server-side JavaScript runtime for building APIs",
          tr: "API geliştirmek için sunucu tarafı JavaScript çalışma ortamı",
        },
      },
      {
        name: "Express",
        icon: SiExpress,
        iconColor: "text-black",
        description: {
          en: "Minimal framework for building RESTful APIs",
          tr: "RESTful API geliştirmek için minimal framework",
        },
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        iconColor: "text-[#47A248]",
        description: {
          en: "NoSQL database for storing application data",
          tr: "Uygulama verilerini saklamak için NoSQL veritabanı",
        },
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        iconColor: "text-black",
        description: {
          en: "Token-based authentication and authorization",
          tr: "Token tabanlı kimlik doğrulama ve yetkilendirme",
        },
      },
    ],
    color: "text-green-600",
  },

  {
    title: {
      en: "Tools & Workflow",
      tr: "Araçlar & İş Akışı",
    },
    icon: MdSettings,
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        iconColor: "text-[#F05032]",
        description: {
          en: "Version control for tracking code changes",
          tr: "Kod değişikliklerini takip etmek için versiyon kontrol sistemi",
        },
      },
      {
        name: "Postman",
        icon: SiPostman,
        iconColor: "text-[#FF6C37]",
        description: {
          en: "API testing and request debugging tool",
          tr: "API test ve hata ayıklama aracı",
        },
      },
      {
        name: "Vite",
        icon: SiVite,
        iconColor: "text-[#646CFF]",
        description: {
          en: "Fast development build tool for modern projects",
          tr: "Modern projeler için hızlı geliştirme aracı",
        },
      },
    ],
    color: "text-purple-600",
  },
];
