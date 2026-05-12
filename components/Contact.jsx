import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Open to opportunities, collaborations, research partnerships, mentorship, and speaking engagements.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="mailto:mjahmadee@gmail.com"
              className="h-full p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center hover:translate-y-[-8px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm mb-3 break-all">mjahmadee@gmail.com</p>
              <span className="text-blue-600 text-sm font-semibold hover:underline">Send Email →</span>
            </motion.a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://linkedin.com/in/mjahmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center hover:translate-y-[-8px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-gray-600 text-sm mb-3">Professional Profile</p>
              <span className="text-blue-600 text-sm font-semibold hover:underline">View Profile →</span>
            </motion.a>
          </motion.div>

          {/* GitHub */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://github.com/MJAHMADEE"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center hover:translate-y-[-8px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Github className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">GitHub</h3>
              <p className="text-gray-600 text-sm mb-3">Code & Projects</p>
              <span className="text-blue-600 text-sm font-semibold hover:underline">View GitHub →</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Location & Availability */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Location */}
          <motion.div
            className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-1">Location</h4>
                <p className="text-blue-800">Tehran, Iran & International (Remote)</p>
                <p className="text-blue-700 text-sm mt-2">Open to opportunities worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  <ExternalLink className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-purple-900 mb-1">Availability</h4>
                <p className="text-purple-800">Open to</p>
                <ul className="text-purple-700 text-sm mt-2 space-y-1">
                  <li>🚀 Collaboration & Partnerships</li>
                  <li>📚 Mentorship & Teaching</li>
                  <li>🎤 Speaking Engagements</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Further information and proofs are available upon request.</span>
            </p>
            <motion.a
              href="mailto:mjahmadee@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            © 2025 Mohammad Javad Ahmadi. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://scholar.google.com/citations?user=wTnN9IEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Google Scholar
            </motion.a>
            <motion.a
              href="https://github.com/MJAHMADEE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mjahmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
