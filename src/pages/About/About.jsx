import { Link } from "react-scroll";

import image from "../../assets/images/profile1.jpg";
import { motion } from "framer-motion";
import Reveal from "../../Animation/Reveal";

const About = () => {
  return (
    <Reveal>
      <div id="about" className=" py-16">
        {/* Title: About Me */}
        <div className="text-center mb-8">
          <h1 className="text-4xl uppercase font-bold text-white">About Me</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center container mx-auto px-6 gap-12 lg:gap-16">
          {/* Description Section */}
          <div className="flex-1 space-y-6 py-5 mb-3 text-justify">
            <p className="text-lg text-gray-400 leading-relaxed">
              Hello! I'm Lutfur Rahman Siddiquee, a passionate software developer. 
              I develop web applications, mobile applications, and desktop applications. 
              My core skill is based on JavaScript, and I love to do most of the things using JavaScript. 
              I love to make the web more open to the world. I have graduated with a bachelor's degree in 
              Computer Science Engineering from Premier University, Chittagong, Bangladesh, in 2024. 
              I am available for any kind of job opportunity that suits my interests.
            </p>
            {/* Buttons Section */}
            <div className="flex space-x-4">
              <a href="/cv.pdf">
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                  Get Resume
                </button>
              </a>
              <Link to="skills" smooth={true} duration={500}>
                <button className="px-6 py-2 border-2 border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-500 hover:text-white transition duration-300">
                  My Skills
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img
              src={image}
              alt="Profile"
              className="rounded-lg w-72 h-72 object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
