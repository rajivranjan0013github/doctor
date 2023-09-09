import React, { useEffect } from "react";
import "./AboutHome.css";
import img from "../../assets/profile.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; 

const AboutHome = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  // useEffect(() => {
  //   console.log("Element is in view: ", inView)
  // }, [inView])
  const animationVariants = {
    hidden: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 2  } },
  };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView?"animate":"hidden"} 
    variants={animationVariants}
    className="w-[80%] py-[1rem]" >
      <div className="aboutheading">
        <p>About</p>
      </div>
      <div className="cardAndTimeline ">
        <div className="card rounded-lg">
          <div className="profileContain py-2">
            <img className="profile" src={img} alt="profile pic"/>
          </div>
          <div className="names">
            <div className="name">Dr. Rajan Kumar Sinha</div>
            <div className="degree">MBBS,MS(General surgery),Mch(Urology)</div>
          </div>
          <div className="description ">
            <TextContent/>
          </div>
        </div>
        {/* <VerticalComponent/> */}
      </div>
    </motion.div>
  );
};

export default AboutHome;





const TextContent=()=>{
  return<p className="text-stone-700 text-left  px-8">
  Dr. Sinha has expertise in{" "}
  <b>
    Endourology, Reconstructive Urology, , Urological Oncology,
    Andrology
  </b>{" "}
  as well as <b>Laparoscopic Urological Surgery</b>. He has done his
  schooling from <b>Sainik School Tilaiya (Jharkhand)</b>. Then he
  passed M.B.B.S. (2005) followed by <b>MS (General Surgery)</b> in
  2010 from <b>RIMS, Ranchi, Jharkhand</b>. After his Master's
  Degree he worked as Senior Resident in Deptartment of Urology at{" "}
  <b>IGIMS, Patna (2011-12)</b>. Thereafter, He pursued <b>M.Ch</b>{" "}
  in <b>Urology</b> from <b>CNMCH</b>, Kolkata (2013-15).{" "}
</p>
  
}
