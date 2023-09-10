import React from 'react'
import HomeCard from './treatmentDetail/TreatmentDetailData/HomeCard';
import { useNavigate } from 'react-router-dom';

const HomeTreatment = () => {
    const data=[
        {name: 'Kidney Stone Treatment',},
        { name: 'Endourology',},
        {name: 'Andrology & Infertility',},
        {name: 'Bladder Cancer',},
    ]
    const navigate=useNavigate();
  return (
    <div className=' h-full w-[90%]     p-5   '>
    
    <div className="container md:w-[93%] grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {data.map((element,index) => (
        
        <HomeCard name={element.name} description={""} index={index} key={index}/>
        ))}
        
    </div>
    <div className='w-[93%] flex justify-end items-end pt-5 '>
            <button 
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '
                onClick={()=>navigate('/services')}
                >  More Services
            </button>
        </div>
    </div>
  )
}

export default HomeTreatment