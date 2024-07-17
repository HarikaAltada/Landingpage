import React, { useState } from "react";

function Section({ title, children, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <h2
        className="text-2xl font-semibold mb-2 cursor-pointer flex justify-between items-center"
        onClick={toggleOpen}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </h2>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
}

export default Section;
