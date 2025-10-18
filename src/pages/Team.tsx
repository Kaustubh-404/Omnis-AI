import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Product Visionaries",
      description: "Building tomorrow's innovations today",
    },
    {
      name: "AI Specialists",
      description: "Crafting intelligent systems that scale",
    },
    {
      name: "Blockchain Architects",
      description: "Designing decentralized solutions",
    },
    {
      name: "Finance Leaders",
      description: "Enabling growth through strategic funding",
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
              Our Team
            </h1>
            <p className="text-2xl text-foreground/90">
              At Omnis, we believe world-changing ventures are built by diverse minds working as one. Our founding collective brings together finance leaders, product visionaries, and technology pioneers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border p-12 rounded-2xl hover:border-primary transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300" />
                  <h3 className="text-3xl font-bold text-primary mb-3">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              We're united by a shared commitment to innovation, impact, and integrity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We push boundaries and challenge the status quo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-3">Impact</h3>
              <p className="text-muted-foreground">
                We build solutions that matter at scale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-tertiary rounded-full mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and trust.
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
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Collaborate with a team that's redefining what's possible.
            </p>
            <Link to="/build-with-us">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
