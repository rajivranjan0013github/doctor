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
        <div className={` my-2 gap-2  rounded-full bg-green-500 text-white cursor-pointer flex ${open===0?"w-[150px]":"w-8"}` }
            onMouseEnter={()=>handleToggler(0)}
            onMouseLeave={()=>setOpen(null)}>
        <BsWhatsapp size={"2rem"}  />
        {open===0&&<span className='pt-1'>Whatsapp</span>}
    
        </div>
        
        <div 
            className={`my-2 gap-2  rounded-full bg-blue-700   text-white cursor-pointer flex  ${open===1?"w-[150px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(1)}
            onMouseLeave={()=>setOpen(null)}>
        <FaLocationCrosshairs size={"2rem"}/>
        {open===1&&<span className='pt-1'>Direction</span>}

        </div>
       
        <div className={` gap-2  my-2 rounded-full bg-zinc-100 hover:bg-zinc-200  text-stone-700  cursor-pointer flex  ${open===2?"w-[180px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(2)}
            onMouseLeave={()=>setOpen(null)}>
        <BsFillCalendarWeekFill size={"2rem"}/>
        {open===2&&<span className='pt-1'>Book Appointment</span>}
        </div>

        <div 
            className={`my-2 gap-2  rounded-full bg-white hover:bg-zinc-200 text-blue-500 cursor-pointer flex ${open===3?"w-[150px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(3)}
            onMouseLeave={()=>setOpen(null)}>
            <BiSolidPhoneCall size={"2rem"}/>
            {open===3&&<span className='pt-1'>Phone Number</span>}
        </div>
    </div>
  )
}

export default SideNavbar