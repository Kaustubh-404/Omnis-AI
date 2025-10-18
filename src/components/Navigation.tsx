import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import omnisLogo from "@/assets/omnis-logo.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Studio", path: "/studio" },
    { name: "Team", path: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={omnisLogo} alt="OMNIS" className="h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/build-with-us">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Build With Us
              </Button>
            </Link>
          </div>

          <button className="md:hidden text-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
