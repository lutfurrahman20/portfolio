import { BiLogoNetlify } from "react-icons/bi";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
    liveLink: "#",
    codeLink: "#",
    image: "https://via.placeholder.com/300x200?text=E-commerce+Store",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using React, Firebase, and Tailwind.",
    liveLink: "#",
    codeLink: "#",
    image: "https://via.placeholder.com/300x200?text=Chat+Application",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with rich text editing and content management.",
    liveLink: "#",
    codeLink: "#",
    image: "https://via.placeholder.com/300x200?text=Blog+Platform",
  },
];

const Projects = () => {
  return (
    <div className="py-10 px-5" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white uppercase text-center mb-10">Projects</h2>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
              initial={{ y: 0 }} // Start position
              whileHover={{ y: 0 }} // Moves up by 100px on hover
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 hover:bg-navy">
                {/* Project Title */}
                <h3 className="text-xl text-white font-semibold mb-4">{project.title}</h3>
                {/* Project Description */}
                <p className="text-white mb-6">{project.description}</p>
                {/* Action Buttons */}
                <div className="flex justify-between">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.1 }} // Button hover animation
                  >
                    <BiLogoNetlify className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.1 }} // Button hover animation
                  >
                    <FaGithub className="text-2xl"/>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
