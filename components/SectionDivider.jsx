'use client';

import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'default' }) {
  return (
    <motion.div 
      className="relative py-16 my-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Top gradient blur line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ delay: 0.1, duration: 0.8 }}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(99, 102, 241, 0.2)',
        }}
      />

      {/* Center decorative element */}
      <div className="flex justify-center items-center py-6">
        {/* Left accent bar */}
        <motion.div
          className="h-12 flex-1 mr-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            background: 'linear-gradient(to right, transparent, rgba(147, 51, 234, 0.3))',
          }}
        />

        {/* Center dot container */}
        <div className="relative flex items-center gap-2">
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute -inset-8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              borderRadius: '50%',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
          />

          {/* Main center dot */}
          <motion.div
            className="w-3 h-3 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 10px rgba(147, 51, 234, 0.5)',
                '0 0 20px rgba(147, 51, 234, 0.8)',
                '0 0 10px rgba(147, 51, 234, 0.5)'
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(99, 102, 241))',
            }}
          />

          {/* Accent dots */}
          <motion.div
            className="relative mx-2"
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'rgba(99, 102, 241, 0.6)',
              }}
            />
          </motion.div>

          <motion.div
            className="relative"
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'rgba(168, 85, 247, 0.6)',
              }}
            />
          </motion.div>
        </div>

        {/* Right accent bar */}
        <motion.div
          className="h-12 flex-1 ml-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            background: 'linear-gradient(to left, transparent, rgba(147, 51, 234, 0.3))',
          }}
        />
      </div>

      {/* Bottom gradient blur line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(147, 51, 234, 0.5), transparent)',
          boxShadow: '0 0 30px rgba(147, 51, 234, 0.3), 0 0 60px rgba(99, 102, 241, 0.2)',
        }}
      />

      {/* Subtle background shape */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}
