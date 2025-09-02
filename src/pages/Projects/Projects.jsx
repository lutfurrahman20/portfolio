import { BiLogoNetlify } from "react-icons/bi";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real-Estate Site",
    description:
      "A full-stack e-commerce platform with ReactJS and Tailwind CSS.Designed to help users browse, buy, and rent properties with ease.",
    liveLink: "https://real-estate-ecru-tau.vercel.app/",
    codeLink: "https://github.com/lutfurrahman20/real-estate",
    image: "https://i.ibb.co.com/vvXbfvrz/real-Estate.png",
  },
  {
    title: "Doctors Appointment Application",
    description:
      "Implemented a responsive and modern UI using Tailwind CSS, enhancing user experience and accessibility.",
    liveLink: "https://doctors-appointment-five.vercel.app/",
    codeLink: "https://github.com/lutfurrahman20/doctors-appointment",
    image: "https://i.ibb.co.com/ns87BP4b/doctor.png",
  },
  {
    title: "Weather App",
    description: "A responsive weather application built with React.js, TypeScript, Tailwind CSS, Redux Toolkit, and Vite. Users can search for any city and view real-time weather information (temperature, condition, humidity, wind speed, and icons) powered by the OpenWeatherMap API.",
    liveLink: "https://weather-app-alpha-ten-14.vercel.app/",
    codeLink: "https://github.com/lutfurrahman20/weather-app",
    image: "https://i.ibb.co.com/8nM36vp9/weather.png",
  },
];

const Projects = () => {
  return (
    <div className="py-10 px-5" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white uppercase text-center mb-10">
          Projects
        </h2>
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
                <h3 className="text-xl text-white font-semibold mb-4">
                  {project.title}
                </h3>
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
                    <FaGithub className="text-2xl" />
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
