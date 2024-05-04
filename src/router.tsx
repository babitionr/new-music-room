import React, { Suspense, useEffect } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routerLinks } from "./router-links";

const pages = [
  // {
  //     layout: React.lazy(() => import('@layouts/auth')),
  //     isPublic: true,
  //     child: [
  //         {
  //             path: routerLinks('exam')
  //         }
  //     ]
  // }
  {
    // layout: React.lazy(() => import('')) 
  },
];
