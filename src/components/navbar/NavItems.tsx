"use client";

import { useState } from "react";
import "./navitems.css";
import { useRouter } from "next/navigation";

const NavItems = () => {
  const router = useRouter();
  const menuItems = [
    { name: "Home", page: "/" },
    { name: "Tenders", page: "/tenders" },
    { name: "Pricing", page: "/pricing" },
    { name: "Request a Demo", page: "/demo" },
  ];
  return (
    <div className="flex navitems">
      <div className="md:absolute md:left md:left-1/2 md:-translate-x-1/2">
        {menuItems.map((item) => {
          return (
            <span
              key={item.name}
              className="lg:ml-6 ml-3 text-sm xl:text-lg"
              onClick={() => router.push(item.page)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div>
        <span
          className="lg:ml-6 ml-3 text-sm xl:text-lg"
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </span>
        <span
          className="lg:ml-6 ml-3 text-sm xl:text-lg"
          onClick={() => router.push("/auth")}
        >
          Sign in
        </span>
      </div>
    </div>
  );
};

export default NavItems;
