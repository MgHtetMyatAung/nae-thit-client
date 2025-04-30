"use client";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";
import React from "react";

export default function HomeIntro() {
  const { t } = useTranslation();
  return (
    <section className=" py-16">
      <div className=" container mx-auto">
        <h2 className=" text-xl lg:text-2xl font-bold text-center mb-3">
          Introducing <span className=" text-primary">Nae Thit Kyan Mar</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque minima
          aut architecto neque, nam ut exercitationem atque deleniti saepe culpa
          officiis! Sequi, vitae corrupti alias ullam dolor consequatur eius rem
          recusandae blanditiis molestias, odit ipsa deleniti. Atque cupiditate,
          Nisi sunt quae deleniti soluta dolorem. Distinctio libero voluptates
          id fuga vitae provident temporibus cupiditate tempora laudantium et,
          ut aspernatur natus velit exercitationem hic recusandae neque illo
          similique. Nisi dolorum perspiciatis magni necessitatibus similique
          explicabo corporis cumque...
        </p>
        <div className="container mx-auto text-center mt-7">
          <Link
            href={"/about-us#intro"}
            className=" text-secondary font-medium underline"
          >
            {t("see_more")}
          </Link>
        </div>
      </div>
    </section>
  );
}
