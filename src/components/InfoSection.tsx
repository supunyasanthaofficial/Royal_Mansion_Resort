import React from "react";
import info1 from "../assets/images/info1.jpg";
import info2 from "../assets/images/info2.jpg";

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-stretch">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-10 shadow-xl overflow-hidden">
              <img
                src={info2}
                alt="Exterior View"
                className="w-full rounded-2xl h-[450px] object-cover"
              />
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 text-justify grow">
              Located in one of Sri Lanka's most breathtaking destinations,
              Royal Mansion Resort Villa provides unmatched luxury, comfort, and
              tranquility. Whether you're looking to relax by the pool, explore
              nearby cultural sites, or enjoy a romantic evening under the
              stars, this villa has everything you need for a truly
              unforgettable getaway. Personalized service, exquisite cuisine,
              and a warm, welcoming atmosphere make it an ideal choice for
              couples, families, or solo travelers seeking a memorable
              experience in paradise.
            </p>
            <button className="w-fit bg-[#1a1a1a] text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-black transition-all duration-300">
              Know More
            </button>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10 leading-[1.2]">
              Welcome to a Sri Lankan <br /> Luxury Escape!
            </h2>
            <div className="mb-10 shadow-xl overflow-hidden">
              <img
                src={info1}
                alt="Interior View"
                className="w-full rounded-2xl h-[380px] object-cover "
              />
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
              Royal Mansion Resort Villa is a hidden paradise, nestled in a
              serene tropical setting surrounded by lush greenery, swaying
              palms, and the soothing sounds of nature. Tucked away from the
              noise and crowds, this private retreat offers guests an exclusive
              escape where they can unwind in complete peace. The villa is
              beautifully designed with a blend of modern elegance and
              traditional Sri Lankan charm, featuring spacious interiors,
              high-end amenities, and stunning views of the surrounding
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
