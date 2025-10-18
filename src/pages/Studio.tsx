import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Studio = () => {
  const services = [
    {
      title: "AI-First Development",
      description: "We build intelligent systems that learn, adapt, and scale to solve complex problems.",
    },
    {
      title: "Blockchain Integration",
      description: "Decentralized solutions that ensure transparency, security, and trust.",
    },
    {
      title: "Co-Creation Model",
      description: "We don't just advise—we build alongside you as true partners.",
    },
    {
      title: "Funding & Resources",
      description: "Access to capital, infrastructure, and a network of industry leaders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
              Omnis Studio
            </h1>
            <p className="text-2xl text-foreground/90">
              At Omnis Studio, we don't just advise founders — we co-create with them. Our AI-first blockchain venture studio is designed to turn bold ideas into scalable, impactful enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Our Approach
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-primary p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-background mb-4">01. Ideate</h3>
                <p className="text-background/90 text-lg">
                  We work with visionary founders to refine concepts and validate product-market fit.
                </p>
              </div>
              <div className="bg-gradient-secondary p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-background mb-4">02. Build</h3>
                <p className="text-background/90 text-lg">
                  Our team co-creates MVPs using cutting-edge AI and blockchain technologies.
                </p>
              </div>
              <div className="bg-gradient-tertiary p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-background mb-4">03. Scale</h3>
                <p className="text-background/90 text-lg">
                  We provide ongoing support, funding, and resources to scale to millions of users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with us to transform your vision into reality.
            </p>
            <Link to="/build-with-us">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studio;
