"use client";
import useTranslation from "@/hooks/useTranslation";
import React from "react";

export default function HeroBanner() {
  const { t } = useTranslation();
  return (
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
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl drop-shadow-md"
            style={{ lineHeight: "1.2" }}
          >
            Providing Quality Healthcare with Affordable Solutions
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white drop-shadow-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            maxime praesentium Why did the scarecrow win an award? Because he
            was outstanding in his field. Lorem ipsum
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-primary-dark text-white hover:bg-accent-orange px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
              {t("explore_more")}
            </button>
            {/* <button className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-secondary md:py-4 md:text-lg md:px-10 transition duration-300">
                    Explore More
                  </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
