import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'

function Navbar() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Toggle body scroll
    document.body.style.overflow = isNavOpen ? "auto" : "hidden";
  };

  const handleabout = () => {
    navigate('/About');
    // Close the navigation menu after clicking on a link
    setIsNavOpen(false);
    // Restore body scroll
    document.body.style.overflow = "auto";
  };

  const handlehome = () => {
    navigate('/home')
  }

  return (
    <div className="relative z-50">
      <div className=" h-12 text-[15px] space-x-2 bg-textcolor-0 sm:w-full rounded-b-[20px] lg:rounded-b-[100px] font-primary text-background-0 sm:h-8 sm:text-center lg:bg-header-bg lg:w-[100%] lg:h-16 lg:text-[22px] lg:text-center ">
        <p>
          <q>Strive not to be a success, but rather to be of value.</q>
        </p>
        <div className=" lg:mt-0 ">
          <button
            className="absolute top-0 right-2 z-50 p-2 bg-white rounded-full"
            onClick={toggleNav}
          >
            {/* &#9660; */}
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
      </div>
      <div
        id="myNav"
        className={`overlay fixed top-0 left-0 w-full bg-black bg-opacity-90 overflow-hidden transition-all duration-500 ${isNavOpen ? "h-full" : "h-0"
          }`}
      >
        <div className="bg-textcolor-0 text-[25px] lg:text-[50px] font-primary text-background-0 rounded-b-[100px] overlay-content flex flex-col items-center justify-center h-5/6">
          <a
            href="#"
            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={handlehome}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={handleabout}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          {/* <a
            href="#"
            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

