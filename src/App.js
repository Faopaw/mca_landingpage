import "./App.css";
import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import info1Svg from "./undraw_building_websites_i78t.svg";
import info2Svg from "./undraw_developer_activity_re_39tg.svg";
import Parallax from "react-rellax";
import AOS from "aos";
import "aos/dist/aos.css";
import "./video-react.css";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  LoadingSpinner,
  TimeDivider,
  BigPlayButton,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  PosterImage,
} from "video-react";

<script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"></script>;
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>;

function App() {
  AOS.init();
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const ref2 = useRef(null);
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const video1Settings = {
    fluid: true,
    preload: "auto",
    poster: "/assets/video1-poster.png",
  };

  const video2Settings = {
    fluid: true,
    preload: "auto",
    poster: "/assets/video2-poster.png",
  };

  // BigPlayButton.protoTypes = {
  //   position: PropTypes.string
  // }

  return (
    <div className="App">
      <Navbar id="nav_style" className="nav_style" bg="000000" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require('./mindera-academy-logo.png')}
              width="50"
              height="50"
              className="d-inline-block align-top mca-logo"
            />
            Mindera Code Academy
          </Navbar.Brand>
        </Container>
      </Navbar>

      <main className="main-container">
        <h1 className="h1-main">Breaking into tech, together</h1>
        <h2 className="h2-main content-main">
          Let us help you attain your dreams of becoming a Software Developer.
        </h2>
        <h3 className="h3-main content-main">
          If you're looking for an opportunity to kickstart a career as a Software Developer, we are
          here to help! Get exclusive, early access to the Mindera Code Academy as soon as we launch
          it: Fill in the form and get ready to change your life!
        </h3>
        <div className="buttons-main">
          <button onClick={handleClick} class="glow-on-hover" type="button" href="aboutus">
            About Us
          </button>
          <button onClick={handleClick2} class="glow-on-hover" type="button" href="#learnmore">
            Learn More
          </button>
        </div>
      </main>
      <Parallax className={'parallaxStyle'}>
        <Parallax speed={4} percentage={0.5}>
          <span className="shape-1"></span>
        </Parallax>
        <Parallax speed={3} percentage={0.5}>
          <span className="shape-2"></span>
        </Parallax>
        <Parallax speed={-2} percentage={0.5}>
          <span className="shape-7"></span>
        </Parallax>
        <Parallax speed={2} percentage={0.5}>
          <span className="shape-3"></span>
        </Parallax>
        <Parallax speed={1} percentage={0.5}>
          <span className="shape-4"></span>
        </Parallax>
        <Parallax speed={0} percentage={0.5}>
          <span className="shape-5"></span>
        </Parallax>
      </Parallax>
      <section className="information-container">
        <div className="information-1" data-aos="fade-up" data-aos-duration="500">
          <img src={info1Svg} alt="meeting in an office" />
          <div ref={ref}>
            <h3 id="aboutus">We are part of the Mindera world!</h3>
            <p>
              For the last 7+ years, we at Mindera have successfully worked with the latest
              technology to develop secure, robust and scalable web and mobile applications. We have
              been fortunate and proud to work with some of the most talented engineers in the
              industry and amazing clients. For us, it has always been about the journey, not the
              destination.
            </p>
          </div>
        </div>
        <div className="information-2" data-aos="fade-up" data-aos-duration="500">
          <img src={info2Svg} alt="side view of open laptop" />
          <div>
            <h3>Our Journey to Mindera Code Academy</h3>
            <p>
              Over the last few years, we have been proud to promote education in many ways. We
              create a culture of autonomy, trust and opportunities and we have dedicated education
              offerings such as Mindera School, where we train young people to become Software
              Developers. Mindera Code Academy was born from the organic evolution and educational
              contribution we have given to the community. Our ambition is to help those who want to
              start a career in software development. After a successful 1st edition in Portugal
              under the name MindSwap, Mindera Code Academy now goes global, and you can join us for
              the ride in the UK and US.
            </p>
          </div>
        </div>
      </section>
      <section className="video-section">
        <h1 className="h1-video-section">Crack the Code to a new Career</h1>
        <div className="video1-container">
          <Player
            poster={require("./assets/video1-poster.png")}
            props={video1Settings}
          >
            <source src={require("./Culture_3.mp4")} />
            <BigPlayButton position="center" />
            <ControlBar>
              <LoadingSpinner />
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>
        </div>
        <div className="video2-container">
          <Player
            poster={require("./assets/video2-poster.png")}
            props={video2Settings}
          >
            <source src={require("./Services_3.mp4")} />
            <BigPlayButton position="center" />
            <ControlBar>
              <LoadingSpinner />
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>
        </div>
      </section>
      <section className="testimonials-container">
        <h1>Testimonials</h1>
        <div className="testimonials">
          <p className="testemonial-quote">
            “I would reccomend the Frontend Bootcamp to anyone who is serious about getting into the
            field” <span className="testemonial-quote-author">Vinegar Doppio</span>
          </p>
          <p className="testemonial-quote">
            “The instructors were so helpful in making us understand difficult to learn concepts.
            Couldn't ask for more”
            <span className="testemonial-quote-author">Dio Brandon</span>
          </p>
          <p className="testemonial-quote">
            “I would reccomend the Frontend Bootcamp to anyone who is serious about getting into the
            field” <span className="testemonial-quote-author">Giorno Giovanna</span>
          </p>
        </div>
      </section>
      <section ref={ref2} className="sign-up">
        <div>
          <h3>Why us?</h3>
          <p>
            We believe that the best people to teach are those who do the job day in and out.
            Joining Mindera Code Academy is an opportunity to not only learn how to code but also
            how to develop and continuously deliver quality software, which is our mindset!
          </p>
          <h3>What's Next?</h3>
          <p>You can be the first to know when we launch Mindera Code Academy!</p>
        </div>
        <form className="sign-form">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Country"></input>
          <input type="text" placeholder="City"></input>
          <button type="submit">Get Early Access</button>
        </form>
      </section>
    </div>
  );
}

export default App;
