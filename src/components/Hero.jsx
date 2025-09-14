// src/components/Hero.jsx
import React from "react";
import HeroImg from "../Assets/Imgs/kid.png";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import StaggerContainer from "./animations/StaggerContainer";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Left side: Text + CTAs (Stagger Animation) */}
        <div className="w-full lg:w-1/2">
          <StaggerContainer>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-700 leading-tight">
              Learn the Quran with Tajweed & Understanding
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Personalized online Quran tutoring for kids and adults — guided by
              experienced teachers.
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="https://wa.me/923255155122?text=Assalam o Alikum!%0AI Want to Book a Free Trial"
                className="px-6 py-3 bg-green-600 text-white rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Book Free Trial
              </a>
              <a
                href="https://wa.me/923255155122?text=Assalam o Alikum!%0AI Want Some Information About Quran Says"
                className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-md text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </StaggerContainer>
        </div>

        {/* Right side: Illustration (Fade In) */}
        <div className="hidden lg:flex w-full lg:w-1/2 mb-10 lg:mb-0 justify-center mt-10 lg:mt-0">
          <FadeInWhenVisible>
            <img
              src={HeroImg}
              alt="Islamic themed illustration"
              className="w-full max-w-md"
            />
          </FadeInWhenVisible>
        </div>
      </div>

      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20 lg:h-32"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,224C672,245,768,235,864,202.7C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
