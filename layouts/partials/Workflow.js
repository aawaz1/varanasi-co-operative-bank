"use client"
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { FaCarRear } from "react-icons/fa6";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";


const Workflow = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,    // Whether the animation should happen only once
    });
  }, []);
  return (
    <section className="section  bg-theme-light">
       <div className=" grid  container gap-6 sm:grid-cols-3">
          {[
            {
              title: "Home Loan",
              link  :  "aa",
              description:
                "Your identity is protected with state-of-the-art encryption protocols",
              icon: (
                <MdMapsHomeWork className="text-white text-2xl"/>
                // <svg
                //   className="h-6 w-6 text-sky-400"
                //   fill="none"
                //   viewBox="0 0 24 24"
                //   stroke="currentColor"
                // >
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth={2}
                //     d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                //   />
                // </svg>
              ),
            },
            {
              title: "Personal Loan",
              link  :  "aa",
              description:
                "Instant verification and secure routing of all reports",
              icon: (
                <FaPersonCirclePlus className="text-white text-2xl"/>
              ),
            },
            {
              title: "Vechile Loan",
              link  :  "aa",
              description: "Two-way anonymous channel with law enforcement",
              icon: (
                <FaCarRear className="text-white text-2xl"/>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              data-aos="flip-left"
              className="group relative overflow-hidden rounded-2xl border-[2px] border-primary bg-white p-8 transition-all"
            >
            
              <div className="relative">
                <div className="mb-5  inline-flex rounded-xl bg-primary p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
                <Link href={feature.link}>
                <button className="flex mt-2 btn-primary h-12 items-center justify-center gap-2 a bg-white/5 px-8 text-sm font-medium  ring-1 ring-inset ring-primary transition-all hover:bg-primary hover:text-white">
                Read More
              </button></Link>
               
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Workflow;
