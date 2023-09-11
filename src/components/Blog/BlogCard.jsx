import React   from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({title,img}) => {
     const navigate=useNavigate();
    const BlogPageHandler=(title)=>{
        navigate(`/urologist-blog/${title}`)
    }
  return (
    <div className='w-[90%] sm:w-[45%]  border border-black'>
        <img className="w-[90%]  h-[10rem] self-center py-2 m-auto" src={img} alt="" />
        <h1>{title}</h1>
        <div className='flex justify-end '>
            <button onClick={()=>BlogPageHandler(title)}>Read More</button></div>
    </div>
  )
}

export default BlogCard