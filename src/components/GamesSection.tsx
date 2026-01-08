import { Gamepad2, ArrowRight } from "lucide-react";
import GameCard from "./GameCard";

const games = [
  {
    title: "Tomb Raider™",
    category: "Action",
    version: "v1.0",
    size: "Varies",
    image: "https://mingapks.com/wp-content/uploads/2026/01/489-tomb-raider.webp",
    isUpdate: true,
  },
  {
    title: "Red Dead Redemption NETFLIX",
    category: "Adventure",
    version: "v1.50",
    size: "2.5 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/12/480-red-dead-redemption-netflix.webp",
    isMod: true,
    isUpdate: true,
  },
  {
    title: "Gangstar Vegas",
    category: "Action",
    version: "v8.9.0g",
    size: "1.8 GB",
    image: "https://play-lh.googleusercontent.com/xX6qj3rF2xYoxWuIoVJIhj_UmV7_1GxZVGkfJt5JQXdxVt4cNlPr7RuRvAopVCfDUb0",
    isMod: true,
  },
  {
    title: "Poppy Playtime Chapter 2",
    category: "Action",
    version: "v1.42",
    size: "850 MB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/poppy-playtime-chapter-2-thumbnail.png",
  },
  {
    title: "Poppy Playtime Chapter 3",
    category: "Adventure",
    version: "v1.0.25",
    size: "1.2 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/poppy-playtime-chapter-3-thumbnail.png",
  },
  {
    title: "Streets Of Rage 4",
    category: "Arcade",
    version: "v1.4.5",
    size: "780 MB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/streets-of-rage-4-thumbnail.png",
  },
  {
    title: "Little Nightmares",
    category: "Adventure",
    version: "v144",
    size: "920 MB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/little-nightmares-thumbnail.png",
  },
  {
    title: "Hollow Knight",
    category: "Action",
    version: "v22.10",
    size: "914 MB",
    image: "https://play-lh.googleusercontent.com/zD3WvF3WhDJGFvZLNf8uVe1V8_8XYhBIyMqwvYBK9M4TgD8PTH8x3RqrLHsLkVFX9w",
    isMod: true,
  },
  {
    title: "Prince Of Persia: Lost Crown",
    category: "Adventure",
    version: "v1.1.1a",
    size: "4.2 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/431-prince-of-persia-lost-crown.png",
    isMod: true,
  },
  {
    title: "SpongeBob - The Cosmic Shake",
    category: "Action",
    version: "v1.1.2",
    size: "3.9 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/10/434-spongebob-the-cosmic-shake.png",
    isMod: true,
  },
  {
    title: "Mortal Kombat Unchained",
    category: "Fighting",
    version: "v1.0",
    size: "1.36 GB",
    image: "https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQj0t8ik7bNKZLx3p1OHfjWZt3x",
    isMod: true,
  },
  {
    title: "NARUTO: Ultimate Ninja STORM",
    category: "Action",
    version: "v1.2.9",
    size: "3.2 GB",
    image: "https://mingapks.com/wp-content/uploads/2025/09/226-naruto-ultimate-ninja-storm.png",
    isUpdate: true,
  },
];

const categories = [
  { name: "Action", href: "#" },
  { name: "Adventure", href: "#" },
  { name: "Games", href: "#" },
  { name: "Puzzle", href: "#" },
  { name: "Racing", href: "#" },
];

const GamesSection = () => {
  return (
    <section className="py-8" id="games">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="section-head text-xl md:text-2xl">
          <div className="flex items-center">
            <div className="shadow-xl gradient-blue w-8 h-8 text-sm rounded-full flex justify-center items-center text-white mr-3">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <span>Latest Games</span>
          </div>
          <a href="#" className="btn-navy flex items-center gap-1">
            All <ArrowRight className="w-4 h-4" />
          </a>
        </h2>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h3 className="section-head text-lg md:text-xl">
            <div className="flex items-center">
              <div className="shadow-xl gradient-blue w-8 h-8 text-sm rounded-full flex justify-center items-center text-white mr-3">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <span>Games - Categories</span>
            </div>
            <a href="#" className="btn-navy flex items-center gap-1">
              All <ArrowRight className="w-4 h-4" />
            </a>
          </h3>
          <div className="flex flex-wrap">
            {categories.map((cat, index) => (
              <a key={index} href={cat.href} className="category-pill-green">
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
