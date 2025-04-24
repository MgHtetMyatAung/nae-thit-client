import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Dr. Kaung Myat Sithu",
      role: "General Manager",
      image: "/profile/dr_kaung.png",
      bio: "With over 15 years in nonprofit leadership, Sarah founded Charities in 2010 to create systemic change.",
    },
    {
      name: "Dr. Zan Lin Tun",
      role: "Medical Operation Manager",
      image: "/profile/dr_zan.png",
      bio: "Michael oversees all charitable programs with expertise in community development.",
    },
    {
      name: "Mrs. Yin Yin Aung",
      role: "Finance Manager",
      image: "/profile/mr_yin.png",
      bio: "Aisha manages our 1,200+ volunteers and community partnerships.",
    },
    {
      name: "Dr. Okka Minn",
      role: "Strategic Product Manager",
      image: "/profile/dr_okka.png",
      bio: "David ensures financial transparency and maximizes donor impact.",
    },
  ];

  const values = [
    {
      title: "Sustainability",
      icon: "❤️",
      description:
        "We build a sustainable healthcare model that ensures long-term well-being through responsible resource management and strategic partnerships.",
    },
    {
      title: "Learning",
      icon: "🔒",
      description:
        "We foster a culture of continuous learning, empowering our team to stay at the forefront of medical advancements for better patient care.",
    },
    {
      title: "Innovation",
      icon: "✨",
      description:
        "We measure success by lives changed, not just dollars spent.",
    },
    {
      title: "Leadership",
      icon: "👥",
      description:
        "We lead with integrity, setting high standards and inspiring excellence through transparency, vision, and decisive action.",
    },
    {
      title: "Collaboration/ Teamwork",
      icon: "💡",
      description:
        "We work seamlessly across teams, partners, and communities, leveraging collective expertise to deliver impactful healthcare solutions.",
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
                In 2022, Nae Thit Co., Ltd. By Guarantee, a social enterprise,
                was established and provides quality healthcare services to the
                community by forming Nae Thit Kyan Mar.
              </p>
              <p>
                Nae Thit Kyan Mar is a chain of clinics that fill the gap in the
                health services needed in the community by giving quality
                healthcare services at subsidized prices in innovative ways. We
                provide quality healthcare services with affordable prices to
                the community in urban and peri-urban areas.
              </p>
              <p>
                The aim of Nae Thit Kyan Mar Clinics is to provide value, not
                only to the patients but also to the community, changing lives
                and better social impact.
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
                To be the leading self-sustainable healthcare social enterprise
                in Myanmar, transforming lives through innovative and
                comprehensive healthcare solutions
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
            Meet Our Leadership
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-secondary font-medium my-2">
                    {member.role}
                  </p>
                  {/* <p className="text-gray-600">{member.bio}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16 bg-blue-600 text-white">
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
      </section> */}
    </div>
  );
}
