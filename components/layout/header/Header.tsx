"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "Home",
      hasDropdown: false,
      link: "/",
      //   dropdownItems: ["Home 1", "Home 2", "Home 3"],
    },
    {
      name: "Blog",
      hasDropdown: false,
      link: "/blogs",
      dropdownItems: ["Blog 1", "Blog 2"],
    },
    {
      name: "Gallery",
      hasDropdown: false,
      link: "/gallery",
    },
    {
      name: "About",
      hasDropdown: false,
      link: "/about-us",
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
      name: "Contact",
      hasDropdown: false,
      link: "/contact-us",
    },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Nae Thit Kyan Mar
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center py-2 text-base ${
                    activeDropdown === item.name
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  } transition-colors`}
                  onClick={() => !item.hasDropdown && router.push(item.link)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
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

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Join Button */}
          <button className=" hidden md:inline-block ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
            Join Us
          </button>

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

          <nav className="px-6 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-4">
                <button
                  className={`flex items-center justify-between w-full py-2 ${
                    activeDropdown === item.name
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                  onClick={() =>
                    item.hasDropdown &&
                    setActiveDropdown(
                      activeDropdown === item.name ? null : item.name
                    )
                  }
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 ml-1 transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
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

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block py-1 text-gray-600 hover:text-blue-600"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Join Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
