"use client";

import { useRouter, usePathname } from "next/navigation";

const NavItems = ({ showSideMenu, setShowSideMenu }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const menuItems = [
    { name: "Home", page: "/" },
    { name: "Tenders", page: "/tenders" },
    { name: "Pricing", page: "/pricing" },
    { name: "Request a demo", page: "/demo" },
  ];

  const isActive = (href: any) => pathname == href;

  return (
    <div
      className={`absolute md:static ${
        showSideMenu ? "right-0 duration-700" : "-right-[1000px] duration-700 "
      }  top-16 bg-[#3ca0af] text-center py-10 w-full h-screen sm:w-[300px] md:bg-transparent md:w-auto md:h-auto flex flex-col gap-5 md:gap-0`}
    >
      <div className="flex flex-col md:flex-row md:absolute md:left md:left-1/2 md:-translate-x-1/2 gap-5 md:gap-0">
        {menuItems.map((item) => (
          <span
            key={item.name}
            className={`lg:ml-6 ml-3 text-2xl md:text-sm xl:text-lg cursor-pointer font-bold md:font-normal hover:text-[var(--theme-color-green)]  text-white md:text-black ${
              isActive(item.page)
                ? "border-b-2 border-[var(--theme-color-green)]"
                : ""
            }`}
            onClick={() => {
              router.push(item.page);
              setShowSideMenu(false);
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0">
        <span
          className={`lg:ml-6 ml-3 text-2xl md:text-sm xl:text-lg cursor-pointer font-bold md:font-normal hover:text-[var(--theme-color-green)]  text-white md:text-black ${
            isActive("/contact-us")
              ? "border-b-2 border-[var(--theme-color-green)]"
              : ""
          }`}
          onClick={() => {
            router.push("/contact-us");
            setShowSideMenu(false);
          }}
        >
          Contact Us
        </span>
        <span
          className={`lg:ml-6 ml-3 text-2xl md:text-sm xl:text-lg cursor-pointer font-bold md:font-normal hover:text-[var(--theme-color-green)]  text-white md:text-black ${
            isActive("/auth")
              ? "border-b-2 border-[var(--theme-color-green)]"
              : ""
          }`}
          onClick={() => {
            router.push("/auth");
            setShowSideMenu(false);
          }}
        >
          Sign in
        </span>
      </div>
    </div>
  );
};

export default NavItems;
