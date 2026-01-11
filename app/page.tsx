"use client";

import { LightRays } from "@/components/ui/light-rays";
import FeaturesGrid from "@/components/views/FeatureGrid";
import Footer from "@/components/views/Footer";
import Header from "@/components/views/Header";
import Hero from "@/components/views/Hero";
import InputPrompts from "@/components/views/InputPrompts";

const Home = () => {
  const handlePromptSubmit = (prompt: string) => {
    console.log("Prompt submitted:", prompt);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <LightRays className="absolute inset-0 pointer-events-none" />

      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <Header />
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6">
        <Hero />
        <InputPrompts onSubmit={handlePromptSubmit} />
        <FeaturesGrid />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
