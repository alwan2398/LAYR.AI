"use client";

import { motion } from "framer-motion";
import { containerHero, lineVariants, wordVariants } from "@/constant/Animate";

const Hero = () => {
  return (
    <div className="text-center mb-6 mt-24">
      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-text"
        variants={containerHero}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={lineVariants}>
          {["Bangun", "Website", "Dengan", "Mudah", "Tanpa"].map(
            (word, index) => (
              <motion.span
                variants={wordVariants}
                className="inline-block mr-2 tracking-tight leading-tight"
                key={index}
              >
                {word}
              </motion.span>
            ),
          )}
        </motion.div>
        <motion.div variants={lineVariants}>
          {["Ribet", "Dan", "Pusing"].map((word, index) => (
            <motion.span
              variants={wordVariants}
              className="inline-block mr-2 tracking-tight leading-tight"
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
        AI-powered website builder mengubah ide Anda menjadi situs web siap
        pakai dengan cepat dan mudah. tanpa skill coding dan juga desain.
      </motion.p>
    </div>
  );
};

export default Hero;
