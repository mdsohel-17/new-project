import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="#af601a" width={200} height={5} />
    </div>
  );
};

export default Loader;
