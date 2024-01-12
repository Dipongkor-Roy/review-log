import React from 'react';
import { Link } from 'react-router-dom';


const CardDetails = ({product}) => {
  const {name,price,image,description}=product;
    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <p class="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            src={image}
          />
        </p>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 class="text-white title-font text-lg font-medium">
            {name}
          </h2>
          <p className=' text-sm'>{description}</p>
        
        <div className='flex justify-between items-center mt-4'>
        <p class="mt-1">${price}</p>
        <Link to='/signUp' className="inline-flex text-white bg-green-500 border-0 py-0 px-2 focus:outline-none hover:bg-green-600 rounded text-md">Details</Link>
        </div>
        </div>
      </div>
    );
};

export default CardDetails;