import { motion } from 'framer-motion';
import { Card, CardContent } from '@shadcn/ui/card';

const skills = [
  'Python', 'PyTorch', 'TensorFlow', 'OpenCV',
  'Next.js', 'React', 'TailwindCSS', 'Framer Motion'
];

export default function Skills() {
  return (
    <section id="skills">
      <motion.h2 className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Skills & Tech Stack
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div key={i}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}>
            <Card className="p-2 flex items-center justify-center">
              <CardContent>{skill}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
