import FacilitiesSlider from "@/components/pages/home/Facilities";
import TestimonialsSlider from "@/components/pages/home/Testimonial";
import Image from "next/image";
import Link from "next/link";

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
      {/* <section className="relative h-fit bg-blue-900 text-white">
        <div className="">
          <Image
            src={"/imgs/banner.png"}
            alt="banner"
            width={1920}
            height={600}
            priority={true}
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
      </section> */}

      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/imgs/banner.png"
            alt="Healthcare background"
          />
          <div className="absolute inset-0 bg-secondary opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl drop-shadow-md">
              Providing Quality Healthcare with Affordable Solutions
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white drop-shadow-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam maxime praesentium Why did the scarecrow win an award?
              Because he was outstanding in his field. Lorem ipsum
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="bg-accent-orange text-white hover:bg-primary-dark px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
                Book Now
              </button>
              <button className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-secondary md:py-4 md:text-lg md:px-10 transition duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className=" container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-200 rounded-lg">
            <Image
              src={"/imgs/background.jpg"}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className=" text-lg md:text-3xl mb-3 font-bold text-gray-900">
              Background
            </h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis quae, consectetur adipisicing elit. Blanditiis quae,
              consectetur adipisicing elit. Blanditiis quae, perspiciatis maxime
              labore, cum aspernatur tempora molestias autem atque hic dolores
              aliquam nisi architecto veniam tempore corporis quis laudantium.
              Qui, neque. Rem mollitia consequuntur culpa...
            </p>
            <button className="text-yellow-400 mt-4 text-sm">Read More</button>
          </div>
        </div>
      </section>

      {/* Social Enterprise Section */}
      <section className=" container pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className=" order-2 md:order-1">
            <h3 className="text-lg md:text-3xl mb-3 font-bold text-gray-900">
              What is Social Enterprise?
            </h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              accusantium voluptatibus, consectetur adipisicing elit. Blanditiis
              quae, consectetur adipisicing elit. Blanditiis quae, consectetur
              adipisicing elit. Blanditiis quae, perferendis porro error a,
              impedit, sed laudantium nisi incidunt minima! Illo, vel quae
              consequuntur ab error eum culpa soluta enim, ullam hic a
              dignissimos saepe odio, vitae quibusdam dicta?...
            </p>
            <button className="text-yellow-400 mt-4 text-sm">Read More</button>
          </div>
          <div className="bg-gray-300 rounded-lg order-1 md:order-2">
            <Image
              src={"/imgs/special_heathcare.jpg"}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary-dark py-6 ">
        <div className=" container flex justify-between text-white text-center">
          <div>
            <p className="text-2xl font-bold">4</p>
            <p className="text-sm">Years of Service</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm">Clinics & Pharmacies</p>
          </div>
          <div>
            <p className="text-2xl font-bold">48</p>
            <p className="text-sm">Team Members</p>
          </div>
          <div>
            <p className="text-2xl font-bold">181,353</p>
            <p className="text-sm">Catchment Population</p>
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

      <FacilitiesSlider />

      {/* Services Section */}
      <section className=" py-10 bg-gray-50">
        <div className=" container">
          <div className="relative py-8 max-w-[200px] mx-auto">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 font-medium tracking-wider">
                Our Services
              </span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-14 text-center">
            Explore Our <span className="text-yellow-400">Services</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Consultation and medical care",
              "Pharmacy",
              "Online pharmacy",
              "Vaccination",
              "Telehealth",
              "Laboratory tests",
            ].map((service, index) => (
              <div
                key={index}
                className={`group rounded-lg border px-6 py-10 text-center hover:bg-primary hover:text-white`}
              >
                <Image
                  src={"/icons/building.png"}
                  alt={service}
                  width={30}
                  height={30}
                  className="mx-auto mb-4 filter group-hover:brightness-[5]"
                />
                <h3 className="font-semibold text-lg">{service}</h3>
                <p className=" text-gray-500 group-hover:text-gray-100">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi, adipisci.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto text-center mt-7">
          <Link
            href={"/our-services"}
            className=" text-secondary font-medium underline"
          >
            See more
          </Link>
        </div>
      </section>

      <TestimonialsSlider />
    </div>
  );
}
