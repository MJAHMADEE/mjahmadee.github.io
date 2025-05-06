import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact">
      <motion.h2 className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Get In Touch
      </motion.h2>
      <motion.div className="space-y-2 max-w-md"
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
        <div className="flex items-center space-x-2"><Mail /> <span>nima@example.com</span></div>
        <div className="flex items-center space-x-2"><Phone /> <span>+1 (555) 123-4567</span></div>
        <div className="flex items-center space-x-2"><MapPin /> <span>Tehran, Iran</span></div>
      </motion.div>
    </section>
}
