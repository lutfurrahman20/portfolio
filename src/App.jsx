import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import LoveToDo from "./pages/LoveToDo/LoveToDo";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="bg-navy min-h-screen w-full">
      <div className="max-w-screen-lg mx-auto px-4">
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Home />
        <About />
        <Skills />
        <LoveToDo />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
