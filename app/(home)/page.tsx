import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Donation",
      description:
        "Support our causes with financial contributions that help fund critical programs and initiatives.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and make a hands-on difference in your community.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Events",
      description:
        "Participate in our charity events that bring communities together for meaningful causes.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Causes",
      description:
        "Discover and support the various causes we champion to create positive change.",
    },
  ];

  const stats = [
    { value: "1,200+", label: "Volunteers" },
    { value: "$5M+", label: "Donations" },
    { value: "50+", label: "Events" },
    { value: "25+", label: "Causes" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-fit bg-blue-900 text-white">
        <div className="">
          <Image
            src={"/imgs/banner.png"}
            alt="banner"
            width={1920}
            height={600}
            className=" w-full h-[calc(100vh-100px)] md:h-[600px] lg:h-auto object-cover"
          />
        </div>
        <div className="absolute top-0 inset-0 bg-black opacity-60 h-full"></div>
        <div className=" absolute top-0 w-full">
          <div className="  container mx-auto px-4 py-32 relative z-10">
            <div className=" mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-normal mb-6">
                Making a Difference in People's Lives
              </h1>
              <p className="text-xl mb-8">
                Join us in our mission to create positive change through
                charitable giving and community service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-accent-orange text-white hover:bg-primary-dark px-6 py-3 rounded-md font-semibold transition-colors">
                  Donate Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer various ways for you to get involved and make an impact
              in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-base-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of changemakers today and start creating positive
            impact.
          </p>
          <button className="bg-accent-orange text-white hover:bg-primary-dark px-8 py-3 rounded-md font-semibold text-lg transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
