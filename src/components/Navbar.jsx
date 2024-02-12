
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//     // Toggle body scroll
//     document.body.style.overflow = isNavOpen ? "auto" : "hidden";
//   };

//   const handleabout = () => {
//     navigate('/About');
//     // Close the navigation menu after clicking on a link
//     setIsNavOpen(false);
//     // Restore body scroll
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <div className="relative">
//       <div className=" bg-textcolor-0 sm:w-full sm:rounded-b-[100px] text-background-0 sm:h-8 sm:text-center lg:bg-header-bg lg:w-[100%] lg:h-16 lg:text-[22px] lg:text-center ">

//         <p className="">
//           <q>Strive not to be a success, but rather to be of value.</q>
//         </p>
//         <button
//           className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-full p-2 z-50 transition-transform"
//           onClick={toggleNav}
//         >
//           &#9660;
//         </button>
//         {/* <a className="text-textcolor-0 rounded-lg p-1 bg-background-0 cursor-pointer" onClick={handleabout}>About</a> */}
//       </div>
//       <div
//         id="myNav"
//         className={`overlay fixed top-0 left-0 w-full bg-black bg-opacity-90 overflow-hidden transition-all duration-500 ${isNavOpen ? "h-full" : "h-0"
//           }`}
//       >
//         <div className="bg-textcolor-0  text-background-0 rounded-b-[100px] overlay-content flex flex-col items-center justify-center h-5/6">
//           <a
//             href="#"
//             className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
//             onClick={handleabout}
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
//           >
//             Services
//           </a>
//           <a
//             href="#"
//             className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
//           >
//             Clients
//           </a>
//           <a
//             href="#"
//             className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  return (
    <div className="relative">
      <div className="bg-textcolor-0 sm:w-full sm:rounded-b-[100px] text-background-0 sm:h-8 sm:text-center lg:bg-header-bg lg:w-[100%] lg:h-16 lg:text-[22px] lg:text-center ">
        <p>
          <q>Strive not to be a success, but rather to be of value.</q>
        </p>
        <button
          className="absolute top-2 right-2 z-50 p-2 bg-white rounded-full"
          onClick={toggleNav}
        >
          &#9660;
        </button>
      </div>
      <div
        id="myNav"
        className={`overlay fixed top-0 left-0 w-full bg-black bg-opacity-90 overflow-hidden transition-all duration-500 ${isNavOpen ? "h-full" : "h-0"
          }`}
      >
        <div className="bg-textcolor-0 text-background-0 rounded-b-[100px] overlay-content flex flex-col items-center justify-center h-5/6">
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
            Services
          </a>
          <a
            href="#"
            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            Clients
          </a>
          <a
            href="#"
            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

