"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="text-center mb-6 mt-24 max-w-5xl mx-auto">
      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-text overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="block" variants={lineVariants}>
          {["Build", "your", "next", "idea"].map((word, index) => (
            <motion.span
              variants={wordVariants}
              style={{ marginRight: "0.25em", display: "inline-block" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="block" variants={lineVariants}>
          {["faster", "than", "ever"].map((word, index) => (
            <motion.span
              variants={wordVariants}
              style={{ marginRight: "0.25em", display: "inline-block" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-zinc-400 text-lg max-w-2xl mx-auto"
      >
        AI-powered website builder that transforms your ideas into
        production-ready websites—no coding, no design skills, just results.
      </motion.p>
    </div>
  );
};

export default Hero;
