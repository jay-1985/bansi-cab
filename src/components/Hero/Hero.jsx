import React, { useEffect } from "react";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet";
import Form from "../Form/Form";
import mainVdo from "../../assets/index-video.mp4";
import hero from "../../assets/hero.mp4";
import mini from "../../assets/mini.mp4";
import car from "../../assets/car.png";
import { Car, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dzire from "../../assets/dzire.png";
import ertiga from "../../assets/ertiga.png";
import etios from "../../assets/etios.png";
import kia_carnes from "../../assets/kia_carnes.png";
import innova from "../../assets/innova.png";
import crysta from "../../assets/crysta.png";

const Hero = ({ theme }) => {
  useEffect(() => {}, []);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      rating: "4.5",
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
      rating: "4.5",
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
      rating: "4.5",
    },
    {
      type: "MUV",
      models: "Innova",
      alt: "Innova taxi service in Jamnagar - Bansi Cab",
      rate: "₹16/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: innova,
      features: ["8-Seater", "Premium", "Long Distance"],
      rating: "4.5",
    },
    {
      type: "MUV",
      models: "Crysta",
      alt: "Crysta taxi service in Jamnagar - Bansi Cab",
      rate: "₹18/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: crysta,
      features: ["Luxury", "VIP", "Business Travel"],
      rating: "4.5",
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
      rating: "4.5",
    },
  ];

  const handleCardClick = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  const CarCard = ({ car, index }) => (
    <div className="group relative">
      {/* Main Card */}
      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-48 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-amber-500/10 flex items-center justify-center overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Car Image */}
          <div className="relative z-10 group-hover:scale-110 transition-transform duration-700">
            <img
              src={car.image}
              alt={car.alt}
              className={`max-h-32 max-w-full object-contain drop-shadow-2xl ${
                car.models === "Etios" || car.models === "Ertiga"
                  ? "scale-x-[-1]"
                  : ""
              }`}
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                {car.models}
              </h3>
              <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
                {car.type}
              </span>
            </div>

            {/* Rating and Features */}
            <div className="flex flex-wrap gap-1">
              {car.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-800/60 text-gray-300 px-2 py-1 rounded-md border border-gray-700/50"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  {car.rate}
                </span>
              </div>
              <div className="text-right"></div>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:via-yellow-400/5 group-hover:to-yellow-500/5 transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );

  const CustomNavButton = ({ direction, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${
        direction === "prev" ? "left-4" : "right-4"
      } top-1/2 -translate-y-1/2 z-10 
      bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-700 disabled:cursor-not-allowed
      w-12 h-12 rounded-full flex items-center justify-center
      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/25
      ${disabled ? "opacity-50" : "opacity-90 hover:opacity-100"}`}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-5 h-5 text-black" />
      ) : (
        <ChevronRight className="w-5 h-5 text-black" />
      )}
    </button>
  );

  const nextSlide = () => {
    const maxSlide = carData.length - slidesPerView;
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300 relative overflow-hidden">
      <Helmet>
        <title>Bansi Cab Service - Jamnagar</title>
        <meta
          name="description"
          content="Bansi Cabs offers reliable and affordable cab services based in Jamnagar, connecting you to major cities like Rajkot, Dwarka, Somnath, Junagadh, and Ahmedabad. Whether you need a one-way ride, round trip, or airport transfer, we ensure a comfortable journey with experienced drivers, clean vehicles, and on-time service. Book your Jamnagar taxi today and travel stress-free with Bansi Cabs - your trusted travel partner in Gujarat."
        />
        <meta
          name="keywords"
          content="Jamnagar cab service, taxi service in Jamnagar, Bansi Cabs Jamnagar, Jamnagar to Rajkot cab, Jamnagar to Dwarka taxi, Jamnagar to Somnath car rental, Jamnagar to Junagadh cab, Jamnagar to Ahmedabad taxi, affordable cab Jamnagar, Jamnagar intercity taxi, best taxi service Jamnagar, reliable cabs in Jamnagar, Jamnagar airport taxi, one-way cab from Jamnagar, Jamnagar to Dwarka car hire, book cab Jamnagar, Jamnagar sightseeing taxi, Jamnagar to Dwarka temple taxi, Jamnagar to Somnath temple cab, Gujarat temple tour from Jamnagar, Dwarka Darshan cab from Jamnagar, Jamnagar religious tour taxi, Jamnagar airport pickup drop, Jamnagar airport cab, Rajkot airport to Jamnagar taxi, Ahmedabad airport to Jamnagar cab, Jamnagar railway station taxi, affordable cab in Jamnagar, safe taxi Jamnagar, Jamnagar cab with professional driver, AC cabs Jamnagar, luxury taxi Jamnagar, on-time cab Jamnagar, 24/7 taxi booking Jamnagar."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="relative w-full overflow-hidden">
        <div className="block md:hidden">
          {/* Mobile view */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/fallback.jpg"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
          >
            <source src={mainVdo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hidden md:block h-[600px] relative">
          {/* Desktop view */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none max-h-none -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src={mainVdo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Subtle background patterns (existing) */}
      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-32 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content Section */}
      <section className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container min-h-[620px] flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 py-12 w-full max-w-7xl">
            {/* Car Image Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="order-1 sm:order-2 relative group max-w-full"
            >
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-md animate-bounce"></div>
              <div className="absolute -bottom-4 -right-12 w-12 h-12 bg-primary/15 rounded-full blur-md animate-bounce"></div>
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-primary/25 rounded-full blur-sm animate-bounce"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-transparent rounded-3xl p-6 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-700 max-w-full overflow-hidden">
                {/* Mobile View */}
                <div className="block md:hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={car}
                    className="w-full h-[250px] object-cover rounded-2xl"
                  >
                    <source src={mini} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={car}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  >
                    <source src={hero} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Premium Tag */}
                <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                  Cab Ready
                </div>

                {/* Rating Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm border border-yellow-400 text-yellow-400">
                  <span className="text-xs font-semibold">24/7</span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="order-2 sm:order-1 w-full max-w-xl px-8 py-6 sm:px-10 sm:py-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg flex flex-col justify-center items-center border border-gray-200 dark:border-gray-700 min-h-[400px]">
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 tracking-tight leading-tight drop-shadow-lg text-left w-full">
                Jahan Bhi Jana Hai,
                <br />
                Hum Saath Hai.
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-small tracking-wide text-left mb-6">
                We’ve got your back! Safe rides, like family, always making sure
                you and your loved ones are comfortable every time you travel
                with us.
              </p>
              <div
                id="contact-form"
                className="w-full sm:w-[90%] md:w-[95%] lg:w-full"
              >
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-yellow-500/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Choose Your Ride
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Premium vehicles for every journey. Safe, comfortable, and
              reliable transportation at your fingertips.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            {slidesPerView < carData.length && (
              <>
                <div className="absolute top-1/3 translate-y-1/2 w-full flex justify-between -mt-8 px-4 z-10">
                  <CustomNavButton
                    direction="prev"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                  />
                  <CustomNavButton
                    direction="next"
                    onClick={nextSlide}
                    disabled={currentSlide >= carData.length - slidesPerView}
                  />
                </div>
              </>
            )}

            {/* Cars Grid */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesPerView)
                  }%)`,
                }}
              >
                {carData.map((car, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                    onClick={handleCardClick}
                  >
                    <CarCard car={car} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            {slidesPerView < carData.length && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: carData.length - slidesPerView + 1 }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-yellow-400 w-8"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  )
                )}
              </div>
            )}
          </div>

          {/* Strip */}
          {/* Mobile Version */}
          <div className="sm:hidden w-[110%] -ml-5 bg-yellow-400 py-4 px-6 flex flex-row gap-10 items-center mt-6">
            <p className="text-black font-semibold text-center text-sm">
              Need a cab? We’re ready.
            </p>
            <button
              onClick={handleCardClick}
              className="bg-green-500 text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              Contact Us
            </button>
          </div>

          {/* Desktop Version */}
          <div className="hidden sm:flex w-[126%] -ml-[13%] bg-yellow-400 py-4 px-10 sm:px-24 items-center justify-center gap-10 mt-14">
            <p className="text-black font-bold text-xl sm:text-2xl text-center">
              Need a cab? We’re ready.
            </p>
            <button
              onClick={handleCardClick}
              className="bg-green-500 text-white font-bold px-6 py-2 rounded-full hover:bg-green-600 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
