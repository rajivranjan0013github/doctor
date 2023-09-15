import React from "react";
import img2 from "../assets/bg-4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutHome from "../subcomponents/Home/AboutHome";
import NumberAni from "../subcomponents/Home/NumberAni";
import Testimonial from "../subcomponents/testimonial/Testimonial";
import HomeTreatment from "../subcomponents/treatment/HomeTreatment";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BasicSpeedDial from "../subcomponents/Home/SpeedDial";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animationVariants = {
    hidden: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };
  return (
    <div className="relative w-full  font-[Roboto] ">
      <div className="z-10 bg-red-300 fixed right-[15px] bottom-[20px] md:hidden">
        <BasicSpeedDial />
      </div>
      <section
        className=" py-4 "
        style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row  md:ml-[10%]">
            <div className="md:w-1/2">
              <div className="p-4 ">
                <hr className="mb-3" />
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  Kidney Stone Uro Clinic
                </span>
                <h1 className="text-3xl my-3 tracking-tighter text-[#223a66] capitalize">
                  Your most trusted health partner
                </h1>
                <p className="mb-4 pr-5">
                  Improving Lives With Our Experts: Your Trusted Partner for
                  Comprehensive Solutions and Well-being in Urological Health.
                </p>
                <div className="text-center lg:text-left">
                  <a
                    href="appoinment.html"
                    target="_blank"
                    className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                  >
                    Make appointment{" "}
                    <i className="ml-2 icofont-simple-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
