// components/TestimonialsSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";

const testimonials = [
  {
    id: 1,
    name: "Daw Hla Hla",
    location: "NTKM-2",
    message:
      "Nobis voluptatem magni doloribus voluptate culpa dolor est neque. Nobis voluptatem magni doloribus voluptate culpa dolor est neque",
  },
  {
    id: 2,
    name: "U Mya",
    location: "NTKM-2",
    message:
      "Nobis voluptatem magni doloribus voluptate culpa dolor est neque. Nobis voluptatem magni doloribus voluptate culpa dolor est neque",
  },
  {
    id: 3,
    name: "Daw Mya",
    location: "NTKM-2",
    message:
      "Nobis voluptatem magni doloribus voluptate culpa dolor est neque. Nobis voluptatem magni doloribus voluptate culpa dolor est neque",
  },
  {
    id: 4,
    name: "U Tun",
    location: "NTKM-2",
    message:
      "Nobis voluptatem magni doloribus voluptate culpa dolor est neque. Nobis voluptatem magni doloribus voluptate culpa dolor est neque",
  },
];

export default function TestimonialsSlider() {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" container px-4 py-10">
        <div className="relative py-8 max-w-[200px] mx-auto">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 font-medium tracking-wider">
              {t("testimonial")}
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          What People <span className="text-yellow-500">Say?</span>
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
          }}
          className="!pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white p-6 rounded-xl text-center">
                <Image
                  src={"/icons/left.png"}
                  width={40}
                  height={40}
                  alt="left"
                  className="mx-auto mb-4"
                />
                <p className="italic text-gray-700 mb-4">"{t.message}"</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* gray-300 */
            opacity: 1;
            width: 12px;
            height: 5px;
            border-radius: 3px;
          }

          .swiper-pagination-bullet-active {
            background-color: #293a8a; /* amber-500 */
          }
        `}</style>
      </div>
    </div>
  );
}
