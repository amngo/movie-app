import React from "react";
import Header from "./Header";

function Layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      <div className="container flex w-full h-full min-w-0 mx-auto mb-12">
        {children}
      </div>
    </div>
  );
}

export default Layout;
