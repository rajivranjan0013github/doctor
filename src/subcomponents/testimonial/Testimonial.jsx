import React from "react";
import { Carousel } from "react-responsive-carousel";
import MapAddress from "./MapAddress";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const list = [
    {
      name: "Akshit Jaiswal",
      word: "The doctor was very Good and examined the symptoms very carefully. He listened to my problems and symptoms thoroughly. management was arrogant. But got good treatment from a doctor. Thanks, Dr. Rajan. I am happy today.",
    },
    {
      name: "Sheikh Firdosh Ali",
      word: "Dr. Ranjan Kumar Sinha Is a very brilliant Doctor, the number 1 Doctor In Bhagalpur due to Urologists also all the The staff is very helpful & cooperative. Thanks to all.",
    },
    {
      name: "Ishani Sarkar",
      word: "Hello Doctor, Greetings. Please let me know do you treat IC issues. Interstitial Cystitis in women. Painful Bladder. Thnx and appreciate in advance. Pls, let me know. I have heard a lot about you of being a good human and a great doctor in your respective field.",
    },
  ];
  const {ref,inView}=useInView({
    triggerOnce:false
  })
  const animationVariants={
    hidden: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  }
 
  return (
    <div className="  w-screen flex flex-col justify-center items-center  p-5 ">
      <motion.div
        initial='hidden'
        animate={inView?"animate":"hidden"} 
        variants={animationVariants}
        className="w-[95%]  rounded-lg " 
        ref={ref}>
        <p className="ml-[2rem]  text-xl">What Our Patients Say </p>
        <h1 className="ml-[2rem]  text-4xl font-sm ">Testimonials</h1>
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          infiniteLoop 
          showStatus={false}
          interval={10000}
          className="w-full   flex flex-col justify-center item-center shadow-lg rounded-2xl"
        >
          {list.map((obj,index) => (
            <div key={index} className=" py-[3rem] mx-[2rem] ">
              <div className="md:text-xl text-xl ">{obj.word}</div>
              <div className="">
                <h1 className="  pt-[2rem] font-semibold text-3xl text-center">~ {" " + obj.name}</h1>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
      <MapAddress/>

    </div>
  );
};

export default Testimonial;
