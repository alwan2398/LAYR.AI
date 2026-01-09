"use client";
import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="border-b border-gray-800/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-500" />
          <span className="text-lg font-semibold">LAYR.AI</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white cursor-pointer"
        >
          Sign In
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
