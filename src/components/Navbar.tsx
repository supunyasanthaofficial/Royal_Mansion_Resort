import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const toggleMenu = () => setIsOpen((s) => !s);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const original = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const closeAndNavigate = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-sm
                 border-b border-white/10 text-white"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={Logo}
                alt="Royal Mansion Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-serif font-bold tracking-tight text-white/95 leading-none">
                Royal Mansion
              </h1>
              <p className="text-[10px] text-white/60 md:text-xs">
                Resort & Villas
              </p>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-10 pointer-events-auto">
            <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#f0da60] font-bold transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#f0da60] font-bold transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="hover:text-[#f0da60] font-bold transition"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#f0da60] font-bold transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <a
                href="https://royal-mansion-booking-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center border border-white/60 px-6 py-2 text-[12px] font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-black bg-transparent"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              </a>
            </div>

            <button
              ref={buttonRef}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-md text-2xl text-white hover:text-[#f0da60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f0da60]"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-out
                    ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`relative safe-area-inset-top mx-4 mt-6 rounded-2xl bg-white/6 border border-white/20
                      backdrop-blur-lg max-w-lg w-[calc(100%-2rem)] mx-auto px-6 py-8 transform transition-all duration-350
                      ${isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-6"}`}
        >
          <nav className="flex flex-col items-center gap-5">
            <Link
              to="/"
              ref={firstLinkRef}
              onClick={closeAndNavigate}
              className="text-white text-lg font-semibold uppercase tracking-widest hover:text-[#f0da60] focus:outline-none focus:ring-2 focus:ring-[#f0da60] px-2"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeAndNavigate}
              className="text-white text-lg font-semibold uppercase tracking-widest hover:text-[#f0da60] focus:outline-none focus:ring-2 focus:ring-[#f0da60] px-2"
            >
              About
            </Link>

            <Link
              to="/facilities"
              onClick={closeAndNavigate}
              className="text-white text-lg font-semibold uppercase tracking-widest hover:text-[#f0da60] focus:outline-none focus:ring-2 focus:ring-[#f0da60] px-2"
            >
              Facilities
            </Link>

            <Link
              to="/contact"
              onClick={closeAndNavigate}
              className="text-white text-lg font-semibold uppercase tracking-widest hover:text-[#f0da60] focus:outline-none focus:ring-2 focus:ring-[#f0da60] px-2"
            >
              Contact Us
            </Link>

            <a
              href="https://booking.royalmansionresorts.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full text-center border border-white/60 px-6 py-3 text-sm font-bold uppercase tracking-widest bg-white text-black rounded-lg hover:bg-white/90 transition"
            >
              Book Now
            </a>
          </nav>

          <div className="mt-6 text-center text-xs text-white/70">
            © {new Date().getFullYear()} Royal Mansion
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
