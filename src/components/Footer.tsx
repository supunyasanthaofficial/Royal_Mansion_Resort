import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 px-6 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        <div>
          <h3 className="text-xl  font-bold mb-6 text-gray-900 leading-tight">
            Who We Are?
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-bold text-gray-600 block mb-1">
              Royal Mansion Resort Villa,
            </span>
            a tropical luxury nestled in nature's embrace, where pure
            tranquility meets modern elegance and timeless charm.
          </p>
        </div>

        <div>
          <h3 className="text-xl  font-bold mb-6 text-gray-900 leading-tight">
            Customer Help
          </h3>
          <div className="text-sm text-gray-600 space-y-2 mb-6">
            <p className="hover:text-gray-900 transition-colors cursor-pointer">
              +9476 400 1245
            </p>
            <p className="hover:text-gray-900 transition-colors cursor-pointer lowercase">
              info.royalmationresort@gmail.com
            </p>
          </div>

          <div className="flex space-x-5 text-gray-500">
            <a
              href="https://www.instagram.com/royal_mansion_resort_pussellaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.me/94764001245"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573387734967"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@royal.mansion.res"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl  font-bold mb-6 text-gray-900 leading-tight">
            Location
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Royal Mansion Resort Pussallawa, No.21, Prime
            <br />
            Panaromic, Paradeka, Pussellawa
          </p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center text-[11px] text-gray-700 uppercase tracking-[0.2em]">
        <p className="text-center">
          © 2025 All Rights Reserved | Edirisinghe Homes | Designed & Developed
          by{" "}
          <a
            href="https://everefficient.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            EVER EFFICIENT Business Management (Pvt) Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
