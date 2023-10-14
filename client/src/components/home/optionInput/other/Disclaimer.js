import React from 'react'
import { BiConfused } from "react-icons/bi";
export default function Disclaimer() {
  return (
    <>
        <section class="max-w-2xl px-6 py-8 mx-auto bg-white ">
            <header>
                <h2 class="text-2xl font-semibold text-black">Final Steps</h2>
            </header>

            <main class="mt-8">
                <p class="mt-3 leading-loose text-black text-bold ">
                    Before using machine, make sure these things are done:
                </p>
                <p class="mt-5 leading-loose text-gray-600 ">
                    1. Make sure the machine is plugged in.
                </p>
                <p class="mt-3 leading-loose text-gray-600 ">
                    2. Make sure storing buckets are properly placed.
                </p>
                <p class="mt-3 leading-loose text-gray-600">
                    3. Don't panic in middle. We got you covered at every step.
                </p>
                <p class="mt-3 leading-loose text-gray-600">
                    4. Remember you can stop machine anytime by pressing stop button. 
                    <p class='justify-center items-center text-red-600 text-bold'> DON'T POWER OFF DIRECTLY</p>
                </p>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <div>
                        <div class="flex items-center text-black-700 text-2xl gap-x-2 text-bold-500">
                            <span> Confused  </span>
                            <BiConfused />
                        </div>
                        <div className='flex'>
                            <p class="mt-3 leading-loose text-gray-600">
                                Learn how to use.
                            </p>    
                            <button class="mx-6 p-2  mt-2 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"> 
                                Tap Here
                            </button>
                        </div>
                        <p class="mt-3 leading-loose text-gray-600">
                            If you still have any doubts, feel free to contact us.
                        </p>
                    </div>
                    <hr class="my-6 border-gray-200 dark:border-gray-700" />
                    
                </div>

                <button class="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Let's Sort 
                </button>
            </main>

    </section>
    </>
  )
}
