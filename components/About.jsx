import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Target } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: Briefcase,
      title: "Technical Leadership",
      description: "Dual-role CTO and Head of AI Lab directing cross-functional teams (AI, Data, Software) delivering scalable SaaS solutions in MedTech and FinTech.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Mentorship & Teaching",
      description: "Dedicated mentor guiding 67+ researchers with expertise in problem-solving, innovation, and technical excellence across 8+ years.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "End-to-End Delivery",
      description: "Specialist in translating academic research into production-ready products. Successfully launched Surgicise, SmarTeeth, and other award-winning solutions.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Top startup awards (Startup TNT, BioAlberta), prestigious research grants (INSF), and published research in IEEE & JAMA.",
      color: "from-green-500 to-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            I'm a senior AI engineer and technical leader bridging advanced scientific research with commercial impact.
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className="relative group bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
        >
          {/* Background gradient effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <div className="relative z-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              With 8+ years of experience, I combine the theoretical rigor of academia, the structural standards of industry, and the agility of high-growth startups. My expertise spans:
            </p>
            <ul className="space-y-4 text-gray-700">
              {[
                { icon: "🧠", title: "Advanced AI Architecture", desc: "Multi-Modal GenAI (LLMs/VLMs), Autonomous Agentic Systems, Real-time Computer Vision" },
                { icon: "⚙️", title: "Product Engineering", desc: "Architecting scalable SaaS infrastructure, cloud deployment, CI/CD pipelines" },
                { icon: "👥", title: "Team Leadership", desc: "Mentoring 60+ developers, cross-functional team management, R&D strategy" },
                { icon: "🔍", title: "Domain Expertise", desc: "Healthcare AI, Surgical Video Analysis, Medical Imaging, Quantitative Trading" }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  className="flex gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="flex-1">
                    <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Key Points Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className={`h-full p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl hover:shadow-2xl transition-all overflow-hidden`}
                whileHover={{ translateY: -8, scale: 1.02 }}
              >
                {/* Animated background overlay */}
                <motion.div 
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mb-3"
                  >
                    <item.icon className="w-12 h-12 text-white/90" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with counters */}
        <motion.div
          className="grid md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Years Experience", value: "8+", icon: "📅" },
            { label: "Researchers Mentored", value: "67+", icon: "👥" },
            { label: "Publications", value: "17+", icon: "📚" },
            { label: "Startups Led", value: "3+", icon: "🚀" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative group p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/40 hover:border-blue-300 hover:bg-white/80 transition-all overflow-hidden"
              whileHover={{ scale: 1.08, y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Gradient background animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
              />
              
              <div className="relative z-10 text-center">
                <motion.p 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-600 font-medium mb-2">{stat.label}</p>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
