import React from "react";
import { Carousel } from "react-responsive-carousel";
import MapAddress from "./MapAddress";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/TestimonialImage/akshit.png";
import img2 from "../../assets/TestimonialImage/ishani.png";
import img3 from "../../assets/TestimonialImage/img2.jpg";
import img4 from "../../assets/TestimonialImage/vickii.png";
const Testimonial = () => {
  const list = [
    {
      name: "Akshit Jaiswal",
      img: img1,
      rating: "⭐⭐⭐⭐⭐",
      word: "The doctor was very Good and examined the symptoms very carefully. He listened to my problems and symptoms thoroughly. management was arrogant. But got good treatment from a doctor. Thanks, Dr. Rajan. I am happy today.",
    },
    {
      name: "Sheikh Firdosh Ali",
      img: img3,
      rating: "⭐⭐⭐⭐⭐",
      word: "Dr. Ranjan Kumar Sinha Is a very brilliant Doctor, the number 1 Doctor In Bhagalpur due to Urologists also all the The staff is very helpful & cooperative. Thanks to all.",
    },
    {
      name: "Ishani Sarkar",
      img: img2,
      rating: "⭐⭐⭐⭐",
      word: "Hello Doctor, Greetings. Please let me know do you treat IC issues. Interstitial Cystitis in women. Painful Bladder. Thnx and appreciate in advance. Pls, let me know. I have heard a lot about you of being a good human and a great doctor in your respective field.",
    },
    {
      name: "Vikki Kumar",
      img: img4,
      rating: "⭐⭐⭐⭐⭐",
      word: "Dr Ranjan Kumar Sinha Sir Is very brilliant Doctor, number 1 Doctor In Bhagalpur",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animationVariants = {
    hidden: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <div className="  w-screen flex flex-col justify-center items-center  p-5 ">
      <motion.div
        initial="hidden"
        animate={inView ? "animate" : "hidden"}
        variants={animationVariants}
        className="w-[95%]  rounded-lg  "
        ref={ref}
      >
        <p className="ml-[2rem]  md:text-xl">Our patients and their opinions</p>
        <h1 className="ml-[2rem]  text-4xl font-sm ">Testimonials</h1>
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          infiniteLoop
          showStatus={false}
          interval={10000}
          className="w-full    flex flex-col   shadow-lg rounded-2xl"
        >
          {list.map((obj, index) => (
            <div
              key={index}
              className="md:pb-16 pb-7 pt-2  flex justify-center items-center  md:px-[2rem] "
            >
              <div className=" flex  items-center sm:flex-row flex-col  justify-center sm:justify-normal ">
                <div className="sm:w-[10%] w-[30%] ">
                  <img src={obj.img} alt="doctor" className="rounded-full " />
                </div>
                <div className="md:w-[90%]  pl-5 flex flex-col gap-1 ">
                  <h1 className="  md:pt-[2rem] pt-1 text-center font-semibold md:text-3xl text-xl md:text-left">
                    {" " + obj.name}
                  </h1>

                  <h1 className="md:text-xl text-sm text-left">{obj.word}</h1>
                  <h1 className="text-center">{obj.rating}</h1>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
      <MapAddress />
    </div>
  );
};

export default Testimonial;
