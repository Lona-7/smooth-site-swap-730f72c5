import { useState } from "react";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="gradient-blue w-10 h-10 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-kanit font-bold text-xl text-foreground">
              DownAPK<span className="text-primary">.online</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition font-medium">
              Home
            </a>
            <a href="#games" className="text-foreground hover:text-primary transition font-medium">
              Games
            </a>
            <a href="#apps" className="text-foreground hover:text-primary transition font-medium">
              Apps
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition font-medium">
              Blog
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="dark-mode-toggle text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-muted"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="py-4 border-t border-border">
            <div className="relative">
              <input
                type="text"
                placeholder="Search apps, games..."
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <a href="/" className="px-4 py-2 rounded-lg hover:bg-muted transition font-medium">
                Home
              </a>
              <a href="#games" className="px-4 py-2 rounded-lg hover:bg-muted transition font-medium">
                Games
              </a>
              <a href="#apps" className="px-4 py-2 rounded-lg hover:bg-muted transition font-medium">
                Apps
              </a>
              <a href="#blog" className="px-4 py-2 rounded-lg hover:bg-muted transition font-medium">
                Blog
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
