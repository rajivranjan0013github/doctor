import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import {motion } from 'framer-motion'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
  };
  const animatedVariant={
    hidden: { y: -300, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 2  } },
  }
  return (
    <motion.div 
    initial='hidden'
    animate='animate'
    variants={animatedVariant}
      className=" md:m-3 font-[Roboto] flex justify-center items-center w-full">
      <div className="flex justify-center lg:flex-row flex-col py-5 gap-8">
       
        
        <div className="lg-[50%] contact-form ">
          <div className="inline-block pb-6">
            <h2 className="font-semibold  text-2xl  ">Contact Us</h2>
            <div className="border-b-[1.5px] border-black border-dotted"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>



        <div className=" p-2 lg:w-[50%] w-full justify-center">
          <iframe
          title="map address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5027500814617!2d87.00601977561912!3d25.253667877674634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f036209d394ebb%3A0xed9af541658ee7f5!2sDr%20Rajan%20Kumar%20Sinha%20(Superspecialist)%20%7BM.Ch%20-Urology%7D!5e0!3m2!1sen!2sin!4v1692782247481!5m2!1sen!2sin"
            className=" h-[50vh] w-full shadow-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="grid grid-cols-2">
            <div className="py-5">
              <h1 className="font-semibold">Kidney Stone & Urology Clinic</h1>
              <p>
                #Jail Road, Anandgarh Colony,
                <br />
                Tilkamanjhi, Bhagalpur,
                <br /> Bihar 812001
              </p>
            </div>
            <div className="py-5">
              <div className="flex hover:cursor-pointer">
                <IoCall className="self-center" />
                <p className="px-2">
                  <a href="tel: +91 97099 93104"> +91 97099 93104</a>
                </p>
              </div>
              <div className="flex ">
                <AiOutlineMail className="self-center" />
                <p className="px-2">rajan_rims@yahoo.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
