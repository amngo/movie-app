import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/outline";
import Search from "components/Search";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-40 flex flex-col min-h-0 navbar bg-base-300/75 backdrop-blur-lg">
      <div className="container flex items-center self-center justify-between w-full lg:px-8">
        <div className="flex items-center space-x-1">
          <button
            type="button"
            className="btn btn-ghost btn-xs sm:btn-sm"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-xs sm:btn-sm"
            onClick={() => router.replace("/")}
          >
            <HomeIcon className="w-4 h-4" />
          </button>
          <Link href="/" passHref>
            <a
              href="replace"
              className="normal-case btn btn-ghost btn-xs sm:btn-sm"
            >
              MovieDB
            </a>
          </Link>
        </div>
        <div className="w-1/2 max-w-[300px]">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
