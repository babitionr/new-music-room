import { Spin } from "antd";
import { Suspense } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

export const routerLinks = (name: string, type?: string) => {
  const array: {
    [selector: string]: string;
  } = {
    Dashboard: "/dashboard",
  };

  const apis: {
    [selector: string]: string;
  } = {
    Auth: '/auth',
    CodeType: '/code-type',
    Code: '/code',
    UserRole: '/user-role',
    User: '/user',
    Data: '/data',
    DataType: '/data-type',
    Post: '/post',
    Parameter: '/parameter',
    PostType: '/post-type',
  }; // 💬 generate api to here

  switch (type) {
    case 'api':
      return apis[name];
    default:
      return array[name];
  }
};
