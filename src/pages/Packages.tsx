import Header from "../components/Header";
import header4 from "../assets/images/Header4.jpg";
import {
  FaCheckCircle,
  FaGamepad,
  FaMoneyCheckAlt,
  FaUtensils,
} from "react-icons/fa";
import { GiBowlOfRice, GiCoffeeCup } from "react-icons/gi";

const Packages = () => {
  const packages = [
    {
      name: "One Double Room - Special Honeymoon Package",
      price: "30,000/-",
      amenities: [
        "A/C bedroom",
        "Attached bathroom",
        "All Bathroom amenities",
        "Tea, coffee Making facilities",
        "Free Wi-Fi",
        "Pool access",
        "Special Candle Night Dinner - Fried Rice/Kottu.Sri Lankan rice & curry",
      ],
      meals: {
        breakfast:
          "String Hoppers with Chicken/Fish Curry, Potato Curry, Coconut Sambol or Milk Rice with Lunumiris",
        lunch: "Sri Lankan Rice & Curry (Chicken/Fish/Veg)",
      },
      entertainment: ["Carrom", "Dam", "Chess", "Dart Board"],
      fbPrice: "36,000/-",
      hbPrice: "33,000/-",
    },
    {
      name: "Suit Room-Special Honeymoon Package",
      price: "35,000/-",
      amenities: [
        "A/C bedroom",
        "Attached bathroom",
        "All Bathroom amenities",
        "Tea, coffee Making facilities",
        "King Size Bed and Single Diven Bed",
        "Large Bathroom with Jacuzzi",
        "Small Pantry",
        "Sofa and Tv",
        "Free Wi-Fi",
        "Pool access",
        "Special Candle Night Dinner-Fried Rice/Kottu/Sri Lankan & curry",
      ],
      meals: {
        breakfast:
          "String Hoppers with Chicken/Fish Curry, Potato Curry, Coconut Sambol or Milk Rice with Lunumiris",
        lunch: "Sri Lankan Rice & Curry (Chicken/Fish/Veg)",
      },
      entertainment: ["Carrom", "Dam", "Chess", "Dart Board"],
      fbPrice: "42,000/-",
      hbPrice: "38,000/-",
    },
    {
      name: "One Double Room",
      price: "15,000/-",
      amenities: [
        "A/C bedroom",
        "Attached bathroom",
        "All Bathroom amenities",
        "Tea, coffee Making facilities",
        "Free Wi-Fi",
        "Pool access",
      ],
      meals: {
        breakfast:
          "String Hoppers with Chicken/Fish Curry, Potato Curry, Coconut Sambol or Milk Rice with Lunumiris",
        lunch: "Sri Lankan Rice & Curry (Chicken/Fish/Veg)",
        dinner: "Fried Rice/ Kottu/Sri Lankan rice & curry",
      },
      entertainment: ["Carrom", "Dam", "Chess", "Dart Board"],
      fbPrice: "25,000/-",
      hbPrice: "22,000/-",
      bbPrice: "18,000/-",
    },
    {
      name: "4 Bedroom Villa + Family Suit(12-14 pax)",
      price: "87,000/-",
      amenities: [
        "4 Double Bedrooms",
        "Attached Bathrooms",
        "King Size Beds",
        "Extra 2 Sofa Beds",
        "Living, Dining, Entrance Lobby, Pantry, Kitchen",
        "Pool with pool deck for outdoor gathering",
        "In-house chef",
        "All Bathroom amenities",
        "Tea/coffee making facilities Family Suit with King Size Bed,Single Diven Bed,Extra Sofa Bed",
        "(convertible), Large Bathroom with Bath Tub, Small Pantry, Fridge, Sofa & TV",
        "BBQ Machine (Extra charge 4500/- LKR)",
        "Entertainment: Carrom, Dam, Chess, Dart",
      ],
      entertainment: ["Carrom", "Dam", "Chess", "Dart Board"],

      bbPrice: "108,000/- (14 pax)",
      hbPrice: "136,000/- (14 pax)",
      fbPrice: "171,000/- (14 pax)",
    },
    {
      name: "4 Bedroom Villa (8-10 pax)",
      price: "65,000/-",
      amenities: [
        "4 Double Bedrooms",
        "Attached Bathrooms",
        "King Size Beds",
        "Living, Dining, Entrance Lobby, Pantry, Kitchen",
        "Pool with pool deck for outdoor gathering",
        "In-house chef",
        "All Bathroom amenities",
        "Tea/Coffee making facilities",
        "BBQ Machine",
        "Entertainment: Carrom, Dam, Chess, Dart",
      ],
      entertainment: ["Carrom", "Dam", "Chess", "Dart Board"],

      bbPrice: "77,000/- (8 pax) / 80,000/- (10 pax)",
      hbPrice: "93,000/- (8 pax) / 100,000/- (10 pax)",
      fbPrice: "113,000/- (8 pax) / 125,000/- (10 pax)",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header
        title="Packages"
        subtitle="Choose your perfect stay"
        description="Explore our curated packages designed for comfort and value."
        bgImage={header4}
        height="h-[60vh] md:h-[90vh]"
      />

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-gray-800 ">
            Our Packages
          </h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-[#121212] text-white rounded-2xl p-6 shadow-2xl flex flex-col border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-yellow-400 leading-tight mb-6 h-16 flex items-center">
                  {pkg.name}
                </h3>

                <div className="space-y-2 mb-6 flex-1">
                  {pkg.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheckCircle
                        className="text-yellow-500 mt-1 shrink-0"
                        size={14}
                      />
                      <span className="text-[15px] text-gray-300">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-3xl font-bold text-yellow-400 mb-6 border-t border-white/10 pt-6">
                  {pkg.price}{" "}
                  <span className="text-xl font-normal text-gray-400">
                    per night
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-yellow-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
                    <FaUtensils /> Meals:
                  </h4>
                  <div className="space-y-4 pl-4 border-l border-yellow-500/30">
                    <div className="flex gap-3">
                      <GiBowlOfRice
                        className="text-gray-400 shrink-0"
                        size={20}
                      />
                      <p className="text-[12px] italic text-gray-400 leading-relaxed">
                        <strong className="text-white not-italic">
                          Breakfast:
                        </strong>{" "}
                        {pkg.meals?.breakfast}
                      </p>
                    </div>
                    {pkg.meals?.lunch && (
                      <div className="flex gap-3">
                        <GiCoffeeCup
                          className="text-gray-400 shrink-0"
                          size={20}
                        />
                        <p className="text-[12px] italic text-gray-400 leading-relaxed">
                          <strong className="text-white not-italic">
                            Lunch:
                          </strong>{" "}
                          {pkg.meals.lunch}
                        </p>
                      </div>
                    )}
                    {pkg.meals?.dinner && (
                      <div className="flex gap-3">
                        <FaUtensils
                          className="text-gray-400 shrink-0"
                          size={16}
                        />
                        <p className="text-[12px] italic text-gray-400 leading-relaxed">
                          <strong className="text-white not-italic">
                            Dinner:
                          </strong>{" "}
                          {pkg.meals.dinner}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-yellow-500 font-bold mb-3 flex items-center gap-2 uppercase tracking-wider text-xs">
                    <FaGamepad /> Entertainment:
                  </h4>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 pl-4">
                    {pkg.entertainment.map((ent, i) => (
                      <div
                        key={i}
                        className="text-[11px] text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>{" "}
                        {ent}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-yellow-500">
                    <FaMoneyCheckAlt size={14} />
                    <span className="font-bold text-sm tracking-wide">
                      FB {pkg.fbPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-yellow-500">
                    <FaMoneyCheckAlt size={14} />
                    <span className="font-bold text-sm tracking-wide">
                      HB {pkg.hbPrice}
                    </span>
                  </div>
                  {pkg.bbPrice && (
                    <div className="flex items-center gap-3 text-yellow-500">
                      <FaMoneyCheckAlt size={14} />
                      <span className="font-bold text-sm tracking-wide">
                        BB {pkg.bbPrice}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() =>
                    (window.location.href =
                      "https://booking.royalmansionresorts.com/")
                  }
                  className="w-full bg-[#785421] hover:bg-[#5e411a] text-white font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-lg active:scale-95"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Packages;
