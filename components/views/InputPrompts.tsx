"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ImagePlus, Mic, Paperclip, ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface PromptInputProps {
  placeholder?: string;
  onSubmit?: (prompt: string) => void;
}

const PromptInput = ({
  placeholder = "Type your prompt here...",
  onSubmit,
}: PromptInputProps) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(prompt);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mb-12"
    >
      <Card className="bg-transparent border-white/20 backdrop-blur-none relative overflow-hidden">
        <CardContent className="p-3">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={placeholder}
            className="min-h-[120px] bg-transparent border-none text-white placeholder:text-zinc-500 resize-none focus-visible:ring-0 text-lg"
          />

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-white/10 group cursor-pointer"
              >
                <Paperclip className="h-4 w-4 mr-2" />
                Attach
              </Button>
            </div>

            <Button
              size="icon"
              className="bg-white text-black hover:bg-zinc-200 group cursor-pointer"
              onClick={handleSubmit}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </Card>
    </motion.div>
  );
};

export default PromptInput;
