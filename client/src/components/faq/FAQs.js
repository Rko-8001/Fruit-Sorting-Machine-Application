import { useState } from 'react';
import React from 'react'
import { Questions } from './FAQQuestions'

export default function FAQs() {
    const [isOpen, setIsOpen] = useState(new Array(Questions.length).fill(false));

    const toggleQuestion = (index) => {
      const updatedIsOpen = [...isOpen];
      updatedIsOpen[index] = !updatedIsOpen[index];
      setIsOpen(updatedIsOpen);
    };
    return (
    <>
        <section class="bg-white ">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-2xl font-semibold text-black lg:text-3xl ">
                    FAQ's
                </h1>
                
                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    {Questions.map((question, index) => (
                        <div key={index}>
                            <div>
                                <button 
                                    onClick={ (e) => {
                                        e.preventDefault();
                                        toggleQuestion(index);
                                    }}
                                    class="flex items-center focus:outline-none">
                                    <svg class="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                                    <h1 class="mx-4 text-xl text-black">
                                        {question.question}
                                    </h1>
                                </button>

                                {isOpen[index] && <div class="flex mt-8 md:mx-10">
                                    <span class="border border-blue-500"></span>
                                    <p class="max-w-3xl px-4 text-black">
                                        {question.answer}
                                    </p>
                                </div>}
                            </div>
                            <hr class="my-8 border-gray-200 w-full dark:border-gray-700"/>
                        </div>
                    ))}
                    
            
                </div>
            </div>
        </section>
    </>
  )
}
