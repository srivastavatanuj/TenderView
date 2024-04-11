import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20 xl:max-w-[1440px] xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
