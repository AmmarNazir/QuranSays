// src/components/animations/FadeInWhenVisible.jsx
import { motion } from "framer-motion";

export default function FadeInWhenVisible({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // amount=0.2 means triggers when 20% visible
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
