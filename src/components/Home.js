import "./Home.css";
import CatagoryList from "./CatagoryList";
import CourseCard from "./CourseCard";
import ButtonMain from "./ButtonMain";

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

import { Link } from 'react-router-dom';

import React from "react";

export default function Home() {
  return (
    <>
      <div className="hero">
        There's Nothing Better Than Getting Better.<br /> Keep Learning The Skills.
      </div>

      <CatagoryList />

      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicator" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div className="carousel-inner">

        {/* Carousel Slide 1 */}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={WordPress}
                          CardTitle="Web Development"
                          CardText="Here you will learn Web Development using WordPress. WordPress is a open source software that is being used to develop websites."
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={App}
                          CardTitle="App Development"
                          CardText="Here you will learn Application Development using React Native.  React Native is being used to develop cross platform Apps."
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={GraphicDesign}
                          CardTitle="Graphic Designing"
                          CardText="Here you will learn Graphic Designing. Graphic design is a craft where professionals create visual content to communicate messages."
                        />
                      </div>
                    </div>
                  </div>
                </div>

        {/* Carousel Slide 2 */}
        

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={DigitalMarketing}
                          CardTitle="Digital Marketing"
                          CardText="Here you will learn Digital Marketing. Digital marketing encompasses all aspects of marketing across digital channels on the internet."
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={ContentWriting}
                          CardTitle="Content Writing"
                          CardText="Here you will learn Content Writing. If you love writing then this course is for you. By completing this course you will become Blogger."
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={ForexTrading}
                          CardTitle="Forex Trading"
                          CardText="Here you will learn Forex Trading. Forex Trading is the market for exchanging foreign currencies. Forex is the largest market in the world."
                        />
                      </div>
                    </div>
                  </div>
                </div>

            {/* Carousel Slide 3 */}
        
                
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={Photography}
                          CardTitle="Photography"
                          CardText="Here you will learn the art of Photography. Photography is the art, of creating images by recording light, either electronically by means of an image sensor."
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={StoryTelling}
                          CardTitle="Story Telling"
                          CardText="Here you will learn the art of Story Telling. Storytelling is the art of using words and actions to reveal the elements and images of a story."
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <CourseCard
                          CardImg={VideoEditing}
                          CardTitle="Video Editing"
                          CardText="Here you will learn Video Editing using Adobe Premiere Pro. Video editing is the manipulation and arrangement of video shots to present in a single video."
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonbar">
        <Link to="/courses"> <ButtonMain ButtonMainText="View More"/> </Link>
      </div>
      <div className="qoute">
      Take the next step toward your<br/>personal and professional goals<br/>with Top Shelf Learners.
      </div>
      <div className="buttonbar">
      <Link to="/courses"> <ButtonMain ButtonMainText="Get Started For Free"/></Link>
      </div>
    </> 
  );
}
