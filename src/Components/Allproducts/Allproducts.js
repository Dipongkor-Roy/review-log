import React, { useEffect, useState } from 'react';

import CardDetails from '../CardDetails/CardDetails';

const Allproducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
      fetch("https://review-log-server-h0qlerk6t-dipongkor-roy.vercel.app/products")
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[])
    return (
      <section class="text-gray-400 bg-gray-900 body-font pb-5">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-center m-4 ">
         {
          products.map(product=><CardDetails
          key={product._id}
          product={product}
          ></CardDetails>)
         }
           
          </div>
       
        </div>
      
       
      </section>
    );
  };


export default Allproducts;