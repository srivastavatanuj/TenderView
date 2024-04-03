"use client";

import { MapPin, Search } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import data from "../../../../../etender_20240403063512.json";
import ReactPaginate from "react-paginate";
import Link from "next/link";

const MainTable = () => {
  const handlePageClick = () => {};
  return (
    <>
      <h2 className="text-xl font-semibold font-mono py-1 xl:py-2 text-blue-800"></h2>
      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 ml-3" />
        <Button className="absolute right-0 rounded-l-none bg-blue-500 ">
          Search
        </Button>
        <Input className="indent-10" placeholder="Tender Search" />
      </div>
      <div className="pt-5">
        <table className="table-auto w-full border-b-4">
          <thead className="bg-blue-200 h-12">
            <tr className="">
              <th></th>
              <th className="border-r-2">Tender ID</th>
              <th className="border-r-2">Description</th>
              <th className="border-r-2">Department</th>
              <th className="border-r-2">Value (₹)</th>
              <th className="border-r-2">
                <span className="flex gap-1 justify-center items-center">
                  Location
                  <MapPin size={"12"} />
                </span>
              </th>
              <th>Close Date</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 20).map((entry, index) => {
              const tender_id = entry.title
                .split("[")[3]
                .replace("]", "")
                .toLowerCase();
              return (
                <tr key={index} className="my-7 align-top border-b">
                  <td className="font-bold">{index + 1}</td>
                  <td className="pr-2">{tender_id}</td>
                  <td className="px-2 text-blue-800 text-justify">
                    <Link href={entry.url} target="_blank">
                      {entry.description}
                    </Link>
                  </td>
                  {/* <td>{tender_id.split("_")[1]}</td> */}
                  <td className="px-2 w-24">
                    {entry.organisation_chain.split("|")[0]}
                  </td>
                  <td className="px-2">{entry.tender_value}</td>
                  <td className=" text-center">
                    {entry.location.toLowerCase()}
                  </td>{" "}
                  <td className="w-20 xl:w-24">{entry.close_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="my-2">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.floor(data.length / 20)}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

export default MainTable;
