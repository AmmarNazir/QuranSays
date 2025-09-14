import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../Assets/Logo/Quran_Says_Logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={Logo} // replace with your logo path
              alt="Quran Says"
              className="h-24"
            />
            {/* <span className="text-lg font-bold text-white">QURAN SAYS</span> */}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bringing the light of Quran closer to hearts. Learn Tajweed,
            Tafseer, Hifz, and more with expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-green-500 transition">
                Courses
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-green-500 transition"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Islamabad, Pakistan</p>
          <p className="text-sm text-gray-400">Email: info@quransays.com</p>
          <p className="text-sm text-gray-400">Phone: +92 300 1234567</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://wa.me/923255155122?text=Assalam o Alikum!%0AI Want Some Information About Quran Says"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Quran Says. All rights reserved. <br />
        <span className="text-gray-400">
          Designed with purpose, built with sincerity.
        </span>
      </div>
    </footer>
  );
}
