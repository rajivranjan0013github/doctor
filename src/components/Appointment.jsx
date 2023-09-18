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

  return (
    <div className="w-full">
      <div
        className="pt-[120px] pb-[70px] relative"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="overlay"></div>
        <div className="container relative  font-[Roboto]">
          <div className="text-center text-white ">
            <span className="text-sm">Book your Seat</span>
            <h1 className="text-capitalize mb-5 text-4xl gap-0 ">Appoinment</h1>
          </div>
        </div>
      </div>
      {/* form is here */}
      <div className="w-full justify-center flex font-[Roboto]">
        <div className="md:w-[75%] w-full p-3 md:flex">
          <div className=" flex-[1] justify-center w-full mx-[5px] pl-2 bg-gray-100 py-4 ">
            <div className="justify-center min-h-[150px] flex flex-col items-center">
              <div className=" w-[50px] h-[50px]">
                <img src={img2} alt="" />
              </div>
              <h1 className="text-xl font-semibold text-[#223a66]">
                Call for an Emergency Service!
              </h1>
              <a
                href="tel: +91 97099 93104"
                className="text-[#223a66]   font-semibold text-2xl"
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
          <div className=" pl-2 flex-[2] my-2">
            <div className="mx-[5px] ">
              <h1 className="md:text-[44px] text-3xl text-[#223a66] md:mb-2 font-semibold">
                Book an appoinment
              </h1>
              <p>
                Mollitia dicta commodi est recusandae iste, natus eum asperiores
                corrupti qui velit . Iste dolorum atque similique praesentium
                soluta.
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
            <div className="flex flex-col">
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
              <div className="text-center lg:text-left">
                <button
                  className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                  onClick={handlerSubmit}
                >
                  Make appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
