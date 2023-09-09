import React, { useEffect, useState } from 'react'
import  {useParams} from'react-router-dom'
import services from'../treatmentData'
import TreatmentDetailCard from './TreatmentDetailCard';

const TreatmentDetail = () => {
     window.scrollTo(0,0);
    const  {treatmentName}= useParams();
    const [data,setData]=useState({})
    useEffect(() => {
        const matchingElement = services.find((element) => element.title === treatmentName);
        if (matchingElement) {
          setData(matchingElement);
        }
        window.scrollTo(0,0); //scroll to top when page change
      }, [treatmentName]);
   return (
    < >
           <TreatmentDetailCard data={data}/>
    </>
  )
}

export default TreatmentDetail