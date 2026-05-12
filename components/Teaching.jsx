import { motion } from 'framer-motion';
import { Users, BookOpen, GraduationCap, Code2 } from 'lucide-react';

const teachingData = {
  instructor: [
    {
      course: "Robotics & Machine Vision",
      institution: "K. N. Toosi University of Technology",
      year: "2026",
      description: "Co-taught with Prof. Hamid D. Taghirad"
    },
    {
      course: "Robotics & Machine Vision Laboratory",
      institution: "K. N. Toosi University of Technology",
      year: "2026",
      description: "Hands-on laboratory sessions"
    }
  ],
  headTA: [
    {
      category: "AI & Machine Learning",
      professor: "Dr. Mahdi Aliyari-Shoorehdeli",
      courses: [
        { name: "Fundamentals of Intelligent Systems", link: "https://github.com/MJAHMADEE/Fundamental-of-Intellogent-Systems-2025" },
        { name: "Machine Learning", link: "https://github.com/MJAHMADEE/MachineLearning2025s" },
        { name: "Deep Learning", link: "https://github.com/MJAHMADEE/DeepLearning2024F" },
        { name: "Artificial Intelligence", link: "https://github.com/MJAHMADEE/AI2025s" },
        { name: "Fault Detection", link: "https://github.com/MJAHMADEE/Machine-Learning-and-Fault-Detection" }
      ]
    },
    {
      category: "Control Systems & Robotics",
      professor: "Prof. Hamid D. Taghirad",
      courses: [
        { name: "Linear Control", link: "https://github.com/MJAHMADEE/LinearControl2025" },
        { name: "Industrial/Modern Control", link: "https://github.com/MJAHMADEE/Industrial_Control_Course" },
        { name: "Robotics", link: "https://github.com/aras-labs/Robotics" }
      ]
    },
    {
      category: "Other",
      professor: "Dr. Iman Sharifi",
      courses: [
        { name: "AI in Robotics", link: "https://github.com/MJAHMADEE/AIinRobotics2024W" }
      ]
    }
  ],
  mentorship: {
    years: "2020 - Present",
    totalMentees: 67,
    mscGraduates: 10,
    mscCurrent: 16,
    bscGraduates: 19,
    bscCurrent: 22
  },
  books: [
    {
      title: "Fundamentals of Robotics",
      year: "2024",
      authors: "Prof. Hamid D. Taghirad",
      link: "https://github.com/aras-labs/Fundamentals_of_Robotics/"
    },
    {
      title: "Introduction to Robotics",
      year: "2023",
      authors: "Prof. Hamid D. Taghirad & Dr. Mohammad Azam Khosravi",
      link: "https://aras.kntu.ac.ir/publications/books/robotics/"
    }
  ]
};

export default function Teaching() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="teaching" className="py-20">
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
            Teaching & Mentorship
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Dedicated educator and mentor with 6+ years of teaching experience and 67+ direct mentees across graduate and undergraduate levels.
          </p>
        </motion.div>

        {/* Mentorship Stats */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Direct Mentorship at ARAS Lab</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-3xl font-bold text-blue-600">{teachingData.mentorship.totalMentees}+</span>
                <div>
                  <p className="font-semibold text-blue-900">Total Researchers</p>
                  <p className="text-sm text-blue-700">Guided and mentored</p>
                </div>
              </div>
              <hr className="border-blue-200 my-4" />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{teachingData.mentorship.mscGraduates}</p>
                  <p className="text-blue-700">M.Sc. Graduates</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{teachingData.mentorship.mscCurrent}</p>
                  <p className="text-blue-700">M.Sc. Current</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{teachingData.mentorship.bscGraduates}</p>
                  <p className="text-blue-700">B.Sc. Graduates</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{teachingData.mentorship.bscCurrent}</p>
                  <p className="text-blue-700">B.Sc. Current</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Mentorship Focus</h3>
            <ul className="space-y-3 text-purple-900">
              <li className="flex gap-3">
                <span>🎯</span>
                <span><strong>Problem-Solving:</strong> Teaching systematic approach to research challenges</span>
              </li>
              <li className="flex gap-3">
                <span>💡</span>
                <span><strong>Innovation:</strong> Fostering creative thinking and novel applications</span>
              </li>
              <li className="flex gap-3">
                <span>📚</span>
                <span><strong>Technical Excellence:</strong> Mentoring in cutting-edge AI & robotics</span>
              </li>
              <li className="flex gap-3">
                <span>🚀</span>
                <span><strong>Career Development:</strong> Guiding professional and academic growth</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Instructor Roles */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            Instructor
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {teachingData.instructor.map((role, idx) => (
              <motion.div
                key={idx}
                className="p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h4 className="font-bold text-gray-900">
                    {role.course}
                  </h4>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold whitespace-nowrap">
                    {role.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{role.institution}</p>
                <p className="text-blue-600 text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Head TA Courses */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            Head Teaching Assistant
          </h3>

          {teachingData.headTA.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={itemVariants}
              className="border-l-4 border-purple-600 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent rounded-r-lg"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">{group.category}</h4>
              <p className="text-gray-600 text-sm mb-4">
                Professor: <span className="font-semibold text-gray-900">{group.professor}</span>
              </p>
              <div className="space-y-2">
                {group.courses.map((course, courseIdx) => (
                  <motion.a
                    key={courseIdx}
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    <Code2 className="w-4 h-4" />
                    {course.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book Contributions */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Book Content Development
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {teachingData.books.map((book, idx) => (
              <motion.a
                key={idx}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white rounded-lg border border-gray-200 hover:border-green-400 shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px]"
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="font-bold text-gray-900 mb-2 text-lg hover:text-green-600">
                  {book.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2">Authors: {book.authors}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  {book.year}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.div
          className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Teaching Philosophy</h3>
          <p className="leading-relaxed">
            I believe in hands-on, project-based learning that bridges theory and practice. My mentorship focuses on developing independent problem-solvers, critical thinkers, and innovation leaders. I emphasize not just technical skills, but also communication, collaboration, and ethical responsibility in AI and engineering.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
