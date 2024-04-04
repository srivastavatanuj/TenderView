"use client";

import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import options from "../optionData";

const filterOptions = [
  { name: "State", options: options.state },
  { name: "District", options: options.district },
  { name: "Category", options: options.category },
  { name: "Department", options: options.department },
];

const Sidebar = () => {
  return (
    <div className="min-w-[250px] fixed ">
      <h3 className="text-xl xl:text-3xl font-medium font-sans py-3 px-4 xl:p-4  text-white">
        <p className="border-b pb-4"> Filters</p>
      </h3>

      <div className="px-4 py-1 xl:py-4">
        {filterOptions.map((filter) => {
          return (
            <div className="py-2 xl:py-4" key={filter.name}>
              <p className="xl:text-lg text-sm font-semibold font-mono text-white">
                {filter.name}
              </p>
              <AsyncSelect
                isMulti
                cacheOptions
                defaultOptions
                minMenuHeight={100}
              />
            </div>
          );
        })}
        <div className="xl:py-4 py-2 flex items-center gap-2">
          <Checkbox className=" bg-white" />
          <p className="font-normal text-sm xl:text-lg  text-white">
            Corrigendum Only
          </p>
        </div>

        <div className="xl:py-4 py-1 flex items-center gap-4">
          <Button variant={"outline"} className="font-bold ">
            Reset
          </Button>
          <Button className="font-bold bg-[#e5e1da] text-[#474541]">
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
