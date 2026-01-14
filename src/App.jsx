import Header from "./components/Header/Header";
import About from "./sections/about/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import SkillsSection from "./sections/skills/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Projects />
        <SkillsSection />
      </main>
    </>
  );
}

export default App;
