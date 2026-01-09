"use client";
import { useState } from "react";
import { Sparkles, Brain, ImagePlus, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { container, item } from "@/constant";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="text-center space-y-4">
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              Your Everyday AI, Ready for Anything.
            </motion.h1>
            <motion.p variants={item} className="text-gray-400 text-lg">
              Type your prompt below and press the button to start the journey.
            </motion.p>
          </div>

          <motion.div variants={item} className="relative">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-4">
                <Textarea
                  placeholder="Type your prompt here..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[150px] bg-transparent border-0 text-white placeholder:text-gray-500 resize-none focus-visible:ring-0 text-lg"
                />

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <ImagePlus className="h-4 w-4 mr-2" />
                      Add Image
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default HeroSection;
