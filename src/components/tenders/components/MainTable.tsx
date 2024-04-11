"use client";

import { Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import "./pagination.css";
import { useState } from "react";
import { json } from "stream/consumers";
import { stringify } from "querystring";
import Sidebar from "./Sidebar";

const MainTable = ({ data }: any) => {
  const [page, setPage] = useState(0);
  const [afterSearchData, setAfterSearchData] = useState(data);
  const [openFilter, setOpenFilter] = useState(false);
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
      <div className="relative mt-4 flex gap-2">
        <div className="border p-2 rounded-lg bg-[var(--theme-color-green)] text-white md:hidden h-12 w-12 flex justify-center items-center">
          <Filter
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          />
          <div className="absolute top-12 left-0 bg-[var(--theme-color-green)]">
            {openFilter && <Sidebar mobileView={true} />}
          </div>
        </div>

        <Search className="absolute top-1/2 -translate-y-1/2 ml-3 hidden md:block" />
        <Button
          className="absolute right-0 rounded-l-none bg-[#3ca0af] hover:bg-[#2c94a3] h-full md:w-32 font-semibold"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Input
          className="md:indent-10 h-12 md:h-16 focus-visible:ring-offset-0"
          placeholder="Tender Search"
          id="searchInput"
        />
      </div>

      <div className="pt-5">
        {afterSearchData
          .slice(page * entryPerPage, page * entryPerPage + entryPerPage)
          .map((entry: any, index: any) => {
            const tender_id = entry.title
              .split("[")[3]
              .replace("]", "")
              .toLowerCase();
            return (
              <>
                <div className="rounded-lg p-5 mb-2 bg-white flex flex-col gap-1.5">
                  <div className="flex gap-2">
                    <div>
                      <span className="font-bold text-sm">
                        {entryPerPage * page + index + 1}
                      </span>
                    </div>

                    <div className="font-medium text-lg hover:text-[#225e66] cursor-pointer sm:w-[75%]">
                      <Link href={entry.url} target="_blank">
                        {entry.description}
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-8">
                    <span className="text-sm font-sans text-gray-600">
                      <span className="mr-1 font-bold ">TID:</span>
                      {tender_id}
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="mr-1 font-bold font-sans ">Value:</span>₹
                      {entry.tender_value}
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="mr-1 font-bold font-sans ">
                        Close Date/Time:
                      </span>
                      {entry.close_date}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-8">
                    <div className="text-sm">
                      <span className="font-bold font-sans text-gray-600">
                        Organization:
                      </span>
                      {entry.organisation_chain.split("|")[0]}
                    </div>
                    <div className=" text-sm">
                      <span className="mr-1 font-bold font-sans text-gray-600">
                        Location:
                      </span>
                      {entry.location.toLowerCase()}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
                <ChevronLeft />
              </>
            }
            nextLabel={
              <>
                <ChevronRight />
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default MainTable;
