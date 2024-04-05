import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { FileSearch, Clock2, Handshake } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Easy Search",
    Icon: FileSearch,
    description:
      "Efficiently find relevant tenders with powerful search and filtering options, tailored to your preferences, saving time and effort.",
  },
  {
    name: "Time-saving",
    Icon: Clock2,
    description:
      "Maximize efficiency with automated tasks for document preparation, submission tracking, and deadline reminders, allowing more focus on crafting successful proposals.",
  },
  {
    name: "Expert Insights and Guidance",
    Icon: Handshake,
    description:
      "Access expert insights and guidance to navigate the tendering process effectively, leveraging best practices, bid strategies, and industry trends for competitive and winning proposals.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            All Yours <span className="text-blue-600 textColor">Tenders</span>{" "}
            in One Place.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-[#194248]">
            Welcome to TenderView. We are making your experience more seamless
            and simplifying your procurement process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Tenders
            </Link>
            <Button variant="ghost">Request a Demo &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-center md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#3ca0af] text-white">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg-ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="text-sm mt-3 text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
