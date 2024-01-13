
import React from "react";
import { useLoaderData } from "react-router-dom";


const Comment = () => {
  const product=useLoaderData();
   const {comments}=product;
   const firstObject = comments[0]; // Access the first object in the array
   console.log(firstObject.image); 
  
  return (

    <section class="text-gray-400 bg-gray-900 body-font relative">
       
       <div class="flex justify-center items-center">
        {/* { 
          comments.map((comment,index)=><div key={index} className="max-w-md mx-auto bg-gray-800 p-6 rounded-md">
          <img className="w-16 h-16 bg-gray-700 object-cover object-center rounded-full mb-4" src={comment.image} alt={comment.user} />
          <p className="leading-relaxed text-base">{comment.text}</p>
          <p className="mt-3 text-green-400 inline-flex items-center">
            {comment.user} - {comment.date}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </p>
        </div>
      )
      } */}
        
            <p class="leading-relaxed text-base">{comments}</p>
            <p class="mt-3 text-green-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </p>
            </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Reviews
          </h1>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                <textarea name="comment" 
                  id="message"
                  
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="write down your comment...."
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
)};

export default Comment;
