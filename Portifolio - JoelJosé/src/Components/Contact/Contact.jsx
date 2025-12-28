import React from "react";
import "./Contact.css";
import contctimg from '../../assets/img/contactimg.png';

function Contact() {
    return (
        <div className="container-contact">

        <div className="contact">
             <div className="info">
                <h2>Got a project in <span>mind?</span> </h2>
                <img src={contctimg} alt="Contact" />

            </div>
            
            <form className="contact-form">
                <div className="data">
                    <div className="name">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required />
                    </div>
                    
                    <div className="email">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required />
                    </div>
                     
                </div>
               
                <div className="data">
                    <div className="text">
                        <label htmlFor="message">Your Message</label>
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        </div>
            


            <div className="footer">
                <div className="box-info">
                    <div>
                        <i class="fi fi-rr-home"></i>
                        <h4>Home</h4>
                    </div>

                    <div>
                        <i class="fi fi-rr-user"></i>
                        <h4>About me</h4>
                    </div>
                    
                </div>

                <div className="icons">
                    <i class="fi fi-brands-github"></i>
                    <i class="fi fi-brands-linkedin"></i>
                    <i class="fi fi-brands-instagram"></i>
                    <i class="fi fi-brands-youtube"></i>
                </div>
            </div>
        </div>
    );
}

export default Contact;