import React, { useEffect, useState } from "react";
import img from "../assets/22.jpg";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Alert } from "@mui/material";
import img2 from "../assets/support.svg";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import {motion } from 'framer-motion'

//
const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(false);
  const [upcomming, setUpcomming] = useState(null);

  const navigate = useNavigate();
  window.scrollTo(0,0);
  useEffect(() => {
    const cookie = Cookie.get("appointment");
    if (cookie && !upcomming) {
      const array = cookie.split(":");
      setUpcomming({
        date: array[1],
        time: array[0],
      });
    }
  }, [upcomming]);

  const currentTime = new Date();

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handlerSubmit = async () => {
    if (!name || !phone || !time) {
      setShowAlert(true);
      return;
    }
    if (upcomming) {
      setError(true);
      return;
    }
    try {
      await axios.post("https://sheetdb.io/api/v1/65zgtevq83e6h", {
        Name: name,
        Phone: phone,
        Time: time,
        Dates: date.toLocaleDateString(),
        Message: message,
        BookingTime: currentTime.toLocaleString(),
      });

      const newDate = new Date(date);
      newDate.setHours(24, 0, 0, 0);
      Cookie.set("appointment", `${time}:${date.toLocaleDateString()}`, {
        expires: newDate,
      });
      navigate("/success");
    } catch (error) {
      setError(true);
    }
  };

  const timings = [
    { time: "10 - 11AM", value: 10 },
    { time: "11 - 12PM", value: 11 },
    { time: "12 - 01PM", value: 12 },
    { time: "02 - 03PM", value: 14 },
    { time: "03 - 04PM", value: 15 },
    { time: "04 - 05PM", value: 16 },
  ];
  const animatedVariant={
    hidden: { x: 0, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 2  } },
  }

  return (
    <motion.div 
      initial='hidden'
      animate='animate'
      variants={animatedVariant}
      className="w-full pb-5 max-w-7xl mx-auto justify-center   ">
      <div
        className="pt-[120px] pb-[100px] relative"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="overlay"></div>
        <div className="container relative  font-[Roboto]">
          <div className="text-center text-white ">
            <span className="text-sm">Book your  </span>
            <h1 className="text-capitalize mb-5 text-4xl gap-0 ">Appointment </h1>
          </div>
        </div>
      </div>
      {/* form is here */}
      <div className="w-full justify-center flex font-[Roboto]">
        <div className="md:w-[75%] w-full p-3 md:flex">
          <div className=" flex-[1] justify-center w-full mx-[5px] pl-2 bg-gray-100 py-4 rounded-3xl ">
            
            
            <div className="  min-h-[150px] flex flex-col items-center   ">
              <div className="">
                  <h1 className="text-[#223a66] text-[2rem] text-center  font-bold">Business Hours</h1>

                  <h2 className="text-[#223a66]  text-center text-[1.2rem]  pt-2 font-bold" >OPENING DAYS</h2>
                  <p className="font-semibold text-center">Monday-Friday 10 am - 6pm</p>

                  <h2 className="text-[#223a66] text-center text-[1.2rem] pt-4 font-bold">VACATIONS</h2>
                  <p className="font-semibold text-center" >All Sunday</p>
                  <p className="font-semibold text-center pb-4">All Official Holidays</p>
                </div>
                <div className="w-[80%] h-[2px] bg-zinc-500"></div>
                <div className=" w-[50px] h-[50px] pt-4">
                  <img src={img2} alt="" />
                </div>
                <h1 className="text-[1.2rem] font-semibold text-[#223a66] pt-4">
                  Call for an Emergency Service!
                </h1>
                <a
                  href="tel: +91 97099 93104"
                  className="text-[#223a66]   font-semibold text-[2rem]"
                >
                  {" "}
                  +91 97099 93104
                </a>
                 
            </div>
            {upcomming && (
              <div>
                <p>Booked</p>
                <h1>Next Appointment at</h1>
                <h1>{upcomming.time}</h1>
                <h1>{upcomming.date}</h1>
              </div>
            )}
          </div>
          <div className=" pl-2 flex-[2] my-2 ">
            <div className="mx-[5px] bg-[#223a66] p-4">
              <h1 className="md:text-[44px] text-3xl text-white md:mb-2 font-semibold">
                Book an appointment 
              </h1>
              <p className="text-white">
              Welcome to our urology clinic, where we specialize in providing 
              expert care for urological issues. Our dedicated team is here to assist you with a wide range of 
              urological concerns. Don't hesitate to reach out to us to schedule an appointment.

              </p>
              {showAlert && (
                <Alert severity="info">
                  Please ensure that all fields are filled out correctly.
                </Alert>
              )}
              {error && (
                <Alert severity="error">
                  {upcomming
                    ? "You have already booked an Appoinment!"
                    : "Somethings went wrong — Please try later!"}
                </Alert>
              )}
            </div>
            <div className="flex flex-col ">
              <div
                className="flex flex-col"
                onClick={() => {
                  setShowAlert(false);
                  setError(false);
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ mx: "5px", my: "8px" }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  sx={{ mx: "5px", my: "8px" }}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  sx={{ mx: "5px", my: "8px" }}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  multiline
                />
                <div className="md:grid grid-cols-2 mx-[5px]">
                  <Box sx={{ minWidth: 120, my: "0px" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          label="Appointment Date"
                          // value={value}
                          onChange={(newValue) => {
                            setDate(new Date(newValue));
                            setTime("");
                          }}
                          disablePast
                          required
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                  <Box sx={{ minWidth: 120, my: "8px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Time
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Time"
                        onChange={handleChange}
                      >
                        {timings.map((ele, index) => (
                          <MenuItem
                            key={index}
                            value={ele.time}
                            disabled={
                              ele.value <= currentTime.getHours() &&
                              currentTime.getDate() === date.getDate()
                            }
                          >
                            {ele.time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="text-center flex  justify-center lg:text-left">
                <button
                  className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 "
                  onClick={handlerSubmit}
                >
                  Make appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Appointment;
