import React from "react";
import img1 from "../assets/5-habits-for-prevention-of-kidney-stones.jpg";
import img2 from "../assets/do-suspect-kidney-stone.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutHome from "../subcomponents/Home/AboutHome";
import NumberAni from "../subcomponents/Home/NumberAni";
import Treatments from "../subcomponents/treatment/Treatments";
import Testimonial from "../subcomponents/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="relative w-full  font-[Roboto] pt-1">
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={img1}  alt="prevention-of-kidney-stones"  className="w-full h-auto object-cover"/>
        </div>
        <div>
          <img src={img2}  alt="do-suspect-kidney-stone"  className="w-full h-auto object-cover"/>
        </div>
         
         
         
          
      </Carousel>
      {/* about profile */}
      <div className="max-w-7xl mx-auto justify-center w-full flex">
        <AboutHome />
      </div>
      {/* number of services part */}
      <div className=" max-w-7xl mx-auto  w-[95%] my-3 justify-center flex">
        <NumberAni />
      </div>
      <div className="items-center flex flex-col  max-w-7xl w-[95%]  mx-auto  ">
        <div className="inline-block text-3xl my-3 font-semibold">
          <h1>Our Services</h1>
          <div className="border-b-2 border-black border-dotted"></div>
        </div>
        <Treatments />
      </div>

      {/* testimonials and direaction */}
      <div className="max-w-7xl mx-auto   justify-center w-full flex my-4">
        <Testimonial/>
      </div>
    </div>
  );
};

export default Home;
