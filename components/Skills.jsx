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
              className="group"
            >
              <div className={`h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <category.icon className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-white p-6">
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
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color.replace('500', '100').replace('600', '200')} text-gray-800 font-medium text-sm hover:shadow-md transition-all lowercase`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Proficiency Levels</h3>
          <div className="space-y-4">
            {[
              { label: "Expert", tools: "Python, PyTorch, Deep Learning, Surgical Video Analysis, Medical Imaging" },
              { label: "Advanced", tools: "TensorFlow, Computer Vision, Cloud Infrastructure, SaaS Architecture, Team Leadership" },
              { label: "Proficient", tools: "C/C++, MATLAB, SQL, Django, DevOps, Robotics, Fintech" }
            ].map((level, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="min-w-fit">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">{level.label}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{level.tools}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
