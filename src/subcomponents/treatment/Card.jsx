import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

const Card = ({name,description,index,img}) => {
  window.scrollTo(0,0);
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
      const navigate=useNavigate();
      // useEffect(() => {
      //    console.log(inView)
      // }, [inView ])
      const animationVariants = {
        hidden: { x: 0, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1.5  } },
      };
      const handleNavigate=()=>{
       
        navigate(`/${name}`)

      }
  return (
        <motion.div 
        
        key={index}
        initial='hidden'
        animate={inView?"animate":"hidden"} 
        variants={animationVariants}
        ref={ref}
        className="h-full text-left justify-center items-center bg-stone-100 flex flex-col p-5 mb-[1.75rem] font-[Roboto] rounded-3xl shadow-lg cursor-pointer"
        onClick={handleNavigate}
        >
          <img
            className="w-[50px] h-[50px] self-center"
            src={img}
            alt={name}
          />
          <h1 className="text-2xl font-bold text-stone-700">{name}</h1>
          <p className="text-stone-800">{description}</p>
        </motion.div>
   )
}

export default Card