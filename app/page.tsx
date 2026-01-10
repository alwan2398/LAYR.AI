"use client";

import { LightRays } from "@/components/ui/light-rays";
import FeaturesGrid from "@/components/views/FeatureGrid";
import Footer from "@/components/views/Footer";
import Header from "@/components/views/Header";
import Hero from "@/components/views/Hero";
import PromptInput from "@/components/views/InputPrompts";

export default function Home() {
  const handlePromptSubmit = (prompt: string) => {
    console.log("Prompt submitted:", prompt);
    // Add your logic here
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex justify-center items-center bg-black text-white">
      <LightRays className="absolute inset-0 z-0 pointer-events-none" />

      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
        <Header />
      </div>

      <main className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center gap-8 py-6">
        <Hero />
        <PromptInput onSubmit={handlePromptSubmit} />
        <FeaturesGrid />
        <Footer />
      </main>
    </div>
  );
}
