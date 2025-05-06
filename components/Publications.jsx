import { motion } from 'framer-motion';

export default function Publications() {
  return (
    <section id="publications">
      <motion.h2 className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Publications
      </motion.h2>
      <motion<ul className="list-disc pl-5 space-y-2 max-w-3xl"
        initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
        {/* TODO: List your papers with citations */}
      </motion.ul>
    </section>
}
