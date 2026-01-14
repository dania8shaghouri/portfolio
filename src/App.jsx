import Header from "./components/Header/Header";
import About from "./sections/about/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
