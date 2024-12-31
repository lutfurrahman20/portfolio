import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="top-0 left-0 w-full p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-lg font-semibold">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-5xl text-gray-500"
          >
            LUTFUR~
          </Link>
        </div>
        <div className="flex space-x-6 uppercase text-white">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer uppercase hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            Contact
          </Link>
          <a href="/cv.pdf" className="text-yellow-500 hover:text-yellow-300">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
