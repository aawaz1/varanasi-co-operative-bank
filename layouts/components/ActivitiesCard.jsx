"use client"
import { motion } from "framer-motion";
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import ActiveCard from '@components/ActiveCard';
import Whatnew from '@components/Whatsnew';
import Calculator from '@components/Calculator';
import { useInView } from "react-intersection-observer"; // For scroll trigger

export function ActivitiesCard() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when visible
    threshold: 0.2,     // Start animation when 20% of the element is visible
  });

  // Define the animation variants
  const cardVariants = {
    hidden: { rotateY: -90, opacity: 0 },  // Initial state (flipped and invisible)
    visible: { rotateY: 0, opacity: 1 },   // Final state (unflipped and fully visible)
  };

  return (
    <motion.div
      ref={ref} // Set the reference for intersection observer
      variants={cardVariants} // Set animation variants
      initial="hidden"  // Initial state before animation
      animate={inView ? "visible" : "hidden"}  // Animate based on visibility
      transition={{
        duration: 1,    // Animation duration
        ease: "easeInOut"  // Smooth easing
      }}
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1000px",  // Create a 3D effect for the card flip
      }}
    >
      <div className="w-full px-0 lg:px-0 py-2  justify-center items-center gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-0 md:mx-auto">
        <Calculator />
        <ActiveCard />
        
       
        <Whatnew />
       
      </div>
    </motion.div>
  );
}

// Define your projects array
const projects = [
  {
    title: "EMI Calculator",
    image: <GiShakingHands />,
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "RD Calculator",
    image: <VscLightbulbSparkle />,
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Maturity Calculator",
    image: <VscLightbulbSparkle />,
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
];
