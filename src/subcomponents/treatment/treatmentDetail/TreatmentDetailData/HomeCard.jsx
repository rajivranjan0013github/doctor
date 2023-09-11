import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

const HomeCard = ({name,img,description,index}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });

      const navigate=useNavigate();
    
      const animationVariants = {
        hidden: { x: -150, scale:0.1 },
        animate: { x: 0, scale: 1, transition: { duration: 1.5  } },
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
        className="  text-left p-2 justify-center items-center border-2 bg-stone-200  flex flex-col    font-[Roboto]  shadow-2xl cursor-pointer hover:bg-gradient-to-r from-blue-600 to-cyan-500   hover:border-none "
        onClick={handleNavigate}
        >
          <img
            className="w-[70px] h-[70px] self-center"
            src={img}
            alt={img}
          />
          <h1 className="text-sm   font-bold text-stone-700">{name}</h1>
        </motion.div>
   )
}

export default HomeCard