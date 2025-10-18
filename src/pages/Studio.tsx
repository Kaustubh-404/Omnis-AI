import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import studioGif from "@/assets/studio-page-gif.gif";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-[#6ca1e3] to-[#6fcbd6]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                From Idea to Population-Scale Company
              </h1>
              <p className="text-xl text-white leading-relaxed">
                At Omnis Studio, we don't just advise founders — we co-create with them. Our AI-first blockchain venture studio is designed to turn bold ideas into transformative companies. We merge deep tech, funding, and execution expertise into one seamless framework that accelerates founders from concept to scale.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={studioGif}
                alt="Studio Animation"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Studio Model */}
      <section className="py-20 bg-gradient-to-b from-[#6fcbd6] to-[#A8E5EC]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Our Studio Model
            </h2>
            <p className="text-xl text-black mb-4">
              Unlike accelerators or incubators, Omnis embeds itself as an institutional co-founder.
            </p>
            <p className="text-xl text-black">
              We provide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-black flex-1">Embedded Capital</h3>
              <img src={embeddedCapitalIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <p className="text-black flex-1">early funding and financial strategy from day one.</p>
              <img src={embeddedCapitalText} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-black flex-1">AI-First Infrastructure</h3>
              <img src={aiFirstIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <p className="text-black flex-1">powered by Zynd, our decentralized agent protocol.</p>
              <img src={aiFirstText} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-black flex-1">Operational Depth</h3>
              <img src={operationalDepthIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <p className="text-black flex-1">a team that builds product, tech, and growth systems with you.</p>
              <img src={operationalDepthText} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-black flex-1">Global Networks</h3>
              <img src={globalNetworkIcon} alt="" className="w-12 h-12" />
            </div>

            <div className="border-t border-b border-black/20 py-6 flex items-center gap-4">
              <p className="text-black flex-1">access to AI, blockchain, robotics, and capital ecosystems.</p>
              <img src={globalNetworkText} alt="" className="w-12 h-12" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 border-t border-b border-black/30 py-8">
            <p className="text-lg text-black text-center">
              This means founders don't just gain advice—they gain a co-founding engine that builds alongside them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="py-20 bg-gradient-to-b from-[#A8E5EC] to-[#ffac9a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Our Belief
              </h2>
              <p className="text-xl text-black leading-relaxed">
                We believe the future will be built by AI-powered, blockchain-native ventures that are inclusive, sustainable, and scalable. Omnis Studio exists to co-create those companies with courageous founders.
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
      <section className="py-20 bg-gradient-to-b from-[#ffac9a] to-[#FFC8BC]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="what-we-build" className="border-t border-b border-black/30 py-4">
                <AccordionTrigger className="text-4xl font-bold text-black hover:no-underline">
                  What We Build
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 border border-black/20 p-8 rounded-lg">
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">AI-Native Enterprises</h4>
                      <p className="text-black">rethinking governance, compliance, and scale with autonomous agents.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">DEPIN & Robotics</h4>
                      <p className="text-black">building decentralized physical infrastructure and robotics-driven ecosystems.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">Planet & People Ventures</h4>
                      <p className="text-black">tackling sustainability, climate, and health equity with AI-first models.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="omnis-advantage" className="border-t border-b border-black/30 py-4">
                <AccordionTrigger className="text-4xl font-bold text-black hover:no-underline">
                  The Omnis Studio Advantage
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 border border-black/20 p-8 rounded-lg">
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">Speed</h4>
                      <p className="text-black">Move from concept to company in months, not years.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">Resilience</h4>
                      <p className="text-black">Validate markets and business models with data-driven clarity.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-3">Scale</h4>
                      <p className="text-black">Leverage Zynd and our networks to grow ventures that reach billions.</p>
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
