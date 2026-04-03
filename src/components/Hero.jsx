import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Hi, I'm Romain
      </motion.h1>

      <p>Computer Science Student | Developer</p>
    </section>
  );
}