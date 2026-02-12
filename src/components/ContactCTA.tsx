import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Header2 from "../assets/images/Header2.jpg";

const ContactCTA: React.FC = () => {
  return (
    <section className="relative h-125[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Header2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-wide leading-tight">
          "Your tranquil escape in the heart of{" "}
          <br className="hidden md:block" /> Pussellawa"
        </h2>

        <p className="text-gray-300 text-sm md:text-base font-bold mb-12 tracking-wider ">
          We can help you fit your stay and experience within your allotted
          budget.
        </p>

        <div className="flex flex-col items-center">
          <span className="text-xm uppercase tracking-[0.4em] text-white mb-6 font-bold">
            Book Your Stay Now
          </span>

          <div className="flex items-center space-x-4 md:space-x-8 text-3xl md:text-6xl font-bold font-sans">
            <FaPhoneAlt className="text-white scale-75 md:scale-100" />
            <a
              href="tel:+94764001245"
              className="hover:text-gray-300 transition-all duration-300"
            >
              +94 76 400 1245
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
