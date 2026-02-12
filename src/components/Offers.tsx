import React from "react";
import {
  FaTv,
  FaSwimmingPool,
  FaUtensils,
  FaWifi,
  FaDice,
  FaWind,
} from "react-icons/fa";

const offers = [
  { title: "TV Room", icon: <FaTv size={50} /> },
  { title: "Infinity Pool", icon: <FaSwimmingPool size={50} /> },
  { title: "Villa Chef", icon: <FaUtensils size={50} /> },
  { title: "Free Wi-Fi", icon: <FaWifi size={50} /> },
  { title: "Games", icon: <FaDice size={50} /> },
  { title: "A/C Rooms", icon: <FaWind size={50} /> },
];

const Offers: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base font-bold leading-relaxed">
            We hope that staying at Royal Mansion Resort Villa will make your
            trip to Sri Lanka a unique and memorable experience, offering a
            luxurious, relaxing, and unforgettable escape filled with comfort,
            elegance, and breathtaking surroundings.
          </p>
          <div className="-mx-30 mt-12 border-t border-gray-900"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-18 mb-15 text-center w-full">
            What we Offer?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {offers.map((item, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-3xl p-16 flex flex-col items-center justify-center space-y-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-gray-800">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold tracking-wide">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
