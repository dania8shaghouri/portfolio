import Header from "./components/Header/Header";
import About from "./sections/about/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
