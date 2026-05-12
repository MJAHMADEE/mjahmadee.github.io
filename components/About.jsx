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
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With 8+ years of experience, I combine the theoretical rigor of academia, the structural standards of industry, and the agility of high-growth startups. My expertise spans:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span><strong>Advanced AI Architecture:</strong> Multi-Modal GenAI (LLMs/VLMs), Autonomous Agentic Systems, Real-time Computer Vision</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span><strong>Product Engineering:</strong> Architecting scalable SaaS infrastructure, cloud deployment, CI/CD pipelines</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span><strong>Team Leadership:</strong> Mentoring 60+ developers, cross-functional team management, R&D strategy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span><strong>Domain Expertise:</strong> Healthcare AI, Surgical Video Analysis, Medical Imaging, Quantitative Trading</span>
            </li>
          </ul>
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
              className="group"
            >
              <motion.div
                className={`h-full p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden`}
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Years Experience", value: "8+" },
            { label: "Researchers Mentored", value: "67+" },
            { label: "Publications", value: "17+" },
            { label: "Startups Led", value: "3+" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
