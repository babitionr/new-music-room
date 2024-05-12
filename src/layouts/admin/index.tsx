import { Dropdown } from "antd";
import React, { PropsWithChildren, useEffect, useState, Fragment } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  const Header = () => (
    <header>
      <div className="flex items-center justify-end sm:justify-between px-5 h-16">
        {/* Title */}
        <h1>Dashboard</h1>
      </div>
      <div className="flex items-center gap-5 absolute right-6">
        <Dropdown>
          
        </Dropdown>
      </div>
    </header>
  );
};
