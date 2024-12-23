import React from 'react';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';
import { PiSmileySad } from "react-icons/pi";

const Calculator = () => {
  const projects = [
 
      
       
  ];
   
  return (
    <div className='bg-white border-[2px] border-primary  group relative h-[410px] p-3 flex flex-col justify-start gap-6 py-8 rounded-xl px-4 md:px-12 '>
     
      <div>
        <h2 className='text-2xl font-poppins text-primary'>
                      Whats New
                      </h2>
                      <div className='border-t-2 border-primary'></div>
                      </div>
      {
        projects.length > 0 ? (
            projects.map((item , idx) => {
                return (
                  <Link key={idx} href={item.link} className=''>
                    <button className=' hover:bg-primary/60  bg-primary p-0.5 px-2 flex justify-start items-center gap-4  w-full rounded-full'> <span className='rounded-full p-2  border-white border text-white'></span>{item.title}</button>
                  
                   {/* <button className="flex rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group hover:from-violet-500 hover:to-yellow-500 w-full gap-4 p-2 py-4 justify-center items-center">


                        <span className="text-4xl text-white">{item.image}</span>
                        <span className="text-xl text-white">{item.title}</span>

           
                    </button> */}
                  </Link>
                 
                )
            })

        )  : (
             
            <button className='bg-primary  hover:bg-primary/60  ring-1 ring-inset ring-white/10  p-1 px-2 flex justify-start items-center gap-4 text-white w-full rounded-full'> <span className='rounded-full text-white text-2xl'><PiSmileySad/></span>
            Nothing New Right Now</button>
          
         
          
        )
      }

    </div>
  )
}

export default Calculator