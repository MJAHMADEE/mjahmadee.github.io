import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Chief Technology Officer (CTO)",
    company: "MediversAI Inc. (HealthTech SaaS Startup)",
    period: "Present",
    description: "Leading the technological vision and commercialization of AI-driven surgical assessment tools. Translated academic research into a scalable SaaS product.",
    highlights: [
      "Engineered Surgicise - AI-Powered Surgical Skill Assessment SaaS platform",
      "Architected full-stack cloud infrastructure for secure deployment",
      "Secured pilot programs with University of Toronto, University of Alberta, ARBOR, and EVO",
      "Ranked Top 15 at Startup TNT Summit X and Top 8 at BioAlberta's Life Sciences Week"
    ],
    color: "from-blue-500 to-blue-600",
    link: "https://www.mediversai.com"
  },
  {
    title: "Head of ARAS AI, VR & Software Group",
    company: "ARAS Lab & Farabi Eye Hospital",
    period: "2020 - Present",
    description: "Directing cross-functional teams (AI, Data, Software) through full product lifecycle. Providing mentorship and strategic direction in developing cutting-edge CV and NLP solutions.",
    highlights: [
      "Led development of Surgical Video Understanding ecosystem with 3,000+ video dataset",
      "Architected dual-stream deep learning models for medical imaging (Keratoconus, ROP)",
      "Engineered multi-modal GenAI modules for automated adverse event detection",
      "Mentored 67+ researchers (10 M.Sc. + 16 current, 19 B.Sc. + 22 current)"
    ],
    color: "from-purple-500 to-purple-600",
    link: "https://aras.kntu.ac.ir/ai"
  },
  {
    title: "Technical Lead - AI & Computer Vision",
    company: "SmarTeeth & Smartory (MedTech Startup)",
    period: "2021 - 2023",
    description: "Led technical roadmap and engineering of AI-powered dental diagnostic ecosystem. Orchestrated transition from MVP to scalable product.",
    highlights: [
      "Engineered robust deep learning for multi-modal dental imaging analysis",
      "Created specialized dataset of 2,000+ Bitewing and X-ray images",
      "Integrated LLMs for automated clinical reporting and treatment planning",
      "Developed pathology detection for oral lesions, cavities, and structural abnormalities"
    ],
    color: "from-pink-500 to-pink-600",
    link: "https://smarteeth.ai"
  },
  {
    title: "AI Lead - Financial Forecasting & Agentic Systems",
    company: "NexolAI (FinTech Startup)",
    period: "2022 - Present",
    description: "Leading R&D of next-generation quantitative trading tools leveraging Transformer-based architectures and Autonomous Agentic workflows.",
    highlights: [
      "Architected Temporal Fusion Transformer (TFT) for multi-horizon crypto price forecasting",
      "Implemented attention-based feature selection from 100+ technical indicators",
      "Pioneered Multi-Agent system for holistic market analysis",
      "Orchestrated specialized agents for sentiment, technical, order book, and on-chain analysis"
    ],
    color: "from-green-500 to-green-600",
    link: "https://nexolai.ai"
  },
  {
    title: "Level Up: CTO Coaching Program Member",
    company: "Alberta Machine Intelligence Institute (Amii)",
    period: "Jan 2025 - Present",
    description: "Selected for Amii's exclusive executive coaching program for technical leaders of high-potential AI startups.",
    highlights: [
      "Intensive mentorship on transitioning from technical engineering to executive leadership",
      "Refining roadmaps for scaling AI infrastructure and teams",
      "Participating in exclusive roundtables with world-class AI researchers",
      "Discussing cutting-edge GenAI developments and commercial deployment challenges"
    ],
    color: "from-amber-500 to-amber-600",
    link: "https://www.amii.ca"
  }
];

export default function Experience() {
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
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20">
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
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            8+ years bridging advanced AI research with commercial product delivery across MedTech, FinTech, and academic innovation.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-32 bg-gradient-to-b from-blue-300 to-transparent hidden lg:block" />
              )}

              <div className="flex gap-4 lg:gap-6">
                {/* Timeline dot */}
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-grow"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 mt-1">{exp.company}</p>
                      </div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors text-sm font-semibold whitespace-nowrap"
                      >
                        <ExternalLink size={16} />
                        Visit
                      </a>
                    </div>

                    {/* Period Badge */}
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                      <p className="font-semibold text-gray-900 mb-3">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            className="flex gap-3 text-gray-700 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Roles */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              <span>🏛️</span> Teaching & Mentorship
            </h4>
            <ul className="space-y-2 text-orange-900 text-sm">
              <li>Instructor: Robotics & Machine Vision (2026)</li>
              <li>Head Teaching Assistant: ML, Deep Learning, AI, Control Systems</li>
              <li>Direct Mentor: 67+ researchers across M.Sc. and B.Sc. levels</li>
              <li>Author: Fundamentals of Robotics, Introduction to Robotics books</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span>📊</span> Academic Service
            </h4>
            <ul className="space-y-2 text-teal-900 text-sm">
              <li>Reviewer: JAMA, IEEE Transactions (Medical Robotics & Control)</li>
              <li>Distinguished Reviewer: JAMA Network Open (Sep 2025)</li>
              <li>Top 5% Peer Reviewer: JAMA Network Open (2024)</li>
              <li>IT Chair: Robotics Society of Iran & ICRoM Conferences (2022-Present)</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
