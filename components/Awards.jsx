import { motion } from 'framer-motion';
import { Trophy, Award, Star, Zap } from 'lucide-react';

const awardCategories = [
  {
    category: "Innovation & Startup Leadership",
    icon: Zap,
    color: "from-orange-500 to-orange-600",
    awards: [
      {
        title: "Selected for 'Level Up' (Amii's CTO Coaching Program)",
        issuer: "Alberta Machine Intelligence Institute (Amii)",
        date: "Jan 2025",
        description: "Chosen by Amii for scaling high-potential, ML-driven startups with exclusive executive coaching."
      },
      {
        title: "Top 15 Startup at Startup TNT Summit X",
        issuer: "Startup TNT",
        date: "2024",
        description: "Achieved as CTO of MediversAI, recognized among high-growth investment-ready startups in Canada."
      },
      {
        title: "Top 8 Startup at BioAlberta's Life Sciences Week",
        issuer: "BioAlberta",
        date: "2024",
        description: "Selected for pitch competition showcasing breakthrough health-tech innovations."
      }
    ]
  },
  {
    category: "National Awards & Grants",
    icon: Award,
    color: "from-red-500 to-red-600",
    awards: [
      {
        title: "National Grant for Pioneering PhD Dissertations (INSF)",
        issuer: "Iran National Science Foundation",
        date: "2025",
        description: "Awarded for cutting-edge research in Artificial Intelligence."
      },
      {
        title: "First-Place PhD Project Award",
        issuer: "Faculty of Electrical and Computer Engineering, KNTU",
        date: "Winter 2024",
        description: "Selected as the top project in the department for exceptional research contribution."
      }
    ]
  },
  {
    category: "Peer Review & Editorial Excellence",
    icon: Star,
    color: "from-purple-500 to-purple-600",
    awards: [
      {
        title: "Distinguished Reviewer for JAMA Network Open",
        issuer: "JAMA Network",
        date: "Sep 2025",
        description: "Official recognition for high-quality peer review contributions to the journal."
      },
      {
        title: "Top 5% Peer Reviewer for JAMA Network Open",
        issuer: "JAMA Network",
        date: "Winter 2024",
        description: "Recognized for the volume and quality of scientific peer reviews."
      }
    ]
  },
  {
    category: "Academic Rankings & Competitive Exams",
    icon: Trophy,
    color: "from-blue-500 to-blue-600",
    awards: [
      {
        title: "Ranked 9th",
        issuer: "National PhD Entrance Exam",
        date: "2022",
        description: "Control Engineering competitive admission (among top candidates nationwide)."
      },
      {
        title: "Ranked 1st",
        issuer: "6th Festival of Selected Seminars",
        date: "2021",
        description: "Electrical and Computer Engineering academic competition."
      },
      {
        title: "Top 0.1%",
        issuer: "National University Entrance Exam",
        date: "2015",
        description: "Among 180,000+ participants in competitive national university entrance exam."
      }
    ]
  }
];

export default function Awards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const awardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent">
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
            Honors & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Recognition for innovation, research excellence, and contribution to the scientific community.
          </p>
        </motion.div>

        {/* Award Categories */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awardCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={catIdx}
                variants={categoryVariants}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className={`flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  <CategoryIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                {/* Awards in Category */}
                <div className="space-y-4">
                  {category.awards.map((award, awardIdx) => (
                    <motion.div
                      key={awardIdx}
                      variants={awardVariants}
                      className="p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px]"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="font-bold text-gray-900 flex-grow text-base leading-snug">
                          {award.title}
                        </h4>
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs whitespace-nowrap flex-shrink-0">
                          {award.date}
                        </span>
                      </div>
                      <p className="text-blue-600 font-semibold text-sm mb-2">{award.issuer}</p>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Recognition Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: "5+", label: "Major Awards", icon: "🏆" },
              { number: "Top 0.1%", label: "Academic Performance", icon: "🎓" },
              { number: "30+", label: "Publications & Grants", icon: "📊" }
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
      </motion.div>
    </section>
  );
}
