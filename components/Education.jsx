import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education">
      <motion.h2 className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Education
      </motion.h2>
      <motion.ul className="space-y-4 max-w-3xl"
        initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
        {/* TODO: List degrees, institutions, years from your CV */}
      </motion.ul>
    </section>
  );
}
