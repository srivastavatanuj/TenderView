"use client";

import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import options from "../optionData";
import { useState } from "react";

const workOptions = [
  { name: "Department", options: options.department },
  { name: "Category", options: options.category },
];

const Sidebar = ({ data, setFilteredData, mobileView }: any) => {
  const [state, setState] = useState("");

  const locationOptions: { name: string; options: string[] }[] = [
    { name: "State", options: options.state },
    {
      name: "District",
      options: options.district[state as any],
    },
  ];

  return (
    <div className={`min-w-[250px] ${mobileView ? "" : "fixed"}`}>
      <h3 className="text-xl xl:text-3xl font-medium font-sans pt-9 px-4 xl:pt-9 hidden md:block">
        <p className="border-b pb-3 text-gray-700"> Filters</p>
      </h3>

      <div className="px-4 py-1 xl:py-4">
        {locationOptions.map((filter) => {
          return (
            <div className="xl:pb-3 w-[218px]" key={filter.name}>
              <p className="xl:text-sm text-sm font-medium  ">
                {filter.name.toUpperCase()}
              </p>
              <Select
                name={filter.name}
                options={filter.options}
                menuPosition="fixed"
                onChange={(e: any) => {
                  setState(e.value);
                }}
              />
            </div>
          );
        })}

        {workOptions.map((filter) => {
          return (
            <div className="xl:pb-3 w-[218px]" key={filter.name}>
              <p className="xl:text-sm text-sm font-medium  ">
                {" "}
                {filter.name.toUpperCase()}
              </p>
              <Select
                name={filter.name}
                menuPosition="fixed"
                options={filter.options}
              />
            </div>
          );
        })}
        <div className="xl:pb-3 flex items-center gap-2">
          <Checkbox className=" bg-white" />
          <p className="font-normal text-sm">Corrigendum Only</p>
        </div>

        <div className="xl:py-4 py-1 flex items-center gap-4">
          <Button variant={"ghost"} className="font-bold ">
            Reset
          </Button>
          <Button className="font-bold bg-[#3ca0af] text-white">Filter</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
