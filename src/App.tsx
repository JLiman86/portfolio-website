import About from "./components/About";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Brands/>
      <About/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
