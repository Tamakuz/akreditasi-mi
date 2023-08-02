import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const Qa = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <a
      href="https://api.whatsapp.com/send?phone=xxxxxxxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className="z-[999] fixed right-10 bottom-10 bg-green-500 p-5 rounded-full text-white shadow-lg hover:bg-green-600 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovering ? (
        <span className="text-2xl">Q/A</span>
      ) : (
        <span>
          <BsWhatsapp className="text-4xl" />
        </span>
      )}
    </a>
  );
};

export default Qa;
