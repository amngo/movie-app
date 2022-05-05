import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";

function Nav() {
  const router: NextRouter = useRouter();

  return (
    <div className="tabs tabs-boxed">
      <Link href="/" passHref>
        <a
          href="replace"
          className={`tab tab-xs sm:tab-md ${
            router.pathname === "/" ? "tab-active" : ""
          }`}
        >
          Discover
        </a>
      </Link>
      <Link href="/now-playing" passHref>
        <a
          href="replace"
          className={`tab tab-xs sm:tab-md ${
            router.pathname === "/now-playing" ? "tab-active" : ""
          }`}
        >
          Now Playing
        </a>
      </Link>
      <Link href="/popular" passHref>
        <a
          href="replace"
          className={`tab tab-xs sm:tab-md ${
            router.pathname === "/popular" ? "tab-active" : ""
          }`}
        >
          Popular
        </a>
      </Link>
      <Link href="/upcoming" passHref>
        <a
          href="replace"
          className={`tab tab-xs sm:tab-md ${
            router.pathname === "/upcoming" ? "tab-active" : ""
          }`}
        >
          Upcoming
        </a>
      </Link>
    </div>
  );
}

export default Nav;
