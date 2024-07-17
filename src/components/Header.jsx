import React from "react";

const Header = () => {
  const handleScrollToSection = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjusted offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <img src="./icons/bacrlogo.webp" alt="" className="w-30 h-20" />
        <nav className="flex space-x-4">
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className="text-gray-600 hover:text-gray-800"
          >
            Home
          </a>
          <a
            href="#flavours"
            onClick={(e) => handleScrollToSection(e, "flavours")}
            className="text-gray-600 hover:text-gray-800"
          >
            Flavours
          </a>
          <a
            href="#product"
            onClick={(e) => handleScrollToSection(e, "product")}
            className="text-gray-600 hover:text-gray-800"
          >
            Product
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "about")}
            className="text-gray-600 hover:text-gray-800"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, "contact")}
            className="text-gray-600 hover:text-gray-800"
          >
            Contact Us
          </a>
        </nav>
        <button className="border border-gray-600 text-black-600 hover:bg-gray-600 hover:text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
