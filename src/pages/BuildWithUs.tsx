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
  const [formOpen, setFormOpen] = useState(false);
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Build With
                <br />
                <span className="text-orange-500">Omnis</span>
              </h1>
            </div>

            {/* Right Content - Description */}
            <div className="max-w-lg">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                At Omnis, we believe world-changing ventures are built by diverse minds working as one. Our founding collective brings together finance leaders, product innovators, ecosystem builders, and capital experts—a team that acts as institutional co-founders for every venture we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-black">
        {/* Who We Work With Section */}
        <div className="pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-6 flex flex-col border border-gray-800">
                <button
                  onClick={() => setFormOpen(!formOpen)}
                  className="w-full flex items-start justify-between text-left"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Who We Work With
                    </h2>

                    <p className="text-base text-gray-300 mb-2">
                      We clearly define our ideal partners:
                    </p>
                    <div className="space-y-1 text-gray-300 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg text-gray-300">
                          <strong className="text-white">Visionaries</strong>{" "}
                          solving planet, people, and enterprise-scale
                          challenges.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg text-gray-300">
                          <strong className="text-white">Founders</strong> who
                          embrace risk, resilience, and rapid execution.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg text-gray-300">
                          <strong className="text-white">Entrepreneurs</strong>{" "}
                          seeking AI-first, blockchain-native foundations.
                        </p>
                      </div>
                    </div>
                  </div>
                  {formOpen ? (
                    <ChevronUp className="w-8 h-8 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-white flex-shrink-0" />
                  )}
                </button>

                {formOpen && (
                  <div className="mt-8">
                    {/* Application Form */}
                    <div className="border-t border-gray-700 pt-8">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3">
                          Apply to Build With Us
                        </h3>
                        <p className="text-gray-400 text-sm">
                          We take a selective, hands-on approach. Please provide
                          detailed information:
                        </p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name*"
                            className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                            required
                          />
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name*"
                            className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                            required
                          />
                        </div>

                        <Input
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="LinkedIn*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Input
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Country*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Input
                          name="ideaName"
                          value={formData.ideaName}
                          onChange={handleChange}
                          placeholder="Idea Name/One-Liner*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Input
                          name="ideaStage"
                          value={formData.ideaStage}
                          onChange={handleChange}
                          placeholder="What stage is your idea in?*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                          required
                        />

                        <Textarea
                          name="ideaDescription"
                          value={formData.ideaDescription}
                          onChange={handleChange}
                          placeholder="Tell us about your idea*"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 min-h-[80px] rounded-lg focus:border-orange-500"
                          required
                        />

                        <Textarea
                          name="teamDescription"
                          value={formData.teamDescription}
                          onChange={handleChange}
                          placeholder="Do you have a team? Tell us about them"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 min-h-[60px] rounded-lg focus:border-orange-500"
                        />

                        <Textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Is there anything else you would like to add?"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 min-h-[60px] rounded-lg focus:border-orange-500"
                        />

                        <Input
                          name="documentLink"
                          value={formData.documentLink}
                          onChange={handleChange}
                          placeholder="Share a link to a document or a pitch deck"
                          className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-orange-500"
                        />

                        <Button
                          type="submit"
                          className="w-full bg-orange-500 text-white hover:bg-orange-600 py-3 rounded-lg mt-6"
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

        {/* Our Process Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Our Process
                </h2>

                <p className="text-lg text-gray-300 mb-2">
                  Our four-step engagement model ensures deep alignment and
                  sustainable success:
                </p>
                <div className="space-y-1">
                  <div className="flex gap-4">
                    <span className="text-xl font-bold text-orange-500 flex-shrink-0">
                      1.
                    </span>
                    <p className="text-lg text-gray-300">
                      <strong className="text-white">Alignment:</strong> Deep
                      conversations to test expertise and founder-mission fit.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xl font-bold text-orange-500 flex-shrink-0">
                      2.
                    </span>
                    <p className="text-lg text-gray-300">
                      <strong className="text-white">Validation → Zynd:</strong>{" "}
                      Uses "Zynd" (our proprietary tool) to analyze the problem,
                      market demand, and solution viability.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xl font-bold text-orange-500 flex-shrink-0">
                      3.
                    </span>
                    <p className="text-lg text-gray-300">
                      <strong className="text-white">Co-Build → Omnis:</strong>{" "}
                      Our collective embeds into your team, shaping product,
                      tech, and funding.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xl font-bold text-orange-500 flex-shrink-0">
                      4.
                    </span>
                    <p className="text-lg text-gray-300">
                      <strong className="text-white">Ignite → Together:</strong>{" "}
                      We craft GTM strategies, alliances, and funding pathways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Build With Omnis Section - Value Proposition */}
        <div className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontStyle: "italic" }}
            >
              Why Build With <span className="text-orange-500">Omnis</span>
            </h2>
            <p className="text-base text-gray-300 mb-6 max-w-3xl">
              Our core value proposition highlights what sets us apart as your
              institutional co-founder:
            </p>
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p
                  className="text-lg text-gray-300"
                  style={{ fontStyle: "italic" }}
                >
                  <strong className="text-white">
                    Embedded funding and infrastructure
                  </strong>{" "}
                  from day one.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p
                  className="text-lg text-gray-300"
                  style={{ fontStyle: "italic" }}
                >
                  <strong className="text-white">A co-founding team</strong>{" "}
                  with decades of startup and enterprise experience.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p
                  className="text-lg text-gray-300"
                  style={{ fontStyle: "italic" }}
                >
                  <strong className="text-white">
                    AI-first protocols and networks
                  </strong>{" "}
                  engineered for scale.
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
