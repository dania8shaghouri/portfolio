import SocialLinks from "../SocialLinks";
import AnimatedSection from "../../components/AnimatedSection";

const content = {
  en: {
    description:
      "Frontend Developer focused on building clean, responsive, and user-friendly interfaces using modern web technologies.",
    built: "Built with 🩵",
    quickLinks: "Quick Links",
    follow: "Follow Me",
    followText:
      "Follow me for new projects, updates, and professional insights.",
    links: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    rights: "All rights reserved.",
  },

  tr: {
    description:
      "Modern web teknolojileriyle temiz, responsive ve kullanıcı dostu arayüzler geliştiren Frontend Developer.",

    built: "Şu teknolojilerle geliştirildi 🩵",
    quickLinks: "Hızlı Bağlantılar",
    follow: "Beni Takip Et",
    followText:
      "Yeni projeler, güncellemeler ve profesyonel paylaşımlar için takip edin.",

    links: {
      home: "Anasayfa",
      about: "Hakkımda",
      projects: "Projeler",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    rights: "Tüm hakları saklıdır.",
  },
};

export default function Footer({ language }) {
  const text = content[language];
  return (
    <footer className="bg-[var(--bg-about)] border-t border-gray-300 mt-24">
      <AnimatedSection direction="down">
        <div className="max-w-4xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 1. Portfolio */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient  text-center">
              Portfolio
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed text-center">
              {text.description}
            </p>

            <p className="text-gray-500 text-center">
              {text.built} <span className="font-medium">React</span> &{" "}
              <span className="font-medium">Tailwind CSS</span>
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-center">
              {text.quickLinks}
            </h3>

            <ul className="space-y-2 text-sm text-center">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#005b4b]">
                  {text.links.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#005b4b]">
                  {text.links.about}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-[#005b4b]"
                >
                  {text.links.projects}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-[#005b4b]"
                >
                  {text.links.skills}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#005b4b]"
                >
                  {text.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Follow Me */}
          <div className="space-y-4 text-center">
            <h3 className="font-semibold text-lg text-center">{text.follow}</h3>

            <p className="text-sm text-gray-600 text-center">
              {text.followText}
            </p>

            <SocialLinks />
          </div>
        </div>
      </AnimatedSection>
      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dania. {text.rights}
      </div>
    </footer>
  );
}
