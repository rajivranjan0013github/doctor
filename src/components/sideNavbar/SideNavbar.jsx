import React, { useState } from 'react'
import {BsWhatsapp,BsFillCalendarWeekFill} from 'react-icons/bs'
import {FaLocationCrosshairs} from 'react-icons/fa6'
import {BiSolidPhoneCall} from 'react-icons/bi'
const SideNavbar = () => {
    const[open,setOpen]=useState(null)
    const handleToggler=(val)=>{
        setOpen(val)
    }
  return (
    <div className='fixed z-20	top-[30%] px-2'>
        <div className={` my-2 rounded-full bg-green-500 text-white cursor-pointer flex ${open===0?"w-[150px]":"w-8"}` }
            onMouseEnter={()=>handleToggler(0)}
            onMouseLeave={()=>setOpen(null)}>
        <BsWhatsapp size={"2rem"}  />
        {open===0&&<span className='pl-2'>Whatsapp</span>}
    
        </div>
        
        <div 
            className={`my-2 rounded-full bg-blue-500 text-white cursor-pointer flex  ${open===1?"w-[150px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(1)}
            onMouseLeave={()=>setOpen(null)}>
        <FaLocationCrosshairs size={"2rem"}/>
        {open===1&&<span className='pl-2'>Direction</span>}

        </div>
       
        <div className={`my-2 rounded-full bg-white  text-stone-700  cursor-pointer flex  ${open===2?"w-[150px]":"w-9"}`}
            onMouseEnter={()=>handleToggler(2)}
            onMouseLeave={()=>setOpen(null)}>
        <BsFillCalendarWeekFill size={"2rem"}/>
        {open===2&&<span className='pl-2'>Calender</span>}
        </div>

        <div 
            className={`my-2 rounded-full bg-white text-blue-500 cursor-pointer flex ${open===3?"w-[150px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(3)}
            onMouseLeave={()=>setOpen(null)}>
            <BiSolidPhoneCall size={"2rem"}/>
            {open===3&&<span className='pl-2'>Phone Number</span>}
        </div>
    </div>
  )
}

export default SideNavbar