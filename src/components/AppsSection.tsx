import { Grid3X3, ArrowRight } from "lucide-react";
import GameCard from "./GameCard";

const apps = [
  {
    title: "TikTok Premium",
    category: "Social",
    version: "v40.5.16",
    size: "220 MB",
    image: "https://play-lh.googleusercontent.com/LdBITldj-tJxqLm-CsWSbnt4BMo2gk53cgM7mWIL-zn44m1ywLyQgxRsHKqp8r0qceXs",
    isMod: true,
  },
  {
    title: "Instagram",
    category: "Social",
    version: "v340.0",
    size: "180 MB",
    image: "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM",
    isMod: true,
  },
  {
    title: "Spotify Premium",
    category: "Music",
    version: "v8.9.42",
    size: "85 MB",
    image: "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs",
    isMod: true,
  },
  {
    title: "YouTube Premium",
    category: "Entertainment",
    version: "v19.45",
    size: "150 MB",
    image: "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
    isMod: true,
  },
  {
    title: "Photo Studio PRO",
    category: "Photography",
    version: "v2.8.2",
    size: "120 MB",
    image: "https://play-lh.googleusercontent.com/3UojVLVXeXnz6fHg76Od05LxALKOOhw4nDR8hGY3qtoW3UsuRHdpZB9lX8goUl7q3UE",
    isMod: true,
  },
  {
    title: "Netflix",
    category: "Entertainment",
    version: "v8.115",
    size: "95 MB",
    image: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",
    isMod: true,
  },
];

const categories = [
  { name: "Apps", href: "#" },
  { name: "Books & Reference", href: "#" },
  { name: "Communication", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Photography", href: "#" },
];

const AppsSection = () => {
  return (
    <section className="py-8" id="apps">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="section-head text-xl md:text-2xl">
          <div className="flex items-center">
            <div className="shadow-xl gradient-purple w-8 h-8 text-sm rounded-full flex justify-center items-center text-white mr-3">
              <Grid3X3 className="w-4 h-4" />
            </div>
            <span>Latest Apps</span>
          </div>
          <a href="#" className="btn-navy flex items-center gap-1">
            All <ArrowRight className="w-4 h-4" />
          </a>
        </h2>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {apps.map((app, index) => (
            <GameCard key={index} {...app} />
          ))}
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h3 className="section-head text-lg md:text-xl">
            <div className="flex items-center">
              <div className="shadow-xl gradient-purple w-8 h-8 text-sm rounded-full flex justify-center items-center text-white mr-3">
                <Grid3X3 className="w-4 h-4" />
              </div>
              <span>Apps - Categories</span>
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

export default AppsSection;
