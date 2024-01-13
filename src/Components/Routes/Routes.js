import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Details from "../Details/Details";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import Allproducts from "../Allproducts/Allproducts";

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
         loader:({params})=> fetch(`https://review-log-server-h0qlerk6t-dipongkor-roy.vercel.app/products/${params.id}`)
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/logIn',
          element:<LogIn/>
        },
        {
          path:'/products',
          element:<Allproducts/>
        }
    ],
  },
]);
const Routes = () => {
  return <div></div>;
};

export default Routes;
