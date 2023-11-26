import { useState, Fragment, useEffect } from 'react';
import React from 'react'
import { Questions } from './FAQQuestions'
import { FaPlus, FaMinus} from "react-icons/fa";

export default function FAQs() {
    const [section, setSection] = useState("General");
    const [isOpen, setIsOpen] = useState(new Array(Questions[section].length).fill(false));


    const toggleQuestion = (index) => {
        const updatedIsOpen = [...isOpen];
        updatedIsOpen[index] = !updatedIsOpen[index];
        setIsOpen(updatedIsOpen);
    };

    const getSection = (section) => {
        switch (section) {
            case 1:
                setSection("General");
                break;
            case 2:
                setSection("Cleaning");
                break;
            case 3:
                setSection("Usage");
                break;
            case 4:
                setSection("Troubleshooting");
                break;
            default:
                setSection("General");
        }
    }

    const getSectionId = (section) => {
        switch (section) {
            case "General":
                return 1;
            case "Cleaning":
                return 2;
            case "Usage":
                return 3;
            case "Troubleshooting":
                return 4;
            default:
                return 1;
        }
    }

    const showAnswer = (index) => {
        var updatedIsOpen = [...isOpen];
        updatedIsOpen[index] = !updatedIsOpen[index];
        setIsOpen(updatedIsOpen);
    }

    useEffect(() => {
        setIsOpen(new Array(Questions[section].length).fill(false));
    }, [section]);

    return (
        <Fragment>
            <section className="bg-white bg-gray-900">
                <div className="container px-6 py-12 ">
                    <h1 className="text-3xl sm:text-xl items-center font-semibold text-center text-gray-800 lg:text-4xl ">
                        Have any Questions ?
                    </h1>

                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">

                        <div className="lg:mx-12">
                            <h1 className=" items-center text-2xl font-semibold text-gray-800 ">
                                Table of Content
                            </h1>

                            <div className="mt-4 text-xl md:text-md space-y-8 lg:mt-8 text-gray-500">
                                <button
                                    onClick={(e) => { e.preventDefault(); getSection(1) }}
                                    className={`block ${getSectionId(section) === 1 ? 'text-blue-500' : 'text-gray-500'} hover:underline`}
                                >
                                    General
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); getSection(2) }}
                                    className={`block ${getSectionId(section) === 2 ? 'text-blue-500' : 'text-gray-500'} hover:underline`}
                                >
                                    Cleaning
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); getSection(3) }}
                                    className={`block ${getSectionId(section) === 3 ? 'text-blue-500' : 'text-gray-500'} hover:underline`}
                                >
                                    Usage
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); getSection(4) }}
                                    className={`block ${getSectionId(section) === 4 ? 'text-blue-500' : 'text-gray-500'} hover:underline`}
                                >
                                    Troubleshooting
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            {Questions[section].map((item, index) => (
                                <div key={index}>
                                    <div>
                                        <button 
                                            onClick={ (e) => {
                                                e.preventDefault(); 
                                                showAnswer(index)
                                            }} 
                                            className="flex items-center focus:outline-none"
                                        >
                                            { isOpen[index] ? 
                                                <FaMinus className="w-5 h-5 text-blue-500" /> : 
                                                <FaPlus className="w-5 h-5 text-blue-500" />}
                                            <h1 className="mx-4 text-xl text-gray-700 ">
                                                {item.question}
                                            </h1>
                                        </button>

                                        { isOpen[index] && 
                                            <div className="flex mt-8 md:mx-10">
                                                <span className="border border-blue-500"></span>
                                                <p className="max-w-3xl px-4 text-gray-500 ">{item.answer}</p>
                                            </div>
                                        }
                                        <hr className="my-8 border-gray-200 " />
                                    </div>
                                </div>
                            ))}



                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

