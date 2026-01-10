"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16"
    >
      <div className="text-center text-zinc-500 text-sm">
        <p>&copy; 2026 LAYR AI. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
