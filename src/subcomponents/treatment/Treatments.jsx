import React from "react";
import service from "./treatmentDetail/TreatmentDetailData/TreatmentDetailData";
import Card from "./Card";
const Treatments = () => {
    return (
    <div className="container mx-auto max-w-7xl  flex flex-col justify-center items-center pt-[1rem]">
      <div className="inline-block text-3xl my-3 font-semibold   text-stone-700">
          <h1>Our Services</h1>
        </div>
     <div className=" px-5 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
     {service.map((element,index) => (
        <Card name={element.name} img={element.img} description={element.description} index={index} key={index}/>
      ))}
     </div>
    </div>
  );
};

export default Treatments;
