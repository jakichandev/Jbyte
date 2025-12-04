import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import Footer from "./components/layout/Footer";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar navState="sm" />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
