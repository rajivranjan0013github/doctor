import React, { useState } from 'react'
import {BsWhatsapp,BsFillCalendarWeekFill} from 'react-icons/bs'
import {FaLocationCrosshairs} from 'react-icons/fa6'
import { Link } from "react-router-dom";
import {BiSolidPhoneCall} from 'react-icons/bi'
const SideNavbar = () => {
    const[open,setOpen]=useState(null)
    const handleToggler=(val)=>{
        setOpen(val)
    }
  return (
    <div className='fixed z-20	top-[30%] px-2'>
        <Link target="_blank" to="https://wa.me/9709993104">
            <div className={` my-2 gap-2  rounded-full bg-green-500 text-white cursor-pointer flex ${open===0?"w-[150px]":"w-8"}` }
            onMouseEnter={()=>handleToggler(0)}
            onMouseLeave={()=>setOpen(null)}>
        <BsWhatsapp size={"2rem"}  />
        {open===0&&<span className='pt-1'>Whatsapp</span>}
    
        </div>
        </Link>
        
        <Link target="_blank" to="https://www.google.com/maps/place/Dr+Rajan+Kumar+Sinha+(Superspecialist)+%7BM.Ch+-Urology%7D/@25.253668,87.008595,17z/data=!4m6!3m5!1s0x39f036209d394ebb:0xed9af541658ee7f5!8m2!3d25.2536679!4d87.0085947!16s%2Fg%2F11dybcrl_p?hl=en&entry=ttu">
            <div 
            className={`my-2 gap-2  rounded-full bg-blue-700   text-white cursor-pointer flex  ${open===1?"w-[150px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(1)}
            onMouseLeave={()=>setOpen(null)}>
        <FaLocationCrosshairs size={"2rem"}/>
        {open===1&&<span className='pt-1'>Direction</span>}

            </div>
        </Link>
       
        <div className={` gap-2  my-2 rounded-full bg-zinc-100 hover:bg-zinc-200  text-stone-700  cursor-pointer flex  ${open===2?"w-[180px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(2)}
            onMouseLeave={()=>setOpen(null)}>
        <BsFillCalendarWeekFill size={"2rem"}/>
        {open===2&&<span className='pt-1'>Book Appointment</span>}
        </div>

        <Link target="_blank" to="tel:9709993104">
            <div 
            className={`my-2 gap-2  rounded-full bg-white hover:bg-zinc-200 text-blue-500 cursor-pointer flex ${open===3?"w-[150px]":"w-8"}`}
            onMouseEnter={()=>handleToggler(3)}
            onMouseLeave={()=>setOpen(null)}>
            <BiSolidPhoneCall size={"2rem"}/>
            {open===3&&<span className='pt-1'>Call us Now</span>}
            </div>
        </Link>
    </div>
  )
}

export default SideNavbar