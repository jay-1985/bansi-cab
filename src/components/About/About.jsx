import React from "react";
import { Shield, Clock, Users, Award } from "lucide-react";
import about1 from "../../assets/about1.mp4";
import about2 from "../../assets/about2.mp4";
import { useNavigate } from "react-router-dom";

const About = () => {
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
    <div className="dark:bg-gray-900 bg-yellow-50 duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* ABOUT US Heading */}
        <h1
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-12"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
            About Us
          </span>
        </h1>

        {/* Mobile Layout: Stack everything vertically */}
        <div className="lg:hidden space-y-8">
          {/* First Image */}
          <div className="w-full h-64 flex items-center justify-center group relative overflow-hidden">
            {/* Video */}
            <div className="w-full h-64 flex items-center justify-center group relative overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover rounded-2xl"
              >
                <source src={about1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
            <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
            <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
          </div>

          {/* First set of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Shield className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                Jab chahiye, tab ready
              </h3>
              <p
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                Urgent travel ke time pe cab nahi milti? Humari cabs hamesha
                time pe aur ready milengi – no wait, no stress.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Clock className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                Family ya solo, sab special
              </h3>
              <p
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                Solo travel ho ya family ke saath, humare liye har ride special
                hai. Best service dena humara promise hai, har baar.
              </p>
            </div>
          </div>

          {/* Second Image */}
          <div className="w-full h-64 flex items-center justify-center group relative overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover rounded-2xl"
              >
                <source src={about2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
            <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
            <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
          </div>

          {/* Second set of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 3 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Users className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                Safe aur reliable rides
              </h3>
              <p
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                Cabs mein travel karte waqt safety ki tension hoti hai? Humare
                drivers trustworthy, helpful aur friendly hain – jaise apne hi
                family ke saath travel kar rahe ho.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Award className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                City tour or shopping
              </h3>
              <p
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                Naye sheher mein travel karte waqt prices ko lekar tension hoti
                hai? Hum aapko bilkul fair aur reasonable rates pe service
                denge, jo aapke budget mein fit ho. Koi hidden charges nahi.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Two-column layout */}
        <div className="hidden lg:block space-y-16">
          {/* First Section: Image on left, Cards on right */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-5 h-96 flex items-center justify-center group relative overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-[400px] object-cover rounded-2xl"
              >
                <source src={about1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
              <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
              <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
              <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
            </div>

            <div className="col-span-7 grid grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Shield className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Jab chahiye, tab ready
                </h3>
                <p
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Urgent travel ke time pe cab nahi milti? Humari cabs hamesha
                  time pe aur ready milengi – no wait, no stress.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Clock className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Family ya solo, sab special
                </h3>
                <p
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
                >
                  Solo travel ho ya family ke saath, humare liye har ride
                  special hai. Best service dena humara promise hai, har baar.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section: Cards on left, Image on right */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7 grid grid-cols-2 gap-8">
              {/* Card 3 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Users className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Safe aur reliable rides
                </h3>
                <p
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Cabs mein travel karte waqt safety ki tension hoti hai? Humare
                  drivers trustworthy, helpful aur friendly hain – jaise apne hi
                  family ke saath travel kar rahe ho.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Award className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  City tour or shopping
                </h3>
                <p
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Naye sheher mein travel karte waqt prices ko lekar tension
                  hoti hai? Hum aapko bilkul fair aur reasonable rates pe
                  service denge, jo aapke budget mein fit ho. Koi hidden charges
                  nahi.
                </p>
              </div>
            </div>

            <div className="col-span-5 h-96 flex items-center justify-center group relative overflow-hidden ml-5">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover rounded-2xl"
              >
                <source src={about2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
              <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
              <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
              <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
            </div>
          </div>
        </div>

        {/* Mobile Version (visible on screens <640px) */}
        <div className="sm:hidden w-[80%] mx-auto bg-yellow-400 py-4 px-8 shadow-lg flex flex-col gap-4 items-center mt-6 relative z-10">
          <p className="text-black font-bold text-xl text-center">
            Baat sirf ride ki nahi, bharose ki bhi hai.
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
        <div className="hidden sm:flex w-[80%] mx-auto bg-yellow-400 py-4 px-8 shadow-lg items-center justify-between gap-10 mt-14 relative z-10">
          <p className="text-black font-bold text-2xl text-center">
            Baat sirf ride ki nahi, bharose ki bhi hai.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-green-700 transition-all duration-300 cursor-pointer relative z-20 select-none whitespace-nowrap"
            style={{ pointerEvents: 'auto' }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;