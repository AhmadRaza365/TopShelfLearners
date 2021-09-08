import './Courses.css';
import CourseCard from './CourseCard';
import CatagoryList from './CatagoryList';

// imges

import WordPress from "./Assets/WordPress.jpg";
import DigitalMarketing from "./Assets/DigitalMarketing.jpg";
import App from "./Assets/App.jpg";
import GraphicDesign from "./Assets/GraphicDesign.jpg";
import ContentWriting from "./Assets/ContentWriting.jpg";
import ForexTrading from "./Assets/ForexTrading.jpg";
import Photography from "./Assets/Photography.jpg";
import StoryTelling from "./Assets/StoryTelling.jpg";
import VideoEditing from "./Assets/VideoEditing.jpg";

import React from 'react'

export default function Courses() {
    return (
    <>

        <CatagoryList />
        <div className="courses-page">
         
         <CourseCard
            CardImg={WordPress}
            CardTitle="Web Development"
            CardText="Here you will learn Web Development using WordPress. WordPress is a open source software that is being used to develop websites."
        />
        <CourseCard
            CardImg={App}
            CardTitle="App Development"
            CardText="Here you will learn Application Development using React Native.  React Native is being used to develop cross platform Apps."
        />
        <CourseCard
            CardImg={GraphicDesign}
            CardTitle="Graphic Designing"
            CardText="Here you will learn Graphic Designing. Graphic design is a craft where professionals create visual content to communicate messages."
        />
         <CourseCard
            CardImg={DigitalMarketing}
            CardTitle="Digital Marketing"
            CardText="Here you will learn Digital Marketing. Digital marketing encompasses all aspects of marketing across digital channels on the internet."
        />
        <CourseCard
            CardImg={ContentWriting}
            CardTitle="Content Writing"
            CardText="Here you will learn Content Writing. If you love writing then this course is for you. By completing this course you will become Blogger."
        />
        <CourseCard
            CardImg={ForexTrading}
            CardTitle="Forex Trading"
            CardText="Here you will learn Forex Trading. Forex Trading is the market for exchanging foreign currencies. Forex is the largest market in the world."
        />
           <CourseCard
                CardImg={Photography}
                CardTitle="Photography"
                CardText="Here you will learn the art of Photography. Photography is the art, of creating images by recording light, either electronically by means of an image sensor."
            />
          <CourseCard
                CardImg={StoryTelling}
                CardTitle="Story Telling"
                CardText="Here you will learn the art of Story Telling. Storytelling is the art of using words and actions to reveal the elements and images of a story."
            />
        
        <CourseCard
            CardImg={VideoEditing}
            CardTitle="Video Editing"
            CardText="Here you will learn Video Editing using Adobe Premiere Pro. Video editing is the manipulation and arrangement of video shots to present in a single video."
        />
        </div>

    </>
    )
}
