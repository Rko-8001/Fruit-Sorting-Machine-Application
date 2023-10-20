import React from "react";
import PreviousSessionStat from "./PreviousSessionStat";
import OverallStat from "./OverallStat";

export default function Statistics() {
  return (
    <>
      <div className="p-2 items-center justify-center">
        <OverallStat />
        <PreviousSessionStat />
      </div>
    </>
  );
}
