import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Card = ({element,index}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
      });
      // useEffect(() => {
      //    console.log(inView)
      // }, [inView ])
      const animationVariants = {
        hidden: { x: 0, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1.5  } },
      };
  return (
        <motion.div 
        key={index}
        initial='hidden'
        animate={inView?"animate":"hidden"} 
        variants={animationVariants}
        ref={ref}
        className="h-full text-left justify-center items-center bg-stone-100 flex flex-col p-5 mb-[1.75rem] font-[Roboto] rounded-3xl shadow-lg">
          <img
            className="w-[50px] h-[50px] self-center"
            src={element.uri}
            alt={element.title}
          />
          <h1 className="text-2xl font-bold text-stone-700">{element.title}</h1>
          <p className="text-stone-800">{element.about}</p>
        </motion.div>
   )
}

export default Card