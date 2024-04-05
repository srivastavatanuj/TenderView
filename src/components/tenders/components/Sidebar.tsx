"use client";

import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import options from "../optionData";
import { useState } from "react";

const workOptions = [
  { name: "Category", options: options.category },
  { name: "Department", options: options.department },
];

const Sidebar = ({ data, setFilteredData }: any) => {
  const [state, setState] = useState("");

  const locationOptions: { name: string; options: string[] }[] = [
    { name: "State", options: options.state },
    {
      name: "District",
      options: options.district[state as any],
    },
  ];

  return (
    <div className="min-w-[250px] fixed ">
      <h3 className="text-xl xl:text-3xl font-medium font-sans py-3 px-4 xl:p-4  text-white">
        <p className="border-b pb-4"> Filters</p>
      </h3>

      <div className="px-4 py-1 xl:py-4">
        {locationOptions.map((filter) => {
          return (
            <div className="py-2 xl:py-4 w-[218px]" key={filter.name}>
              <p className="xl:text-lg text-sm font-semibold font-mono text-white">
                {filter.name}
              </p>
              <Select
                name={filter.name}
                options={filter.options}
                onChange={(e: any) => {
                  setState(e.value);
                }}
              />
            </div>
          );
        })}

        {workOptions.map((filter) => {
          return (
            <div className="py-2 xl:py-4 w-[218px]" key={filter.name}>
              <p className="xl:text-lg text-sm font-semibold font-mono text-white">
                {filter.name}
              </p>
              <Select name={filter.name} options={filter.options} />
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
