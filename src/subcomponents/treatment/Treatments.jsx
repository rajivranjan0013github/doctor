import React from "react";
import services from "./treatmentData";
const Treatments = () => {
  
  return (
    <div className="container md:w-[93%] grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {services.map((element,index) => (
        <div key={index} className=" text-left justify-center items-center bg-stone-100 flex flex-col p-5 font-[Roboto] rounded-3xl">
          <img
            className="w-[50px] h-[50px] self-center"
            src={element.uri}
            alt={element.title}
          />
          <h1 className="text-2xl font-bold">{element.title}</h1>
          <p>{element.about}</p>
        </div>
      ))}
    </div>
  );
};

export default Treatments;
