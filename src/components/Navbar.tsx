import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full z-50 flex items-center px-10 py-5 bg-[#121212] text-white border-b border-white/10 relative">
      <div className="flex items-center ml-12 z-10">
        <div className="w-12 h-12 flex items-center justify-center mr-4">
          <img
            src={Logo}
            alt="Royal Mansion Logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h1 className="text-xl font-serif font-bold tracking-tight text-white/90 whitespace-nowrap">
          Travel & Tourism
        </h1>
      </div>

      <ul className="absolute inset-0 flex items-center justify-center space-x-8 text-xs font-medium uppercase tracking-widest pointer-events-none">
        <li className="pointer-events-auto">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
        </li>
        <li className="pointer-events-auto">
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
        </li>
        <li className="pointer-events-auto">
          <Link to="/facilities" className="hover:text-blue-400 transition">
            Facilities
          </Link>
        </li>
        <li className="pointer-events-auto">
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </li>
      </ul>

      <div className="ml-auto z-10">
        <Link
          to="/book"
          className="border border-white/50 px-5 py-2 text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 flex items-center"
        >
          Book Now <span className="ml-2">→</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
