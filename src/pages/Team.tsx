import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Prathamesh Mukture",
      role: "Tokenization and New Economy",
      image: "/prathamesh.jpg",
      description: "Prathamesh leads Tokenization and New Economy initiatives at Omnis, bringing deep expertise in blockchain technologies and digital asset frameworks.",
      drives: "Prathamesh is passionate about building the future of digital economies and tokenization systems that can transform how value is created and exchanged.",
      helps: ["Tokenization Strategy", "Digital Asset Management", "New Economy Models"],
    },
    {
      name: "Suresh Jain",
      role: "Capital and Growth",
      image: "/suresh.png",
      description: "Suresh leads Capital and Growth strategies at Omnis, with extensive experience in scaling businesses and capital allocation.",
      drives: "Suresh is dedicated to identifying growth opportunities and building sustainable capital strategies for long-term success.",
      helps: ["Capital Strategy", "Growth Planning", "Investment Management"],
    },
    {
      name: "Loveth Angel",
      role: "Research and Validation",
      image: "/loveth.jpeg",
      description: "Loveth heads Research and Validation at Omnis, with expertise in market research and business model validation.",
      drives: "Loveth is driven by uncovering insights through rigorous research that can validate and strengthen business propositions.",
      helps: ["Market Research", "Business Validation", "Data Analysis"],
    },
    {
      name: "Kapil Jain",
      role: "Product engineering and Web3",
      image: "/kapil.jpg",
      description: "Kapil leads Product Engineering and Web3 development at Omnis, bringing technical expertise in decentralized technologies.",
      drives: "Kapil is passionate about building innovative Web3 products that push the boundaries of what's possible in decentralized systems.",
      helps: ["Web3 Development", "Product Engineering", "Technical Architecture"],
    },
    {
      name: "Vishesh Bapna",
      role: "Finance management",
      image: "/vishesh.jpg",
      description: "Vishesh manages Finance at Omnis, ensuring robust financial planning and management across all ventures.",
      drives: "Vishesh is committed to maintaining financial excellence and building sustainable financial frameworks for growth.",
      helps: ["Financial Planning", "Budget Management", "Financial Analysis"],
    },
    {
      name: "James Chacko",
      role: "Ideation and Execution",
      image: "/james.jpeg",
      description: "James leads Ideation and Execution at Omnis, transforming innovative concepts into reality through strategic execution.",
      drives: "James is passionate about turning bold ideas into successful ventures through meticulous planning and execution.",
      helps: ["Strategic Planning", "Project Execution", "Innovation Management"],
    },
    {
      name: "Aditya Berry",
      role: "Machine and data science",
      image: "/aditya.jpg",
      description: "Aditya heads Machine Learning and Data Science at Omnis, leveraging AI and analytics to drive intelligent decision-making.",
      drives: "Aditya is passionate about harnessing the power of data and machine learning to create intelligent solutions.",
      helps: ["Machine Learning", "Data Analytics", "AI Strategy"],
    },
    {
      name: "Chandan Kumar",
      role: "Product creator and Validator",
      image: "/chandan.jpg",
      description: "Chandan is a Product Creator and Validator at Omnis, specializing in product development and market validation.",
      drives: "Chandan enjoys creating innovative products and validating them through rigorous testing and market feedback.",
      helps: ["Product Development", "Market Validation", "User Experience"],
    },
    {
      name: "Swapnil Shinde",
      role: "Stacks and Execution",
      image: "/swapnil.png",
      description: "Swapnil leads Technology Stacks and Execution at Omnis, ensuring robust technical infrastructure and delivery.",
      drives: "Swapnil is driven by building scalable technology stacks that enable seamless execution of complex projects.",
      helps: ["Technology Stack Design", "System Architecture", "Technical Execution"],
    },
    {
      name: "Janet Luke",
      role: "Business Model Validation",
      image: "/janet.jpeg",
      description: "Janet specializes in Business Model Validation at Omnis, ensuring sustainable and viable business frameworks.",
      drives: "Janet is passionate about validating business models through data-driven approaches and market analysis.",
      helps: ["Business Model Design", "Market Validation", "Strategic Analysis"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Continuous Gradient Background - Hero + Teams */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(180deg, #4B6FFF 0%, #8FA7FF 50%, #87CEEB 60%, #40E0D0 70%, #FFB347 85%, #FF7F7F 100%)',
          minHeight: '100vh'
        }}
      >
        {/* Hero Section */}
        <div className="relative min-h-[80vh] flex items-center justify-start">
          {/* Background GIF Overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://cdn.prod.website-files.com/6641b1d4a8d8ad47ca9a0259/66432625cd12bc42537fdae8_140524_Biome_Build-strong-header-video.gif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <h1
                className="text-white font-bold mb-6 leading-none"
                style={{ fontSize: '90px', lineHeight: '0.9' }}
              >
                The Omnis<br />Founding Collective
              </h1>
              <p className="text-white text-lg max-w-3xl leading-relaxed">
                At Omnis, we believe world-changing ventures are built by diverse minds working as one. Our founding collective brings together finance leaders, product innovators, ecosystem builders, and capital experts—a team that acts as institutional co-founders for every venture we create.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section - Continuous with hero */}
        <div className="py-12 relative">
        <div className="container mx-auto px-6">
          {/* First row - 5 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-6">
            {teamMembers.slice(0, 5).map((member, index) => (
              <div
                key={index}
                className={`${index % 2 === 1 ? "mt-8" : "mb-8"} group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Avatar section */}
                <div className="h-48 bg-white relative flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />

                  {/* Plus icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-700 text-lg font-light">+</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 5 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {teamMembers.slice(5, 10).map((member, index) => (
              <div
                key={index + 5}
                className={`${index % 2 === 0 ? "mt-8" : "mb-8"} group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Avatar section */}
                <div className="h-48 bg-white relative flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />

                  {/* Plus icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-700 text-lg font-light">+</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Member Detail Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                  <p className="text-lg font-medium text-blue-600">{selectedMember.role}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 leading-relaxed">{selectedMember.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What drives them</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedMember.drives}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">As a co-founder, helps startups with</h4>
                  <div className="text-gray-600">
                    {selectedMember.helps.map((help: string, idx: number) => (
                      <p key={idx} className="mb-1">• {help}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Team;
