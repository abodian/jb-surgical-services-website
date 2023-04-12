// Third-party libraries
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { StyleRoot } from "radium";
import { SiMinutemailer } from "react-icons/si";

// Components
import LandingNavbar from "components/Navbars/LandingNavbar.js";

import DefaultFooter from "components/Footers/DefaultFooter.js";

// Assets

// Styles
require('./IndividualServices.css')

function SoftTissueSurgeryPage() {
  
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

  
  return (
    <>
      <StyleRoot>
        <LandingNavbar />
        <div className="wrapper">
        <div id="our-services-section" className="section section-about-us">
            <Container className="ml-auto mr-auto text-center">
              <div className="service-title">
                <h1 id="our-services-title">Soft Tissue Surgery</h1>
              </div>
              
              <div className="service-information">
              <p><em>Not exhaustive. Please enquire about suitability on a case by case basis.</em></p>

              <h3>Cutaneous</h3>

              <p><li>Anal Sacculectomy</li>
              <li>Free skin grafts and Pedicel grafts</li>
              <li>Neoplasia excision</li>
              <li>Total Ear Canal Ablation and Bullae Osteotomy</li></p>


              <h3>Ocular surgery</h3>

              <p><li>Indolent ulcer treatment</li>
              <li>Conjunctival grafts</li></p>

              <h3>Airway Surgery</h3>
              
              <p><li>Brachycephalic Obstructive Airway (BOAS) Surgery including Staphylectomy, Nasal Alarplatsy and Laryngeal Sacculectomy</li>
              <li>Laryngeal Paralysis Tieback</li></p>

              <h3>Hernia</h3>
              
              <p><li>Diaphragmatic</li>
              <li>Perineal</li>
              <li>Umbilical</li>
              <li>Inguinal</li></p>

              <h3>Urinary</h3>
              
              <p><li>Perineal/Scrotal Urethrostomy</li></p>
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

export default SoftTissueSurgeryPage;
