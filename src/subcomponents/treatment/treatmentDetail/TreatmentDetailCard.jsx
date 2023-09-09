import React from 'react'

const TreatmentDetailCard = ({data}) => {
  return (
    <div className='max-w-7xl mx-auto  w-[95%] py-[1rem] '>
        <h1 className='font-bold text-5xl '>
        {data.title}
        </h1>
        <h1 className='text-zinc-700 py-8'>
        {data.about}
        </h1>
        {/* subdata relate to treatment */}
    </div>
  )
}

export default TreatmentDetailCard