import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed max-w-3xl"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* TODO: Paste your LaTeX résumé content here as plain text. */}
      </motion.p>
    </section>
  );
}
