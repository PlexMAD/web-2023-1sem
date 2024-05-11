import React from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Info from "../pages/Info";
import Pagination from "../pages/Pagination";
import Create from "../pages/Create";
import Medias from "../pages/Medias";
import { PAGINATION_ROUTE, MEDIAS_ROUTE, INFO_ROUTE, CREATE_ROUTE } from "./configs";

interface MainRouterProps {
  isAuth: boolean;
}

const MainRouter: React.FC<MainRouterProps> = ({ isAuth }) => {
  const basedPath: RouteObject[] = [
    { path: INFO_ROUTE, element: <Info /> },
    { path: MEDIAS_ROUTE, element: <Medias /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPath: RouteObject[] = [
    { path: PAGINATION_ROUTE, element: <Pagination /> },
    { path: CREATE_ROUTE, element: <Create /> },
  ];

  const resultPaths: RouteObject[] = basedPath;

  if (isAuth) {
    resultPaths.push(...authPath);
  }

  return useRoutes(resultPaths);
};

export default MainRouter;
