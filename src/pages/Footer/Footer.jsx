import { useEffect, useState } from "react";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show the arrow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-navy mt-5 text-white p-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Lutfur Rahman Siddiquee. All rights reserved.</p>
      </div>

      {/* Scroll to Top Arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-md transition duration-300"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
