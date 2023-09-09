import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TreatmentDetailCard = ({data}) => {
    const[ref,inView]=useInView({
        triggerOnce:true,
    })
    const animationVariant={
        hidden:{x:-300,opacity:0},
        animate:{x:0,opacity:1 ,transition:{duration:1}}
    }
  return (
    <motion.div 
        ref={ref}
        initial='hidden'
        animate={inView?'animate':'hidden'}
        variants={animationVariant}
        className='max-w-7xl mx-auto  w-[95%] py-[1rem] '
        >
        <h1 className='font-bold text-5xl '>
        {data.title}
        </h1>
        <h1 className='text-zinc-700 py-8'>
        {data.about}
        </h1>
        {/* subdata relate to treatment */}
    </motion.div>
  )
}

export default TreatmentDetailCard