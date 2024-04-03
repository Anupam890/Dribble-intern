import dribble from "../components/assets/dribble.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <nav className="navbar w-full h-20 bg-gray-800 flex items-center justify-around text-white">
      <div className="logo w-10 h-10 flex justify-center items-center">
        <img src={dribble} alt="logo" className="h-full" />
        <div className="nav-links flex">
        {navLinks.map((link, index) => (
          <Link to={link.link} key={index} className="nav-link px-4">
            {link.name}
          </Link>
        ))}
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
