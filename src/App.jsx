import "./App.css";
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
