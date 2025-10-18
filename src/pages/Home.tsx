import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import zyndImage from "@/assets/download.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259%2F667945b106b54b45a6d8fe13_biome2-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259%2F667945b106b54b45a6d8fe13_biome2-transcode.webm" type="video/webm" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Decorative Red Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-float">
          <img 
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944fc06b54b45a6d8640c_icons-01-240424.gif" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-40 right-20 w-40 h-40 opacity-30 animate-float" style={{ animationDelay: "2s" }}>
          <img 
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944ff97e186ef92ac69e4_icons-03-240424.gif" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight" style={{ lineHeight: '0.99' }}>
              Omnis: An AI-First Blockchain Venture Studio
            </h1>
            <p className="text-2xl md:text-4xl text-white mb-12 leading-relaxed" style={{ lineHeight: '0.99' }}>
              We support bold founders with brilliant ideas solving real-world problems and co-create high-impact ventures at population scale.
            </p>
            <Link to="/build-with-us">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Build with us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-gradient-to-b from-[#6ca1e3] to-[#6fcbd6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 opacity-20 animate-float">
          <img 
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944ff7cb9dd5f2944e3b1_icons-02-240424.gif" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-primary p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-black">Accelerate</h3>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-black">Scale</h3>
            </div>
            <div className="bg-gradient-tertiary p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-black">Impact</h3>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-black">
              Through our AI-first decentralized agent protocol, Zynd, we accelerate ideas, scale them to billions, and generate transformative impact. We are more than advisors. We're tech enablers and fund providers who co-build with founders to design AI-powered, blockchain-native ventures that reshape industries. We collaborate with courageous entrepreneurs to forge AI, DEPIN (Decentralized Physical Infrastructure Networks), and Robotics-driven ventures with lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="py-20 bg-gradient-to-b from-[#6fcbd6] to-[#ffac9a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="/globe-animation.gif"
                alt="Globe Animation"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-black/20 rounded-lg px-6 bg-white/10">
                  <AccordionTrigger className="text-xl font-bold text-black">
                    Billion lives bettered
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    We build solutions that reach and improve billions of lives through cutting-edge technology and innovative approaches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-black/20 rounded-lg px-6 bg-white/10">
                  <AccordionTrigger className="text-xl font-bold text-black">
                    Humanity-Focused
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    How might we dismantle barriers, foster inclusivity, and deliver health equity at population scale?
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-black/20 rounded-lg px-6 bg-white/10">
                  <AccordionTrigger className="text-xl font-bold text-black">
                    Planet-Driven
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    How can we accelerate sustainability and climate-positive solutions with AI and robotics?
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-black/20 rounded-lg px-6 bg-white/10">
                  <AccordionTrigger className="text-xl font-bold text-black">
                    Business-Forward
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    How can AI agents drive real-time governance, compliance, and regulatory transformation for enterprises?
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas to Enterprises */}
      <section className="py-20 bg-gradient-to-b from-[#ffac9a] via-[#FFB8A8] to-[#FFC8BC] relative overflow-hidden">
        {/* Decorative Red Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-float">
          <img 
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944fc06b54b45a6d8640c_icons-01-240424.gif" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-28 h-28 opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
          <img 
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944ff97e186ef92ac69e4_icons-03-240424.gif" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-6" style={{ lineHeight: '0.99' }}>
              Ideas to<br />Enterprises
            </h2>
            <p className="text-lg text-black">
              The venture studio model is a powerful new approach that is redefining entrepreneurship. By combining company building with funding, we accelerate timelines, iterate rapidly and scale faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="bg-gradient-to-b from-[#FFA694] to-[#FFE4DE] p-8 rounded-2xl relative h-[500px] flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4">validate</h3>
              <p className="text-black mb-8 flex-grow">
                Deep, systematic research and experimentation to validate both the problem in the market and the solution.
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944fc06b54b45a6d8640c_icons-01-240424.gif"
                  alt="Validate"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#6FCBD5] to-[#A8E5EC] p-8 rounded-2xl relative h-[450px] flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4">build</h3>
              <p className="text-black mb-8 flex-grow">
                Full-stack team building each component of a Venture alongside founders.
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944ff7cb9dd5f2944e3b1_icons-02-240424.gif"
                  alt="Build"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#FFA694] to-[#FFE4DE] p-8 rounded-2xl relative h-[500px] flex flex-col">
              <h3 className="text-3xl font-bold text-black mb-4">scale</h3>
              <p className="text-black mb-8 flex-grow">
                Accelerating growth through GTM, partnerships, strategy and funding.
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/667944ff97e186ef92ac69e4_icons-03-240424.gif"
                  alt="Scale"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zynd Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFC8BC] to-[#6FCBD5]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Zynd - The Core of Omnis
              </h2>
              <p className="text-lg text-black mb-6">
                At the heart of Omnis lies Zynd, our proprietary decentralized AI agent protocol. Zynd is the foundation of every venture we co-create, enabling real-time decision-making, dynamic regulatory adaptation, and scalable AI-native operations. Beyond technology, Zynd is a funding engine and ecosystem enabler, driving innovation with its own proprietary hackathons to uncover daring ideas and visionary founders.
              </p>
              <p className="text-lg text-black">
                Deep dive into Zynd <a href="https://www.zynd.ai" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">www.zynd.ai</a>
              </p>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={zyndImage}
                alt="Zynd Core"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EIR Section */}
      <section className="py-20 bg-[#6FCBD5]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-black mb-6">
              Entrepreneur-in-Residence (EIR)
            </h2>
            <p className="text-lg text-black">
              An EIR at Omnis is more than a partner—they are a visionary founder-in-residence. Whether starting with a spark of an idea or a strong early concept, we co-create ventures systematically, ensuring they are AI-first, blockchain-ready, and built for scale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in creating AI-powered, blockchain-native ventures that reshape industries.
            </p>
            <Link to="/build-with-us">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
