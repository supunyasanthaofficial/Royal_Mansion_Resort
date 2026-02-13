import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-500">
              Reception Office
            </h3>
            <p className="text-2xl md:text-3xl  font-bold leading-tight">
              Royal Mansion Resort Pussallawa, <br />
              No.21, Prime Panoramic, <br />
              Paradeka, Pussallawa
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-500">
              Reception Hours
            </h3>
            <p className="text-2xl md:text-3xl  font-bold">
              7:30 AM - 11:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-500">
              Contact
            </h3>
            <p className="text-2xl md:text-3xl  font-bold">+94 76 400 1245</p>
            <p className="text-xl md:text-2xl  font-bold mt-1">
              info.royalmansionresort@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">
              Follow Us
            </h3>
            <div className="flex space-x-8 text-2xl">
              <a
                href="#"
                className="hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border rounded-2xl border-gray-200 bg-[#F9F9F9] p-4 focus:outline-none focus:border-black transition-all"
                />
                <span className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">
                  First
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border rounded-2xl border-gray-200 bg-[#F9F9F9] p-4 focus:outline-none focus:border-black transition-all"
                />
                <span className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">
                  Last
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="border rounded-2xl border-gray-200 bg-[#F9F9F9] p-4 focus:outline-none focus:border-black transition-all w-full"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Comment or Message
            </label>
            <textarea
              rows={6}
              className="border rounded-2xl border-gray-200 bg-[#F9F9F9] p-4 focus:outline-none focus:border-black transition-all w-full resize-none"
            ></textarea>
          </div>

          <div>
            <button className="bg-[#2D2D2D] text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors duration-300">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
