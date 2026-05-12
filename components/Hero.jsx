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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const floatingItemVariants = {
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const pulseRing = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity
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
      
      {/* Animated floating gradient orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ y: [0, -60, 0], x: [0, 40, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ y: [0, 60, 0], x: [0, -40, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 40, 0], x: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Title with typing effect */}
        <motion.div variants={titleVariants} className="space-y-4">
          <motion.div className="flex justify-center gap-2 mb-6">
            <motion.div
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text font-semibold text-sm border border-blue-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="inline-block mr-2">🚀</span> 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI & Robotics Engineer
              </span>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Mohammad Javad Ahmadi
          </motion.h1>
        </motion.div>

        {/* Subtitle with role highlight */}
        <motion.div variants={item} className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
            <motion.span 
              className="font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              CTO at MediversAI
            </motion.span> 
            <span className="text-gray-400 mx-2">•</span>
            <motion.span 
              className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Head of ARAS AI Lab
            </motion.span>
          </p>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Dual-role executive bridging advanced AI research with commercial impact. 8+ years architecting scalable solutions in MedTech and FinTech with expertise in surgical video analysis, computer vision, and autonomous agentic systems.
          </motion.p>
        </motion.div>

        {/* Key highlights with enhanced cards */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-4 py-8">
          {[
            { icon: Brain, label: "GenAI & LLMs", desc: "Multi-modal architectures" },
            { icon: Code2, label: "Full-Stack", desc: "SaaS & Cloud systems" },
            { icon: Zap, label: "Leadership", desc: "60+ mentees, product strategy" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative p-6 rounded-xl bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/90 transition-all overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
            >
              {/* Background gradient effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ rotate: 45 }}
              />
              
              <div className="relative z-10">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                  <item.icon className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-auto mb-3" />
                </motion.div>
                <p className="font-bold text-gray-900 text-lg">{item.label}</p>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with enhanced effects */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-6">
          <motion.a
            href="#about"
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
            <span className="relative flex items-center gap-2">
              Explore My Work
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown size={18} />
              </motion.span>
            </span>
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/file/d/12mfH_QxeocmGwL8oAGfFRh2LZSZSlrwE/view?usp=sharing"
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all backdrop-blur-sm bg-white/30"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links with enhanced animations */}
        <motion.div variants={item} className="flex justify-center gap-6 pt-8">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/mjahmadi", label: "LinkedIn", color: "from-blue-500 to-blue-600" },
            { icon: Github, href: "https://github.com/MJAHMADEE", label: "GitHub", color: "from-gray-700 to-gray-900" },
            { icon: Mail, href: "mailto:mjahmadee@gmail.com", label: "Email", color: "from-red-500 to-pink-600" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              className={`p-4 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-xl transition-all relative group overflow-hidden`}
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              title={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + idx * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 0.6 }}
              />
              <motion.span className="relative">
                <social.icon size={24} />
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center"
            animate={{ borderColor: [`rgb(156, 163, 175)`, `rgb(59, 130, 246)`, `rgb(156, 163, 175)`] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-blue-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

