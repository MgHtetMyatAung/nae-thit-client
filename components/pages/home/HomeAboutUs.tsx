"use client";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import React from "react";

export default function HomeAboutUs() {
  const { t } = useTranslation();
  return (
    <>
      {" "}
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
              {t("about_us")}
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
            <h2 className=" text-lg md:text-3xl mb-3 font-bold text-accent-orange">
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
              {t("read_more")}
            </button>
          </div>
        </div>
      </section>
      {/* Social Enterprise Section */}
      <section className=" container pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className=" order-2 md:order-1">
            <h3 className="text-lg md:text-3xl mb-3 font-bold text-accent-orange">
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
              {t("read_more")}
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
    </>
  );
}
