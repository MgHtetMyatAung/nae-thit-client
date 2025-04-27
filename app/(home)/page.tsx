import FacilitiesSlider from "@/components/pages/home/Facilities";
import TestimonialsSlider from "@/components/pages/home/Testimonial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      id: 1,
      name: "Primary Care",
      img: "/source/heath_care.png",
      link: "/our-services",
    },
    {
      id: 2,
      name: "Specialist Care",
      img: "/source/teleheath_care.png",
      link: "/our-services",
    },
    {
      id: 3,
      name: "Emergency Care",
      img: "/source/special_care.png",
      link: "/our-services",
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
              <button className="bg-primary-dark text-white hover:bg-accent-orange px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
                Explore More
              </button>
              {/* <button className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-secondary md:py-4 md:text-lg md:px-10 transition duration-300">
                Explore More
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className=" container pb-16 pt-8">
        <div className="relative py-8 max-w-[200px] mx-auto">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 font-medium tracking-wider">
              About Us
            </span>
          </div>
        </div>
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
            <p className=" text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis quae, consectetur adipisicing elit. Blanditiis quae,
              consectetur adipisicing elit. Blanditiis quae, perspiciatis maxime
              labore, cum aspernatur tempora molestias autem atque hic dolores
              aliquam nisi architecto veniam tempore corporis quis laudantium.
              Qui, neque. Rem mollitia consequuntur culpa...
            </p>
            <button className="text-primary-dark mt-4 text-sm">
              Read More
            </button>
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
            <p className=" text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              accusantium voluptatibus, consectetur adipisicing elit. Blanditiis
              quae, consectetur adipisicing elit. Blanditiis quae, consectetur
              adipisicing elit. Blanditiis quae, perferendis porro error a,
              impedit, sed laudantium nisi incidunt minima! Illo, vel quae
              consequuntur ab error eum culpa soluta enim, ullam hic a
              dignissimos saepe odio, vitae quibusdam dicta?...
            </p>
            <button className="text-primary-dark mt-4 text-sm">
              Read More
            </button>
          </div>
          <div className="bg-gray-300 rounded-lg order-1 md:order-2">
            <Image
              src={"/imgs/clinic.jpg"}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className=" bg-primary py-6 md:py-10">
        <div className="container">
          <Image
            src={"/source/logo_white.png"}
            alt="Logo"
            width={300}
            height={300}
            priority={true}
            className="mx-auto w-[200px] h-auto md:w-[300px]"
          />
        </div>
      </section>

      <section className=" py-16">
        <div className=" container mx-auto">
          <h2 className=" text-xl lg:text-2xl font-bold text-center mb-3">
            Introducing{" "}
            <span className=" text-primary-dark">Nae Thit Kyan Mar</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            minima aut architecto neque, nam ut exercitationem atque deleniti
            saepe culpa officiis! Sequi, vitae corrupti alias ullam dolor
            consequatur eius rem recusandae blanditiis molestias, odit ipsa
            deleniti. Atque cupiditate, Nisi sunt quae deleniti soluta dolorem.
            Distinctio libero voluptates id fuga vitae provident temporibus
            cupiditate tempora laudantium et, ut aspernatur natus velit
            exercitationem hic recusandae neque illo similique. Nisi dolorum
            perspiciatis magni necessitatibus similique explicabo corporis
            cumque...
          </p>
          <div className="container mx-auto text-center mt-7">
            <Link
              href={"/about-us#intro"}
              className=" text-secondary font-medium underline"
            >
              See more
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary py-6 ">
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
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white shadow rounded-lg border px-6 py-8 text-center hover:bg-primary hover:text-white`}
              >
                <Image
                  src={service.img}
                  alt={service.name}
                  width={60}
                  height={60}
                  className="mx-auto mb-4 filter group-hover:brightness-[5]"
                />
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className=" text-gray-500 group-hover:text-gray-100 mt-2">
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
