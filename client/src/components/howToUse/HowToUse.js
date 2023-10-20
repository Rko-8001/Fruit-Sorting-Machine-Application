import React from 'react'
import { Steps } from './Steps'
export default function HowToUse() {
  return (
    <>
      <section class="bg-white ">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Learn how to use  <br/> Fruitastic 
          </h1>

          <p class="mt-4 text-gray-500 xl:mt-6 ">
            You are few steps away from using Fruitastic. Follow the steps below to get started.          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {Steps.map((step, index) => (
              <div key={index} class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                    <step.button class="w-5 h-5" />
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize ">{step.name}</h1>
                <p class="text-gray-500 ">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
