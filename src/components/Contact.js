import './Contact.css';

import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="Contact-text">Want to Contact Me?<br/>
Well, you can contact me via email at "ahmadrazabhatti30@gmail.com" <br/> or you can inbox me on Linked In, Facebook or Instagram.</div>
            <div className="social-icons">
           <a href="https://www.linkedin.com/in/ahmadraza30/" target= "blank" > <img src="https://image.flaticon.com/icons/png/512/1384/1384014.png" alt="Linkedin Icon" /> </a>
           <a href="https://www.facebook.com/ahmadraza.raza.54772/" target= "blank"> <img src="https://image.flaticon.com/icons/png/512/49/49354.png" alt="Facebook Icon" /> </a>
           <a href="https://www.instagram.com/ahmadraza0300/" target= "blank"> <img src="https://image.flaticon.com/icons/png/512/1384/1384015.png" alt="Instagram Icon" /> </a>
            
            </div>
        </div>
    )
}
