import Icon from "../assets/images/Icon.png";

const AboutIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10">
          Royal Mansion Resort
        </h2>
        <div className="space-y-6 text-gray-500 leading-relaxed text-[15px] md:text-base">
          <p className="-mx-30 text-xm font-bold">
            Royal Mansion Resort Villa is a luxurious escape,offering an
            exclusive blend of comfort,elegance,and tranquility. Nestled in a
            breathtaking trophical setting,this villa is designed for those
            seeking a serene and unforgettable getway.
          </p>
          <p className="-mx-30 text-xm font-bold">
            With world-class amenities, stylish interiors,and personalized
            hospitality,the villa provides a perfect retreat for
            honeymooners,families, and travellers looking to relax and indulge
            in luxury and nature.Whether you're unwinding by the pool,enjoying
            fine dining,or exploring the surroundings,every moment at Royal
            Mansion Resort Villa is crafted for absolute comfort and relaxation.
          </p>
          <p className="font-medium text-gray-800 pt-4">
            Experinence Royal luxury in paradise at Royal Mansion Resort Villa!
          </p>
        </div>
        <div className="-mx-30 mt-12 border-t border-gray-900"></div>
        <div className="relative flex mt-8 justify-center">
          <div className="bg-[#f9f9f9] px-10">

            <img
              src={Icon}
              alt="Resort Illustrasion"
              className="w-48 md:w-70 opacity-90"
            />
          </div>
        </div>
        <div className="-mx-30 mt-12 border-t border-gray-900"></div>
      </div>
    </section>
  );
};
export default AboutIntro;
