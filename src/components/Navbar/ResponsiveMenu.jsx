import {React, useEffect} from "react";
import { IoMdClose } from "react-icons/io";
import { Navlinks } from "./Navbar";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  useEffect(() => {
  if (showMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [showMenu]);
  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 bg-black/80 z-[9998] transition-all duration-300 md:hidden`}
        onClick={closeMenu}
      />

      {/* Menu Panel */}
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-[9999] flex h-screen w-[75%] max-w-sm flex-col bg-white dark:bg-gray-900 dark:text-white px-0 text-black transition-all duration-300 ease-out md:hidden shadow-2xl border-r border-yellow-300 dark:border-amber-600`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-yellow-300 dark:border-amber-600 bg-yellow-50 dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01M6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16M17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16M5 11L6.5 6.5H17.5L19 11H5Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 rounded-xl animate-ping opacity-20"></div>
            </div>
            <div>
              <span className="font-bold text-gray-800 dark:text-white">
                Bansi Cab Service
              </span>
              <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                Menu
              </div>
            </div>
          </div>
          <button
            onClick={closeMenu}
            className="p-2.5 rounded-full hover:bg-yellow-200 dark:hover:bg-gray-700 transition-all duration-200 group"
          >
            <IoMdClose className="text-2xl text-gray-600 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 group-hover:rotate-90 transition-all duration-200" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto bg-white dark:bg-gray-900">
          <ul className="space-y-2">
            {Navlinks.map((data, index) => (
              <li
                key={index}
                className="transform transition-all duration-300"
                style={{
                  transitionDelay: showMenu ? `${index * 50}ms` : "0ms",
                }}
              >
                <Link
                  to={data.link}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-800 hover:text-yellow-700 dark:hover:text-yellow-300 hover:shadow-md transition-all duration-200 relative overflow-hidden"
                  onClick={closeMenu}
                >
                  <span className="font-medium text-lg relative z-10">
                    {data.name}
                  </span>
                  <svg
                    className="w-5 h-5 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 text-yellow-600 dark:text-yellow-400"
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
                  <div className="absolute inset-0 bg-yellow-200/30 dark:bg-yellow-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveMenu;
