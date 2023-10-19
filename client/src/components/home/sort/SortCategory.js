import React, { useState } from "react";
import { SortOptions } from "./SortOption";
import { useNavigate } from "react-router-dom";
import { setOptionPhase, setSortCategory } from "../../tokens/Token";
export default function SortCategory() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setSortCategory(SortOptions[index].value);
  };

  const nextPage = (e) => {
    e.preventDefault();
    setOptionPhase("disclaimer")
    navigate("/home/disclaimer");
  }

  return (
    <>
      <div className="bg-white w-full ">
        <div className="container px-6 py-8 mx-auto">
          <p className="text-xl text-center text-black">
            Choose the basis of sorting
          </p>

          <h1 className="mt-4 text-2xl font-semibold text-center capitalize lg:text-3xl ">
                Sorting Categories 
          </h1>

          <div className="mt-6 space-y-8 xl:mt-12">
            {SortOptions.map((option, index) => (       
                <div key={index} className={`flex items-center justify-between max-w-2xl px-8 py-4 hover:text-white hover:bg-black  mx-auto border cursor-pointer rounded-xl dark:border-gray-700
                    ${selectedOption  === index ? 'bg-black text-white' : 'bg-white text-black'}`}              
                    onClick={(e) => handleOptionClick(index)}
                >
                    <div className="flex items-center">
                        <option.button className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"  />
                        <div className="flex flex-col items-center mx-5 space-y-1">
                            <h2 className="text-lg font-medium sm:text-2xl ">
                                {option.name}
                            </h2>
                            <div className="px-2 text-xs  rounded-full sm:px-4 sm:py-1  ">
                                {option.desc}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-center">
              <button onClick={nextPage} className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Next 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
