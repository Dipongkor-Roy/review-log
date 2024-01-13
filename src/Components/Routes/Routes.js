import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Details from "../Details/Details";

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
         path:"/products/:id",
         element:<Details/>,
         loader:({params})=> fetch(`http://localhost:2000/products/${params.id}`)
        },
    ],
  },
]);
const Routes = () => {
  return <div></div>;
};

export default Routes;
