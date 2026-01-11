"use client";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { DEFAULT_FEATURES } from "@/constant/ListFeature";
import { containerFeature, itemFeature } from "@/constant/Animate";

interface FeaturesGridProps {
  features?: typeof DEFAULT_FEATURES;
}

const FeaturesGrid = ({ features = DEFAULT_FEATURES }: FeaturesGridProps) => {
  return (
    <motion.div
      variants={containerFeature}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={itemFeature}>
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesGrid;
