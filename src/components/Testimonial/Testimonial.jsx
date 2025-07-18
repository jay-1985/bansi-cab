import React, { useState, useEffect, useRef } from "react";
import { Car, MapPin, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Quote, Star } from "lucide-react";

const testimonialData = [
  {
    name: "Ravi Joshi",
    image: "",
    description:
      "Driver was polite and car was clean. Very smooth ride. Will book again from Bansi Cab Service.",
    aosDelay: "0",
  },
  {
    name: "Neha Patel",
    image: "",
    description:
      "Booked for airport drop. Time par aaye aur safe drive diya. Thank you Mashri bhai!",
    aosDelay: "150",
  },
  {
    name: "Suresh Bhai Vora",
    image: "",
    description:
      "Jamnagar thi Rajkot jawanu hatu, booking bau easy hati ane service pan saras mali.",
    aosDelay: "300",
  },
];

const routeData = [
  { from: "Jamnagar", to: "Ahmedabad", ertiga: 4000, swift: 3500 },
  { from: "Jamnagar", to: "Hirasar", ertiga: 2500, swift: 2000 },
  { from: "Jamnagar", to: "Dwarka", ertiga: 4000, swift: 3000 },
  { from: "Jamnagar", to: "Somnath", ertiga: 5000, swift: 4000 },
  { from: "Jamnagar", to: "Junagadh", ertiga: 3000, swift: 2500 },
  { from: "Jamnagar", to: "Porbandar", ertiga: 3000, swift: 2500 },
  { from: "Jamnagar", to: "Baroda", ertiga: 6000, swift: 5000 },
  { from: "Jamnagar", to: "Surat", ertiga: 7500, swift: 6500 },
  {
    from: "Reliance Township",
    to: "Rajkot Hirasar Airport",
    ertiga: 3000,
    swift: 2500,
  },
  { from: "Jamnagar", to: "Rajkot City", ertiga: 2000, swift: 1500 },
  { from: "Jamnagar", to: "Local Ride", ertiga: 3000, swift: 2500 },
];

const Testimonial = () => {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef(null);
  const visibleRoutes = showAll ? routeData : routeData.slice(0, 5);

  useEffect(() => {
    if (showAll && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll]);

  const handleCardClick = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white relative overflow-hidden">
        <div className="container">
          {/* Header Section */}
          <div className="space-y-6 pb-16 text-center">
            {/* Trust badge */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto"
            >
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">
                Customer Reviews
              </span>
            </div>

            <div className="space-y-4">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-center tracking-tight"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                What Our Clients Say About Us
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-xs sm:text-lg opacity-70 leading-relaxed font-medium max-w-4xl mx-auto text-center sm:px-44"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We pride ourselves on delivering exceptional service, and our
                customers agree! Here's what real users are saying about their
                experiences with our hassle-free car rental service.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-100 hover:scale-105 hover:border-primary/30 text-black dark:text-white h-full">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-primary fill-current"
                        />
                      ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <p
                        className="text-base leading-relaxed font-medium opacity-90"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        "{testimonial.description}"
                      </p>

                      {/* Name and title */}
                      <div className="space-y-1">
                        <p
                          className="font-bold text-lg"
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        >
                          {testimonial.name}
                        </p>
                        <p className="text-sm opacity-70 font-medium">
                          Actual Review
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
          {/* Data */}
          <div className="max-w-4xl mx-auto p-4 sm:p-6">
            {/* Header Section */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 mt-10">
                <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 tracking-tight leading-tight drop-shadow-lg text-center w-full">
                  Popular Routes
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Choose from our most traveled destinations
              </p>
            </div>

            {/* Routes Grid */}
            <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
              {visibleRoutes.map((route, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-50 via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-yellow-100 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600"
                >
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    {/* <div className="absolute top-4 right-4 w-16 h-16 border-2 border-yellow-400 rounded-full"></div> */}
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                  </div>

                  <div className="relative p-4 sm:p-6">
                    {/* Mobile Layout */}
                    <div className="block sm:hidden">
                      {/* Route Information - Mobile */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                          <span className="font-semibold text-gray-900 dark:text-white text-base">
                            {route.from}
                          </span>
                        </div>

                        <div className="flex justify-center mb-2">
                          <ArrowRight className="w-5 h-5 text-yellow-500 rotate-90 group-hover:translate-y-1 transition-transform duration-300" />
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-current" />
                          <span className="font-semibold text-gray-900 dark:text-white text-base">
                            {route.to}
                          </span>
                        </div>
                      </div>

                      {/* Pricing Section - Mobile */}
                      <div className="flex gap-2 justify-center">
                        <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm border border-gray-100 dark:border-gray-700 flex-1 text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                              Ertiga
                            </span>
                          </div>
                          <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                            ₹{route.ertiga}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm border border-gray-100 dark:border-gray-700 flex-1 text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                              Swift
                            </span>
                          </div>
                          <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                            ₹{route.swift}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex items-center justify-between">
                      {/* Route Information - Desktop */}
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                            <span className="font-semibold text-gray-900 dark:text-white text-lg">
                              {route.from}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <ArrowRight className="w-5 h-5 text-yellow-500 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-current" />
                            <span className="font-semibold text-gray-900 dark:text-white text-lg">
                              {route.to}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Section - Desktop */}
                      <div className="flex gap-3 items-center">
                        <div className="bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Ertiga
                            </span>
                          </div>
                          <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                            ₹{route.ertiga}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Swift
                            </span>
                          </div>
                          <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                            ₹{route.swift}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Enhanced Show More/Less Button */}
            <div ref={buttonRef} className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 text-sm sm:text-base w-full sm:w-auto"
              >
                <span className="relative z-10">
                  {showAll ? "Show Less Routes" : "Show More Routes"}
                </span>

                {showAll ? (
                  <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                )}

                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {!showAll && (
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {routeData.length - 4} more routes available
                </p>
              )}
            </div>
          </div>
            {/* Mobile Version */}
          <div className="sm:hidden w-[110%] -ml-5 bg-yellow-400 py-4 px-6 flex flex-row items-center mt-6">
            <p className="text-black font-semibold text-center text-sm">
              Planning a trip? Explore now, decide later.
            </p>
            <button
              onClick={handleCardClick}
              className="bg-green-500 text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              Contact
            </button>
          </div>
          {/* Desktop Version */}
          <div className="hidden sm:flex w-[126%] -ml-[13%] bg-yellow-400 py-4 px-10 sm:px-24 items-center justify-center gap-10 mt-14">
            <p className="text-black font-bold text-xl sm:text-2xl text-center">
              Planning a trip? Explore now, decide later.
            </p>
            <button
              onClick={handleCardClick}
              className="bg-green-500 text-white font-bold px-6 py-2 rounded-full hover:bg-green-600 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
