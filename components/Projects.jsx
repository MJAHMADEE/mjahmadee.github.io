import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Zap } from 'lucide-react';

const projects = [
  {
    title: "Surgicise",
    subtitle: "AI-Powered Surgical Skill Assessment SaaS",
    description: "Scalable cloud platform for analyzing surgical videos, extracting phase information, segmenting instruments/tissues, and providing AI-driven skill assessments.",
    achievements: [
      "Research spinoff from ARAS Lab",
      "Pilot programs with University of Toronto, University of Alberta, ARBOR, EVO",
      "Top 15 at Startup TNT Summit X",
      "Top 8 at BioAlberta Life Sciences Week"
    ],
    tech: ["PyTorch", "TensorFlow", "Django", "React", "Docker", "AWS"],
    link: "https://www.mediversai.com",
    category: "Healthcare AI",
    icon: Zap
  },
  {
    title: "Cataract Surgery AI Suite",
    subtitle: "Multi-Modal Surgical Video Analysis",
    description: "Advanced deep learning ecosystem for phase recognition, instrument tracking, skill assessment, and adverse event detection in cataract surgery videos.",
    achievements: [
      "3,000+ proprietary video dataset",
      "Dual-stream CNN architecture",
      "Multi-modal GenAI integration",
      "Real-time processing capabilities"
    ],
    tech: ["3D-CNN", "LLMs", "VLMs", "Computer Vision", "PyTorch", "CUDA"],
    link: "https://aras.kntu.ac.ir/ai",
    category: "Surgical AI",
    icon: Users
  },
  {
    title: "SmarTeeth",
    subtitle: "AI-Powered Dental Diagnostic Platform",
    description: "Multi-modal dental imaging analysis system with segmentation, classification, and automated clinical reporting using deep learning and LLMs.",
    achievements: [
      "2,000+ annotated dental images",
      "Robust pathology detection",
      "Automated treatment planning",
      "Multi-format imaging support"
    ],
    tech: ["YOLO", "Segmentation", "Computer Vision", "LLM", "React", "PostgreSQL"],
    link: "https://smarteeth.ai",
    category: "Medical Imaging",
    icon: Users
  },
  {
    title: "Keratoconus Diagnosis System",
    subtitle: "AI for Refractive Surgery Decision Support",
    description: "Dual-stream deep learning framework for precise Keratoconus classification using Pentacam imaging. Provides comprehensive characterization including stage, zone, and clinical recommendations.",
    achievements: [
      "7,000+ Pentacam images dataset",
      "6-class classification accuracy >95%",
      "Web and smartphone deployment",
      "Hospital pilot implementations"
    ],
    tech: ["CNNs", "Medical Imaging", "Computer Vision", "Web Services", "IoT"],
    link: "https://aras.kntu.ac.ir/ai",
    category: "Medical AI",
    icon: Zap
  },
  {
    title: "ROP (Retinopathy of Prematurity) AI",
    subtitle: "Automated Retinal Screening System",
    description: "Deep learning models for automated diagnosis of plus disease and early ROP stages using fundus imaging, enabling scalable screening in resource-limited settings.",
    achievements: [
      "3,000+ fundus images dataset",
      "Multi-stage ROP characterization",
      "Smartphone imaging integration",
      "Clinical validation in progress"
    ],
    tech: ["Deep Learning", "Medical Imaging", "Computer Vision", "IoT", "Mobile App"],
    link: "https://aras.kntu.ac.ir/ai",
    category: "Medical AI",
    icon: Users
  },
  {
    title: "NexolAI - Crypto Trading Intelligence",
    subtitle: "Autonomous Multi-Agent Market Analyst",
    description: "Temporal Fusion Transformer for crypto forecasting + Multi-agent system orchestrating sentiment, technical, order book, and on-chain analysis for trading signals.",
    achievements: [
      "TFT-based architecture for price forecasting",
      "Multi-agent LLM orchestration",
      "Attention-based feature selection",
      "Real-time market analysis"
    ],
    tech: ["Transformers", "LangChain", "LLMs", "PyTorch", "Time-Series", "FinTech"],
    link: "https://nexolai.ai",
    category: "FinTech AI",
    icon: Zap
  },
  {
    title: "VR/MR Surgical Simulators",
    subtitle: "High-Fidelity Training Ecosystems",
    description: "Mixed reality simulators for cataract and deep vitrectomy surgeries, integrated with gamified physical phantoms and AI video analysis for objective assessment.",
    achievements: [
      "Patent-pending physical training kit",
      "Gamification mechanics",
      "Closed-loop AI assessment",
      "Benchmarked against market leaders"
    ],
    tech: ["VR/MR", "Unity/Unreal", "AI", "Robotics", "Haptics", "Gamification"],
    link: "https://aras.kntu.ac.ir/ai",
    category: "Training Technology",
    icon: Users
  },
  {
    title: "Surgical Robotics Data Platform",
    subtitle: "RCM-Based Real-Time Data Logging",
    description: "Integrated GUI and real-time data acquisition system for robotic surgery, capturing force/motion dynamics and enabling comprehensive robotic surgery analysis.",
    achievements: [
      "Real-time telemetry capture",
      "GUI integration with surgical robots",
      "Force and motion analysis",
      "Research-grade data logging"
    ],
    tech: ["C++", "ROS", "Real-time Systems", "Qt", "Data Analytics", "Medical Robotics"],
    link: "https://aras.kntu.ac.ir/ai",
    category: "Medical Robotics",
    icon: Zap
  }
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20">
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
            Key Projects & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Breakthrough AI solutions spanning surgical video analysis, medical imaging, fintech, robotics, and innovative training technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8 }}
              >
                <div className="h-full bg-white rounded-xl border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all p-6 flex flex-col">
                  {/* Icon and Category */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ProjectIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-purple-600 font-semibold text-lg mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 mb-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-2">Highlights:</p>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((ach, idx) => (
                        <li key={idx} className="text-gray-700 text-xs flex gap-2">
                          <span className="text-blue-600">✓</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-700 font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-700 font-medium">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
