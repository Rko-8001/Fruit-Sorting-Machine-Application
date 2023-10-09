import React from "react";
import { Link } from "react-router-dom";
import { SideBarOptions } from "./SideBarRoutes";

function Sidebar() {
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
                  <div key={index}>
                    <Link
                      to={option.path}
                      className="font-medium md:text-xl sm:text-sm md:p-5  items-center rounded-lg px-4 py-2.5 flex hover:bg-black hover:text-white cursor-pointer"
                    >
                      <span className="justify-center items-center flex">
                        <option.button className="flex-shrink-0 md:w-7 sm:w-5 h-auto mr-4" />
                      </span>
                      <span className="overflow-hidden">{option.name}</span>
                    </Link>
                  </div>
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
