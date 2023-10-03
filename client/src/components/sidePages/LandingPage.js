import React from "react";
import fruitSort from "./assets/fruitSort.jpg";
import { GiFruitBowl } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div class="container flex flex-col mx-auto bg-white">
        <div class="grid w-full h-auto grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div class="flex flex-col justify-center col-span-1 text-center lg:text-start">
            <h1 class="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
              Elevate your productivity
            </h1>
            <p className="mt-6 text-lg leading-8 text-center text-gray-600">
              Say goodbye to endless hours spent on sorting your fruits.
              Fruitastic is a fruit sorting machine that will help you sort your
              fruits in a jiffy.
            </p>
            <div class="flex flex-col items-center mt-10 mx-5 gap-4 lg:flex-row">
              <Link to="/login" class="bg-gray-100 inline-flex py-4 px-6 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <GiFruitBowl className="mr-2 w-auto h-10" />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-sm text-gray-600 mb-1">Let's get </span>
                  <span class="title-font font-bold">STARTED</span>
                </span>
              </Link>
            </div>
          </div>
          <div class="items-center justify-end hidden col-span-1 md:flex">
            <img
              class="w-auto h-full rounded-sm"
              src={fruitSort}
              alt="header image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
