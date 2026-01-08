import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GamesSection from "@/components/GamesSection";
import AppsSection from "@/components/AppsSection";
import PremiumSection from "@/components/PremiumSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <GamesSection />
        <AppsSection />
        <PremiumSection />
        <BlogSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
