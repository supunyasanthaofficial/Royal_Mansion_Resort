import Icon from "../assets/images/Icon.png";

const AboutIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 md:mb-10">
          Royal Mansion Resort
        </h2>

        <div className="space-y-4 md:space-y-6 text-gray-500 leading-relaxed text-sm sm:text-base">
          <p className="font-bold md:-mx-30[7.5rem]">
            Royal Mansion Resort Villa is a luxurious escape, offering an
            exclusive blend of comfort, elegance, and tranquility. Nestled in a
            breathtaking tropical setting, this villa is designed for those
            seeking a serene and unforgettable getaway.
          </p>
          <p className="font-bold md:-mx-30[7.5rem]">
            With world‑class amenities, stylish interiors, and personalized
            hospitality, the villa provides a perfect retreat for honeymooners,
            families, and travellers looking to relax and indulge in luxury and
            nature. Whether you're unwinding by the pool, enjoying fine dining,
            or exploring the surroundings, every moment at Royal Mansion Resort
            Villa is crafted for absolute comfort and relaxation.
          </p>
          <p className="font-medium text-gray-800 pt-4">
            Experience Royal luxury in paradise at Royal Mansion Resort Villa!
          </p>
        </div>

        <div className="mt-10 md:mt-12 border-t border-gray-300 md:-mx-30[7.5rem]"></div>

        <div className="flex justify-center my-6 md:my-8">
          <div className="bg-[#f9f9f9] px-6 sm:px-10 py-4 rounded-lg inline-block">
            <img
              src={Icon}
              alt="Resort Illustration"
              className="w-36 sm:w-48 md:w-70 opacity-90 mx-auto"
            />
          </div>
        </div>

        <div className="border-t border-gray-300 md:-mx-30[7.5rem]"></div>
      </div>
    </section>
  );
};

export default AboutIntro;
