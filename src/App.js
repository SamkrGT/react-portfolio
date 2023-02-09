import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Education />
    
    
    <SocialLinks />
    </div>
  );
}

export default App;
