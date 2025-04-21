// components/FacilitiesSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const facilities = [
  { id: 1, name: "NTKM – 1", img: "/imgs/clinic.jpg", hours: "8am - 5pm" },
  { id: 2, name: "NTKM – 2", img: "/imgs/clinic.jpg", hours: "9am - 6pm" },
  { id: 3, name: "NTKM – 3", img: "/imgs/clinic.jpg", hours: "10am - 4pm" },
  { id: 4, name: "NTKM – 4", img: "/imgs/clinic.jpg", hours: "10am - 5pm" },
  { id: 5, name: "NTKM – 5", img: "/imgs/clinic.jpg", hours: "10am - 5pm" },
];

export default function FacilitiesSlider() {
  return (
    <div className=" container">
      <div className="w-full py-10">
        <div className="relative py-8 max-w-[250px] mx-auto">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 font-medium tracking-wider">
              Our Clinics & Pharmacies
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Explore Our <span className="text-yellow-500">Facilities</span>
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {facilities.map((f) => (
            <SwiperSlide key={f.id}>
              <div className="rounded overflow-hidden shadow-lg">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-gray-500">
                    Opening Hours: {f.hours}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
