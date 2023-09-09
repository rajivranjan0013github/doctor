import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const NumberAni = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
 

  const countArray = [
    { name: "LASER & OPEN SURGERIES DONE", count: 1450 },
    { name: "PROSTATE DISEASE CASES TREATED", count: 4800 },
    { name: "KIDNEY & BLADDER STONES REMOVED", count: 5800 },
    { name: "ERECTILE DYSFUNCTION CASES TREATED", count: 12000 },
  ];
  return (
    <div
      ref={ref}
      className="counter-animation container md:w-[83%] flex flex-wrap justify-evenly shadow-lg text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white  p-4 rounded-lg"
    >
      {inView &&
        countArray.map((obj,index) => (
          <div key={index} className="w-[150px]  flex flex-col py-3 ">
            {/* <h1>{obj.count}</h1> */}
            <div className="text-4xl font-[Roboto] font-bold">
              <CountUp end={obj.count} delay={1 / 2} duration={4} />
              {"+"}
            </div>
            <p>{obj.name}</p>
          </div>
        ))}
    </div>
  );
};

export default NumberAni;
