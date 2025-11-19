import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden py-16">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img
          src={footerLogo}
          alt="Omnis AI Watermark"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Logo and Address */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={footerLogo} alt="Omnis AI" className="h-8 mr-3" />
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              <p>13 Ambey Avas Colony, Mini Bypass</p>
              <p>Road, Barelly, India - 243122</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com/omnisai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/omnis-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@omnisai.com"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            {/* <Link
              to="/"
              className="text-white hover:text-orange-500 transition-colors text-sm"
            >
              Our Work
            </Link>
            <Link
              to="/"
              className="text-white hover:text-orange-500 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-white hover:text-orange-500 transition-colors text-sm"
            >
              Partners
            </Link> */}
            <Link
              to="/team"
              className="text-white hover:text-orange-500 transition-colors text-sm"
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
