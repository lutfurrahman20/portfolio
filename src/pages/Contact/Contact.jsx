import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ee4cgo",
        "template_dy7r09k",
        form.current,
        "Y5JI-sOWfEdz4_nqC"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
          });
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,

      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-lightNavy rounded-lg shadow-md "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="contact"
    >
      <div>
        <h2 className="text-4xl font-bold text-white mb-5 text-center uppercase">
          Contact Me
        </h2>
      </div>
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        {/* Left: Contact Form */}
        <div className="md:w-1/2 p-4">
          <form ref={form} onSubmit={sendEmail}>
            <motion.div className="mb-4" variants={inputVariants}>
              <label
                className="block text-white text-sm font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label
                className="block text-white text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label
                className="block text-white text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full p-3 text-white bg-gray-500 rounded-lg font-semibold    "
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </form>
        </div>
        {/* Right: About and Address Section */}
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center bg-gray-50 rounded-lg">
          <p className="text-gray-700 mb-4 text-center">
            I am interested in working with any company that thinks my skill
            will be helpful for them. If you are looking for someone like me,
            please let me know.
          </p>
          <h3 className="text-lg text-teal-500 font-semibold mb-2">My Address:</h3>
          <address className="text-gray-600 mb-4 text-center">
            <p>House #12, Road #3, Block A</p>
            <p>Bohoddarhat, Chattogram, Bangladesh</p>
            <p>Phone: +8801XXXXXXXXX</p>
          </address>
          <ul className="space-x-4 flex">
            <li>
              <a
                href="https://www.facebook.com/lutfurrahman.siddiquee"
                className="text-teal-300 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lutfur-rahman-siddiquee-805039236/"
                className="text-teal-700 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lutfurrahman20"
                className="text-teal-400 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                className="text-teal-500 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
