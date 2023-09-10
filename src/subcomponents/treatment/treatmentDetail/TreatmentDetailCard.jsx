import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import MapAddress from "../../testimonial/MapAddress"
import {BsFillCalendarWeekFill} from 'react-icons/bs'

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
          <div>
            <h1 className='font-bold text-5xl '>
              {data.name} 
            </h1>
            <h1 className='text-zinc-700 py-8'>
              {data.description}
            </h1>
          </div>
          <div>
            <h1 className='font-bold text-2xl '>
            What are the treatment modalities  for {data.name} 
            </h1>
            <h1 className='text-zinc-700 py-6'>
              {data.indications && Object.keys(data.indications).map(item => <li key={item}>
                    {data.indications[item]}
                    </li>)}
            </h1>
          </div>
          <div>
            <h1 className='font-bold text-2xl '>
            {data.name} procedure
            </h1>
            <h1 className='text-zinc-700 py-6'>
              {data.procedure}
            </h1>
          </div>


          <div>
            <h1 className='font-bold text-2xl '>
            What are the benefits {data.name} 
            </h1>
            <h1 className='text-zinc-700 py-6'>
              {data.benefits &&  data.benefits.map(item => <li key={item}>
                    {item}
                    </li>)}
            </h1>
          </div>

          <div>
            <h1 className='font-bold text-2xl '>
            How long does it take to recover from a  surgery?
            </h1>
            <h1 className='text-zinc-700 py-6'>
              {data.recovery}
            </h1>
          </div>
          <div>
            <h1 className='font-bold text-2xl '>
            You or someone you know needed consultation?
            </h1>
            <h1 className='text-zinc-700 py-6'>
              {data.consultation}
            </h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex gap-3'> <span>Book Appointment</span> <BsFillCalendarWeekFill size={'1.2rem'}/> </button>
          </div>
        
        {/* subdata relate to treatment */}
        <h1 className='font-bold text-2xl py-5'>Our Location</h1>
        <MapAddress/>
    </motion.div>
  )
}

export default TreatmentDetailCard