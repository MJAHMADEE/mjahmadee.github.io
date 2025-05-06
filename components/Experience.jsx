import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience">
      <motion.h2 className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Professional Experience
      </motion.h2>
      <motion.div className="space-y-6 max-w-3xl"
        initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
        {/* TODO: Add job titles, companies, dates, and bullet points */}
      </motion.div>
    </section>
  );
}
