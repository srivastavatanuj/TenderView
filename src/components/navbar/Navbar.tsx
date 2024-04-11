"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItems from "./NavItems";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="border-b border-grey-200">
          <MaxWidthWrapper className="max-w-none">
            <div className="flex h-16 items-center justify-between px-5 2xl:px-0">
              <div className="ml-4 flex lg:ml-0 ">
                <Link href="/">
                  <Image
                    src={"/Main-Logo.png"}
                    alt="TradingView"
                    height={0}
                    width={100}
                  />
                </Link>
              </div>

              <div className="z-50 md:ml-8 md:self-strech">
                <div>
                  <NavItems
                    showSideMenu={showSideMenu}
                    setShowSideMenu={setShowSideMenu}
                  />
                </div>
                <div className="md:hidden">
                  <Menu onClick={() => setShowSideMenu(!showSideMenu)} />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
