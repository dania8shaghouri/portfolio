import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./sections/about/About";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import SkillsSection from "./sections/skills/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
