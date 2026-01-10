"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-b border-zinc-800/50 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold font-mono">LAYR AI</h1>
          <Button
            variant="ghost"
            size="sm"
            className="btn-ghost-zinc border border-zinc-100 cursor-pointer"
          >
            Sign In
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
