import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "James Chacko",
      role: "Finance and Scale",
      image: "/james.jpeg",
      description: "Oliver, our co-founder, leads Finance and Scale at omnis. He was a former MD and Country Head of D.E. Shaw India and Arcesium, and has been in leadership positions with several global MNCs that mostly operate at the intersection of technology and finance since 1992. Oliver is an alumnus of Harvard Business School and a Fellow Chartered Accountant.",
      drives: "Oliver is passionate about developing human capabilities and has been a key volunteer at Sparsh Hospice, since its inception.",
      helps: ["Finance Strategy and Planning", "Growth and Scale"],
    },
    {
      name: "Aditya Berry",
      role: "Strategy and GTM",
      image: "/aditya.jpeg",
      description: "Meet Srinivas, our co-founder, leading Strategy and Go-to-Market at Biome. With over three decades of experience from across geographies, Srini is the Co-Founder of T-Hub Hyderabad (Asia's largest Innovation campus), India President for the Global Entrepreneurship Network, a Board Member of GEN Space, and the South Asia Advisory Board for the Dalai Lama Center for Ethics at MIT.",
      drives: "Srini's true passion lies in building robust, resilient venture ecosystems, helping startups scale and building thriving communities around entrepreneurship.",
      helps: ["Product Strategy", "Product Management", "Business Development", "Go-to-Market Strategy"],
    },
    {
      name: "Prathamesh Mukutre",
      role: "Research & Finance",
      image: "/prathamesh.jpeg",
      description: "Arunabh brings experience in finance and valuations, complemented by strategic exposure in the MD's Office at ONDC - one of the key pillars of India's Digital Public Infrastructure (DPI) ecosystem.",
      drives: "Arunabh is passionate about building solutions on the foundational rails of Digital Public Infrastructure (DPI). He firmly believes in its potential to unlock unprecedented innovation and deliver meaningful impact.",
      helps: ["Research & Analysis for Ideation", "Validation", "Financial Modelling"],
    },
    {
      name: "Loveth Angel",
      role: "Research & Validation",
      image: "/loveth.jpeg",
      description: "Usha looks after Research and Partnerships at Biome. With nearly 4 years of experience in the Venture Capital industry, she has worked with companies across D2C, Agri-tech, and Age-tech.",
      drives: "Usha is driven by identifying patterns & insights through deep research in areas that can have a positive impact on the world. She loves helping to build companies that are better for the planet.",
      helps: ["Research & Analysis", "Idea Validation"],
    },
    {
      name: "Chandan Kumar",
      role: "Product and Validation",
      image: "/chandan.jpeg",
      description: "Kaustubh heads Product and Validation at Biome. With over two decades of experience in building and scaling tech products and teams, he is the founder of The ProdZen - a product and strategy consulting company.",
      drives: "Kaustubh enjoys creating products from just an idea or improving existing products and scaling the business.",
      helps: ["Product and Validation", "Business Model Validation"],
    },
    {
      name: "Swappi Shinde",
      role: "Growth and Capital",
      image: "/swapnil.jpeg",
      description: "Leading Growth and Capital at Biome, Zaran has 8 years of experience in Venture Building and Venture Capital across India and South East Asia.",
      drives: "Zaran doubles up as a sounding board and shadow boxing partner for ideas on how to scale the business, position the product, raise funds, and navigate challenges on the startup journey.",
      helps: ["Fundraising", "Pitching", "Closing customers"],
    },
    {
      name: "Suresh Jain",
      role: "Operations & Admin",
      image: "/suresh.jpeg",
      description: "Khaja leads the Admin Department at Biome, and has 9 years of experience in coordinating and expediting the flow of work. His experience covers IT recruitment, HR, and Admin operations.",
      drives: "Khaja is dedicated to ensuring smooth and efficient operations, and is driven by a passion for administrative excellence and continuous improvement.",
      helps: ["Operational excellence and effective administration"],
    },
    {
      name: "Janet Luke",
      role: "Business Model Validation",
      image: "/janet.jpeg",
      description: "Mani champions validation experiments and primary research activities at Biome. A graduate of Cardiff University, Mani has over 10 years of entrepreneurial experience building and running SMBs.",
      drives: "Mani is passionate about building robust, repeatable frameworks and methodologies that derisk the entrepreneurial endeavour.",
      helps: ["Ideation", "Business Model Validation"],
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
        <div className="relative min-h-screen flex items-center justify-start">
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
                className="text-white font-bold mb-8 leading-none"
                style={{ fontSize: '100px', lineHeight: '0.9' }}
              >
                The Omnis<br />Founding Collective
              </h1>
              <p className="text-white text-xl max-w-3xl leading-relaxed">
                At Omnis, we believe world-changing ventures are built by diverse minds working as one. Our founding collective brings together finance leaders, product innovators, ecosystem builders, and capital experts—a team that acts as institutional co-founders for every venture we create.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section - Continuous with hero */}
        <div className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* First row - 4 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 4 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.slice(4, 8).map((member, index) => (
              <div
                key={index + 4}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {/* Avatar section */}
                <div className="h-48 bg-gradient-to-br from-orange-300 via-pink-300 to-red-300 relative flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Plus icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-700 text-lg font-light">+</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
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
