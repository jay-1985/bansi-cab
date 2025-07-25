import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Car,
  Shield,
  Star,
  Users,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 mt-14 rounded-t-3xl overflow-hidden transition-all duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-28 right-16 w-12 h-12 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-16 left-1/4 w-10 h-10 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-8 right-10 w-20 h-20 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="relative z-9">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6 w-full">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                    <Car className="w-5 h-5 text-black" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">
                    Bansi Cab Service
                  </span>
                </h1>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 w-full">
                {[
                  {
                    icon: Phone,
                    title: "+91 9227123990",
                  },
                  {
                    icon: Mail,
                    title: "bansicabservice@gmail.com",
                  },
                  {
                    icon: MapPin,
                    title: "Jamnagar, Gujarat",
                  },
                ].map(({ icon: Icon, title }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 min-w-[150px] text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-500/20 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-500" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium leading-none">{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="border-t border-gray-200 dark:border-gray-700 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Social Icons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <h4 className="text-gray-900 dark:text-white font-semibold text-sm">
                  Follow Us:
                </h4>
                <div className="flex items-center gap-3">
                  {[
                    {
                      icon: Facebook,
                      url: "https://bansicabservice.com/#/",
                      color: "hover:text-blue-500",
                      bg: "hover:bg-blue-100 dark:hover:bg-blue-500/20",
                    },
                    {
                      icon: Instagram,
                      url: "https://www.instagram.com/bansicabservice/",
                      color: "hover:text-pink-500",
                      bg: "hover:bg-pink-100 dark:hover:bg-pink-500/20",
                    },
                  ].map(({ icon: Icon, color, bg, url }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition ${color} ${bg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-500 dark:text-gray-400 text-xs">
                <a
                  href="https://www.instagram.com/thezedmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>&copy; Designed and Developed By ZED MEDIA</p>
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
