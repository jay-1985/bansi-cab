import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Camera,
  Trees,
  Building,
  Heart,
  Star,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GujaratCabServices = () => {
  const gujaratPlaces = [
    {
      id: 1,
      name: "Junagadh",
      alt: "Etios taxi service from Jamnagar to Junagadh - Bansi Cab Service",
      subtitle: "City of Ancient Forts",
      image:
        "https://www.mysoultravels.com/wp-content/uploads/2020/05/junagardh-trip-9-1536x1515.jpg",
      distance: "145 km from Jamnagar",
      duration: "3-4 hours",
      highlights: [
        "Uparkot Fort with 2300 years of history",
        "Gir National Park - last refuge of Asiatic lions",
        "Jubilee Garden with beautiful landscapes",
      ],
    },
    {
      id: 2,
      name: "Rajkot",
      alt: "Etios taxi service from Jamnagar to Rajkot - Bansi Cab Service",
      subtitle: "Gandhi's Birthland",
      image:
        "https://www.traveldealsfinder.com/wp-content/uploads/Tower-of-Rajkot.jpg",
      distance: "90 km from Jamnagar",
      duration: "1.5-2 hours",
      highlights: [
        "Watson Museum with colonial artifacts",
        "Jubilee Garden with beautiful landscapes",
        "Jubilee Garden with beautiful landscapes",
      ],
    },
    {
      id: 3,
      name: "Jamnagar",
      alt: "Etios taxi service from Jamnagar to Jamnagar - Bansi Cab Service",
      subtitle: "",
      image:
        "https://www.trawell.in/admin/images/upload/133167934Jamnagar_Lakhota_Lake_and_Museum_Main.jpg",
      distance: "",
      duration: "",
      highlights: [],
    },
    {
      id: 4,
      name: "Kutch",
      alt: "Etios taxi service from Jamnagar to Kutch - Bansi Cab Service",
      subtitle: "White Desert Paradise",
      image:
        "https://thetravelshots.com/wp-content/uploads/2021/04/Rann-of-kutch.jpg",
      distance: "280 km from Jamnagar",
      duration: "6-7 hours",
      highlights: [
        "Great Rann of Kutch - world's largest salt desert",
        "Rann Utsav - India's biggest cultural festival",
        "Jubilee Garden with beautiful landscapes",
      ],
    },
    {
      id: 5,
      name: "Dwarka",
      alt: "Etios taxi service from Jamnagar to Dwarka - Bansi Cab Service",
      subtitle: "Krishna's Sacred City",
      image:
        "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1661694788.webp",
      distance: "130 km from Jamnagar",
      duration: "2.5-3 hours",
      highlights: [
        "Dwarkadhish Temple - one of Char Dham",
        "Rich mythology and spiritual significance",
        "Jubilee Garden with beautiful landscapes",
      ],
    },
    {
      id: 6,
      name: "Ahmedabad",
      alt: "Etios taxi service from Jamnagar to Ahmedabad - Bansi Cab Service",
      subtitle: "Heritage City of Gujarat",
      image:
        "https://sp.yimg.com/ib/th?id=OIP.CTVHGmCzXw-oXd6DRvvFoAHaE8&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      distance: "350 km from Jamnagar",
      duration: "6-7 hours",
      highlights: [
        "Sabarmati Ashram - legacy of Mahatma Gandhi",
        "Pols & heritage walk in the old city",
        "Adalaj Stepwell - stunning Indo-Islamic design",
      ],
    },
    {
      id: 7,
      name: "Vadodara",
      alt: "Etios taxi service from Jamnagar to Vadodara - Bansi Cab Service",
      subtitle: "City of Art & Royal Heritage",
      image:
        "https://up.yimg.com/ib/th?id=OIP.O6dt4SKv4iOURTeTvlCsLgHaEo&pid=Api&rs=1&c=1&qlt=95&w=164&h=102",
      distance: "410 km from Jamnagar",
      duration: "7-8 hours",
      highlights: [
        "Laxmi Vilas Palace - grand royal residence",
        "Champaner-Pavagadh - UNESCO heritage site",
        "Sayaji Garden - lush green family spot",
      ],
    },
    {
      id: 8,
      name: "Surat",
      alt: "Etios taxi service from Jamnagar to Surat - Bansi Cab Service",
      subtitle: "Diamond City of India",
      image:
        "https://up.yimg.com/ib/th?id=OIP.jh3V6VynqB-U_OQiDMho9QHaD9&pid=Api&rs=1&c=1&qlt=95&w=190&h=101",
      distance: "530 km from Jamnagar",
      duration: "9-10 hours",
      highlights: [
        "Dumas Beach - serene coastal escape",
        "Dutch Garden - glimpse of colonial history",
        "Street food at Gopi Talav - a foodie's delight",
      ],
    },
  ];

  const attractions = [
    {
      name: "Lakhota Palace",
      icon: Building,
      gradient: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
      description: "Historic Palace",
      duration: "2-3 hrs",
      rating: 4.3,
    },
    {
      name: "Khijadia Sanctuary",
      icon: Trees,
      gradient: "from-yellow-200 to-yellow-300",
      textColor: "text-yellow-900",
      borderColor: "border-yellow-400",
      description: "Bird Sanctuary",
      duration: "3-4 hrs",
      rating: 4.5,
    },
    {
      name: "Reliance Refinery",
      icon: Building,
      gradient: "from-yellow-300 to-yellow-400",
      textColor: "text-yellow-900",
      borderColor: "border-yellow-500",
      description: "Industrial Tour",
      duration: "1-2 hrs",
      rating: 4.0,
    },
    {
      name: "Bala Hanuman",
      icon: Heart,
      gradient: "from-yellow-400 to-yellow-500",
      textColor: "text-white",
      borderColor: "border-yellow-600",
      description: "Temple",
      duration: "1-2 hrs",
      rating: 4.7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPlace = gujaratPlaces[currentIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? gujaratPlaces.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === gujaratPlaces.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) handleNext();
    }, 40000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Get visible items for carousel display
  const getVisibleItems = () => {
    const items = [];
    const totalItems = gujaratPlaces.length;

    for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
      let index = i;
      if (index < 0) index = totalItems + index;
      if (index >= totalItems) index = index - totalItems;

      items.push({
        ...gujaratPlaces[index],
        originalIndex: index,
        position: i - currentIndex,
        isCenter: index === currentIndex,
      });
    }

    return items;
  };

  const visibleItems = getVisibleItems();

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
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Header Content */}
        <div className="text-center mb-12 z-9">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Explore Gujarat
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium cab services to Gujarat's most beautiful destinations.
            Comfortable, safe, and reliable.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-5xl mx-auto relative mt-24 mb-5">
          <div className="relative min-h-[700px] h-auto flex items-center justify-center">
            {visibleItems.map((item) => {
              const isCurrent = item.isCenter;
              const isLeft = item.position === -1;
              const isRight = item.position === 1;

              let transform = "translateX(0px) scale(1)";
              let opacity = 1;
              let zIndex = 9;

              if (isLeft) {
                transform = "translateX(-280px) scale(0.8)";
                opacity = 0.6;
                zIndex = 5;
              } else if (isRight) {
                transform = "translateX(280px) scale(0.8)";
                opacity = 0.6;
                zIndex = 5;
              } else if (isCurrent) {
                zIndex = 9;
              }

              return (
                <div
                  key={`${item.originalIndex}-${currentIndex}`}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => !isCurrent && goToSlide(item.originalIndex)}
                >
                  {/* Card */}
                  <div className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-400 dark:border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Badge and Fare */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-medium rounded-full">
                          Popular
                        </span>
                        <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                          {item.fare}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.subtitle}
                      </p>

                      {/* Distance & Duration */}
                      {item.name !== "Jamnagar" && (
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>{item.distance}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>⏱️</span>
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      )}

                      {/* Jamnagar Section */}
                      {item.name === "Jamnagar" && (
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                          {/* Header */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                Popular Attractions in Jamnagar
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Must-visit places during your trip
                              </p>
                            </div>
                          </div>

                          {/* Attractions Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {/* Lakhota Palace */}
                            <div
                              className={`group relative overflow-hidden bg-gradient-to-br ${attractions[0].gradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl border ${attractions[0].borderColor} dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                            >
                              <div className="p-4 h-20 flex flex-col justify-between">
                                <div>
                                  <h4
                                    className={`text-sm font-bold ${attractions[0].textColor} dark:text-white leading-tight`}
                                  >
                                    {attractions[0].name}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                      {attractions[0].duration}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Khijadia Sanctuary */}
                            <div
                              className={`group relative overflow-hidden bg-gradient-to-br ${attractions[1].gradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl border ${attractions[1].borderColor} dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                            >
                              <div className="p-4 h-24 flex flex-col justify-between">
                                <div>
                                  <h4
                                    className={`text-sm font-bold ${attractions[1].textColor} dark:text-white leading-tight`}
                                  >
                                    {attractions[1].name}
                                  </h4>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                    {attractions[1].description}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                      {attractions[1].duration}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Reliance Refinery - Full Width */}
                            <div
                              className={`group relative overflow-hidden bg-gradient-to-r ${attractions[2].gradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl border ${attractions[2].borderColor} dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer col-span-2`}
                            >
                              <div className="p-4 h-18 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white/20 dark:bg-black/20 rounded-xl"></div>
                                  <div>
                                    <h4
                                      className={`text-base font-bold ${attractions[2].textColor} dark:text-white`}
                                    >
                                      {attractions[2].name}
                                    </h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                      {attractions[2].description}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex flex-col items-end gap-1">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                      {attractions[2].duration}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Bala Hanuman */}
                            <div
                              className={`group relative overflow-hidden bg-gradient-to-br ${attractions[3].gradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl border ${attractions[3].borderColor} dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer col-span-2`}
                            >
                              <div className="p-4 h-16 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white/30 dark:bg-black/30 rounded-xl"></div>
                                  <div>
                                    <h4
                                      className={`text-base font-bold ${attractions[3].textColor} dark:text-white`}
                                    >
                                      {attractions[3].name}
                                    </h4>
                                    <div className="flex items-center gap-3 mt-1">
                                      <span className="text-sm text-white/90 dark:text-gray-300">
                                        {attractions[3].description}
                                      </span>
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-white/80 dark:text-gray-400" />
                                        <span className="text-xs text-white/80 dark:text-gray-400">
                                          {attractions[3].duration}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Decorative elements */}
                              <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white/20 rounded-full"></div>
                              <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/20 rounded-full"></div>

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Camera className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  Perfect for photography
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 🔥 Highlights Section - Styled like Features */}
                      {item.highlights && (
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {item.highlights.map((point, i) => (
                            <div
                              key={i}
                              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition duration-300"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 mb-2 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                  {i + 1}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="relative z-10 mt-40 flex items-center justify-center flex-wrap gap-4">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-yellow-200 dark:border-yellow-800/30 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {gujaratPlaces.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-500"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-yellow-200 dark:border-yellow-800/30 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Version (visible on screens <640px) */}
        <div className="sm:hidden w-[80%] mx-auto bg-yellow-400 py-4 px-8 shadow-lg flex flex-col gap-4 items-center mt-6">
          <p className="text-black font-bold text-xl text-center">
            Explored the places? Book your ride now.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="bg-green-500 text-white text-base font-bold px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-green-700 transition-all duration-300 cursor-pointer relative z-20 select-none"
            style={{ pointerEvents: 'auto' }}
          >
            Contact Us
          </button>
        </div>

        {/* Desktop Version (visible on screens ≥640px) */}
        <div className="hidden sm:flex w-[80%] mx-auto bg-yellow-400 py-4 px-8  shadow-lg items-center justify-between gap-10 mt-14">
          <p className="text-black font-bold text-2xl text-center">
            Explored the places? Book your ride now.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="bg-green-500 text-white text-base font-bold px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-green-700 transition-all duration-300 cursor-pointer relative z-20 select-none"
            style={{ pointerEvents: 'auto' }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GujaratCabServices;
