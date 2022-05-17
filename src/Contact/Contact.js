import Title from '../Title/Title';
import acm from '../assets/adams_creation_minimalist.png'
import load from '../assets/load.png'
import "./Contact.scss";
import apiKey from '../emailkey.js';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact() {
  const form = useRef();
  let sent = false;
  const handleSubmit = (e) => {
    if(!sent){
      sent = true;
      let element = document.getElementById("loading-div");
      element.style.display = "flex";
      e.preventDefault(); 
      console.log(apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      emailjs.init("I2rhV_tvDUEQO11ZG");
      emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then((result) => {
        alert("Message Sent");
        document.getElementsByTagName("textarea")[0].value = "";
        document.getElementById("contact-addres").value = "";

      },
      (error) => {
        alert("An error occurred, Please try again");
        console.log(error.text);
      })
      .finally(() => {
        element.style.display = "none";
        sent = false;  
      })
    }
  };

  return (
    <div className="contact">   
      <div className='pos-title'>
        <Title text="Let’s get in touch!" line_width={window.innerWidth > 600 ? 196 : 178}/>
      </div>
      <div className='content'>
        
        <form ref={form} onSubmit={handleSubmit} className='contact-form'>
          <h4 className='contact-question'> What do you want to say? </h4>  
          <textarea className='message' name='message' ></textarea>
          <h4 className='contact-question'> Could I contact you back? How? </h4>
          <input id='contact-addres' name="contactBack"></input>
          <input id='submit-email' className='submit-button' type="submit" value="Send" ></input>
          <div id='loading-div'><img id='image-loading' src={load} alt="loading animation" /></div>
        </form>

        <div className='pos-img'>
          <div className='image-border'>
            <img className='image' src={acm} alt="The Adam's creation with stick figure "/>
          </div>
        </div>

      </div>

    </div>
  );
}



export default Contact;
