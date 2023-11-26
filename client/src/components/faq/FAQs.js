import { useState, Fragment } from 'react';
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
        <Fragment>  
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-3xl sm:text-xl font-semibold text-center text-gray-800 lg:text-4xl ">
                        Have any Questions?
                    </h1>

                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12">
                            <h1 className="text-2xl  font-semibold text-gray-800 ">
                                Table of Content
                            </h1>

                            <div className="mt-4 text-xl md:text-md space-y-8 lg:mt-8">
                                <button className="block text-blue-500 hover:underline">General         </button>
                                <button className="block text-gray-500 hover:underline">Cleaning        </button>
                                <button className="block text-gray-500 hover:underline">Usage           </button>
                                <button className="block text-gray-500 hover:underline">Troubleshooting </button>
                            </div>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                                        How i can play for my appoinment ?
                                        </h1>
                                </button>

                                <div className="flex mt-8 md:mx-10">
                                    <span className="border border-blue-500"></span>

                                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                    </p>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

