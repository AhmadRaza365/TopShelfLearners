import "./About.css";
import AhmadProfile from "./Assets/AhmadProfile.png"

import React from 'react'

export default function About() {
    return (

<div className="about-page">

        <div className="textbar">About The Develper</div>
        <div className="about-text">
        <div>
                Hi, I hope you will be fine and enjoying good health. I am <b> Ahmad raza </b> from <b> Pakistan. </b> I am a Student of Bachelor's of Software Engineering. By profession, I am a <b>Web Developer, Graphic Designer & Digital Marketer.</b>
                <br/><br/>
                If we talk about <b> Top Shelf learners </b>, it's not an institute or academy. I just developed it to enhance my Development skills and to add some projects to my portfolio.
        </div>

        <img src={AhmadProfile} alt="Ahmad's Profile" />
        </div>

        </div>
    )
}
