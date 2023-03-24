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

function OrthopaedicPage() {
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
                <h1 id="our-services-title">Orthopaedic Services</h1>
              </div>

              <div className="service-information">
              <h3>Diagnostics</h3>
              <p>Gait assessment, Clinical Examination, Goniometry, Gulick muscle measurement, Radiography, Arthrocentesis, Ultrasound, Needle Arthroscopy.</p>
              <p>(I do not provide CT /MRI, and this may require collaboration to obtain. If there is a clear rational for these diagnostics, you will be advised)</p>

              <h3>Regenerative Medicine</h3>
              <p>Platelet Rich Plasma</p>
              <p>BMAC Stem Cell</p>

              <h3>Fracture Repair</h3>
              <p>I utilise an extensive array of internal and external fixation options. The choice of options will depend on the fracture type, patient and owner factors.</p>

              <h3>Cranial Cruciate Ligament Disease</h3>
              <p>Treatments include TPLO, CCWO, TTA, Ligafiba lateral button and extensive support for non-Surgical management including Regenerative medicine and Orthotics facilitation.</p>

              <h3>Patella luxation</h3>
              <p>Tibial Tuberosity Transposition / Block Recession Sulcoplasty.</p>
              <p>Prosthetic ridges “Ridgestop”.</p>
              <p>Corrective osteotomy (subject to appropriate imaging)</p>

              <h3>Elbow Disease</h3>
              <p>Regenerative medicine</p>
              <p>Coronoid disease treatment</p>
              <p>Corrective osteotomies (subject to appropriate imaging)</p>
              <p>Humeral Intercondylar Fissure (HIRS screw and DBM if appropriate)</p>

              <h3>Hip Disease</h3>
              <p>Regenerative medicine</p>
              <p>Femoral Head and Neck Ostectomy</p>
              <p>Hip luxation repair (Hip toggle or Iliofemoral suture)</p>
              <p>THR (subject to appropriate practice and training)</p>

              <h3>Arthrodesis “Joint fusions”</h3>
              <p>Tarsal, Carpal and Shoulder</p>
              <p>Corrective limb alignment “corrective osteotomies” (subject to imaging available)</p>

              <h3>Spinal Surgery</h3>
              <p>I believe that this type of surgery is better placed in referral hospitals to make use of advanced imaging and spinal rehabilitation.</p>

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

export default OrthopaedicPage;
