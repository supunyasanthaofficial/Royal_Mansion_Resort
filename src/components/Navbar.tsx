import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-2 bg-white/10 backdrop-blur-md text-white border-b border-white/10">
      <div className="flex items-center md:ml-12 z-60">
        <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mr-4">
          <img
            src={Logo}
            alt="Royal Mansion Logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h1 className="text-lg md:text-xl font-serif font-bold tracking-tight text-white/90 whitespace-nowrap">
          Royal Mansion
        </h1>
      </div>

      <ul className="hidden md:flex absolute inset-0 items-center justify-center space-x-8 text-sm font-medium uppercase tracking-widest pointer-events-none">
        <li className="pointer-events-auto">
          <Link to="/" className="hover:text-blue-400 font-bold transition">
            Home
          </Link>
        </li>
        <li className="pointer-events-auto">
          <Link
            to="/about"
            className="hover:text-blue-400 font-bold transition"
          >
            About
          </Link>
        </li>
        <li className="pointer-events-auto">
          <Link
            to="/facilities"
            className="hover:text-blue-400 font-bold transition"
          >
            Facilities
          </Link>
        </li>
        <li className="pointer-events-auto">
          <Link
            to="/contact"
            className="hover:text-blue-400 font-bold transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="flex items-center z-[60]">
        <div className="hidden md:block ml-auto">
          <Link
            to="/book"
            className="group relative border border-white/60 px-8 py-3 text-[12px] font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 hover:text-black flex items-center shadow-lg"
          >
            <span className="relative z-10 flex items-center">
              Book Now <span className="ml-3 text-lg">→</span>
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none ml-4"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/95 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-8 z-[55]`}
      >
        <Link
          to="/"
          onClick={toggleMenu}
          className="text-xl font-bold uppercase tracking-widest hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="text-xl font-bold uppercase tracking-widest hover:text-blue-400 transition"
        >
          About
        </Link>
        <Link
          to="/facilities"
          onClick={toggleMenu}
          className="text-xl font-bold uppercase tracking-widest hover:text-blue-400 transition"
        >
          Facilities
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="text-xl font-bold uppercase tracking-widest hover:text-blue-400 transition"
        >
          Contact Us
        </Link>

        <Link
          to="/book"
          onClick={toggleMenu}
          className="mt-4 border border-white px-10 py-4 text-sm font-bold uppercase tracking-widest bg-white text-black"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
