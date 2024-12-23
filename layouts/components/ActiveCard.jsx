import React from 'react';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';

const Calculator = () => {
    const projects = [
 
        {
          title: "Financial",
          image : <GiShakingHands/>,
          description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
          link: "https://netflix.com",
        },
        {
          title: "Press Release/Notice",
          image : <VscLightbulbSparkle/>,
          description:
            "A multinational technology company that specializes in Internet-related services and products.",
          link: "https://google.com",
        },
        {
          title: "Tendor",
          image : <VscLightbulbSparkle/>,
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Public Circular",
          image : <VscLightbulbSparkle/>,
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },  {
          title: "Recruitment",
          image : <VscLightbulbSparkle/>,
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Forms",
          image : <VscLightbulbSparkle/>,
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
       
      ];
  return (
    <div className='bg-white border-[2px] border-primary group relative   p-3 flex flex-col justify-center gap-6 py-7 rounded-xl px-4 md:px-12 '>
            

      <div className='relative'>
        <h2 className='text-2xl font-poppins text-primary'>
                      Activties
                      </h2>
                      <div className='border-t-2 border-primary'></div>

                      </div>
                      
      {
            projects.map((item , idx) => {
                return (
                  <Link key={idx} href={item.link} className=''>
                    <button className='bg-primary ring-1 hover:bg-primary/80 ring-inset ring-white/10     p-0.5 px-2 flex justify-start items-center gap-4 text-white w-full rounded-full'> <span className='rounded-full p-2 bg-white border-white border'></span>{item.title}</button>
                  
                   {/* <button className="flex rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group hover:from-violet-500 hover:to-yellow-500 w-full gap-4 p-2 py-4 justify-center items-center">


                        <span className="text-4xl text-white">{item.image}</span>
                        <span className="text-xl text-white">{item.title}</span>

           
                    </button> */}
                  </Link>
                 
                )
            })
      }

    </div>
  )
}

export default Calculator