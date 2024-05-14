import React, { Suspense, useEffect } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

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
    layout: React.lazy(() => import('@layouts/admin')),
    isPublic: false,
    child: [
      {
        
      }
    ]
  },
];
