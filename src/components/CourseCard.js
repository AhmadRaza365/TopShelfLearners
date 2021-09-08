import './CourseCard.css';


import React from 'react'
import { Link } from 'react-router-dom';

const message = () => {
    alert("Sorry, I didn't add Login/ Sign up Features in this :)");
   }




export default function CourseCard(props) {
    return (
        <>
            <div className="card">
                 <img src={props.CardImg} className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h5 className="card-title">{props.CardTitle}</h5>
                    <p className="card-text">{props.CardText}</p>
                    <Link to="#" className="btn cardbutton" onClick={message} >Enroll Now</Link>
                 </div>
            </div>
        </>
    )
}
