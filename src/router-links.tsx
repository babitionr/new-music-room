import { Spin } from "antd";
import { Suspense } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

export const routerLinks = (name: string, type?: string) => {
  const array: {
    [selector: string]: string;
  } = {
    Dashboard: "/dashboard",
  };
};
