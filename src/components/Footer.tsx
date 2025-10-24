import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import omnisLogo from "@/assets/omnis-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto flex flex-col px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-auto">
          <div className="mr-8">
            <Link to="/" className="inline-block mb-1">
              <img src={omnisLogo} alt="OMNIS" className="h-20" />
            </Link>
            <p className="text-sm text-muted-foreground">
              An AI-First Blockchain Venture Studio
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <a href="mailto:info@omnis.ltd" className="text-base text-muted-foreground hover:text-primary transition-colors">
              info@omnis.ltd
            </a>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
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
