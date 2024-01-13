import React, { useEffect, useState } from "react";
import CardDetails from '../CardDetails/CardDetails'
import { Link } from "react-router-dom";
const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:2000/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <section class="text-gray-400 bg-gray-900 body-font pb-5">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap justify-center m-4 ">
       {
        products.slice(0, 3).map(product=><CardDetails
        key={product._id}
        product={product}
        ></CardDetails>)
       }
         
        </div>
     
      </div>
      <div className="flex items-center justify-center mt-0 ">
      
       
       <Link to='/products' className="inline-flex text-center text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-md">Show More</Link>
       
       </div>
     
    </section>
  );
};

export default Products;
