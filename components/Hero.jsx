import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowDown, Code2, Brain, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden pt-24 pb-32">
      {/* Enhanced gradient background with noise effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50"
        variants={backgroundVariants}
        animate="animate"
        style={{ backgroundSize: "200% 200%" }}
      />
      
      {/* Animated floating gradient orbs - Enhanced */}
      <motion.div
        className="absolute top-32 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -80, 0], x: [0, 60, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ y: [0, 80, 0], x: [0, -60, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 60, 0], x: [0, 80, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-6 px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge */}
        <motion.div variants={item} className="flex justify-center">
          <motion.div
            className="relative px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-lg"
              >
                ✨
              </motion.div>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-sm tracking-wide">
                AI Executive & Technical Leader
              </span>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-lg"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Title */}
        <motion.div variants={titleVariants} className="space-y-2">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 bg-clip-text text-transparent leading-none tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            Mohammad Javad Ahmadi
          </motion.h1>
          
          {/* Accent line */}
          <motion.div
            className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div variants={item} className="space-y-3 pt-2">
          <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            <motion.span 
              className="font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent inline-block px-1"
              whileHover={{ scale: 1.05 }}
            >
              CTO at MediversAI
            </motion.span> 
            <span className="text-slate-400 mx-2 inline-block">×</span>
            <motion.span 
              className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block px-1"
              whileHover={{ scale: 1.05 }}
            >
              Head of ARAS AI Lab
            </motion.span>
          </p>
          <motion.p 
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Dual-role executive bridging cutting-edge AI research with commercial impact. 8+ years architecting scalable, production-grade solutions in MedTech and FinTech.
          </motion.p>
        </motion.div>

        {/* Enhanced Key Highlights Cards */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-4 py-10">
          {[
            { icon: Brain, label: "Multi-Modal GenAI", desc: "LLMs, VLMs, RAG Architectures" },
            { icon: Code2, label: "Full-Stack Engineering", desc: "SaaS, Microservices, Cloud" },
            { icon: Zap, label: "Leadership Expertise", desc: "60+ mentored, strategic vision" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              whileHover={{ y: -12 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 hover:bg-white/70 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10 space-y-3">
                  <motion.div 
                    whileHover={{ scale: 1.25, rotate: 10 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto"
                  >
                    <item.icon className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                  </motion.div>
                  <p className="font-bold text-slate-900 text-base leading-tight">{item.label}</p>
                  <p className="text-xs text-slate-600 leading-snug">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Enhanced */}
        <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4">
          <motion.a
            href="#about"
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl overflow-hidden group border border-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative flex items-center justify-center gap-2">
              Explore My Work
              <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown size={18} />
              </motion.span>
            </span>
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/file/d/12mfH_QxeocmGwL8oAGfFRh2LZSZSlrwE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all backdrop-blur-sm bg-white/40 group"
            whileHover={{ scale: 1.05, borderColor: "rgb(99, 102, 241)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">📄 Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links - Enhanced */}
        <motion.div variants={item} className="flex justify-center gap-4 pt-6">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/mjahmadi", label: "LinkedIn", color: "from-blue-500 to-blue-600", hoverColor: "hover:from-blue-600 hover:to-blue-700" },
            { icon: Github, href: "https://github.com/MJAHMADEE", label: "GitHub", color: "from-slate-700 to-slate-900", hoverColor: "hover:from-slate-800 hover:to-black" },
            { icon: Mail, href: "mailto:mjahmadee@gmail.com", label: "Email", color: "from-red-500 to-pink-600", hoverColor: "hover:from-red-600 hover:to-pink-700" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-2xl transition-all relative group overflow-hidden border border-white/30`}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              title={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + idx * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25"
                whileHover={{ scale: 1.2 }}
              />
              <motion.span className="relative">
                <social.icon size={22} />
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator - Positioned at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-600 font-semibold tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20"
            animate={{ borderColor: ["rgb(148, 163, 184)", "rgb(59, 130, 246)", "rgb(148, 163, 184)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-2.5 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

