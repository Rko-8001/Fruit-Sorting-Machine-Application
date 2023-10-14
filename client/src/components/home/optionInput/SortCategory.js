import React from "react";
import { SortOptions } from "./SortOption";
export default function SortCategory() {

  return (
    <>
      <div class="bg-white w-full ">
        <div class="container px-6 py-8 mx-auto">
          <p class="text-xl text-center text-black">
            Choose the basis of sorting
          </p>

          <h1 class="mt-4 text-2xl font-semibold text-center capitalize lg:text-3xl ">
                Sorting Categories 
          </h1>

          <div class="mt-6 space-y-8 xl:mt-12">
            {SortOptions.map((option, index) => (       
                <div class="flex items-center justify-between max-w-2xl px-8 py-4 hover:text-white hover:bg-black  mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                    <div class="flex items-center">
                        <option.button class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"  />
                        <div class="flex flex-col items-center mx-5 space-y-1">
                            <h2 class="text-lg font-medium sm:text-2xl ">
                                {option.name}
                            </h2>
                            <div class="px-2 text-xs  rounded-full sm:px-4 sm:py-1  ">
                                {option.desc}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div class="flex justify-center">
              <button class="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Next 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
