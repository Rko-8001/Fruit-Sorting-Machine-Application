import React from "react";
import { BiCloudLightRain, BiConfused } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { getSortCategory, setOptionPhase } from "../../tokens/Token";
import { BackendUrl } from "../../../Url";
export default function Disclaimer() {
  const navigate = useNavigate();
  const nextPage = () => {
    setOptionPhase("machine")
    navigate("/home/machineHome");
  }

  const beginProcess = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BackendUrl}process/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sortCategory: getSortCategory() }),
      });
      if (response.status === 200) {
        const data = await response.json();
        nextPage()
        console.log(data);
      }
      else {
        window.alert("Internal Error Occurred try Again!!")
      }

    } catch (error) {
      window.alert("Internal Error Occurred try Again!!")
      console.log(error);
    }
  }

  return (
    <>
      <section className="max-w-2xl px-6 py-8 mx-auto bg-white ">
        <header>
          <h2 className="text-2xl font-semibold text-black">Final Steps</h2>
        </header>

        <main className="mt-8">
          <p className="mt-3 leading-loose text-black text-bold ">
            Before using machine, make sure these things are done:
          </p>
          <p className="mt-5 leading-loose text-gray-600 ">
            1. Make sure the machine is plugged in.
          </p>
          <p className="mt-3 leading-loose text-gray-600 ">
            2. Make sure storing buckets are properly placed.
          </p>
          <p className="mt-3 leading-loose text-gray-600">
            3. Don't panic in middle. We got you covered at every step.
          </p>
          <p className="mt-3 leading-loose text-gray-600">
            4. Remember you can stop machine anytime by pressing stop button.
            <p className="justify-center items-center text-red-600 text-bold">
              {" "}
              DON'T POWER OFF DIRECTLY
            </p>
          </p>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <div>
              <div className="flex items-center text-black-700 text-2xl gap-x-2 text-bold-500">
                <span> Confused </span>
                <BiConfused />
              </div>
              <div className="flex">
                <p className="mt-3 leading-loose text-gray-600">
                  Learn how to use.
                </p>
                <Link to="/howToUse" className="mx-6 p-2  mt-2 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                  Tap Here
                </Link>
              </div>
              <p className="mt-3 leading-loose text-gray-600">
                If you still have any doubts, feel free to contact us.
              </p>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
          </div>

          <button onClick={beginProcess} className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Let's Sort
          </button>
        </main>
      </section>
    </>
  );
}
