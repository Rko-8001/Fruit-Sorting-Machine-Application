import React from "react";
import { SiGooglebigquery } from "react-icons/si";
import { AiOutlineBgColors } from "react-icons/ai";
import { FaAirFreshener } from "react-icons/fa";

export default function OverallStat() {
    const sortStat = [
        {
            name: "Size",
            value: 20,
            button: SiGooglebigquery,
            backgroundColor: "bg-red-500"
        },
        {
            name: "Color",
            value: 30,
            button: AiOutlineBgColors,
            backgroundColor: "bg-blue-500"
        },
        {
            name: "Freshness",
            value: 40,
            button: FaAirFreshener,
            backgroundColor: "bg-purple-500"
        }
    ]
  return (
    <>
      <div className="flex items-center w-auto gap-12 justify-between">

        <div class="flex flex-col justify-between gap-12 p-2 bg-white rounded-lg shadow-xl md:p-8  md:items-center md:flex-row">
            <div>
                <span class="block text-2xl text-bold text-gray-700 text-bold ">
                    Total Fruits Sorted
                </span>
                <span class="block mt-2 text-4xl font-black text-yellow-500 md:text-5xl">
                    32534
                </span>
            </div>
        </div>

        <div class="w-auto p-4 bg-white shadow-lg rounded-xl md:w-80 ">
          
          <div class="flex items-center justify-between w-full mb-6">
            <p class="text-xl font-medium text-bold text-gray-600 ">Quick Recap on Sorting</p>            
          </div>

          {sortStat.map((stat,index) => (
            <div class={` ${stat.backgroundColor} flex items-center justify-between p-3 mb-2 rounded`}>
                <span class="p-2 bg-white rounded-lg">
                    <stat.button class="w-5 h-5"/>
                </span>
                <div class="flex items-center justify-between w-full ml-2">
                    <p>Sorting on {stat.name}</p>
                    <p>{stat.value}%</p>
                </div>
            </div>
          ))}
            

        </div>
      </div>
    </>
  );
}
