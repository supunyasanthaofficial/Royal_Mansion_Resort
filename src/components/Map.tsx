import React from "react";

const Map: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">
          Find Us on Map
        </h2>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.297689304588!2d80.61061879883098!3d7.1142401605025825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37100440ae2d3%3A0xeac5cf0345badcdb!2sRoyal%20Mansion%20Resort%20Pussellawa!5e0!3m2!1sen!2slk!4v1770958126984!5m2!1sen!2slk"
            // width="600"
            // height="450"
            className="w-full h-full border-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          ;
        </div>
      </div>
    </section>
  );
};

export default Map;
