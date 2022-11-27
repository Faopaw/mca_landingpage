import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
    render() {
      return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            {/* <img alt="icon" src= {require("my-app/public/images/default-icon.jpg")} /> */}
            <div className="myCarousel">
              <h3>Idiris Omer</h3>
              <h4>Frontend Developer</h4>
              <p>
              I would reccomend the Frontend Bootcamp to anyone who is serious about getting into the
            field
              </p>
            </div>
          </div>
  
          <div>
            {/* <img src="/images/daniel.png" /> */}
            <div className="myCarousel">
              <h3>Emmanuel Oloke</h3>
              <h4>Frontend Engineer</h4>
              <p>
              Getting into Mindera Code Academy has been the highlight of the year for me. I’ve gained so much from the program, not just in technical abilities but also in other priceless skills that I’m sure will help to ensure success in the tech industry.
              </p>
            </div>
          </div>
  
          <div>
            {/* <img src="/images/theo.png" /> */}
            <div className="myCarousel">
              <h3>Bharadwaj Swamy Kuna</h3>
              <h4>Web Developer</h4>
              <p>
              Mindera was really a great experience for me, I got to learn important skills and also meet good people on the same journey as myself. I’m grateful for the opportunity and will highly recommend the program 100%
              </p>
            </div>
          </div>
        </Carousel>
      );
    }
  }