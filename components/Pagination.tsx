import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  query: any;
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

function Pagination({
  url,
  query,
  currentPage,
  totalPages,
  totalResults,
}: Props) {
  const queryParams = { ...query };
  delete queryParams.page;
  let queryString = "";

  if (Object.keys(queryParams).length !== 0)
    queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");

  return (
    <div className="flex flex-col items-center justify-between w-full p-4 md:flex-row bg-neutral">
      <div className="text-sm">
        Showing{" "}
        <span className="font-bold">
          {totalResults > 0 ? (currentPage - 1) * 20 + 1 : 0}
        </span>{" "}
        to{" "}
        <span className="font-bold">
          {totalResults < currentPage * 20 ? totalResults : currentPage * 20}
        </span>{" "}
        of <span className="font-bold">{totalResults}</span> results
      </div>
      <div className="mt-2 space-x-2 md:mt-0">
        <Link
          href={`${url}?${queryString}${queryString === "" ? "" : "&"}page=${
            currentPage - 1
          }`}
          passHref
        >
          <a href="replace">
            <button
              type="button"
              className={`btn btn-primary btn-sm ${
                currentPage === 1 ? "hidden" : ""
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </a>
        </Link>

        <Link
          href={`${url}?${queryString}${queryString === "" ? "" : "&"}page=${
            currentPage + 1
          }`}
          passHref
        >
          <a href="replace">
            <button
              type="button"
              className={`btn btn-primary btn-sm ${
                currentPage === totalPages ? "hidden" : ""
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
