import { motion } from "framer-motion";
import Tajweed from "../Assets/Imgs/Tajweed.png";
import Tafseer from "../Assets/Imgs/Tafseer.png";
import Kid_Quran from "../Assets/Imgs/Kid Quran.png";

const courses = [
  {
    title: "Tajweed ul Quran",
    desc: "Master the Art of Quranic Pronunciation with step-by-step guidance.",
    img: Tajweed,
    rating: 4.9,
    reviews: 32,
  },
  {
    title: "Quran with Tafseer",
    desc: "Understand the deeper meanings and wisdom of the Quran.",
    img: Tafseer,
    rating: 4.8,
    reviews: 27,
  },
  {
    title: "Quran Memorization (Hifz)",
    desc: "Understand the deeper meanings and wisdom of the Quran.",
    img: Tafseer,
    rating: 4.8,
    reviews: 27,
  },
  {
    title: "Kids Learning",
    desc: "Learn techniques and guidance to memorize the Quran effectively.",
    img: Kid_Quran,
    rating: 5,
    reviews: 41,
  },
];

export default function Courses() {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What We <span className="text-green-600">Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-full w-full object-cover hover:scale-110 transform transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.desc}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-lg mr-1">⭐</span>
                  <span className="font-medium text-gray-700">
                    {course.rating}
                  </span>
                  <span className="text-gray-500 ml-2 text-sm">
                    ({course.reviews} reviews)
                  </span>
                </div>

                <a
                  href={`https://wa.me/923255155122?text=Assalam o Alikum!%0AI want to enroll in ${encodeURIComponent(
                    course.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition-colors duration-300 inline-block text-center"
                >
                  Enroll Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
