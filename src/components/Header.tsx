import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  showButton?: boolean;
  height?: string;
}

const Header: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  bgImage,
  showButton = false,
  height = "h-screen",
}) => {
  return (
    <section
      className={`relative ${height} w-full flex items-center justify-start overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 px-10 md:px-20 max-w-4xl text-white">
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-2">
          {title} <span className="text-white/90">{subtitle}</span>
        </h1>

        <p className="text-sm font-light md:text-base  tracking-wide max-w-xl mb-8 text-white leading-relaxed ">
          {description}
        </p>

        {showButton && (
          <button className="group relative border border-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-300 hover:text-black">
            <span className="relative z-10 flex items-center">
              Learn More{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                »
              </span>
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Header;
