import React from "react";
import SessionStat from "./SessionStat";

export default function Statistics() {
  return (
    <>
      <SessionStat />
    </>
  );
}

  // latter use 
// <div class="flex justify-center bg-gray-100 py-10 p-14">
//       <div class="container mx-auto pr-4">
//         <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
//           <div class="h-20 bg-red-400 flex items-center justify-between">
//             <p class="mr-0 text-white text-lg pl-5">BT SUBSCRIBERS</p>
//           </div>
//           <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
//             <p>TOTAL</p>
//           </div>
//           <p class="py-4 text-3xl ml-5">20,456</p>
//         </div>
//       </div>

//       <div class="container mx-auto pr-4">
//         <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
//           <div class="h-20 bg-blue-500 flex items-center justify-between">
//             <p class="mr-0 text-white text-lg pl-5">BT ACTIVE SUBSCRIBERS</p>
//           </div>
//           <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
//             <p>TOTAL</p>
//           </div>
//           <p class="py-4 text-3xl ml-5">19,694</p>
//         </div>
//       </div>

//       <div class="container mx-auto pr-4">
//         <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
//           <div class="h-20 bg-purple-400 flex items-center justify-between">
//             <p class="mr-0 text-white text-lg pl-5">BT OPT OUTS</p>
//           </div>
//           <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
//             <p>TOTAL</p>
//           </div>
//           <p class="py-4 text-3xl ml-5">711</p>
//         </div>
//       </div>

//       <div class="container mx-auto">
//         <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
//           <div class="h-20 bg-purple-900 flex items-center justify-between">
//             <p class="mr-0 text-white text-lg pl-5">BT TODAY'S SUBSCRIPTION</p>
//           </div>
//           <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
//             <p>TOTAL</p>
//           </div>
//           <p class="py-4 text-3xl ml-5">0</p>
//         </div>
//       </div>
//     </div>