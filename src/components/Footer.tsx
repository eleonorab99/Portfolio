import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer: React.FC = () => (
  <footer className="py-12 px-8 lg:px-20 bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <a
        href="mailto:eleonorabaronidm@gmail.com"
        className="text-gray-400 hover:text-white transition-colors"
      >
        eleonorabaronidm@gmail.com
      </a>      <div className="flex space-x-6">
        <a
          href="https://github.com/eleonorab99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/eleonora-baroni-836788184/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
