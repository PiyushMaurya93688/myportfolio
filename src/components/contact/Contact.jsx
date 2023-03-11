import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.jpg"
import Email from "../../img/email.jpg"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'

function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


    const handleSumbit = (e) => {

        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'template_nhfvuqi', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
      
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" />
                        +91 8076612808
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Email}
                        alt="" 
                        className="c-icon" />
                        piyush93688@outlook.in
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Address}
                        alt="" 
                        className="c-icon" />
                        Noida, Gautam Budh Nagar, UP
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always ready for right project
                </p>
                <form ref={formRef} onSubmit={handleSumbit}>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Name'  name='user_name'/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Subject'  name='user_subject'/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Email'  name='user_email'/>
                    <textarea style={{backgroundColor:darkMode && "#333"}} name="message" placeholder='Message' rows="10"></textarea>
                    <button>Submit</button>
                    {done && "Thank you..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact