// Third-party libraries
import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { SiMinutemailer } from "react-icons/si";

// Components
import LandingNavbar from "components/Navbars/LandingNavbar.js";

import DefaultFooter from "components/Footers/DefaultFooter.js";

// Assets

// Styles
require('./IndividualServices.css')

function PhotobiomodulationPage() {
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
      <StyleRoot>
        <LandingNavbar />
        <div className="wrapper">
        <div id="our-services-section" className="section section-about-us">
            <Container className="ml-auto mr-auto text-center">
              <div className="service-title">
                <h1 id="our-services-title">Photobiomodulation</h1>
              </div>
            </Container>
          </div>
          <div className="section section-contact-us text-center">
            <Container>
              <h2 className="title" id="contact-us-title">
                Contact Us
              </h2>
              <p className="description"></p>
              <Row>
                <Col
                  id="contact-us"
                  className="text-center ml-auto mr-auto d-flex align-items-center justify-content-center"
                  lg="6"
                  md="8"
                >
                  <table className="text-center" style={{ border: "none" }}>
                    <tbody>
                      <tr>
                        <td>
                          <SiMinutemailer size={50} />
                        </td>
                        <td>
                          <a
                            className="contact-text"
                            href="mailto:jeremybodian@surgicalservices.co.uk"
                          >
                            jeremybodian@surgicalservices.co.uk
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Container>
          </div>
          <DefaultFooter />
        </div>
      </StyleRoot>
    </>
  );
}

export default PhotobiomodulationPage;
