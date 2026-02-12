import React from "react";

import Service1 from "../assets/images/Service1.jpg";
import Service2 from "../assets/images/Service2.avif";

const Services: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <section className="py-20 px-6 bg-[#fdfdfd]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-1 mb-10 text-center w-full">
            Our Services
          </h2>

          <div className="space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <img
                src={Service1}
                className="w-full md:w-1/2 h-[350px] object-cover shadow-xl"
                alt="Staff"
              />
              <div className="md:w-1/2 text-left">
                <h3 className="text-3xl font-serif font-bold mb-6">
                  Wonderful Staff
                </h3>
                <p className="text-gray-600 leading-relaxed ">
                  "At Royal Mansion Resort Villa, our dedicated chef and butler
                  are always available to cater to your every need, ensuring a
                  seamless and luxurious experience. The villa is cleaned daily,
                  and a full laundary service is provided for your convenience.
                  Our skilled gardeners and pool attendants maintain the
                  property meticulously, keeping everything in perfect
                  condition.With 24-hour security, guests can relax and enjoy
                  complete peace of mind throughout their stay."
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <img
                src={Service2}
                className="w-full md:w-1/2 h-[350px] object-cover shadow-xl"
                alt="Food"
              />
              <div className="md:w-1/2 text-left">
                <h3 className="text-3xl font-serif font-bold mb-6">
                  Delicious Food
                </h3>
                <p className="text-gray-600 leading-relaxed ">
                  "Our skilled chef crafts exquisite meals throughout the day,
                  using the freshest, locally sourced ingredients. Guests can
                  enjoy three delicious meals per day, along with drinks,
                  coffee, and tea at cost. The menu highlights authentic Sri
                  Lankan flavors while also offering a variety of western dishes
                  and kid-friendly options to cater to all tastes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
