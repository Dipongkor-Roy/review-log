import React from "react";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* image */}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Dive into Expert Reviews and User Feedback on ReviewLog</h1>
            <p class="leading-relaxed mb-8">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Get Started
              </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
      <Products/>
      <Testimonial/>
    </div>
  );
};

export default Hero;
