import Typical from "react-typical";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const Banner = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row items-center py-20 px-6 justify-center">
        <div>
          {/* paragraph */}
          <div className="font-sans text-gray-200">
            <h1 className="text-4xl font-bold text-green-400">
              Hi, I am <span className="text-white">Lutfur Rahman Siddiquee</span>
            </h1>
            <h2 className="text-2xl mt-4">
              I am a{" "}
              <Typical
                steps={[
                  "Frontend Developer👨‍💻",
                  1000,
                  "React/React Native Developer⚛️",
                  1000,
                  "React Developer🌐",
                  1000,
                  "MERN Stack Dev",
                  1000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </h2>
            <h3 className="mt-4 text-lg text-gray-400">
            Passionate React and Frontend Developer crafting user-friendly, <br /> visually stunning, and high-performance web applications <br /> with modern technologies.

            </h3>
            {/* button on click scroll */}
            <div className="mt-8 flex gap-6">
              <Link to="projects" spy={true} smooth={true} duration={500}>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Projects
                </button>
              </Link>

              <Link to="contact" spy={true} smooth={true} duration={500}>
                <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="mt-8 flex gap-6 text-2xl text-gray-700">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-700 transition duration-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-800 transition duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-500 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 transition duration-300" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-600 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
        {/* right side on picture */}
       
      </div>
    </div>
  );
};

export default Banner;
