"use client";

import MainTable from "./components/MainTable";
import Sidebar from "./components/Sidebar";
import data from "../../../public/tenders.json";
import { useState } from "react";

const Tenders = () => {
  const [filteredData, setFilteredData] = useState(data);
  return (
    <div className="flex">
      <div className="bg-white border-r min-h-screen relative min-w-[250px] h-auto hidden md:block">
        <Sidebar data={data} setFilteredData={setFilteredData} />
      </div>
      <div className="w-full px-2 md:px-4 bg-[#f1f2f4]">
        <MainTable data={data} />
      </div>
    </div>
  );
};

export default Tenders;
