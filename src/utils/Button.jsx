import React from 'react'

const Button = ({BsFillCalendarWeekFill,text,classStyle}) => {
    console.log(classStyle)
  return (
    <div className=' flex justify-center items-center'>
            <button className={`${classStyle} text-white font-bold py-2 px-4 border rounded flex gap-3`}> 
                <span>{text}</span> 
                <BsFillCalendarWeekFill size={'1.2rem'}/> </button>

            </div>
  )
}

export default Button