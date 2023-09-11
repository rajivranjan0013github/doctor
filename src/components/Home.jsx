import React from "react";
import img1 from "../assets/5-habits-for-prevention-of-kidney-stones.jpg";
import img2 from "../assets/do-suspect-kidney-stone.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutHome from "../subcomponents/Home/AboutHome";
import NumberAni from "../subcomponents/Home/NumberAni";
import Testimonial from "../subcomponents/testimonial/Testimonial";
import HomeTreatment from "../subcomponents/treatment/HomeTreatment";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animationVariants = {
    hidden: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };
  return (
    <div className="relative w-full  font-[Roboto] pt-1">
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src={img1}
            alt="prevention-of-kidney-stones"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="do-suspect-kidney-stone"
            className="w-full h-auto object-cover"
          />
        </div>
      </Carousel>
      {/* about profile */}
      <div className="max-w-7xl mx-auto justify-center w-full flex">
        <AboutHome />
      </div>
      {/* number of services part */}
      <div className=" max-w-7xl mx-auto  w-[95%] my-3 justify-center flex">
        <NumberAni />
      </div>

      {/*service home */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "animate" : "hidden"}
        variants={animationVariants}
        className="      max-w-7xl  	  w-[95%]  mx-auto  "
      >
        <div className="flex  flex-col  mx-auto md:w-[83%] bg-stone-300 rounded-2xl shadow-xl px-4 justify-center items-center">
          <div className="inline-block text-3xl my-3 font-semibold   text-stone-700">
            <h1>Our Services</h1>
          </div>
          <HomeTreatment />
        </div>
      </motion.div>

      {/* testimonials and direaction */}
      <div className="max-w-7xl mx-auto   justify-center w-full flex my-4">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
