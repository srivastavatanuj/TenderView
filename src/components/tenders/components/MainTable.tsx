"use client";

import { MapPin, Search } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import "./pagination.css";
import { useState } from "react";
import { json } from "stream/consumers";
import { stringify } from "querystring";

const MainTable = ({ data }: any) => {
  const [page, setPage] = useState(0);
  const [afterSearchData, setAfterSearchData] = useState(data);
  const entryPerPage = 20;

  const handleSearch = () => {
    let searchItem = document.getElementById("searchInput") as HTMLInputElement;
    let searchData = data.filter((entry: any) => {
      const tempEntry = stringify(entry).toLowerCase();
      if (tempEntry.includes(searchItem.value.toLowerCase())) {
        return entry;
      } else {
        return false;
      }
    });
    setPage(0);
    setAfterSearchData(searchData);
  };

  const handlePageClick = (e: any) => {
    setPage(e.selected);
  };

  return (
    <>
      <h2 className="text-xl font-semibold font-mono py-1 xl:py-2 text-blue-800"></h2>
      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 ml-3" />
        <Button
          className="absolute right-0 rounded-l-none bg-[#3ca0af] hover:bg-[#2c94a3]"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Input
          className="indent-10"
          placeholder="Tender Search"
          id="searchInput"
        />
      </div>
      <div className="pt-5">
        <table className="table-auto w-full border-b-4">
          <thead className="bg-[#3ca0af] h-12">
            <tr className="">
              <th className="bg-white"></th>
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
            {afterSearchData
              .slice(page * entryPerPage, page * entryPerPage + entryPerPage)
              .map((entry: any, index: any) => {
                const tender_id = entry.title
                  .split("[")[3]
                  .replace("]", "")
                  .toLowerCase();
                return (
                  <tr key={index} className="my-7 align-top border-b">
                    <td className="pr-1 text-sm text-gray-500">
                      {entryPerPage * page + index + 1}
                    </td>
                    <td className="">{tender_id}</td>
                    <td className="px-2 text-blue-800 text-justify">
                      <Link href={entry.url} target="_blank">
                        {entry.description}
                      </Link>
                    </td>
                    {/* <td>{tender_id.split("_")[1]}</td> */}
                    <td className="w-[8%] min-w-20 text-center px-2">
                      {entry.organisation_chain.split("|")[0]}
                    </td>
                    <td className="w-[8%] min-w-20 text-center">
                      {entry.tender_value}
                    </td>
                    <td className="w-[8%] min-w-20 text-center">
                      {entry.location.toLowerCase()}
                    </td>{" "}
                    <td className="w-[8%] min-w-20 text-center">
                      {entry.close_date}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="my-2 flex justify-center">
          <ReactPaginate
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            breakLabel="&#183;&#183;&#183;"
            onPageChange={handlePageClick}
            pageCount={Math.ceil(afterSearchData.length / entryPerPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            previousLabel={
              <>
                <h4 className="font-black text-lg text-gray-600">{"<"}</h4>
              </>
            }
            nextLabel={
              <>
                <h4 className="font-black text-lg text-gray-600">{">"}</h4>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default MainTable;
