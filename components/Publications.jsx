'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

const publications = [
  {
    title: "Cataract-LMM: Large-Scale, Multi-Source, Multi-Task Benchmark for Deep Learning in Surgical Video Analysis",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2025,
    category: "Surgical Video Analysis",
    link: "https://arxiv.org/pdf/2510.16371",
    venue: "arXiv Preprint"
  },
  {
    title: "Automated diagnosis of plus form and early stages of ROP using deep learning models",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2025,
    category: "Medical Imaging",
    link: "https://www.researchsquare.com/article/rs-7009570/v1",
    venue: "Research Square"
  },
  {
    title: "Evaluating Force and Motion in Posterior Vitreous Detachment Maneuvers Using a Robotic Data Acquisition",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2025,
    category: "Medical Robotics",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5209513",
    venue: "SSRN"
  },
  {
    title: "AI-Powered Framework for Cataract Surgery Video Optimization",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2024,
    category: "Surgical Video Analysis",
    link: "https://ieeexplore.ieee.org/abstract/document/10903624/",
    venue: "IEEE Transactions"
  },
  {
    title: "Development and Integration of a GUI with Real-Time Data Logging for RCM-Based Robotic Surgery",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2024,
    category: "Medical Robotics",
    link: "https://ieeexplore.ieee.org/abstract/document/10903536/",
    venue: "IEEE Transactions"
  },
  {
    title: "AugmenTory: A Fast and Flexible Polygon Augmentation Library",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2024,
    category: "Software Tools",
    link: "https://arxiv.org/abs/2405.04442",
    venue: "arXiv Preprint"
  },
  {
    title: "Video-based Surgical Skill Assessment using Tree-based Gaussian Process Classifier",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2023,
    category: "Surgical Video Analysis",
    link: "https://arxiv.org/abs/2312.10208",
    venue: "arXiv Preprint"
  },
  {
    title: "Advanced Deep Learning-Based Approach for Tooth Detection and Dental Cavity Segmentation",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2023,
    category: "Medical Imaging",
    link: "https://ieeexplore.ieee.org/abstract/document/10412537/",
    venue: "IEEE Transactions"
  },
  {
    title: "AI-Driven Keratoconus Detection: Integrating Medical Insights for Enhanced Diagnosis",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2023,
    category: "Medical Imaging",
    link: "https://ieeexplore.ieee.org/abstract/document/10412506/",
    venue: "IEEE Transactions"
  },
  {
    title: "Toward Keratoconus Diagnosis: Dataset Creation and AI Network Examination",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2023,
    category: "Medical Imaging",
    link: "https://ieeexplore.ieee.org/abstract/document/10412590/",
    venue: "IEEE Transactions"
  },
  {
    title: "Image Processing and Machine Vision in Surgery and Its Training",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2023,
    category: "Computer Vision",
    link: "https://joc.kntu.ac.ir/article-1-999-en.html",
    venue: "Journal of Control"
  },
  {
    title: "Surgical Instrument Tracking for Capsulorhexis Eye Surgery Based on Siamese Networks",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2022,
    category: "Surgical Video Analysis",
    link: "https://ieeexplore.ieee.org/abstract/document/10025355/",
    venue: "IEEE Transactions"
  },
  {
    title: "An Observer-Based Responsive Variable Impedance Control for Dual-User Haptic Training System",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2022,
    category: "Robotics",
    link: "https://ieeexplore.ieee.org/abstract/document/9981977/",
    venue: "IEEE Transactions"
  },
  {
    title: "ARAS-Farabi Experimental Framework for Skill Assessment in Capsulorhexis Surgery",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2021,
    category: "Surgical Video Analysis",
    link: "https://ieeexplore.ieee.org/abstract/document/9663494/",
    venue: "IEEE Transactions"
  },
  {
    title: "Adaptive Robust Impedance Control of Haptic Systems for Skill Transfer",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2021,
    category: "Robotics",
    link: "https://ieeexplore.ieee.org/abstract/document/9663486/",
    venue: "IEEE Transactions"
  },
  {
    title: "Closed-form Inverse kinematics Equations of a Robotic Finger Mechanism",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2021,
    category: "Robotics",
    link: "https://ieeexplore.ieee.org/abstract/document/9663448/",
    venue: "IEEE Transactions"
  },
  {
    title: "Resilient Consensus in Double-Integrator Systems with Switching Networks Facing Smart Attacks",
    authors: "Mohammad Javad Ahmadi et al.",
    year: 2019,
    category: "Control Systems",
    link: "https://ieeexplore.ieee.org/abstract/document/9071915/",
    venue: "IEEE Transactions"
  }
];

const categories = [
  "Surgical Video Analysis",
  "Medical Imaging",
  "Medical Robotics",
  "Computer Vision",
  "Robotics",
  "Control Systems",
  "Software Tools"
];

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredPubs = selectedCategory 
    ? publications.filter(pub => pub.category === selectedCategory)
    : publications;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="publications" className="py-20">
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
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            {publications.length}+ publications in top-tier venues (IEEE, JAMA, arXiv) covering surgical AI, medical imaging, and robotics.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All ({publications.length})
          </motion.button>
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat} ({publications.filter(p => p.category === cat).length})
            </motion.button>
          ))}
        </motion.div>

        {/* Publications List */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredPubs.map((pub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-gray-600">
                      <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 font-semibold">
                        {pub.year}
                      </span>
                      <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 font-semibold">
                        {pub.category}
                      </span>
                      <span className="text-gray-500">{pub.venue}</span>
                    </div>

                    {/* Authors */}
                    <p className="text-gray-600 text-sm mb-4">{pub.authors}</p>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        View Paper
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scholar Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">View full publication list on Google Scholar</p>
          <motion.a
            href="https://scholar.google.com/citations?user=wTnN9IEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={20} />
            Google Scholar Profile
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
