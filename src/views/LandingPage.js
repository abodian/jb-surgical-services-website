// Third-party libraries
import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

// Components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import OurServices from "./OurServices.js";
import SimpleSlider from "components/Carousels/Testimonials.js"
import DefaultFooter from "components/Footers/DefaultFooter.js";
import OurTeam from "./OurTeam.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import ContactUs from "components/ContactUs/ContactUs.js"

// Assets
import jemSarahDogImg from "assets/img/jemsarahdog.jpg";
import jeremySarahProfImg from "assets/img/jeremysarahprof.jpg";
import logo from "assets/img/jblogolandscape.jpg";

// Styles
require('./LandingPage.css')

function LandingPage() {
  const myRef = useRef();
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }
  
  return (
    <>
      <StyleRoot className='root'>
        <LandingNavbar />
        <div
          className="image-container"
          id="logo"
          style={{
            backgroundImage: `url(${logo})`,
            ...styles.fadeIn,
          }}
        ></div>
        <div className="wrapper" >
          <div ref={myRef} className="section section-about-us">
            <Container className="ml-auto mr-auto text-center">

              <div className="top-header">
                <LandingPageHeader />
              </div>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="12">
                  <h5 className="description">
                    <b>
                      Orthopaedic and Soft-Tissue Inhouse Surgical Consultancy<br /> in
                      Lincolnshire and South Yorkshire
                    </b>
                    <br />
                  </h5>
                </Col>
              </Row>
              <div className="separator separator-primary"></div>
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      id="about-us"
                      style={{
                        backgroundImage: `url(${jemSarahDogImg})`,
                        ...styles.fadeIn,
                      }}
                    ></div>
                    <div className="about-us-title">
                      <h1 id="about-us-title">About Us</h1>
                    </div>
                    <div className="about-us-intro">
                      JB Surgical Service are an established independent service,
                      consisting of husband and wife, Jeremy and Sarah Bodian.
                    </div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage: `url(${jeremySarahProfImg})`,
                        ...styles.fadeIn,
                      }}
                    ></div>
                  </Col>
                  <div className="about-us-full">
                    Our mission is to alleviate the pain and suffering of our
                    patients through a combination of surgery and/or
                    rehabilitation. It is important to us that clients receive
                    excellent unbiased communication at all stages. The practices
                    we work with are treated with friendly respect, the goal being
                    to integrate as a true member of the team.
                  </div>
                </Row>
              </div>
            </Container>
          </div>
          <OurTeam />
          <div id="our-services-section" className="section section-about-us">
            <Container className="ml-auto mr-auto text-center">
              <div className="about-us-title">
                <h1 id="our-services-title">Our Services</h1>
              </div>
              <OurServices />
            </Container>
          </div>
          <div id="testimonials-section" className="section section-about-us">
            <Container className="ml-auto mr-auto text-center">
              <div className="about-us-title">
                <h1 id="testimonials-title">Testimonials</h1>
              </div>
              <SimpleSlider  />
            </Container>
          </div>
        </div>
        <ContactUs />
        <DefaultFooter />
      </StyleRoot>
    </>
  );
}

export default LandingPage;
