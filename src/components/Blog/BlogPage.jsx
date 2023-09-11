import React, { useEffect, useState } from 'react'
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
          console.log(matchingElement)
         }
      }, [BlogName]);
   return (
    <div className='p-[3rem] gap-4'>

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
         
    </div>
  )
}

export default BlogPage