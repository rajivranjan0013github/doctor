import React from "react";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  const list = [
    {
      name: "Akshit Jaiswal",
      word: "The doctor was very Good and examined the symptoms very carefully. He listened to my problems and symptoms thoroughly. management was arrogant. But got good treatment from a doctor. Thanks, Dr. Rajan. I am happy today.",
    },
    {
      name: "Sheikh Firdosh Ali",
      word: "Dr. Ranjan Kumar Sinha Is a very brilliant Doctor, the number 1 Doctor In Bhagalpur due to Urologists also all the The staff is very helpful & cooperative. Thanks to all.",
    },
    {
      name: "Ishani Sarkar",
      word: "Hello Doctor, Greetings. Please let me know do you treat IC issues. Interstitial Cystitis in women. Painful Bladder. Thnx and appreciate in advance. Pls, let me know. I have heard a lot about you of being a good human and a great doctor in your respective field.",
    },
  ];
  return (
    <div className="md:w-[83%] w-screen md:grid grid-cols-2 ">
      <div className="m-2">
        <iframe
        title="Hospital address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5027500814617!2d87.00601977561912!3d25.253667877674634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f036209d394ebb%3A0xed9af541658ee7f5!2sDr%20Rajan%20Kumar%20Sinha%20(Superspecialist)%20%7BM.Ch%20-Urology%7D!5e0!3m2!1sen!2sin!4v1692782247481!5m2!1sen!2sin"
          className=" h-[50vh] w-full shadow-md"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-orange-100 p-2 md:pb-7 flex flex-col justify-center items-center m-2">
        <h1 className=" text-3xl font-bold underline">Testimonials</h1>
        <Carousel
          autoPlay
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          interval={10000}
          className="w-full"
        >
          {list.map((obj,index) => (
            <div key={index} className=" py-5">
              <div className="md:text-xl text-lg ">{obj.word}</div>
              <div className="">
                <h1 className="text-end font-semibold">~ {" " + obj.name}</h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
