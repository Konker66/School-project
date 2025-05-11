import React from "react";

export const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-140 w-full mt-30 m-auto flex items-center justify-center rounded-2xl font-extrabold ">
      <img
        src="/hero.jpeg"
        alt="Hero"
        className="absolute inset-0 w-260 object-contain rounded-2xl shadow-2xl shadow-blue-600 m-auto "
      />
      <div className="text-center text-blue-500 bg-opacity-50 rounded-2xl max-w-2xl font-extrabold w-full pb-110 h-auto relative">
        <h1
          className="text-4xl md:text-6xl font-bold border-b-5 border-b-blue-500"
          style={{ fontSize: "3.5rem" }}
        >
          SENIOR CLASS OF 2026
        </h1>
        {/* <p className="mt-4 text-lg md:text-xl">
          Discover amazing content and experiences with us.
        </p> */}
      </div>
    </div>
  );
};
