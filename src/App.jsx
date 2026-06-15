import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./sections/about/About";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import SkillsSection from "./sections/skills/SkillsSection";

//
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <SkillsSection language={language} />
        <CertificatesSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </main>
    </>
  );
}

export default App;
