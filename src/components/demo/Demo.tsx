import {
  MessageCircleQuestion,
  Filter,
  CloudDownload,
  FolderCheck,
} from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const aboutData = [
  {
    name: "Unified Tender Database",
    Icon: <FolderCheck />,
    about:
      "Access and manage all tenders from across the country in one convenient platform.",
  },
  {
    name: "Advance Filters",
    Icon: <Filter />,
    about:
      "Quickly find relevant tenders using advanced search filters tailored to your specific needs.",
  },
  {
    name: "Daily Updates",
    Icon: <CloudDownload />,
    about:
      "Stay updated with all new tenders matching your criteria, ensuring you never miss an opportunity.",
  },
  {
    name: "Support",
    Icon: <MessageCircleQuestion />,
    about: "Increase customer satisfaction with 24/7 support",
  },
];

const Demo = () => {
  return (
    <MaxWidthWrapper className="max-w px-0 sm:px-2.5">
      <div className="flex justify-between md:py-10 lg:px-10 2xl:px-0 flex-col md:flex-row">
        <div>
          <h3 className="text-center text-2xl py-5 font-medium md:hidden">
            Request a Demo
          </h3>
        </div>
        <div className="w-1/2 px-5 max-w-[500px] hidden md:block">
          <div>
            <h1 className="text-4xl font-bold ">Experience Our Solution</h1>
          </div>
          <div>
            <h3 className="my-5 font-normal text-gray-600 text-lg">
              Simplify Your Tender Management: Request a Demo Today!
            </h3>
            {aboutData.map((about) => {
              return (
                <div className="flex my-8 gap-3">
                  <div className="border bg-[var(--theme-color-cream-light)] p-3 h-1/3 rounded-xl text-gray-600">
                    <div>{about.Icon}</div>
                  </div>

                  <div>
                    <h3 className="font-medium text-xl">{about.name}</h3>
                    <p className="text-gray-600 text-sm">{about.about}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
        </div>

        <div className="w-full m-auto md:w-1/2 md:m-2 sm:border-4 rounded-2xl p-5 sm:p-10 sm:border-[#3ca0af] max-w-[600px]">
          <div className=" grid   gap-5">
            <div className="grid">
              <Label className="font-bold text-gray-700 mb-1">Full Name</Label>
              <Input />
            </div>
            <div className="grid">
              <Label className="font-bold text-gray-700 mb-1">Phone</Label>
              <Input />
            </div>
            <div className="grid">
              <Label className="font-bold text-gray-700 mb-1">
                Company Name
              </Label>
              <Input />
            </div>
            <div className="grid">
              <Label className="font-bold text-gray-700 mb-1">State</Label>
              <Input />
            </div>
          </div>

          <div className="grid gap-5 my-5">
            <div className="flex gap-2 ">
              <Checkbox />
              <span className="text-xs">
                Yes, I’d like to receive marketing communications regarding
                TenderView products, services, and events. I can unsubscribe at
                any time.
              </span>
            </div>
            <div className="text-xs">
              By clicking the submit button, you agree to allow TenderView to
              store and process the information above for contact purposes.
              Please read our Privacy Policy.
            </div>
          </div>

          <div className="text-center">
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Demo;
