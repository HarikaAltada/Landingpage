import React from "react";

const Breezer = () => {
  return (
    <>
      <div className="relative bg- p-10 " id="home">
        <div className="absolute inset-0 flex justify-center items-center text-7xl font-bold text-gray-300 opacity-40 z-0">
          BREEZER
        </div>
        <div className="relative z-10 flex justify-center items-center mb-10">
          <img
            src="./icons/Bacardi-Breezer-Orange-275ml-Bottle-600-removebg-preview.png"
            alt="Breezer Orange"
            className="relative transform -rotate-12 transform-x-10"
          />
          <img
            src="./icons/Bacardi-Breezer-Lime-275ml-600x600-1-removebg-preview (1).png"
            alt="Breezer Lime"
            className="transform rotate-12 transoform-x-10"
          />
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div>
          <p className="text-lg text-gray-600 w-3/4 text-center">
            {" "}
            Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink
            which comes in many flavours.
          </p>
        </div>
        <div className="flex gap-10 justify-around items-center text-center">
          <div>
            <p className="text-xl font-bold">10+</p>
            <p className="text-sm text-gray-500">More than Flavors</p>
          </div>
          <div>
            <p className="text-xl font-bold">21+</p>
            <p className="text-sm text-gray-500">Year Old Can Drink</p>
          </div>
          <div>
            <p className="text-xl font-bold">4%</p>
            <p className="text-sm text-gray-500">Alcohol Content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breezer;
