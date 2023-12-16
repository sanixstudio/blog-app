import React from "react";
import { LineWave } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <LineWave
        height="200"
        width="200"
        color="#000"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default LoadingSpinner;
