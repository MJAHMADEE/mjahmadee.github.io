import { motion } from 'framer-motion';
import { Zap, Award, TrendingUp } from 'lucide-react';

const grants = [
  {
    title: "Design and Implementation of an Explainable AI (XAI) System for Cataract Surgery Video Analysis",
    funder: "The Vice-Presidency for Science, Technology and Knowledge Based Economy",
    year: 2025,
    amount: null,
    status: "Active",
    focus: "XAI in Surgical Video Analysis",
    icon: Zap
  },
  {
    title: "Smart Surgical Learning Management System (LMS) with AI-Driven Assessment",
    funder: "Tehran University of Medical Sciences",
    year: 2025,
    amount: null,
    status: "Active",
    focus: "Educational Technology",
    icon: Award
  },
  {
    title: "Design and Implementation of an AI-Powered System for Phase Recognition and Skill Assessment in Cataract Surgery Videos",
    funder: "Iran National Science Foundation (INSF)",
    year: 2025,
    amount: null,
    status: "Active",
    reference: "Grant #4041171",
    focus: "Surgical AI",
    icon: TrendingUp
  },
  {
    title: "Intelligent Ecosystems: Pentacam KC Analysis, Cataract Video Analysis, and Gamified Physical Cataract Simulator Kits",
    funder: "Farabi Eye Hospital Research Center",
    year: "2022 - 2025",
    amount: null,
    status: "Active",
    focus: "Healthcare AI - Multiple Projects",
    icon: Zap
  },
  {
    title: "Augmented Reality (AR) Surgical Capsulorhexis Simulator",
    funder: "National Center for Strategic Research in Medical Education",
    year: 2024,
    amount: null,
    status: "Active",
    reference: "Grant #4010324",
    focus: "VR/AR Training Technology",
    icon: Award
  },
  {
    title: "AI-based surgical skill assessment of capsulorhexis surgery via comprehensive video dataset development",
    funder: "Joint INSF & NIMAD National Grant",
    year: 2022,
    amount: null,
    status: "Completed",
    reference: "Grant #4002766 / #4001190",
    focus: "Surgical Video Analysis",
    icon: TrendingUp
  }
];

const researchAreas = [
  {
    title: "Surgical AI & Computer Vision",
    description: "Advanced deep learning for surgical video analysis, instrument tracking, skill assessment, and adverse event detection.",
    projects: ["Cataract Surgery Analysis", "Vitrectomy Assessment", "Surgical Simulator Integration"]
  },
  {
    title: "Medical Imaging & Diagnostics",
    description: "AI-driven diagnostic systems for ophthalmology, dental imaging, and general medical imaging.",
    projects: ["Keratoconus Detection", "ROP Analysis", "Dental AI", "Brain Lesion Detection"]
  },
  {
    title: "Robotics & Medical Robotics",
    description: "Robotic surgery platforms, haptic feedback systems, and robotic skill assessment.",
    projects: ["RCM-Based Surgery", "Haptic Training Systems", "Surgical Robotics Data Platforms"]
  },
  {
    title: "Training & Simulation Technology",
    description: "VR/MR surgical simulators, gamification, and objective skill assessment systems.",
    projects: ["Cataract Surgery Simulator", "Vitrectomy Simulator", "Gamified Physical Phantoms"]
  }
];

export default function ResearchGrants() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent">
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
            Research Grants & Funding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Secured prestigious research grants and funding from premier national and international institutions, totaling millions in research investment.
          </p>
        </motion.div>

        {/* Grants List */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {grants.map((grant, index) => {
            const GrantIcon = grant.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-400 shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px]">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <GrantIcon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      {/* Title and Status */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="font-bold text-gray-900 text-lg leading-snug">
                          {grant.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          grant.status === "Active" 
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {grant.status}
                        </span>
                      </div>

                      {/* Funder */}
                      <p className="text-purple-600 font-semibold text-sm mb-2">
                        {grant.funder}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          📅 <strong>{typeof grant.year === 'string' ? grant.year : grant.year}</strong>
                        </span>
                        <span className="flex items-center gap-1">
                          🎯 <strong>{grant.focus}</strong>
                        </span>
                        {grant.reference && (
                          <span className="flex items-center gap-1">
                            📌 <strong>{grant.reference}</strong>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Research Areas */}
        <motion.div
          className="space-y-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900">Research Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200 hover:border-purple-400 shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.projects.map((project, projIdx) => (
                    <motion.div
                      key={projIdx}
                      className="flex gap-2 text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: projIdx * 0.05 }}
                    >
                      <span className="text-purple-600 font-bold">→</span>
                      <span>{project}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Research Impact & Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📊", number: "6+", label: "Active Grants" },
              { icon: "💡", number: "8+", label: "Research Projects" },
              { icon: "🎯", number: "3", label: "Patent-Pending Innovations" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-3xl mb-2">{stat.icon}</p>
                <p className="text-2xl font-bold">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Interested in collaboration or research partnerships?</span>
          </p>
          <motion.a
            href="mailto:mjahmadee@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
