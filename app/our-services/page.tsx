"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function OurServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryFilters = ["All", "Events", "Volunteers", "Community", "Causes"];

  const galleryImages = [
    {
      id: 1,
      category: "Events",
      title: "Annual Charity Gala 2023",
      description:
        "Our fundraising gala raised over $250,000 for education programs",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 2,
      category: "Volunteers",
      title: "Food Packing Day",
      description: "Volunteers preparing meals for 500+ families",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 3,
      category: "Community",
      title: "School Supplies Drive",
      description: "Distributing backpacks to local students",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 4,
      category: "Causes",
      title: "Clean Water Initiative",
      description: "Installing water filters in rural communities",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 5,
      category: "Events",
      title: "Charity Fun Run",
      description: "500 participants raised funds for health clinics",
      image:
        "https://images.unsplash.com/photo-1530137073520-4d1a3f9d1a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 6,
      category: "Volunteers",
      title: "Senior Companion Program",
      description: "Volunteers visiting isolated elderly community members",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 7,
      category: "Community",
      title: "Neighborhood Cleanup",
      description: "Over 100 volunteers transformed local parks",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 8,
      category: "Causes",
      title: "Disaster Relief Efforts",
      description: "Providing emergency supplies after floods",
      image:
        "https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 9,
      category: "Events",
      title: "Holiday Toy Drive",
      description: "Collecting gifts for 1,200 children in need",
      image:
        "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: string) => {
    if (direction === "prev") {
      setCurrentImage((prev) =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImage((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl">
            We are dedicated to making a positive impact in our community
            through various services.
          </p>
        </div>
      </section>

      <section className=" py-10 bg-gray-50">
        <div className=" container">
          {/* <div className="relative py-8 max-w-[200px] mx-auto">
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
          </div> */}
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
              "ECG and USG",
              "Family planning",
              "Subsidized healthcare",
              // "Medical check-up",
              // "Dental care",
              // "Eye care",
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
      </section>
    </div>
  );
}
