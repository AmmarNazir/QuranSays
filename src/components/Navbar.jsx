import { useState } from "react";
import Logo from "../Assets/Logo/Quran_Says_Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Courses", "Testimonials"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* 🔼 increased height from h-16 → h-20 */}

            {/* Brand Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="Quran Says Logo"
                className="h-32 w-32 object-contain"
                // 🔼 logo size increased a bit
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 text-lg">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className={`transition-colors duration-300 ${
                    active === item
                      ? "font-bold text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none text-2xl"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                    active === item
                      ? "font-bold text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer div so content isn’t hidden behind navbar */}
      <div className="h-24"></div>
      {/* 🔼 added space below navbar */}
    </>
  );
}
