import React from "react";
import services from "./treatmentData";
import Card from "./Card";
const Treatments = () => {
 
  return (
    <div className="container md:w-[93%] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {services.map((element,index) => (
        <Card element={element} index={index} key={index}/>
      ))}
    </div>
  );
};

export default Treatments;
