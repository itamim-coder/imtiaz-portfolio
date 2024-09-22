import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="mb-10 title text-center">Imtiaz Tamim</p>
            <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 my-10 border-b border-gray-200"></ul>
            <div className="flex space-x-10 justify-center items-center mb-10">
              {/* Mail Icon */}
              <a href="mailto:your-email@example.com">
                <IconMail
                  size={40}
                  className="text-gray-500 hover:text-indigo-500 transition-all duration-300"
                />
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/itamim-coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub
                  size={40}
                  className="text-gray-500 hover:text-indigo-500 transition-all duration-300"
                />
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/imtiaz-tamim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin
                  size={40}
                  className="text-gray-500 hover:text-indigo-500 transition-all duration-300"
                />
              </a>
            </div>
            <span className="text-lg text-gray-300 text-center block">
              ©{" "}
              <a
                href="https://pagedone.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imtiaz
              </a>{" "}
              2024, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
