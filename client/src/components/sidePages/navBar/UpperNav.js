import React from "react";

function UpperNav() {
  return (
    <>
      <header>
        <nav className=" bg-black border-gray-200  sm:px-2 lg:px-4 py-2.5 dark:bg-gray-800">
          <div className="flex">
            <div
              style={{ color: "white", fontSize: "30px" }}
              className=" flex-1 flex-wrap justify-between items-center py-1 mx-auto max-w-screen-xl"
            >
              Fruitastic : Fruit Sorting Machine
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default UpperNav;
