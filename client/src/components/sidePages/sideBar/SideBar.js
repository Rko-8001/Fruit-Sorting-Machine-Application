import React from "react";
import { useNavigate } from "react-router-dom";
import { SideBarOptions } from "./SideBarRoutes";
import { getOptionPhase } from "../../tokens/Token";

function Sidebar() {
  const navigate = useNavigate();

  const nextRoutePage = (path) => {
    console.log(path)
    if(path !== "/home") {
      navigate(path);
      return;
    }
    const option = getOptionPhase();
    if(option === "sortPage") 
      navigate("/home");
    else if(option === "disclaimer")
      navigate("/home/disclaimer");
    else if(option === "machine")
      navigate("/home/machineHome");
    else 
      navigate("/home");

  }

  return (
    <div className="flex h-full">
      <div className="flex-col flex text-black">
        <div className="lg:flex md:w-64 sm:w-32">
          <div className="flex-col pt-5 flex overflow-y-auto h-full">
            {" "}
            {/* Set the height to 100% */}
            <div className="h-full flex-col justify-between px-4 flex">
              <div className="bg-top bg-cover space-y-1">
                {SideBarOptions.map((option, index) => (
                  <button key={index} 
                        onClick={(e) => {
                          e.preventDefault();
                          nextRoutePage(option.path)
                        }}
                  >
                    <div
                      className="font-medium md:text-xl sm:text-sm md:p-5  items-center rounded-lg px-4 py-2.5 flex hover:bg-black hover:text-white cursor-pointer"
                    >
                      <span className="justify-center items-center flex">
                        <option.button className="flex-shrink-0 md:w-7 sm:w-5 h-auto mr-4" />
                      </span>
                      <span className="overflow-hidden">{option.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
