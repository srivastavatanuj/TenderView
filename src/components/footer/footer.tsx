import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-10 bg-[var(--theme-color-green)] z-10 hidden md:block">
      <MaxWidthWrapper className="flex justify-between">
        <div>
          <Image
            src={"/Main-Logo.png"}
            alt="TenderView"
            height={0}
            width={200}
          />
          <p>All tenders in one place.</p>
          <p>All tenders in one place.</p>
        </div>
        <div className="flex flex-col justify-end">
          Email:
          <p>support@tenderview.com</p>
          <br />
          Follow us:
        </div>
      </MaxWidthWrapper>
      <div className="text-center text-sm mt-5 text-white font-bold">
        Copyright© 2024 TenderView. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
