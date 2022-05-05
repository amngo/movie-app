import { SearchIcon } from "@heroicons/react/outline";
import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState<string>("");
  const router: NextRouter = useRouter();

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (query.trim() !== "")
      router.push({ pathname: "/search", query: { query } });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        spellCheck="false"
        type="text"
        className="w-full border-0 border-transparent rounded-md focus:border-transparent focus:ring-0 input input-bordered input-sm"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon
        className="absolute w-5 h-5 transform -translate-y-1/2 cursor-pointer top-1/2 right-4"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default Search;
