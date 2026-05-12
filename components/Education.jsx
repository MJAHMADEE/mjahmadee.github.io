import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';

const educationData = [
  {
    degree: "Ph.D. Candidate",
    field: "Electrical and Control Engineering",
    institution: "K. N. Toosi University of Technology",
    years: "Sep 2022 - Present",
    gpa: "4.0/4.0",
    thesis: "Design and Implementation of an AI-Powered System for Phase Recognition and Skill Assessment in Cataract Surgery Videos",
    supervisors: "Prof. Hamid D. Taghirad & Prof. Mahdi Tavakoli",
    color: "from-blue-500 to-blue-600",
    icon: BookOpen
  },
  {
    degree: "Master's Degree",
    field: "Electrical and Control Engineering",
    institution: "K. N. Toosi University of Technology",
    years: "2019 - 2022",
    gpa: "4.0/4.0",
    thesis: "Development and implementation of eye surgery skill assessment techniques with emphasis on video data and feedback",
    supervisors: "Prof. Hamid D. Taghirad",
    color: "from-purple-500 to-purple-600",
    icon: Award
  },
  {
    degree: "Bachelor's Degree",
    field: "Electrical and Control Engineering",
    institution: "Amirkabir University of Technology",
    years: "2015 - 2019",
    gpa: "3.7/4.0",
    thesis: "Design and Implementation of an indoor positioning system for a four-wheeled robot",
    supervisors: "Dr. Mohammad A. Khosravi & Dr. Hajar Atrianfar",
    color: "from-pink-500 to-pink-600",
    icon: Users
  },
  {
    degree: "High School Diploma",
    field: "Mathematics and Physics",
    institution: "National Organization for Development of Exceptional Talents (Sampad)",
    years: "2011 - 2015",
    gpa: "4.0/4.0 (20/20)",
    thesis: null,
    supervisors: null,
    color: "from-green-500 to-green-600",
    icon: Award
  }
];

export default function Education() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-20">
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
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Exceptional academic background with advanced degrees in Electrical and Control Engineering from top-tier Iranian institutions.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-lg flex-col`}
                  whileHover={{ scale: 1.1 }}
                >
                  <edu.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-grow p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">
                        {edu.field}
                      </p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm whitespace-nowrap">
                      {edu.years}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-3">
                    <span className="font-semibold">{edu.institution}</span>
                  </p>

                  {/* GPA Badge */}
                  <div className="mb-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Thesis and Supervisors */}
                  {edu.thesis && (
                    <div className="space-y-2 pt-3 border-t border-gray-200">
                      <p className="text-gray-600">
                        <span className="font-semibold">Thesis:</span> <em>{edu.thesis}</em>
                      </p>
                      {edu.supervisors && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Supervisor(s):</span> {edu.supervisors}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-blue-900 mb-3">Academic Ranks</h4>
            <ul className="space-y-2 text-blue-900 text-sm">
              <li className="flex gap-2">
                <span>🏆</span>
                <span><strong>9th</strong> in National PhD Entrance Exam (Control Engineering) - 2022</span>
              </li>
              <li className="flex gap-2">
                <span>🏆</span>
                <span><strong>1st</strong> in Festival of Selected Seminars (Electrical/Computer Eng.) - 2021</span>
              </li>
              <li className="flex gap-2">
                <span>🏆</span>
                <span><strong>Top 0.1%</strong> in National University Entrance Exam (180,000+ participants) - 2015</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-purple-900 mb-3">Key Specializations</h4>
            <ul className="space-y-2 text-purple-900 text-sm">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Computer Vision & Deep Learning</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Surgical Video Analysis & AI</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Medical Imaging & Diagnostics</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Robotics & Control Systems</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
