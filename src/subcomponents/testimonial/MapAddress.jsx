import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"; 

const MapAddress = () => {
    const {ref,inView}=useInView({
        triggerOnce:true
      })
      const animationVariants={
        hidden: { x: 0, scale: 0.5 },
        animate: { x: 0, scale: 1, transition: { duration: 1.5 } },
      }
  return (
    <motion.div 
        ref={ref}
        initial='hidden'
        animate={inView?"animate":"hidden"} 
        variants={animationVariants}
        className="m-2 w-[95%] pt-5 ">
        <iframe
        title="Hospital address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5027500814617!2d87.00601977561912!3d25.253667877674634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f036209d394ebb%3A0xed9af541658ee7f5!2sDr%20Rajan%20Kumar%20Sinha%20(Superspecialist)%20%7BM.Ch%20-Urology%7D!5e0!3m2!1sen!2sin!4v1692782247481!5m2!1sen!2sin"
          className=" h-[50vh] w-full shadow-md rounded-2xl"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
  )
}

export default MapAddress