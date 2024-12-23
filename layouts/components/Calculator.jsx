"use client";
import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import Link from "next/link";

const Calculator = () => {
  const projects = [
    {
      title: "EMI Calculator",
      image: <GiShakingHands />,
      link: "/calculator/emi-calculator",
    },
    {
      title: "RD Calculator",
      image: <VscLightbulbSparkle />,
      link: "/calculator/rd-calculator",
    },
    {
      title: "Maturity Calculator",
      image: <VscLightbulbSparkle />,
        link: "/calculator/maturity-calculator",
    },
  ];

  return (
    <div className="bg-white border-[2px] border-primary p-3  flex flex-col justify-center gap-9 py-8 rounded-xl px-4 md:px-12">
      
   
      <div>
        <h2 className="text-2xl font-poppins text-primary">Calculator</h2>
        <div className='border-t-2 border-primary'></div>
      
      </div>
      {projects.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
         
          className="flex btn-primary rounded-full bg-white/5 ring-1 ring-inset ring-white hover:bg-white/10 cursor-pointer w-full gap-4 p-2 py-4 justify-center items-center"
        >
          <span className="text-4xl text-white">{item.image}</span>
          <span className="md:text-md text-sm text-white">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Calculator;
