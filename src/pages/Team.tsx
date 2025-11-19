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
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <div className="mb-8">
              <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-4">
                THE TEAM
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                The <span className="text-orange-500">Omnis</span> Founding Collective
              </h1>
            </div>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
              At Omnis, we believe world-changing ventures are built by diverse minds working as one. Our founding collective brings together finance leaders, product innovators, ecosystem builders, and capital experts—a team that acts as institutional co-founders for every venture we create.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6">
          {/* First row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedMember(member)}
              >
                {/* Image section with overlay */}
                <div className="h-64 sm:h-72 md:h-80 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining rows - 3 members each */}
          <div className="space-y-8">
            {[0, 1, 2].map((rowIndex) => {
              const startIndex = 3 + rowIndex * 3;
              const rowMembers = teamMembers.slice(startIndex, startIndex + 3);

              if (rowMembers.length === 0) return null;

              return (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {rowMembers.map((member, index) => (
                    <div
                      key={startIndex + index}
                      className="group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedMember(member)}
                    >
                      {/* Image section with overlay */}
                      <div className="h-64 sm:h-72 md:h-80 relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Detail Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{selectedMember.name}</h3>
                  <p className="text-lg font-medium text-orange-500">{selectedMember.role}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-300 p-2"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-white">What drives them</h4>
                  <p className="text-gray-400 leading-relaxed">{selectedMember.drives}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-white">As a co-founder, helps startups with</h4>
                  <div className="text-gray-400">
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
