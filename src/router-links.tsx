import { Spin } from "antd";
import { Suspense } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

export const routerLinks = (name: string, type?: string) => {
  const array: {
    [selector: string]: string;
  } = {
    Home: "/home",
  };

  const apis: {
    [selector: string]: string;
  } = {
    Auth: "/auth",
    CodeType: "/code-type",
  }; // 💬 generate api to here

  switch (type) {
    case "api":
      return apis[name];
    default:
      return array[name];
  }
};
