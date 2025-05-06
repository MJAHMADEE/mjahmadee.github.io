import { Card, CardContent } from '@shadcn/ui/card';
import { motion } from 'framer-motion';

const items = [
  'Lead developer of Surgicise, AI-powered surgical video analysis suite.',
  'Published in IEEE Transactions on Medical Imaging.',
  'Presented at Farabi Annual Ophthalmology Congress.',
  'Head of ARAS AI & Robotics Lab at KNTU.'
];

export default function Highlights() {
  return (
    <section id="highlights">
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Highlights
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((text, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="shadow-lg rounded-2xl p-4">
              <CardContent>{text}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
