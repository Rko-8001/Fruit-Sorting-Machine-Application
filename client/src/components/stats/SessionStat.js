import React from 'react'

export default function SessionStat() {
  return (
    <>
      <div class="flex items-center justify-center px-4">
        <div class="max-w-4xl text-black bg-white w-full rounded-lg shadow-xl">
          
          <div class="p-4 border-b ">
              <h2 class="text-2xl ">
                  Sorting Session Statistics [ Session ID: 1234]
              </h2>
              <p class="text-sm text-gray-500">
                  Dated: 20-10-2023
              </p>
          </div>

          <div>
              <div class="bg-gray-400 md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                  <p>Sorting Basis</p>
                  <p>Color</p>
              </div>

              <div class="bg-white md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                  <p>Time Taken</p>
                  <p>1 hr 10 mins</p>
              </div>

              <div class="bg-gray-400 md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                  <p>Fruit Sorted Yield</p>
                  <p>2345</p>
              </div>

              <div class="bg-white md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-4 border-b">
                  <p>Other Details</p>
                  <p>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa 
                    consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud 
                    in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. 
                  </p>
              </div>
              
              <div class="bg-gray-400 md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4">
                  <p>Category wise yield</p>
                  <div class="space-y-2">
                      <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                          <div class="space-x-2 truncate">
                              <span>Red Apple </span>
                          </div>
                          <p class="text-purple-700 hover:underline">234</p>
                      </div>
                      <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                          <div class="space-x-2 truncate">
                              <span>Red Yellow Apple </span>
                          </div>
                          <p class="text-purple-700 hover:underline">14</p>
                      </div>
                      <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                          <div class="space-x-2 truncate">
                              <span>Green Apple </span>
                          </div>
                          <p class="text-purple-700 hover:underline">30</p>
                      </div>
                      
                  </div>
              </div>
          </div>

        </div>
      </div>
    </>
  )
}
