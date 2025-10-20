import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import omnisLogo from "@/assets/omnis-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={omnisLogo} alt="OMNIS" className="h-12" />
            </Link>
            <p className="text-sm text-muted-foreground">
              An AI-First Blockchain Venture Studio
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/studio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
            <Link
              to="/build-with-us"
              className="inline-block text-sm text-primary hover:underline"
            >
              Build With Us →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Omnis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
