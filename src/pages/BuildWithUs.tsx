import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp } from "lucide-react";

const BuildWithUs = () => {
  const { toast } = useToast();
  const [whoWeWorkWithOpen, setWhoWeWorkWithOpen] = useState(false);
  const [ourProcessOpen, setOurProcessOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    linkedin: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    ideaName: "",
    ideaStage: "",
    ideaDescription: "",
    teamDescription: "",
    additionalInfo: "",
    documentLink: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll get back to you within 48 hours.",
    });
    setFormData({
      firstName: "", lastName: "", linkedin: "", email: "", phone: "",
      city: "", country: "", ideaName: "", ideaStage: "", ideaDescription: "",
      teamDescription: "", additionalInfo: "", documentLink: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Continuous Gradient Background */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(180deg, #4B6FFF 0%, #8FA7FF 50%, #87CEEB 60%, #40E0D0 70%, #FFB347 85%, #FF7F7F 100%)',
          minHeight: '100vh'
        }}
      >
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-2xl">
                <h1
                  className="text-white font-bold mb-8 leading-none"
                  style={{ fontSize: '90px', lineHeight: '0.99' }}
                >
                  Build With<br />Omnis
                </h1>
                <p className="text-white text-xl leading-relaxed max-w-2xl">
                  We partner with bold entrepreneurs who see the world differently and want to solve real problems with AI, blockchain, and robotics. Whether you're starting with a spark or scaling an early concept, Omnis is your institutional co-founder.
                </p>
              </div>

              {/* Right Animation/Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Stylized red coral-like 3D graphic element */}
                  <div className="w-[1000px] h-[1000px] flex items-center justify-center">
                    <img
                      src="/download.png"
                      alt="Stylized red coral-like 3D graphic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Work With Accordion Section */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <button
                  onClick={() => setWhoWeWorkWithOpen(!whoWeWorkWithOpen)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-4xl font-bold text-gray-900">
                    Who We Work With
                  </h2>
                  {whoWeWorkWithOpen ? (
                    <ChevronUp className="w-8 h-8 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-gray-900" />
                  )}
                </button>

                {whoWeWorkWithOpen && (
                  <div className="mt-8">
                    <p className="text-lg text-gray-700 mb-6">
                      We clearly define our ideal partners:
                    </p>
                    <div className="space-y-4 text-gray-800 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg text-gray-800">
                          <strong>Visionaries</strong> solving planet, people, and enterprise-scale challenges.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg text-gray-800">
                          <strong>Founders</strong> who embrace risk, resilience, and rapid execution.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg text-gray-800">
                          <strong>Entrepreneurs</strong> seeking AI-first, blockchain-native foundations.
                        </p>
                      </div>
                    </div>

                    {/* Application Form */}
                    <div className="border-t border-gray-800/20 pt-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Apply to Build With Us
                        </h3>
                        <p className="text-gray-700 text-sm">
                          We take a selective, hands-on approach. Please provide detailed information:
                        </p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name*"
                            className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                            required
                          />
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name*"
                            className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                            required
                          />
                        </div>

                        <Input
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="LinkedIn*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Input
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Country*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Input
                          name="ideaName"
                          value={formData.ideaName}
                          onChange={handleChange}
                          placeholder="Idea Name/One-Liner*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Input
                          name="ideaStage"
                          value={formData.ideaStage}
                          onChange={handleChange}
                          placeholder="What stage is your idea in?*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                          required
                        />

                        <Textarea
                          name="ideaDescription"
                          value={formData.ideaDescription}
                          onChange={handleChange}
                          placeholder="Tell us about your idea*"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 min-h-[80px] rounded-lg"
                          required
                        />

                        <Textarea
                          name="teamDescription"
                          value={formData.teamDescription}
                          onChange={handleChange}
                          placeholder="Do you have a team? Tell us about them"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 min-h-[60px] rounded-lg"
                        />

                        <Textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Is there anything else you would like to add?"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 min-h-[60px] rounded-lg"
                        />

                        <Input
                          name="documentLink"
                          value={formData.documentLink}
                          onChange={handleChange}
                          placeholder="Share a link to a document or a pitch deck"
                          className="bg-white/90 border-0 text-gray-900 placeholder-gray-600 rounded-lg"
                        />

                        <Button
                          type="submit"
                          className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3 rounded-lg mt-6"
                        >
                          Submit Application
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Our Process Accordion Section */}
        <div className="py-20 border-t border-gray-800/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <button
                  onClick={() => setOurProcessOpen(!ourProcessOpen)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-4xl font-bold text-gray-900">
                    Our Process
                  </h2>
                  {ourProcessOpen ? (
                    <ChevronUp className="w-8 h-8 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-gray-900" />
                  )}
                </button>

                {ourProcessOpen && (
                  <div className="mt-8">
                    <p className="text-lg text-gray-700 mb-12">
                      Our four-step engagement model ensures deep alignment and sustainable success:
                    </p>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <span className="text-xl font-bold text-gray-900 flex-shrink-0">1.</span>
                        <p className="text-lg text-gray-800">
                          <strong>Alignment:</strong> Deep conversations to test expertise and founder-mission fit.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-xl font-bold text-gray-900 flex-shrink-0">2.</span>
                        <p className="text-lg text-gray-800">
                          <strong>Validation → Zynd:</strong> Uses "Zynd" (our proprietary tool) to analyze the problem, market demand, and solution viability.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-xl font-bold text-gray-900 flex-shrink-0">3.</span>
                        <p className="text-lg text-gray-800">
                          <strong>Co-Build → Omnis:</strong> Our collective embeds into your team, shaping product, tech, and funding.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-xl font-bold text-gray-900 flex-shrink-0">4.</span>
                        <p className="text-lg text-gray-800">
                          <strong>Ignite → Together:</strong> We craft GTM strategies, alliances, and funding pathways.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Why Build With Omnis Section - Value Proposition */}
        <div className="py-20 border-t border-gray-800/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontStyle: 'italic' }}>
              Why Build With Omnis
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Our core value proposition highlights what sets us apart as your institutional co-founder:
            </p>
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-800" style={{ fontStyle: 'italic' }}>
                  <strong>Embedded funding and infrastructure</strong> from day one.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-800" style={{ fontStyle: 'italic' }}>
                  <strong>A co-founding team</strong> with decades of startup and enterprise experience.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-800" style={{ fontStyle: 'italic' }}>
                  <strong>AI-first protocols and networks</strong> engineered for scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildWithUs;