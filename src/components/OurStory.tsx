import React from "react";
import ST1 from "../assets/images/ST1.jpg";
import ST2 from "../assets/images/ST2.jpg";
import ST3 from "../assets/images/ST3.jpg";

const OurStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 md:mb-10">
            Our Story
          </h2>
          <div className="space-y-4 md:space-y-6 text-gray-500 leading-relaxed text-sm sm:text-base text-center">
            <p className="font-bold md:-mx-30[7.5rem]">
              Royal Mansion Resort Villa is a charming and truly extraordinary
              retreat, nestled in a tranquil setting surrounded by lush greenery
              and breathtaking landscapes. This peaceful haven is perfect for
              nature lovers, offering a serene escape with the soothing sounds
              of chirping birds and stunning panoramic views of the surrounding
              hills and mountains.
            </p>
            <p className="font-bold md:-mx-30[7.5rem]">
              Guests can take a leisurely walk through the scenic surroundings,
              hire a bicycle to explore the area, unwind with a refreshing drink
              on the balcony, or simply relax in comfort.
            </p>
            <p className="font-bold md:-mx-30[7.5rem]">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
          <div className="md:col-span-1 overflow-hidden rounded-lg shadow-lg aspect-4/3 md:aspect-auto md:h-125[500px]">
            <img
              src={ST1}
              alt="Exterior Left"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2 overflow-hidden rounded-lg shadow-lg aspect-4/3 md:aspect-auto md:h-125[400px]">
            <img
              src={ST2}
              alt="Main View Center"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-1 overflow-hidden rounded-lg shadow-lg aspect-4/3 md:aspect-auto md:h-125[500px]">
            <img
              src={ST3}
              alt="Interior Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
