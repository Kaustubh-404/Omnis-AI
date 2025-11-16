import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          style={{ objectFit: "cover" }}
        >
          <source
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259%2F667945b106b54b45a6d8fe13_biome2-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259%2F667945b106b54b45a6d8fe13_biome2-transcode.webm"
            type="video/webm"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
              style={{ lineHeight: "0.99" }}
            >
              Omnis: An AI-First Blockchain Venture Studio
            </h1>
            <p
              className="text-2xl md:text-4xl text-white mb-12 leading-relaxed"
              style={{ lineHeight: "0.99" }}
            >
              We support bold founders with brilliant ideas solving real-world
              problems and co-create high-impact ventures at population scale.
            </p>
            <Link to="/build-with-us">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Build with us
              </Button>
            </Link>
            <div className="flex flex-row text-lg gap-2 w-fit mt-10 ml-10">
              An{" "}
              <img
                src="/alanscot.avif"
                alt="logo Company"
                className="h-8 mt-1"
              />{" "}
              Company
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-start items-start gap-16 mb-12 max-w-4xl">
            <h3 className="text-4xl font-bold text-orange-500">
              Accelerate
            </h3>
            <h3 className="text-4xl font-bold text-orange-500">Scale</h3>
            <h3 className="text-4xl font-bold text-orange-500">Impact</h3>
          </div>
          <div className="max-w-4xl">
            <p className="text-xl text-white leading-relaxed">
              Through our AI-first decentralized agent protocol, Zynd, we co-build and fund bold
              founders to create AI, DEPIN, and robotics ventures that redefine industries and scale
              transformative ideas to billions.
            </p>
          </div>
        </div>
      </section>


      {/* Ideas to Enterprises */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ lineHeight: "1.1" }}
            >
              Ideas to Enterprises
            </h2>
            <p className="text-base text-white leading-relaxed max-w-2xl">
              The venture studio model is a powerful new approach that is redefining entrepreneurship. By combining
              company building with funding, we accelerate timelines, iterate rapidly and break faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black p-4 relative flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-orange-500">Validate</h3>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Deep, systematic research and experimentation to validate both
                the problem in the market and the solution.
              </p>
            </div>

            <div className="bg-black p-4 relative flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-orange-500">Build</h3>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Full-stack team building each component of a Venture alongside
                founders.
              </p>
            </div>

            <div className="bg-black p-4 relative flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-orange-500">Scale</h3>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Accelerating growth through GTM, partnerships, strategy and
                funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circuit Board Image Section */}
      <section className="py-0 bg-black">
        <div className="w-full">
          <div className="relative w-full h-[600px] overflow-hidden">
            <img
              src="/asset.png"
              alt="Circuit Board"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Zynd Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Zynd - The Core of Omnis
            </h2>
            <p className="text-sm text-white leading-relaxed mb-8 max-w-3xl">
              At the heart of Omnis lies Zynd, our proprietary decentralized AI agent protocol. Zynd is the foundation of every venture we co-create, enabling real-time decision-making, dynamic regulatory adaptation, and scalable AI-native operations. Beyond technology, Zynd is a funding engine and ecosystem enabler, driving innovation with its own proprietary hackathons to uncover daring ideas and visionary founders.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex items-center gap-6">
              <img src="/omnis_logo.png" alt="Omnis AI" className="h-6" />
              <div className="flex gap-6 text-white text-xs">
                <span>About</span>
                <span>Team</span>
                <span>Contact</span>
                <span>Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
