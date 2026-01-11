"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Paperclip, ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { PromptInputProps } from "@/type/Prompts";
import { useUser, useClerk } from "@clerk/nextjs";

const InputPrompts = ({
  placeholder = "Describe your website idea...",
  onSubmit,
}: PromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const handleSubmit = () => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    if (onSubmit) {
      onSubmit(prompt);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.5 }}
      className="w-full mb-12"
    >
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm relative">
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
                className="text-zinc-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <Paperclip className="h-4 w-4" />
                Attach
              </Button>
            </div>

            <Button
              disabled={prompt.trim() === ""}
              size="icon"
              className="bg-white text-black hover:bg-zinc-200 cursor-pointer"
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

export default InputPrompts;
