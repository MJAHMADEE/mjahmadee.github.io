import { motion } from 'framer-motion';
import { Card, CardContent } from '@shadcn/ui/card';

const projects = [
  { title: 'Surgicise', desc: 'AI-driven surgical video analysis suite.', link: '#' },
  { title: 'PhacoTrainer', desc: 'Simulator for cataract surgery skill assessment.', link: '#' }
];

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2 className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Key Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
            <Card className="shadow-lg rounded-2xl p-4">
              <CardContent>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="mb-2">{p.desc}</p>
                <a href={p.link} className="text-blue-600 underline">Explore</a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
