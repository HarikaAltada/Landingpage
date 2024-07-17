import React from "react";

const Flavours = () => {
  const flavours = [
    {
      name: "CRANBERRY",
      image: "./icons/377790-removebg-preview.png",
    },
    {
      name: "LIME",
      image:
        "./icons/Bacardi-Breezer-Lime-275ml-600x600-1-removebg-preview (1).png",
    },
    {
      name: "BLUEBERRY",
      image: "https://www.spencers.in/media/catalog/product/1/0/1087166_1.jpg",
    },
    {
      name: "ORANGE",
      image:
        "./icons/Bacardi-Breezer-Orange-275ml-Bottle-600-removebg-preview.png",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20" id="flavours">
      <div className="text-left mt-8">
        <h1 className="text-4xl font-bold">Breezer Flavour</h1>
        <p className="mt-2 text-lg w-3/4">
          Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink
          which comes in many flavours.
        </p>
      </div>
      <div className="grid grid-cols-4 mt-8">
        {flavours.map((flavour) => (
          <div key={flavour.name} className="flex flex-col items-center">
            <img
              src={flavour.image}
              alt={flavour.name}
              className="w-70 h-70 object-cover"
            />
            <h2 className="mt-4 text-xl font-medium">{flavour.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavours;
