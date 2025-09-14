import { motion } from "framer-motion";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Student",
    text: "Quran Says has completely changed the way I learn. The teachers are kind, and Tajweed is explained so clearly.",
    img: "https://ui-avatars.com/api/?name=Ayesha+Khan&background=0D8ABC&color=fff&rounded=true",
    rating: 5,
  },
  {
    name: "Ali Ahmed",
    role: "Parent",
    text: "I enrolled my kids and they absolutely love it. The platform is easy to use and teachers are very professional.",
    img: "https://ui-avatars.com/api/?name=Ali+Ahmed&background=16a34a&color=fff&rounded=true",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Learner",
    text: "Learning Quran with Tajweed has become easier and more engaging. Highly recommend to everyone.",
    img: "https://ui-avatars.com/api/?name=Fatima+Noor&background=16a34a&color=fff&rounded=true",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What <span className="text-green-600">They Say</span> About Us
        </h2>
        <FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-green-500 mb-4"
                />
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{t.role}</p>

                {/* Rating */}
                <div className="flex text-yellow-500 mb-3">
                  {"⭐".repeat(t.rating)}
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  “{t.text}”
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
