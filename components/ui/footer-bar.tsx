import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Correct import from 'fa'

interface FooterBarProps {
  className?: string;
}

const FooterBar: React.FC<FooterBarProps> = ({ className }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-transparent text-gray-500 py-4 flex justify-center items-center ${className}`}
    >
      <div className="flex space-x-6 items-center">
        {/* GitHub Link */}
        <a
          href="https://github.com/coderwizz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-800"
        >
          <FaGithub className="text-2xl" />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/ethan-zhang-519861250/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-800"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;