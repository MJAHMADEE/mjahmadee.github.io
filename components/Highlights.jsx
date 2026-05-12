import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Award } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: "Technical Leadership & Strategy",
    description: "Dual-role executive (CTO at MediversAI & Head of ARAS AI Group) directing cross-functional teams (AI, Data, Software) to deliver scalable SaaS solutions in MedTech and FinTech."
  },
  {
    icon: Target,
    title: "End-to-End Product Delivery",
    description: "Specialist in bridging R&D and production; successfully translated academic research into commercial software (Surgicise, SmarTeeth) with pilot programs from major universities and hospitals."
  },
  {
    icon: TrendingUp,
    title: "Advanced AI Architecture",
    description: "8+ years architecting complex pipelines: Multi-Modal GenAI (LLMs/VLMs), Autonomous Agentic Systems, real-time Computer Vision (3D-CNN, Dual-Stream) for mission-critical healthcare applications."
  },
  {
    icon: Award,
    title: "Engineering Leadership",
    description: "Mentor and Head Teaching Assistant guiding 60+ developers and researchers, fostering technical excellence and innovation across multiple organizations and academic institutions."
  },
  {
    icon: Award,
    title: "Commercial & Academic Recognition",
    description: "Innovation leader with top-tier startup awards (Startup TNT, BioAlberta), prestigious research grants (INSF), and high-impact publications in IEEE & JAMA."
  },
  {
    icon: Zap,
    title: "Proven Track Record",
    description: "Demonstrated success in commercialization, securing pilot programs with University of Toronto, University of Alberta, and major eye care institutions."
  }
];

export default function Highlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="highlights" className="py-20">
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
            Key Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            My core strengths and accomplishments that define my professional journey.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="h-full p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all group">
                {/* Icon with gradient background */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Accent line */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats Section */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl border border-blue-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: "8+", label: "Years in AI", icon: "📚" },
              { number: "67+", label: "Direct Mentees", icon: "👥" },
              { number: "17+", label: "Publications", icon: "📖" },
              { number: "3+", label: "Tech Startups", icon: "🚀" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl mb-1">{stat.icon}</p>
                <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
