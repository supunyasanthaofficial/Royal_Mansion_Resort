import React from "react";
import ST1 from "../assets/images/ST1.jpg";
import ST2 from "../assets/images/ST2.jpg";
import ST3 from "../assets/images/ST3.jpg";
const OurStory: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-500 leading-relaxed text-[15px] md:text-base text-center">
            <p className="-mx-30 text-xm font-bold">
              Royal Mansion Resort Villa is a charming and truly extraordinary
              retreat, nestled in a tranquil setting surrounded by lush greenery
              and breathtaking landscapes. This peaceful haven is perfect for
              nature lovers, offering a serene escape with the soothing sounds
              of chirping birds and stunning panoramic views of the surrounding
              hills and mountains.
            </p>
            <p className="-mx-30 text-xm font-bold">
              Guests can take a leisurely walk through the scenic surroundings,
              hire a bicycle to explore the area, unwind with a refreshing drink
              on the balcony, or simply relax in comfort.
            </p>
            <p className="-mx-30 text-xm font-bold">
              All rooms at Royal Mansion Resort Villa feature spectacular
              mountain and garden views, spacious balconies, en-suite bathrooms,
              comfortable double beds, sofas, hair dryers, TVs, wardrobes,
              kettles, dressing tables, and optional air conditioning. Designed
              for both couples and families, our three elegantly furnished rooms
              provide the perfect setting for a comfortable and relaxing stay at
              Royal Mansion Resort Villa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-1 overflow-hidden shadow-lg h-125[500px]">
            <img
              src={ST1}
              alt="Exterior Left"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="md:col-span-2 overflow-hidden shadow-lg h-100[400px]">
            <img
              src={ST2}
              alt="Main View Center"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="md:col-span-1 overflow-hidden shadow-lg h-125[500px]">
            <img
              src={ST3}
              alt="Interior Right"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
