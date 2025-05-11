// filepath: d:\Next.js\senior-2026\app\page.tsx
import React from "react";
import { Footer } from "./component/Footer";
import { About } from "./component/About";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-70 h-[60vh] lg:h-[100vh] p-5 lg:p-20 flex flex-col justify-center items-center m-auto relative "> 
        <Hero />
      </div>
      <About />
      <Footer />
    </>
  );
}
