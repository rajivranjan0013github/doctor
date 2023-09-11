import React from "react";
import Img from "../../assets/profile.png";
import {BsFillCalendarWeekFill,BsWhatsapp} from 'react-icons/bs'
import {motion } from 'framer-motion'
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
const AboutDoctor = () => {
  window.scrollTo(0,0);

  const animatedVariant={
    hidden: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 2  } },
  }
  return (
    <motion.div 
      initial='hidden'
      animate='animate'
      variants={animatedVariant}
      className="flex justify-center p-3 py-16">
      <div className="container md:w-[83%] grid md:grid-cols-2 grid-row font-[Roboto] ">
        <div>
          <img src={Img} alt="" className="w-full " />
        </div>
        <div className="p-2">
          <div className="my-1">
            <h1 className="font-bold text-2xl">DR. RANJAN KUMAR SINHA </h1>
            <h1 className="font-semibold">
              (M.B.B.S, M.S, M.Ch, ESFFU, EUREP - Fellowship)
            </h1>
          </div>
          <p className=" text-xl opacity-75">
            Welcome to Kidney Stone & Urology Clinic, the premier urology clinic
            in Bhagalpur City, Bhagalpur. Our clinic is led by Dr. Rajan Kumar
            Sinha, a highly experienced urologist with over 9 years of
            experience in the field. Dr. Sinha is a specialist in urology, with
            a focus on minimally invasive surgery, endourology, pediatric
            urology, andrology, urolithiasis, laparoscopic urology, urethral
            stricture, urodynamics, prostate, prostate cancer, bladder cancer,
            and laparoscopic urology. At Kidney Stone & Urology Clinic, we are
            committed to providing the highest quality of care to our patients.
            We understand that urological conditions can be complex and
            sensitive, and we strive to provide a comfortable and supportive
            environment for our patients. Our team of highly trained and
            experienced medical professionals is dedicated to providing
            individualized care to each patient, and we work closely with our
            patients to develop personalized treatment plans that meet their
            unique needs.
          </p>
          <div className=" justify-between p-2   flex flex-col sm:flex-row gap-4">
            <Link target="_blank" to="https://wa.me/9709993104">
            <Button  
                  classStyle={"bg-green-500  hover:bg-green-700 border-green-700 "}
                  BsFillCalendarWeekFill={BsWhatsapp} 
                  text={"Chat on Whatsapp"}/>
            </Link>
            <Link>
            
            </Link>
           
            <Button 
                  classStyle={"bg-blue-500  hover:bg-blue-700 border-blue-700 "}
                  BsFillCalendarWeekFill={BsFillCalendarWeekFill} 
                  text={"Book an Appointment"}/>

          </div>
        </div>
        
      </div>
      
    </motion.div>
  );
};

export default AboutDoctor;
