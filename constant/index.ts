import { Brain, ImagePlus, Sparkles } from "lucide-react";

export const features = [
    {
      icon: Brain,
      title: "Think",
      description:
        "Solve the hardest problems in math, science, and coding with our reasoning model.",
    },
    {
      icon: Sparkles,
      title: "Create Avatar",
      description:
        "Dive deep to deliver insightful results with Booman's fast and innovative avatar generator.",
    },
    {
      icon: ImagePlus,
      title: "Edit Image",
      description:
        "Transform your images with style transfers, edits, and more.",
    },
  ];

export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

export const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };