import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="border-b border-grey-200">
          <MaxWidthWrapper className="max-w-none">
            <div className="flex h-16 items-center justify-between">
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

              <div className="hidden z-50 sm:ml-8 sm:block sm:self-strech">
                <NavItems />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
