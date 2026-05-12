import { motion } from 'framer-motion';
import { Brain, Code2, Cloud, Users, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    category: "AI & Computer Vision",
    color: "from-blue-500 to-blue-600",
    skills: [
      "PyTorch", "TensorFlow", "OpenCV", "CUDA",
      "LLMs & VLMs", "RAG", "Fine-tuning", "Transformers",
      "3D-CNNs", "Object Detection", "Segmentation", "Tracking",
      "Action Recognition", "Video Classification", "LangChain", "AutoGPT"
    ]
  },
  {
    icon: Code2,
    category: "Software Engineering",
    color: "from-purple-500 to-purple-600",
    skills: [
      "Python (Expert)", "C/C++", "MATLAB", "SQL",
      "Django", "RESTful APIs", "Microservices", "SaaS Architecture",
      "Qt", "Flutter", "Git/GitHub", "Linux"
    ]
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    color: "from-pink-500 to-pink-600",
    skills: [
      "Docker", "Kubernetes", "CI/CD Pipelines", "AWS", 
      "GCP", "Azure", "Linux", "IoT Integration",
      "System Design", "Microservices", "Database Design"
    ]
  },
  {
    icon: Users,
    category: "Leadership & Strategy",
    color: "from-green-500 to-green-600",
    skills: [
      "Agile/Scrum", "Team Leadership", "R&D Strategy",
      "Product Roadmap Planning", "Mentorship", "MVP to Product",
      "Stakeholder Management", "Technical Presentation",
      "Cross-Functional Teams", "Change Management"
    ]
  },
  {
    icon: TrendingUp,
    category: "Domain Expertise",
    color: "from-orange-500 to-orange-600",
    skills: [
      "Surgical Video Analysis", "Medical Imaging", "3D Imaging",
      "Keratoconus Detection", "Diabetic Retinopathy", "ROP Analysis",
      "Quantitative Trading", "Time-Series Forecasting", "Sentiment Analysis",
      "Dental AI", "Healthcare AI", "Robotics"
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive technical stack spanning AI/ML, software engineering, cloud infrastructure, and domain expertise in healthcare and fintech.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={categoryVariants}
              className="group relative"
            >
              <motion.div 
                className={`h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br ${category.color}`}
                whileHover={{ y: -8 }}
              >
                {/* Animated background */}
                <motion.div 
                  className="absolute inset-0 opacity-20"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Header */}
                <div className="relative z-10 bg-gradient-to-r from-black/30 to-black/10 p-6 text-white backdrop-blur-sm">
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </motion.div>
                </div>

                {/* Skills */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-6 min-h-[180px]">
                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        variants={skillVariants}
                        whileHover={{ scale: 1.15, y: -4 }}
                        className={`relative px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all overflow-hidden group/skill`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="relative">{skill}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels - Professional Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-3xl font-bold text-gray-900">Expertise Framework</h3>
            <p className="text-gray-600 text-lg">Organized by depth of experience and application scope</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: "Expert",
                description: "Deep mastery with 8+ years of production impact",
                tools: ["Python", "PyTorch", "Deep Learning", "Surgical Video Analysis", "Medical Imaging"],
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100/50",
                accentColor: "text-blue-600",
                borderColor: "border-blue-200"
              },
              {
                level: "Advanced",
                description: "Extensive experience with diverse real-world applications",
                tools: ["TensorFlow", "Computer Vision", "Cloud Infrastructure", "SaaS Architecture", "Team Leadership"],
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100/50",
                accentColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                level: "Proficient",
                description: "Solid foundation with active development and research",
                tools: ["C/C++", "MATLAB", "SQL", "Django", "DevOps", "Robotics"],
                color: "from-emerald-500 to-emerald-600",
                bgColor: "from-emerald-50 to-emerald-100/50",
                accentColor: "text-emerald-600",
                borderColor: "border-emerald-200"
              }
            ].map((proficiency, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`relative group p-6 rounded-2xl border-2 ${proficiency.borderColor} bg-gradient-to-br ${proficiency.bgColor} hover:shadow-xl transition-all overflow-hidden`}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${proficiency.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Level badge */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className={`text-2xl font-bold ${proficiency.accentColor} mb-1`}>{proficiency.level}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{proficiency.description}</p>
                    </div>
                    {/* Visual indicator */}
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${proficiency.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {idx === 0 ? "⓵" : idx === 1 ? "⓶" : "⓷"}
                    </motion.div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {proficiency.tools.map((tool, toolIdx) => (
                      <motion.span
                        key={toolIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + toolIdx * 0.05 }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/60 ${proficiency.accentColor} border border-white/40 backdrop-blur-sm`}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
