import Features from "@/components/views/Features";
import Footer from "@/components/views/Footer";
import Header from "@/components/views/Header";
import HeroSection from "@/components/views/HeroSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </main>
  );
};

export default Home;
