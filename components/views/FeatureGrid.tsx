"use client";

import { Sparkles, User, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const DEFAULT_FEATURES = [
  {
    icon: Sparkles,
    title: "Intelligent Website Engine",
    description:
      "Our AI-powered website builder transforms your ideas into production-ready websites—no coding, no design skills, just results.",
  },
  {
    icon: User,
    title: "Personalized Website",
    description:
      "Describe your purpose, and the AI generates a website tailored to your audience, use case, and content needs.",
  },
  {
    icon: ImagePlus,
    title: "AI Visual Styling",
    description:
      "Our AI creates clean layouts, visuals, and page structures that stay consistent with your brand identity—automatically.",
  },
];

interface FeaturesGridProps {
  features?: typeof DEFAULT_FEATURES;
}

const FeaturesGrid = ({ features = DEFAULT_FEATURES }: FeaturesGridProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={item}>
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesGrid;
