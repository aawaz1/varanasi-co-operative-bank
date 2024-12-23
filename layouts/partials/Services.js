"use client";

import { InfiniteMovingCards } from "@layouts/components/ui/infinite-moving-cards";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


const testimonials = [
  {
    quote:
      "In the country`s agricultural development Co-Operative plays a very important role. Co-Operatives played an important role in the Country`s social and economic upliftment. Today, 68% of the country`s population lives in rural India.",
    name: "Dr. Jagdish Singh Patel",
    title: "Chairman",
    link :"/about/chairman",
  },
  {
    quote:
      "Zila Sahkari Bank Ltd. Mirzapur covers two districts namely Mirzapur & Sonebhadra which is lives in sounth east part of Uattar Pradesh & connected with unique four State i.e. Bihar, Jharkhand, Madhya Pradesh & Chhattisgarh",
      name: "Dr. Jagdish Singh Patel",
    title: "Cheif Executive Officer",
     link : "/about/ceo"
  },
  {
    quote:
      "In the country`s agricultural development Co-Operative plays a very important role. Co-Operatives played an important role in the Country`s social and economic upliftment. Today, 68% of the country`s population lives in rural India.",
    name: "Dr. Jagdish Singh Patel",
    title: "Chairman",
    link :"/about/chairman",
  },
 
];

const Services = () => {
  return (
    <div className="container section">
       <InfiniteMovingCards
          direction="right"
        speed="slow" 
        items={testimonials}/>
    </div>
   

  )
  // return services.map((service, index) => {
  //   const isOdd = index % 2 > 0;
  //   return (
  //     <section
  //       key={`service-${index}`}
  //       className={`section ${isOdd && "bg-theme-light"}`}
  //     >
  //       <div className="container">
  //         <div className="items-center gap-8 md:grid md:grid-cols-2">
  //           {/* Carousel */}
  //           <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
  //             <Swiper
  //               modules={[Autoplay, Pagination]}
  //               pagination={
  //                 service.images.length > 1 ? { clickable: true } : false
  //               }
  //               autoplay={{
  //                 delay: 5000,
  //                 disableOnInteraction: false,
  //               }}
  //               init={service?.images > 1 ? false : true}
  //             >
  //               {/* Slides */}
  //               {service?.images.map((slide, index) => (
  //                 <SwiperSlide key={index}>
  //                   <Image src={slide} alt="" width={600} height={500} />
  //                 </SwiperSlide>
  //               ))}
  //             </Swiper>
  //           </div>

  //           {/* Content */}
  //           <div
  //             className={`service-content mt-5 md:mt-0 ${
  //               !isOdd && "md:order-1"
  //             }`}
  //           >
  //             <h2 className="font-bold leading-[40px]">{service?.title}</h2>
  //             <p className="mb-2 mt-4">{service?.content}</p>
  //             {service.button.enable && (
  //               <Link
  //                 href={service?.button.link}
  //                 className="cta-link inline-flex items-center text-primary"
  //               >
  //                 {service?.button.label}
  //                 <Image
  //                   className="ml-1"
  //                   src="/images/arrow-right.svg"
  //                   width={18}
  //                   height={14}
  //                   alt="arrow"
  //                 />
  //               </Link>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // });
};

export default Services;
