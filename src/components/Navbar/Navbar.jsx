import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link, useNavigate } from "react-router-dom";
import BansiLogo from "../../assets/bansi-cab-logo.png";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "ABOUT", link: "/about" },
  { id: 3, name: "SERVICE", link: "/services" },
  { id: 4, name: "TRAVEL", link: "/travel" },
  { id: 5, name: "CONTACT", link: "/contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isReload = navigationEntry?.type === "reload";
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (isMobile && isReload && !hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      if (window.location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasReloaded");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg dark:text-white duration-300 transition-all">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Logo Icon */}
              <img
                src={BansiLogo}
                alt="Bansi Cab Service Logo"
                className="relative"
              />
              {/* Pulse animation for logo */}
            </div>
          </div>

          {/* Desktop Navbar */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="relative group">
                  <Link
                    to={link}
                    className="relative px-4 py-6 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="relative z-10">{name}</span>

                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>

                    {/* Bottom border animation */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navbar */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative p-2.5 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 group"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                {showMenu ? (
                  <HiMenuAlt1 className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200" />
                ) : (
                  <HiMenuAlt3 className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200" />
                )}
              </div>

              {/* Notification dot */}
              {showMenu && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} closeMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
