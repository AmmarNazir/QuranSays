import Illustration from "../Assets/Imgs/quran.png";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Stats Flower */}
        <FadeInWhenVisible>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-600 rounded-tl-full rounded-tr-full rounded-bl-full p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105">
              <span className="text-3xl font-bold">5+</span>
              <p className="text-sm text-gray-100">Courses</p>
            </div>
            <div className="bg-green-600 rounded-tr-full rounded-tl-full rounded-br-full p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105">
              <span className="text-3xl font-bold">50+</span>
              <p className="text-sm text-gray-100">Students</p>
            </div>
            <div className="bg-green-600 rounded-bl-full rounded-br-full rounded-tl-full p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105">
              <span className="text-3xl font-bold">10+</span>
              <p className="text-sm text-gray-100">Countries</p>
            </div>
            <div className="bg-green-600 rounded-br-full rounded-bl-full rounded-tr-full p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105">
              <span className="text-3xl font-bold">100%</span>
              <p className="text-sm text-gray-100">Satisfaction</p>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Right Content */}
        <FadeInWhenVisible>
          <div className="space-y-6 text-center md:text-left max-w-3xl">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
              Our Mission
            </h2>

            {/* Statement */}
            <p className="text-gray-300 leading-relaxed text-lg">
              At{" "}
              <span className="text-green-500 font-semibold">Quran Says</span>,
              our mission is to make{" "}
              <span className="text-white font-semibold">
                Quran learning accessible and engaging
              </span>
              for every student. We are committed to nurturing a love for the
              Quran, guiding learners with{" "}
              <span className="text-green-400">
                Tajweed, Tafseer, and Islamic values
              </span>
              , and helping them apply its wisdom in their daily lives for a
              brighter future.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
