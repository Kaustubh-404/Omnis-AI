import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "Playbooks",
      description: "Step-by-step guides for launching AI-first ventures",
      items: ["Product Development", "Go-to-Market Strategy", "Scaling Operations"],
    },
    {
      title: "Funding Pathways",
      description: "Access to capital and investment opportunities",
      items: ["Seed Funding", "Series A+", "Strategic Partners"],
    },
    {
      title: "Tech Stack",
      description: "State-of-the-art tools and infrastructure",
      items: ["AI/ML Platforms", "Blockchain Networks", "Cloud Infrastructure"],
    },
    {
      title: "Network",
      description: "Connect with industry leaders and mentors",
      items: ["Advisory Board", "Partner Ecosystem", "Founder Community"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
              Resources
            </h1>
            <p className="text-2xl text-foreground/90">
              We equip founders with playbooks, funding pathways, and ecosystems designed for AI-first, blockchain-native companies. Every resource is engineered to reduce friction and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Knowledge Hub
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights, research, and thought leadership on AI, blockchain, and venture building.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-primary p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-background mb-4">AI Trends</h3>
              <p className="text-background/90">
                Latest developments in artificial intelligence and machine learning.
              </p>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-background mb-4">Blockchain</h3>
              <p className="text-background/90">
                Insights on decentralized systems and Web3 innovation.
              </p>
            </div>
            <div className="bg-gradient-tertiary p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-background mb-4">Case Studies</h3>
              <p className="text-background/90">
                Real-world examples of successful ventures we've built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Ready to Access Our Resources?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get everything you need to build and scale your venture.
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

export default Resources;
