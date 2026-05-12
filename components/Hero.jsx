import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowDown, Code2, Brain, Zap, Sparkles, Cpu, Rocket } from 'lucide-react';

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

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-20">
      {/* Enhanced animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900"
      />
      
      {/* Animated mesh gradient effect */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 25%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 50%, transparent 50%, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
            linear-gradient(-45deg, transparent 25%, rgba(147, 51, 234, 0.1) 25%, rgba(147, 51, 234, 0.1) 50%, transparent 50%, transparent 75%, rgba(147, 51, 234, 0.1) 75%)
          `,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Animated floating gradient orbs - Enhanced */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{ y: [-50, 50, -50], x: [0, 50, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        animate={{ y: [50, -50, 50], x: [0, -50, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ y: [0, 80, 0], x: [0, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Animated grid lines for tech aesthetic */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-10"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge */}
        <motion.div variants={item} className="flex justify-center">
          <motion.div
            className="relative px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/40 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all"
            whileHover={{ scale: 1.05, borderColor: "rgb(147, 51, 234)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-xl"
              >
                ⚡
              </motion.div>
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold text-sm tracking-wide">
                AI Executive & Technical Leader
              </span>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-xl"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Title */}
        <motion.div variants={titleVariants} className="space-y-3">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-none tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            Mohammad Javad Ahmadi
          </motion.h1>
          
          {/* Accent line */}
          <motion.div
            className="h-1.5 w-24 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div variants={item} className="space-y-4 pt-2">
          <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto">
            <motion.span 
              className="font-bold bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent inline-block px-2"
              whileHover={{ scale: 1.05 }}
            >
              CTO at MediversAI
            </motion.span> 
            <span className="text-slate-400 mx-3 inline-block">×</span>
            <motion.span 
              className="font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent inline-block px-2"
              whileHover={{ scale: 1.05 }}
            >
              Head of ARAS AI Lab
            </motion.span>
          </p>
          <motion.p 
            className="text-base md:text-lg text-blue-50/80 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Dual-role executive bridging cutting-edge AI research with commercial impact. 8+ years architecting scalable, production-grade solutions in MedTech and FinTech.
          </motion.p>
        </motion.div>

        {/* Enhanced Key Highlights Cards with Visible Icons */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-5 py-12">
          {[
            { icon: Brain, label: "Multi-Modal GenAI", desc: "LLMs, VLMs, RAG Architectures", color: "from-blue-500 to-cyan-500" },
            { icon: Cpu, label: "Full-Stack Engineering", desc: "SaaS, Microservices, Cloud", color: "from-purple-500 to-pink-500" },
            { icon: Rocket, label: "Leadership Expertise", desc: "60+ mentored, strategic vision", color: "from-orange-500 to-red-500" }
          ].map((featureItem, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              whileHover={{ y: -14 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.12, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-7 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-pink-400/0 opacity-0 group-hover:opacity-100"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10 space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${featureItem.color} flex items-center justify-center mx-auto shadow-lg`}
                  >
                    <featureItem.icon className="w-7 h-7 text-white drop-shadow-lg" />
                  </motion.div>
                  <p className="font-bold text-white text-base leading-tight">{featureItem.label}</p>
                  <p className="text-sm text-blue-100/80 leading-snug">{featureItem.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Enhanced */}
        <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 pt-6">
          <motion.a
            href="#about"
            className="relative px-9 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl overflow-hidden group border border-blue-400/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative flex items-center justify-center gap-2">
              Explore My Work
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown size={18} />
              </motion.span>
            </span>
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/file/d/12mfH_QxeocmGwL8oAGfFRh2LZSZSlrwE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-9 py-4 border-2 border-blue-300 text-blue-100 rounded-xl font-bold hover:bg-blue-500/20 transition-all backdrop-blur-sm bg-white/5 group"
            whileHover={{ scale: 1.05, borderColor: "rgb(168, 85, 247)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">📄 Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links - Enhanced */}
        <motion.div variants={item} className="flex justify-center gap-5 pt-8">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/mjahmadi", label: "LinkedIn", color: "from-blue-500 to-blue-600" },
            { icon: Github, href: "https://github.com/MJAHMADEE", label: "GitHub", color: "from-slate-400 to-slate-600" },
            { icon: Mail, href: "mailto:mjahmadee@gmail.com", label: "Email", color: "from-red-400 to-pink-600" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-gradient-to-br ${social.color} text-white shadow-xl hover:shadow-2xl transition-all relative group overflow-hidden border border-white/30`}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              title={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + idx * 0.12, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
              <motion.span className="relative">
                <social.icon size={24} />
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

