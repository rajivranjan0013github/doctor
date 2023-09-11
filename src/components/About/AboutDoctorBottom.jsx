import React from 'react'
import {motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutDoctorBottom = () => {
    const {ref,inView}=useInView({
        triggerOnce:true
    })
    const animatedVariant={
        hidden: { x: -300, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 2  } },
      }
  return (
    <motion.div 
        ref={ref}
        initial='hidden'
        animate= {inView?'animate':'hidden'}
        variants={animatedVariant}
        className="flex justify-center p-3  pb-16">
            <div className="  container md:w-[83%] grid md:grid-cols-1 grid-row font-[Roboto] gap-6 ">
            <h1 className=" text-4xl font-[500]">
            Awards
            </h1>
            <ul className=" pl-5 list-decimal ">
                <li>
                Millennium Intrenational Urology Conference (MIUC) – Travelling fellowship
                </li>
                <li>
                USI – Olympus Resident’s International Travel Fellowship – 12th European Urology Residents Education Programme (EUREP)
                </li>
            </ul>

            <h1 className=" text-4xl font-[500]">
            Scholarship
            </h1>
            <ul className=" pl-5 list-disc ">
                <li>
                Fellowship in female, functional and neuro-urology with Prof. D. Ridder at University Hospital of Gasthuisberg
                </li>
            </ul>

            <h1 className=" text-4xl font-[500]">
            Publications
            </h1>
            <ul className="pl-5   list-disc ">
                <li>
                https://www.researchgate.net/profile/Rajan-Sinha
                </li>
            </ul>

            </div>
    </motion.div>
  )
}

export default AboutDoctorBottom