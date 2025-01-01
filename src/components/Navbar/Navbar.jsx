import { Link } from "react-scroll";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Hamburger Icon
import { FiX } from "react-icons/fi";   // Close Icon
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="top-0 left-0 w-full p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="text-lg font-semibold">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-5xl text-gray-500 cursor-pointer"
          >
            LUTFUR~
          </Link>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex space-x-6 uppercase text-white">
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

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer uppercase hover:text-gray-400"
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              About
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Skills
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <a href="/cv.pdf" className="text-yellow-500 hover:text-yellow-300">
              Resume
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
