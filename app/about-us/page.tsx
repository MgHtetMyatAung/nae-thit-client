import React from "react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "With over 15 years in nonprofit leadership, Sarah founded Charities in 2010 to create systemic change.",
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Michael oversees all charitable programs with expertise in community development.",
    },
    {
      name: "Aisha Williams",
      role: "Volunteer Coordinator",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Aisha manages our 1,200+ volunteers and community partnerships.",
    },
    {
      name: "David Rodriguez",
      role: "Finance Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "David ensures financial transparency and maximizes donor impact.",
    },
  ];

  const values = [
    {
      title: "Compassion",
      icon: "❤️",
      description: "We lead with empathy in all our interactions and programs.",
    },
    {
      title: "Integrity",
      icon: "🔒",
      description: "We maintain the highest ethical standards in our work.",
    },
    {
      title: "Impact",
      icon: "✨",
      description:
        "We measure success by lives changed, not just dollars spent.",
    },
    {
      title: "Community",
      icon: "👥",
      description: "We believe in the power of collective action.",
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "We constantly seek better solutions to social challenges.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-normal mb-4 text-center">
            About Us
          </h1>
          <p className="text-xl max-w-2xl text-center mx-auto">
            Learn about our mission, values, and the team dedicated to creating
            positive change.
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in 2010, Charities began as a small community initiative
                in response to local needs. What started as a neighborhood food
                drive has grown into a nationally recognized nonprofit
                organization serving over 500,000 people annually.
              </p>
              <p>
                Our journey has been marked by the collective effort of
                thousands of volunteers, donors, and community partners who
                believe in our vision of a more equitable society. Each year, we
                expand our programs based on community needs and impact
                assessments.
              </p>
              <p>
                Today, we operate in 12 states with 35 dedicated staff members
                and a network of 1,200+ volunteers. Our financials are publicly
                available, with 87% of every dollar going directly to program
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                A world where every individual has access to basic needs,
                opportunities for growth, and the support of a caring
                community—regardless of their circumstances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower underserved communities through sustainable programs
                in education, nutrition, and economic development while
                fostering a culture of service and philanthropy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50" id="our-team">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or spreading awareness—your
            support makes our work possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold">
              Volunteer With Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-semibold">
              Meet Our Partners
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
