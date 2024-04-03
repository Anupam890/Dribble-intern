import dribble from "../components/assets/dribble.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);

  const toggleScreen = () => {
    setMobileScreen(!mobileScreen);
  };

  const navLinks = [
    {
      name: "Inspiration",
      link: "#",
    },
    {
      name: "Find Work",
      link: "#",
    },
    {
      name: "Learn Design",
      link: "#",
    },
    {
      name: "Go Pro",
      link: "#",
    },
    {
      name: "Hire Designers",
      link: "#",
    },
  ];

  return (
    <nav className="bg-white py-4 border-b-2">
      <div className="container mx-auto flex justify-around items-center">
        {/* Left Container */}
        <div className="flex items-center">
          <Link to="/">
            <img src={dribble} alt="logo" className="w-20 h-10 mr-4 bg-cover object-cover" />
          </Link>
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-black hover:text-black-300 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Container */}
        <div className="flex items-center">
          <div className="md:hidden">
            <button
              onClick={toggleScreen}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {mobileScreen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 7.5a1 1 0 011-1h13a1 1 0 010 2h-13a1 1 0 01-1-1zM3.5 12a1 1 0 011-1h16a1 1 0 010 2h-16a1 1 0 01-1-1zM5.5 17.5a1 1 0 011-1h10a1 1 0 010 2h-10a1 1 0 01-1-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.25 7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0V8.25a.75.75 0 01.75-.75zM3.75 15a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center ml-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white px-3 py-1 rounded-md"
            />
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-white ml-4"
            />
            <div className="image w-8 h-8 bg-gray-700 rounded-full ml-4"></div>
            <button className="bg-[#EA4B8B] text-white px-4 py-1 rounded-md ml-4">
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Menu */}
      {mobileScreen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
