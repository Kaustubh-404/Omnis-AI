import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import omnisLogo from "@/assets/omnis-logo.png";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Studio", path: "/studio" },
    { name: "Team", path: "/team" },
    { name: "Work Together", path: "/work-together" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    scrollToTop();
  };

  const handleMobileNavClick = () => {
    closeMenu();
    scrollToTop();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={handleNavClick}>
            <img src="/omnis_logo.png" alt="Omnis AI" className="h-5" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/join" onClick={handleNavClick}>
              <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-lg font-medium">
                Join
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMobileNavClick}
                className={`block text-sm font-medium transition-colors hover:text-orange-400 ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/join" onClick={handleMobileNavClick}>
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-lg font-medium">
                  Join
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
