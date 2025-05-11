import React from "react";

export const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 m-auto ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-blue-600 mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-500 mb-12">
          We are dedicated to providing the best experiences and opportunities
          for the senior class of 2026. Watch the video below to learn more
          about our journey and mission.
        </p>
        <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="rounded-2xl shadow-lg object-contain m-auto w-full h-100"
            src="/video.mp4" // Replace with your video URL
            title="About Us Video"
            allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto pt-5 ">
          <iframe
            className="rounded-2xl shadow-lg object-contain m-auto w-full h-100"
            src="/video2.mp4" // Replace with your video URL
            title="About Us Video"
            allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
