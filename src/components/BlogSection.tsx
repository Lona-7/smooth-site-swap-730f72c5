import { Newspaper, ArrowRight, Eye, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "How to Download Bybit: Buy Bitcoin & Crypto APK Latest Version",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
    views: "3.7K",
    date: "Dec 28, 2025",
  },
  {
    title: "Top 10 Best Android Games to Play in 2026",
    image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=400&h=250&fit=crop",
    views: "5.2K",
    date: "Dec 25, 2025",
  },
  {
    title: "Complete Guide: How to Install MOD APK Files Safely",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    views: "8.1K",
    date: "Dec 20, 2025",
  },
];

const BlogSection = () => {
  return (
    <section className="py-8" id="blog">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="section-head text-xl md:text-2xl">
          <div className="flex items-center">
            <div className="shadow-xl gradient-blue w-8 h-8 text-sm rounded-full flex justify-center items-center text-white mr-3">
              <Newspaper className="w-4 h-4" />
            </div>
            <span>From Our Blog</span>
          </div>
          <a href="#" className="btn-navy flex items-center gap-1">
            More <ArrowRight className="w-4 h-4" />
          </a>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="block bg-card rounded-lg overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold font-lato text-lg text-foreground group-hover:text-primary transition line-clamp-2 mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
