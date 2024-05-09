import React, { useState } from 'react';
import "../Styles/SecondPage.css";
import { useNavigate } from 'react-router-dom';
import img1 from "../Images/images.png";
import img2 from "../Images/Xmark.png";
import error1 from "../Images/ErrorImg.png";

const SecondPage = () => {
    let navigate = useNavigate();
    function HomePage() {
        navigate("/firstpage");
    }

    function submit(event) {
        event.preventDefault();

        var error = document.getElementById("error");
        var emailInput = document.getElementById("I4"); 
        var userEmail = emailInput.value.trim();
        var nameInput = document.getElementById("I3");
        var userName = nameInput.value.trim();
        var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        
        if (!email.test(userEmail)) {
            error.innerHTML = `<img height=${19} width=${23}  src=${error1} alt="" />Enter a valid email address`;
            emailInput.focus(); // Focus on the input field
            error.style.color="red";
            
        }
        else if (userName === "") {
            // error.textContent = 🔴 Enter your name;
            nameInput.focus();
            // error.style.color = "red";
        }
         else {
            error.textContent = ""; // Clear the error message
            navigate("/thirdpage");
        }
    }
  return(
    <div className="secondpage">
            <div className="navbar1">
                <img id="I1" src={img1} alt="" />
                <img onClick={HomePage} id="I2" src={img2} alt="" />
            </div>
            <p id='regform'>Registration form</p>
            <h1>Start your success <br /> journey here!</h1>
            <form onSubmit={submit} action="">
                <label htmlFor="">
                    <input id="I3"  type="text" placeholder="Enter your name" />
                </label>
                <br />
                <label htmlFor="">
                    <input id="I4" type="text" placeholder="Enter your email" />
                    <br />
                    <span id="error"></span>
                    
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
  );
}
export default SecondPage;