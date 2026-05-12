import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowDown, Code2, Brain, Zap } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingItemVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        variants={backgroundVariants}
        animate="animate"
        style={{ backgroundSize: "200% 200%" }}
      />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Title with typing effect */}
        <motion.div variants={item} className="space-y-2">
          <motion.div className="flex justify-center gap-2 mb-4">
            <motion.div
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block mr-2">🚀</span> AI & Robotics Engineer
            </motion.div>
          </motion.div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
            Mohammad Javad Ahmadi
          </h1>
        </motion.div>

        {/* Subtitle with role highlight */}
        <motion.div variants={item} className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-blue-600">CTO at MediversAI</span> | <span className="font-semibold text-purple-600">Head of ARAS AI Lab</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dual-role executive bridging advanced AI research with commercial impact. 8+ years architecting scalable solutions in MedTech and FinTech with expertise in surgical video analysis, computer vision, and autonomous agentic systems.
          </p>
        </motion.div>

        {/* Key highlights */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-4 py-8">
          {[
            { icon: Brain, label: "GenAI & LLMs", desc: "Multi-modal architectures" },
            { icon: Code2, label: "Full-Stack", desc: "SaaS & Cloud systems" },
            { icon: Zap, label: "Leadership", desc: "60+ mentees, product strategy" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-lg bg-white/50 backdrop-blur border border-white/20 hover:bg-white/80 transition-all"
              whileHover={{ y: -5 }}
            >
              <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-4">
          <motion.a
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/your-cv-id/view"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex justify-center gap-6 pt-8">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/mjahmadi", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/MJAHMADEE", label: "GitHub" },
            { icon: Mail, href: "mailto:mjahmadee@gmail.com", label: "Email" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
}
