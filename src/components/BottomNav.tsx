import { Home, Gamepad2, Grid3X3, Newspaper, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const BottomNav = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bottom-nav md:hidden">
      <div className="flex justify-around items-center">
        <a href="/" className="bottom-nav-item active">
          <Home className="w-5 h-5" style={{ color: "hsl(210, 100%, 50%)" }} />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#games" className="bottom-nav-item">
          <Gamepad2 className="w-5 h-5" style={{ color: "hsl(11, 100%, 50%)" }} />
          <span className="text-xs mt-1">Games</span>
        </a>
        <a href="#apps" className="bottom-nav-item">
          <Grid3X3 className="w-5 h-5" style={{ color: "hsl(276, 100%, 50%)" }} />
          <span className="text-xs mt-1">Apps</span>
        </a>
        <a href="#blog" className="bottom-nav-item">
          <Newspaper className="w-5 h-5" style={{ color: "hsl(36, 100%, 50%)" }} />
          <span className="text-xs mt-1">Blog</span>
        </a>
        <button onClick={toggleTheme} className="bottom-nav-item">
          {isDark ? (
            <Sun className="w-5 h-5" style={{ color: "hsl(113, 100%, 38%)" }} />
          ) : (
            <Moon className="w-5 h-5" style={{ color: "hsl(113, 100%, 38%)" }} />
          )}
          <span className="text-xs mt-1">Theme</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
