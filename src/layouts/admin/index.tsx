import React, { PropsWithChildren, useEffect, useState, Fragment } from "react";
import { Dropdown } from "antd";

const Layout = ({ children }: PropsWithChildren) => {
  const Header = () => (
    <header>
      <div className="flex items-center justify-end sm:justify-between px-5 h-16">
        {/* Title */}
        <h1>Dashboard</h1>
      </div>
      <div className="flex items-center gap-5 absolute right-6">
        <Dropdown></Dropdown>
      </div>
    </header>
  );
  return (
    <main>
      <div className="h-16 relative bg-black">
        <div className="absolute top-0 left-0 right-0">
          <Header
          // isCollapsed={isCollapsed}
          // isDesktop={isDesktop}
          />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
