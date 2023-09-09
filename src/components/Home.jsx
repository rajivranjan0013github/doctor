import React from "react";
import img1 from "../assets/5-habits-for-prevention-of-kidney-stones.jpg";
import img2 from "../assets/do-suspect-kidney-stone.jpg";
import img3 from "../assets/timeline3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutHome from "../subcomponents/Home/AboutHome";
import NumberAni from "../subcomponents/Home/NumberAni";
import Treatments from "../subcomponents/Home/Treatments";
import Testimonial from "../subcomponents/Home/Testimonial";

const Home = () => {
  return (
    <div className="relative w-full  font-[Roboto]">
      <Carousel 
        autoPlay 
        showThumbs={false} 
        infiniteLoop 
        showStatus={false}
         
        >
        <div
          className="h-[550px] w-full"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className={"h-full "}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img src={img2} alt="#" className="h-[550px] object-cover" /> */}
          {/* <p className="legend"></p> */}
        </div>
      </Carousel>
      {/* about profile */}
      <div className="max-w-7xl mx-auto justify-center w-full flex">
        <AboutHome />
      </div>
      {/* number of services part */}
      <div className=" max-w-7xl mx-auto    w-full my-3 justify-center flex">
        <NumberAni />
      </div>
      <div className="items-center flex flex-col  max-w-7xl mx-auto  ">
        <div className="inline-block text-3xl my-3 font-semibold">
          <h1>Our Services</h1>
          <div className="border-b-2 border-black border-dotted"></div>
        </div>
        <Treatments />
      </div>

      {/* testimonials and direaction */}
      <div className="max-w-7xl mx-auto   justify-center w-full flex my-4">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
