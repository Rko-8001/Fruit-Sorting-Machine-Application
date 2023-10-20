import React from 'react'
import { Link } from "react-router-dom";

export default function PreviousSessionStat() {
  return (
    <>
        <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                    <div class="flex justify-between items-center">
                        <h2 class="text-sm text-gray-600 font-bold tracking-wide">Previous Sorting Processes</h2>
                        
                    </div>
                    <dl class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                        <div class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <dt class="px-4 font-semibold">Date</dt>
                            <dt class="px-4 text-gray-600">Sorting Type</dt>
                            <dt class="px-4 tracking-wider">Total Fruits Sorted</dt>
                            <dt class="px-4 tracking-wider">More Info</dt>
                        </div>
                    </dl>

                    <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">

                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">20-10-2023</p>
                            <p class="px-4 text-gray-600">Color</p>
                            <p class="px-4 tracking-wider">1025</p>
                            <Link to="/stats/1234" class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                                View
                            </Link>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">20-10-2023</p>
                            <p class="px-4 text-gray-600">Color</p>
                            <p class="px-4 tracking-wider">1025</p>
                            <Link to="/stats/1234" class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                                View
                            </Link>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">20-10-2023</p>
                            <p class="px-4 text-gray-600">Color</p>
                            <p class="px-4 tracking-wider">1025</p>
                            <Link to="/stats/1234" class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                                View
                            </Link>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">20-10-2023</p>
                            <p class="px-4 text-gray-600">Color</p>
                            <p class="px-4 tracking-wider">1025</p>
                            <Link to="/stats/1234" class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                                View
                            </Link>
                        </li>
                    </ul>
                </div>
    </>
  )
}
