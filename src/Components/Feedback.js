import React, { useState } from "react";
import "../css/form.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_BACKEND_URL;


export default function Feedback() {
  const feedbackStyle = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: "100vh",
    width: "100vw",
    // backgroundColor: '#1f1f47',
    flexDirection: "column",
    color:'white',
  };
  const navigate = useNavigate()
  const [over, setrating] = useState()
  const [quality, qualityrating] = useState()
  const [time, timerating] = useState()
  const [sup, supportrating] = useState()
  const [mon, moneyrating] = useState()
  const [msg, anyMsg] = useState()
  const [service, setService] = useState("");
    
  const handleServiceChange = (event) => {
    const selectedValue = event.target.value; // Get the selected value
    setService(selectedValue); // Update the state
    console.log("Selected value:", selectedValue); 
  };

  const handleRating = (event) => {
    // setOverall(event.target.value);
    // console.log("Selected Overall Rating:", event.target.value);
    const ratingValue = event.target.value; // Get the value directly
    setrating(ratingValue);
    console.log(ratingValue);
  };

  const handleQrating =(event)=>{
    qualityrating(event.target.value);
  }
  const handleTimerating =(event)=>{
    timerating(event.target.value);
  }
  const handleSupportrating =(event)=>{
    supportrating(event.target.value);
  }
  const handleMoneyrating =(event)=>{
    moneyrating(event.target.value);
  }
  const handleMessga =(event)=>{
    anyMsg(event.target.value);
  }

  const handleSubmit=async(Event)=>
  {
    Event.preventDefault();
    try {
      const token= localStorage.getItem('token');
      console.log(token);
  
      console.log(token);

      const response = await axios.post(`${API_URL}/api/review/submitForm`,{
        overall:over,
        Service_Type:service,
        quality:quality,
        timeline: time,
        money: mon,
        support: sup,
        msg:msg
      },
    {
      headers:
      {
        "Auth-token": token,
      },
    });
    //   const response = await axios.post('http://localhost:5000/api/review/submitForm',{
    //     overall:over,
    //     Service_Type:service,
    //     quality:quality,
    //     timeline: time,
    //     money: mon,
    //     support: sup,
    //     msg:msg
    //   },
    // {
    //   headers:
    //   {
    //     "Auth-token": token,
    //   },
    // });
    toast.success("Thank you for your feedback!", {
      onClose: () => navigate('/mainpage'),
      position: "top-center",
      autoClose: 1500, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
      console.log(response.data)
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 1500,
      });
      console.log(error)
    }

  }
 
  return (
    <div className ="feedStyle" style={feedbackStyle}>
      <div className="containerr">
      {/* -------------------------------------------------------------------------------------------------------- */}
      <form action="" onSubmit={handleSubmit}>
      <div  style={{ display: 'flex', alignItems: 'center',flexDirection:'column'}}>
        <h4>Overall Experience</h4>
      <span className="star-rating">
          <label htmlFor="rate-1" style={{ "--i": 1 }}>
          <i className="fa-solid fa-star"></i>
          <div className="label-description" data-content="Terrible"></div>
        </label>
        <input type="radio" name="rating" id="rate-1" value="1"  onChange={handleRating} />

        <label htmlFor="rate-2" style={{ "--i": 2 }}>
          <i className="fa-solid fa-star"></i>
          <div className="label-description" data-content="Bad"></div>
        </label>
        <input type="radio" name="rating" id="rate-2" value="2"  onChange={handleRating} />

        <label htmlFor="rate-3" style={{ "--i": 3 }}>
          <i className="fa-solid fa-star"></i>
          <div className="label-description" data-content="OK"></div>
        </label>
        <input type="radio" name="rating" id="rate-3" value="3"  onChange={handleRating} />

        <label htmlFor="rate-4" style={{ "--i": 4 }}>
          <i className="fa-solid fa-star"></i>
          <div className="label-description" data-content="Good"></div>
        </label>
        <input type="radio" name="rating" id="rate-4" value="4"  onChange={handleRating}/>

        <label htmlFor="rate-5" style={{ "--i": 5 }}>
          <i className="fa-solid fa-star"></i>
          <div className="label-description" data-content="Excellent"></div>
        </label>
        <input type="radio" name="rating" id="rate-5" value="5" onChange={handleRating} />
      </span>
        </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="service">
        <h3>Select Service Details</h3>
        <select value={service} onChange={handleServiceChange}>
          <option value="" disabled>
            Select an option
          </option>
          <option value="Cloud">Cloud Service</option>
          <option value="Web">Web Service</option>
          <option value="General">General</option>
        </select>
        {/* {service && <p>You selected: {service}</p>} */}
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}

      <div className="container d-flex justify-content-center mt-20">
        <div className="row">
          <div className="col-md-12">
            <div className="stars">
              <div className="feature">
                <h4>Quality of Service</h4>
              </div>
              <div>
                  <input
                    className="star star-5"
                    id="star-5"
                    type="radio"
                    name="star"
                    value="5"  onChange={handleQrating}
                  />
                  <label className="star star-5" htmlFor="star-5"></label>
                  <input
                    className="star star-4"
                    id="star-4"
                    type="radio"
                    name="star"
                    value="4"  onChange={handleQrating}
                  />
                  <label className="star star-4" htmlFor="star-4"></label>
                  <input
                    className="star star-3"
                    id="star-3"
                    type="radio"
                    name="star"
                    value="3"  onChange={handleQrating}
                  />
                  <label className="star star-3" htmlFor="star-3"></label>
                  <input
                    className="star star-2"
                    id="star-2"
                    type="radio"
                    name="star"
                    value="2"  onChange={handleQrating}
                  />
                  <label className="star star-2" htmlFor="star-2"></label>
                  <input
                    className="star star-1"
                    id="star-1"
                    type="radio"
                    name="star"
                    value="1"  onChange={handleQrating}
                  />
                  <label className="star star-1" htmlFor="star-1"></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center mt-20">
        <div className="row">
          <div className="col-md-12">
            <div className="stars">
              <div className="feature">
                <h4>Timeline of Delivery</h4>
              </div>
              <div>
        
                  <input
                    className="star star-5"
                    id="star-55"
                    type="radio"
                    name="time"
                    value="5"  onChange={handleTimerating}
                    />

                  <label className="star star-5" htmlFor="star-55"></label>

                  <input
                    className="star star-4"
                    id="star-44"
                    type="radio"
                    name="time"
                    value="4"  onChange={handleTimerating}

                  />

                  <label className="star star-4" htmlFor="star-44"></label>

                  <input
                    className="star star-3"
                    id="star-33"
                    type="radio"
                    name="time"
                    value="3"  onChange={handleTimerating}

                  />

                  <label className="star star-3" htmlFor="star-33"></label>

                  <input
                    className="star star-2"
                    id="star-22"
                    type="radio"
                    name="time"
                    value="2"  onChange={handleTimerating}

                  />

                  <label className="star star-2" htmlFor="star-22"></label>

                  <input
                    className="star star-1"
                    id="star-11"
                    type="radio"
                    name="time"
                    value="1"  onChange={handleTimerating}

                    />

                  <label className="star star-1" htmlFor="star-11"></label>
                
              </div>
            </div>
          </div>
        </div>
       
        <div className="container d-flex justify-content-center mt-20">
          <div className="row">
            <div className="col-md-12">
              <div className="stars">
                <div className="feature">
                  <h4>Value for money</h4>
                </div>
                <div>
               
                    <input
                      className="star star-5"
                      id="star-5555"
                      type="radio"
                      name="money"
                      value="5"  onChange={handleMoneyrating}
                    />

                    <label className="star star-5" htmlFor="star-5555"></label>

                    <input
                      className="star star-4"
                      id="star-4444"
                      type="radio"
                      name="money"
                      value="4"  onChange={handleMoneyrating}

                      />

                    <label className="star star-4" htmlFor="star-4444"></label>

                    <input
                      className="star star-3"
                      id="star-3333"
                      type="radio"
                      name="money"

                      value="3"  onChange={handleMoneyrating}

                    />

                    <label className="star star-3" htmlFor="star-3333"></label>

                    <input
                      className="star star-2"
                      id="star-2222"
                      type="radio"
                      name="money"

                      value="2"  onChange={handleMoneyrating}

                      />

                    <label className="star star-2" htmlFor="star-2222"></label>

                    <input
                      className="star star-1"
                      id="star-1111"
                      type="radio"
                      name="money"

                      value="1"  onChange={handleMoneyrating}

                    />

                    <label className="star star-1" htmlFor="star-1111"></label>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center mt-20">
          <div className="row">
            <div className="col-md-12">
              <div className="stars">
                <div className="feature">
                  <h4>Communication & support</h4>
                </div>
                <div>
                 
                    <input
                      className="star star-5"
                      id="star-55555"
                      type="radio"
                      name="commu"
                      value="5"  onChange={handleSupportrating}

                    />

                    <label className="star star-5" htmlFor="star-55555"></label>

                    <input
                      className="star star-4"
                      id="star-44444"
                      type="radio"
                      name="commu"
                      value="4"  onChange={handleSupportrating}

                    />

                    <label className="star star-4" htmlFor="star-44444"></label>

                    <input
                      className="star star-3"
                      id="star-33333"
                      type="radio"
                      name="commu"
                      value="3"  onChange={handleSupportrating}

                      />

                    <label className="star star-3" htmlFor="star-33333"></label>

                    <input
                      className="star star-2"
                      id="star-22222"
                      type="radio"
                      name="commu"
                      value="2"  onChange={handleSupportrating}

                    />

                    <label className="star star-2" htmlFor="star-22222"></label>

                    <input
                      className="star star-1"
                      id="star-11111"
                      type="radio"
                      name="commu"
                      value="1"  onChange={handleSupportrating}
                    />
                    <label className="star star-1" htmlFor="star-11111"></label>
                  
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="textarea">
          <div className="comment-area">
            <textarea
              className="form-control"
              placeholder="Let us know how we can improve."
              rows="4"
              value={msg}
              onChange={handleMessga}
              required
            ></textarea >
          </div>

        
        </div>
        <div>

        <div className="comment-btns mt-2">
            <div className="row">
              <div className="col-6">
                <div className="pull-right">
                  <button className="send ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </form>
              </div>
              <ToastContainer />

    </div>
  );
}
