import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface SlideItem {
  title: string;
  category: string;
  image: string;
}

const slides: SlideItem[] = [
  {
    title: "GTA: San Andreas – NETFLIX",
    category: "Action",
    image: "https://mingapks.com/wp-content/uploads/2025/10/351-gta-san-andreas-netflix-bg.png",
  },
  {
    title: "Red Dead Redemption NETFLIX",
    category: "Adventure",
    image: "https://mingapks.com/wp-content/uploads/2025/12/480-red-dead-redemption-netflix.webp",
  },
  {
    title: "Bully: Anniversary Edition",
    category: "Action",
    image: "https://mingapks.com/wp-content/uploads/2025/10/bully-anniversary-edition-banner.jpg",
  },
  {
    title: "Hitman: Absolution",
    category: "Action",
    image: "https://mingapks.com/wp-content/uploads/2025/10/hitman-absolution-banner.jpg",
  },
  {
    title: "SpongeBob SquarePants BfBB",
    category: "Adventure",
    image: "https://mingapks.com/wp-content/uploads/2025/10/spongebob-squarepants-bfbb-banner.jpg",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[30px]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full hero-slide h-[300px] md:h-[400px] flex items-end relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
                }}
              >
                <div className="p-6 md:p-10 max-w-[600px]">
                  <span className="inline-block rounded-full px-4 py-2 text-white text-xs uppercase font-semibold mb-4 gradient-blue">
                    {slide.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold font-kanit text-white leading-tight mb-6">
                    {slide.title}
                  </h2>
                  <a
                    href="#"
                    className="download-btn"
                  >
                    Download
                    <span className="flex justify-center items-center w-8 h-8 gradient-blue text-white rounded-full ml-3">
                      <Play className="w-3 h-3 fill-current" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
