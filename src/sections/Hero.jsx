import { ReactTyped } from "react-typed";
// img
import photo from "../assets/img/unnamed (2).png";
// component
import Button from "../components/ui/Button";
import SocialLinks from "../components/SocialLinks";
// icons
import { CgMail } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[var(--bg-hero)] flex items-center justify-center">
      <div
        className="capitalize 
      flex flex-col gap-2 items-center justify-center"
      >
        <img
          src={photo}
          alt="photo"
          className="w-32 h-32 rounded-full object-cover
         "
        />
        <span
          className="font-medium border border-gray-300 
        py-1 px-2 rounded-lg bg-[var(--bg-pink)]
        mt-4"
        >
          🤖Computer engineer
        </span>

        {/* Typed title */}
        <h1 className="text-6xl sm:text-5xl font-bold mt-6">
          I’m{" "}
          <span className="text-gradient ">
            <ReactTyped
              strings={[
                "Dania Shaghouri",
                "Frontend Developer",
                "React Developer",
                "UI Enthusiast",
              ]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </span>
        </h1>
        <p className="max-w-[var(--container-3xl)] text-center text-xl mt-6">
          I focus on building clean, responsive and accessible user interfaces.
          I mainly work with React and Tailwind CSS, and I also have experience
          with Vue and full-stack projects.
        </p>
        {/*  buttons */}
        <div className="flex gap-4 mt-6">
          <Button variant="pink">View Projects</Button>
          <Button>
            {" "}
            <CgMail className="mr-1 text-lg" /> Contact Me
          </Button>
        </div>
        {/* contact */}

        <SocialLinks className="mt-[50px]" />
      </div>
    </section>
  );
}
