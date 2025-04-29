"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LangSwitchBtn from "./LangSwitchBtn";
import { useLangStore } from "@/hooks/useLangStore";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const navItems = [
  {
    key: "home",
    hasDropdown: false,
    link: "/",
    //   dropdownItems: ["Home 1", "Home 2", "Home 3"],
  },
  {
    key: "about",
    hasDropdown: true,
    link: "/about-us",
    dropdownItems: [
      { key: "about_us", link: "/about-us" },
      {
        key: "our_team",
        link: "/about-us#our-team",
      },
    ],
  },
  {
    key: "our_services",
    hasDropdown: false,
    link: "/our-services",
  },
  {
    key: "blogs",
    hasDropdown: false,
    link: "/blogs",
    // dropdownItems: ["Blog 1", "Blog 2"],
  },

  // {
  //   name: "Pages",
  //   hasDropdown: true,
  //   dropdownItems: ["Page 1", "Page 2", "Page 3"],
  // },
  // {
  //   name: "Donation",
  //   hasDropdown: true,
  //   dropdownItems: ["Donate 1", "Donate 2"],
  // },
  // {
  //   name: "Event",
  //   hasDropdown: true,
  //   dropdownItems: ["Event 1", "Event 2", "Event 3"],
  // },

  {
    key: "contact_us",
    hasDropdown: false,
    link: "/contact-us",
  },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { lang } = useLangStore();
  const t = useTranslations("Header");

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div
            className=" flex items-center select-none cursor-pointer py-4"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/source/logo.png"}
              alt="logo"
              width={100}
              height={100}
              className=" w-[60px] h-auto"
            />
            <span className=" text-lg font-semibold text-accent-orange">
              {t("title")}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 h-full">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative h-full py-6 group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.key)
                }
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button
                  className={`  flex items-center font-medium ${
                    activeDropdown === item.key
                      ? "text-blue-600"
                      : "text-secondary hover:text-blue-600"
                  } transition-colors`}
                  onClick={() => !item.hasDropdown && router.push(item.link)}
                >
                  {t(`${item.key}`)}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-2 group-hover:rotate-180
                      transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.key && (
                  <div className="absolute left-0 top-[70px] w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.link}
                        href={`${dropdownItem.link}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-secondary"
                      >
                        {t(`${dropdownItem.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Join Button */}
          <div className="py-4">
            <LangSwitchBtn isMobile={false} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div className="absolute inset-y-0 right-0 w-4/5 bg-white shadow-xl">
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="px-6">
            {navItems.map((item) => (
              <div key={item.key} className="mb-4">
                <button
                  className={`flex items-center justify-between font-medium w-full py-2 ${
                    activeDropdown === item.key
                      ? "text-blue-600"
                      : "text-secondary hover:text-blue-600"
                  }`}
                  onClick={() => {
                    item.hasDropdown &&
                      setActiveDropdown(
                        activeDropdown === item.key ? null : item.key
                      );
                    !item.hasDropdown && router.push(item.link);
                    !item.hasDropdown && setMobileMenuOpen(false);
                  }}
                >
                  {t(`${item.key}`)}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 ml-1 transform ${
                        activeDropdown === item.key ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.key && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.link}
                        href="#"
                        className="block py-1 text-gray-600 hover:text-blue-600"
                        onClick={() => {
                          router.push(dropdownItem.link);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t(`${dropdownItem.key}`)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <LangSwitchBtn isMobile={true} />
          </nav>
        </div>
      </div>
    </header>
  );
}
