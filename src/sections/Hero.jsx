import { ReactTyped } from "react-typed";
// img
import photo from "../assets/img/unnamed (2).png";
// component
import Button from "../components/ui/Button";
import SocialLinks from "../components/SocialLinks";
// icons
import { CgMail } from "react-icons/cg";
import AnimatedSection from "../components/AnimatedSection";

const heroContent = {
  en: {
    badge: "🤖 Computer Engineer",
    titlePrefix: "I'm",
    typed: [
      "Dania Shaghouri",
      "Frontend Developer",
      "React Developer",
      "UI Enthusiast",
    ],
    description:
      "I focus on building clean, responsive and accessible user interfaces. I mainly work with React and Tailwind CSS, and I also have experience with Vue and full-stack projects.",
    projectButton: "View Projects",
    contactButton: "Contact Me",
  },

  tr: {
    badge: "🤖 Bilgisayar Mühendisi",
    titlePrefix: "Ben",
    typed: [
      "Dania Shaghouri",
      "Frontend Geliştirici",
      "React Geliştirici",
      "UI Meraklısı",
    ],
    description:
      "Temiz, responsive ve erişilebilir kullanıcı arayüzleri geliştirmeye odaklanıyorum. Ağırlıklı olarak React ve Tailwind CSS ile çalışıyor, ayrıca Vue ve full-stack projelerde de deneyim sahibi bulunuyorum.",
    projectButton: "Projeleri Gör",
    contactButton: "İletişime Geç",
  },
};

export default function Hero({ language }) {
  const content = heroContent[language];
  return (
    <section className="min-h-screen bg-[var(--bg-hero)] flex items-center justify-center ">
      <AnimatedSection direction="down">
        <div
          className=" 
      flex flex-col gap-2 items-center justify-center
      px-4
    max-w-3xl
    mx-auto"
        >
          <img
            src={photo}
            alt="photo"
            className="w-32 h-32 rounded-full object-cover md:mt-[70px]
         "
          />
          <span
            className="font-medium text-sm sm:text-base border border-gray-300 
        py-1 px-2 rounded-lg bg-[var(--bg-pink)]
        mt-6"
          >
            {content.badge}
          </span>

          {/* Typed title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
            {content.titlePrefix}{" "}
            <span className="text-gradient ">
              <ReactTyped
                strings={content.typed}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </span>
          </h1>

          <p
            className="max-w-[var(--container-3xl)] text-center text-base sm:text-lg md:text-xl
    mt-4 sm:mt-6 "
          >
            {content.description}
          </p>

          {/*  buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="pink"
            >
              {content.projectButton}
            </Button>

            <a href="mailto:daniashaghouri@mail.com">
              <Button>
                <CgMail className="mr-1 text-lg" />
                {content.contactButton}
              </Button>
            </a>
          </div>
          {/* contact */}

          <SocialLinks className="mt-8 sm:mt-12" />
        </div>
      </AnimatedSection>
    </section>
  );
}
