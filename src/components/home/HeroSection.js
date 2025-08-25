"use client";

import Head from "next/head";
import Marquee from "react-fast-marquee";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="font-metropolis text-center mt-12 px-4">
        <h1 className="text-[32px] sm:text-[69px] text-center h-full font-normal w-full leading-snug sm:leading-tight">
          Experience Modern <br />
          <span className="font-bold">Luxury in Architecture</span>
        </h1>
        <p className="mt-4 max-w-lg mx-auto text-black-400 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-8">
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-md shadow-black/50">
            Lorem ipsum
          </button>
          <button className="bg-white border px-4 py-2 rounded shadow-md shadow-black/50">
            Lorem ipsum
          </button>
        </div>
      </section>

      {/* Clients / Logos Section */}
      <section className="mt-15 sm:mt-[60px] px-4">
        <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet
        </p>

      <div className="p-4 font-bold text-xl font-ADAM.CG.PRO">
  <Marquee
    className={poppins.className}
    speed={120}
    gradient={false}
    autoFill={true}
  >
    <span className="pr-16">AVARON</span>
  </Marquee>
</div>
  </section>
    </>
  );
}
