import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";
import { useParams } from 'react-router-dom'
import BlogData from './BlogData'
const BlogPage = () => {
    const {BlogName}=useParams();
    const [blogOpen,setBlogOpen] =useState({
         title: '',
            subtitle: '',
        data: {},
    });
    window.scrollTo(0,0);
    
    useEffect(() => {
 
        const matchingElement = BlogData.find((element) => element.title === BlogName);
        if (matchingElement) {
            setBlogOpen(matchingElement)
         }
      }, [BlogName]);

      const { ref, inView } = useInView({
        triggerOnce: true,
      });
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
      className='p-[3rem] gap-4'>

        <h1 className='text-3xl font-semibold  mb-4'>{blogOpen.title}</h1>
        <h1 className='mb-4'>{blogOpen.subtitle}</h1>
        <div className='flex justify-center items-center w-[90%] py-6 '>
        <img className='border border-green-500 w-[90%] rounded-3xl h-auto' src={blogOpen.img }alt={blogOpen.title}  />

        </div>
        {Object.keys(blogOpen.data).map((key) => (
        <div  key={key}>
           <h1 className='text-3xl font-semibold  mb-4'>{key}</h1>
           {blogOpen.data[key]}
        </div>
      ))}
         
    </motion.div>
  )
}

export default BlogPage