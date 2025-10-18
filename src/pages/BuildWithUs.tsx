import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BuildWithUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll get back to you within 48 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
              Build With Us
            </h1>
            <p className="text-2xl text-foreground/90">
              We partner with bold entrepreneurs who see the world differently and want to solve real problems with AI, blockchain, and robotics. Whether you're starting from scratch or ready to scale, we're here to co-create.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Look For */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-16">
              Who We Look For
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Visionary Founders
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    You have a bold idea that addresses real-world problems at population scale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Tech-Forward Teams
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    You understand the transformative potential of AI and blockchain.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Mission-Driven Builders
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    You're committed to creating positive impact alongside sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Apply Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company/Project Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-card border-border text-foreground"
                  placeholder="Your venture"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your idea *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-card border-border text-foreground"
                  placeholder="What problem are you solving? How do you plan to use AI or blockchain?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-16">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-background">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Review
                </h3>
                <p className="text-muted-foreground">
                  Our team reviews your application within 48 hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-background">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Discovery Call
                </h3>
                <p className="text-muted-foreground">
                  We schedule a call to dive deep into your vision.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-tertiary rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-background">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Build Together
                </h3>
                <p className="text-muted-foreground">
                  We co-create your venture with full support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuildWithUs;
