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
          In 2022, Nae Thit Co., Ltd. By Guarantee, a social enterprise, was
          established and provides quality healthcare services to the community
          by forming Nae Thit Kyan Mar. Nae Thit Kyan Mar is a chain of clinics
          that fill the gap in the health services needed in the community by
          giving quality healthcare services at subsidized prices in innovative
          ways. We provide quality healthcare services with affordable prices to
          the community in urban and peri-urban areas. The aim of Nae Thit Kyan
          Mar Clinics is to provide value, not only to the patients but also to
          the community, changing lives and better social impact...
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
