import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import beliefImage from "@/assets/download.png";
import embeddedCapitalIcon from "@/assets/embedded-capital.png";
import embeddedCapitalText from "@/assets/embedded-capital-text.png";
import aiFirstIcon from "@/assets/AI-First-infrastructure.png";
import aiFirstText from "@/assets/AI-first-infra-text.png";
import operationalDepthIcon from "@/assets/operational-depth.png";
import operationalDepthText from "@/assets/operation-depth-text.png";
import globalNetworkIcon from "@/assets/global-network.png";
import globalNetworkText from "@/assets/global-network-text.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Studio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black">
        {/* Hero Image */}
        <div className="w-full ml-10 mt-20">
          <img
            src="/asset2.png"
            alt="Studio Workspace"
            className="w-full h-[60vh] object-cover rounded-l-2xl"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none">
                  THE
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-orange-500 mb-8 leading-none">
                  STUDIO
                </h1>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                From Idea to{" "}
                <span className="text-orange-500">Population-Scale</span>{" "}
                Company
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Omnis Studio, we don't just advise founders — we co-create
                with them. Our AI-first blockchain venture studio is designed to
                turn bold ideas into transformative companies. We merge deep
                tech, funding, and execution expertise into one seamless
                framework that accelerates founders from concept to scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Studio Model */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Studio Model
            </h2>
            <p className="text-2xl text-gray-300 mb-4">
              Unlike accelerators or incubators, Omnis embeds itself as an
              institutional co-founder.
            </p>
            <p className="text-2xl text-gray-300">We provide:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-orange-500 flex-1">
                Embedded Capital
              </h3>
              <img src={embeddedCapitalIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <p className="text-white text-2xl flex-1">
                early funding and financial strategy from day one.
              </p>
              <img src={embeddedCapitalText} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-orange-500 flex-1">
                AI-First Infrastructure
              </h3>
              <img src={aiFirstIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <p className="text-white text-2xl flex-1">
                powered by Zynd, our decentralized agent protocol.
              </p>
              <img src={aiFirstText} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-orange-500 flex-1">
                Operational Depth
              </h3>
              <img src={operationalDepthIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <p className="text-white text-2xl flex-1">
                a team that builds product, tech, and growth systems with you.
              </p>
              <img src={operationalDepthText} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-orange-500 flex-1">
                Global Networks
              </h3>
              <img src={globalNetworkIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-white/20 py-6 flex items-center gap-4">
              <p className="text-white text-2xl flex-1">
                access to AI, blockchain, robotics, and capital ecosystems.
              </p>
              <img src={globalNetworkText} alt="" className="w-12 h-12" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 border-t border-b border-white/30 py-8">
            <p className="text-2xl text-white text-center">
              This means founders don't just gain advice—they gain a co-founding
              engine that builds alongside them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-orange-500">Belief</span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed">
                We believe the future will be built by AI-powered,
                blockchain-native ventures that are inclusive, sustainable, and
                scalable. Omnis Studio exists to co-create those companies with
                courageous founders.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={beliefImage}
                alt="Our Belief"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build & Omnis Studio Advantage */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="what-we-build"
                className="border-t border-b border-white/30 py-4"
              >
                <AccordionTrigger className="text-5xl font-bold text-white hover:no-underline">
                  What We <span className="text-orange-500">Build</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 border border-white/20 p-8 rounded-lg bg-gray-900/50">
                    <div>
                      <h4 className="text-3xl font-bold text-orange-500 mb-3">
                        AI-Native Enterprises
                      </h4>
                      <p className="text-gray-300 text-2xl">
                        rethinking governance, compliance, and scale with
                        autonomous agents.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-orange-500 mb-3">
                        DEPIN & Robotics
                      </h4>
                      <p className="text-gray-300 text-2xl">
                        building decentralized physical infrastructure and
                        robotics-driven ecosystems.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-orange-500 mb-3">
                        Planet & People Ventures
                      </h4>
                      <p className="text-gray-300 text-2xl">
                        tackling sustainability, climate, and health equity with
                        AI-first models.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="omnis-advantage"
                className="border-t border-b border-white/30 py-4"
              >
                <AccordionTrigger className="text-5xl font-bold text-white hover:no-underline">
                  The Omnis Studio{" "}
                  <span className="text-orange-500">Advantage</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 border border-white/20 p-8 rounded-lg bg-gray-900/50">
                    <div>
                      <h4 className="text-3xl font-bold text-orange-500 mb-3">
                        Speed
                      </h4>
                      <p className="text-gray-300 text-2xl">
                        Move from concept to company in months, not years.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-orange-500 mb-3">
                        Resilience
                      </h4>
                      <p className="text-gray-300 text-2xl">
                        Validate markets and business models with data-driven
                        clarity.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-orange-500 mb-3">
                        Scale
                      </h4>
                      <p className="text-gray-300 text-2xl">
                        Leverage Zynd and our networks to grow ventures that
                        reach billions.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studio;
