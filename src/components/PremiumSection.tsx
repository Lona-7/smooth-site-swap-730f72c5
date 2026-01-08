import { Sparkles, ArrowRight } from "lucide-react";
import GameCard from "./GameCard";

const premiumItems = [
  {
    title: "Photo Studio PRO",
    category: "Paid",
    version: "v2.8.2",
    size: "120 MB",
    image: "https://play-lh.googleusercontent.com/3UojVLVXeXnz6fHg76Od05LxALKOOhw4nDR8hGY3qtoW3UsuRHdpZB9lX8goUl7q3UE",
    isMod: true,
  },
  {
    title: "NARUTO: Ultimate Ninja STORM",
    category: "Paid",
    version: "v1.2.9",
    size: "3.2 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/09/226-naruto-ultimate-ninja-storm.png",
    isUpdate: true,
  },
  {
    title: "Resident Evil 4",
    category: "Paid",
    version: "v1.0",
    size: "8.5 GB",
    image: "https://play-lh.googleusercontent.com/5Z-KRFR6gE3lX9d8W8kHJvAEVEJGEYHU9W95nRDLj4E_fO8EDALMEq0O9oQC8O9s9dA",
    isMod: true,
  },
  {
    title: "GTA: San Andreas – NETFLIX",
    category: "Paid",
    version: "v1.86",
    size: "2.8 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/351-gta-san-andreas-netflix-bg.png",
    isMod: true,
  },
  {
    title: "Hitman: Absolution",
    category: "Paid",
    version: "v1.0",
    size: "3.5 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/hitman-absolution-banner.jpg",
  },
  {
    title: "Bully: Anniversary Edition",
    category: "Paid",
    version: "v1.0.0.19",
    size: "2.4 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/bully-anniversary-edition-banner.jpg",
    isMod: true,
  },
];

const PremiumSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="section-head text-xl md:text-2xl">
          <div className="flex items-center">
            <div className="shadow-xl gradient-red w-8 h-8 text-sm rounded-full flex justify-center items-center text-white mr-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <span>Premium Apps & Games</span>
          </div>
          <a href="#" className="btn-navy flex items-center gap-1">
            All <ArrowRight className="w-4 h-4" />
          </a>
        </h2>

        {/* Premium Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {premiumItems.map((item, index) => (
            <GameCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
