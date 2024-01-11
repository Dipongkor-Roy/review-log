import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path:'/',
            element:<Hero/>,
        
        },
        {
         
        },
    ],
  },
]);
const Routes = () => {
  return <div></div>;
};

export default Routes;
