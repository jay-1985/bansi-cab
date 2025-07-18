import React from "react";
import dzire from "../../assets/dzire.png";
import ertiga from "../../assets/ertiga.png";
import etios from "../../assets/etios.png";
import kia_carnes from "../../assets/kia_carnes.png";
import innova from "../../assets/innova.png";
import crysta from "../../assets/crysta.png";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const carData = [
    {
      type: "Sedan",
      models: "Etios",
      alt: "Etios taxi service in Jamnagar - Bansi Cab",
      rate: "₹10/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: etios,
      features: ["Economy", "Fuel Efficient", "City Travel"],
    },
    {
      type: "Sedan",
      models: "Swift Dzire",
      alt: "Swift Dzire taxi service in Jamnagar - Bansi Cab",
      rate: "₹10/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: dzire,
      features: ["Comfort", "AC", "Spacious"],
    },
    {
      type: "SUV",
      models: "Ertiga",
      alt: "Ertiga taxi service in Jamnagar - Bansi Cab",
      rate: "₹12/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: ertiga,
      features: ["7-Seater", "Family", "Luggage Space"],
    },
    {
      type: "MUV",
      models: "Crysta",
      alt: "Innova taxi service in Jamnagar - Bansi Cab",
      rate: "₹18/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: crysta,
      features: ["8-Seater", "Premium", "Long Distance"],
    },
    {
      type: "MUV",
      models: "Innova",
      alt: "Crysta taxi service in Jamnagar - Bansi Cab",
      rate: "₹16/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: innova,
      features: ["Luxury", "VIP", "Business Travel"],
    },
    {
      type: "MUV",
      models: "Kia Carens",
      alt: "Kia Carens taxi service in Jamnagar - Bansi Cab",
      rate: "₹18/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: kia_carnes,
      features: ["Comfortable", "Spacious", "Family Travel"],
    },
  ];

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");

    // Option 2: If you want to scroll to a contact section on the same page, use:
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Floating Elements */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-yellow-300/20 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-5 w-40 h-40 sm:right-20 sm:w-96 sm:h-96 bg-amber-300/15 dark:bg-amber-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 sm:w-80 sm:h-80 bg-orange-300/10 dark:bg-orange-400/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 pb-20">
        {/* Car Fleet Section Title */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent m-4 sm:m-8">
            Our Premium Fleet
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
            Choose from our diverse collection of vehicles
          </p>
        </div>

        {/* Unique Hexagonal/Diamond Grid Layout */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full bg-gradient-to-r from-yellow-400 to-amber-500"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), 
                                    radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          {/* Cars Grid - Responsive Layout */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center mb-20 max-w-6xl mx-auto">
            {carData.map((car, index) => (
              <div
                key={index}
                className="transform transition-all duration-700 hover:scale-105 w-full max-w-sm"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Hexagonal Card Design */}
                <div className="group relative">
                  {/* Hexagonal Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 transform rotate-6 rounded-3xl blur-xl group-hover:rotate-12 transition-transform duration-500"></div>

                  {/* Main Card - Responsive Height */}
                  <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-yellow-200/50 dark:border-yellow-400/30 overflow-hidden min-h-[480px] sm:h-[520px] flex flex-col">
                    {/* Top Accent Bar */}
                    <div className="h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500"></div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      {/* Header with Title */}
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent leading-tight mb-1">
                          {car.models}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                          {car.type}
                        </p>
                      </div>

                      {/* Car Image */}
                      <div className="relative mb-4 sm:mb-6 flex-1 flex items-center justify-center min-h-[120px] sm:min-h-[200px] lg:min-h-[250px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-amber-100/50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl"></div>

                        <img
                          src={car.image}
                          alt={car.alt}
                          className={`relative max-h-full max-w-full object-contain transition-transform duration-500 drop-shadow-lg ${
                            car.models === "Etios" || car.models === "Ertiga"
                              ? "scale-x-[-1]"
                              : ""
                          }`}
                        />
                      </div>

                      {/* Pricing Info */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 p-3 sm:p-4 rounded-xl text-center">
                          <p className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase mb-1">
                            Rate
                          </p>
                          <p className="text-lg sm:text-xl font-black text-amber-800 dark:text-amber-200">
                            {car.rate}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-3 sm:p-4 rounded-xl text-center">
                          <p className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase mb-1">
                            DA
                          </p>
                          <p className="text-lg sm:text-xl font-black text-orange-800 dark:text-orange-200">
                            {car.da}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {car.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-yellow-400 to-amber-400 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Additional Info */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 p-3 sm:p-4 rounded-xl mt-auto">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span className="font-semibold">Average:</span>{" "}
                          {car.average}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Extra:</span>{" "}
                          {car.extra}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-4 right-4 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-500 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Version (visible on screens <640px) */}
          <div className="sm:hidden w-[110%] -ml-5 bg-yellow-400 py-4 px-6 flex flex-row items-center mt-6">
            <p className="text-black font-bold text-xl text-center">
              Need a cab? We’re ready.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className="bg-green-500 text-white text-base font-bold px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              Contact
            </button>
          </div>

          {/* Desktop Version (visible on screens ≥640px) */}
          <div className="hidden sm:flex w-[126%] -ml-[13%] bg-yellow-400 py-4 px-10 sm:px-24 items-center justify-center gap-10 mt-14">
            <p className="text-black font-bold text-2xl text-center">
              Need a cab? We’re ready.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className="bg-green-500 text-white text-base font-bold px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-green-700 transition-all duration-300 cursor-pointer relative z-20 select-none"
              style={{ pointerEvents: "auto" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
