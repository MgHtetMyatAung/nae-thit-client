"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";

const missions = [
  {
    title: "Lorem ipsum dolor, sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, officiis esse? Assumenda fugit doloremque illum?",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, officiis esse? Assumenda fugit doloremque illum?",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, officiis esse? Assumenda fugit doloremque illum?",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, officiis esse? Assumenda fugit doloremque illum?",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, officiis esse? Assumenda fugit doloremque illum?",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, officiis esse? Assumenda fugit doloremque illum?",
  },
];

export default function OurMission() {
  const { t } = useTranslation();
  return (
    <section className=" bg-gray-50">
      <div className=" container px-4 py-10 overflow-x-hidden">
        <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Our <span className="text-primary">Mission</span>
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
          {missions.map((item, idx) => (
            <SwiperSlide key={idx} className="">
              <div className="bg-white px-6 py-10 rounded-xl text-center shadow relative">
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className="italic text-gray-700 ">{item.description}</p>
                {/* <p className="text-sm text-gray-500">{t.location}</p> */}
                <div className=" w-full  absolute top-0 left-0">
                  <div className="w-14 h-14 rounded-full bg-primary text-white mx-auto -mt-7 grid place-items-center">
                    <span className=" text-3xl font-bold">{idx + 1}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper {
            overflow: visible;
          }
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* gray-300 */
            opacity: 1;
            width: 12px;
            height: 5px;
            border-radius: 3px;
          }

          .swiper-pagination-bullet-active {
            background-color: #ffc63e; /* amber-500 */
          }
        `}</style>
      </div>
    </section>
  );
}
