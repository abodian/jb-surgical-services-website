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

function PhotobiomodulationPage() {
  
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
                <h1 id="our-services-title">Photobiomodulation</h1>
              </div>
              <div className='service-information'>
              <h3>Photobiomodulation (Laser Therapy)</h3>
                <p>This non-painful, non-invasive and non-anesthetic biological (non-drug) treatment results in:</p>
                <p>
                  <li>Pain reduction</li>
                  <li>Inflammation and oedema reduction</li>
                  <li>Improved blood supply</li>
                  <li>Improved healing</li>
                  <li>Improved function</li>
                </p>
                <p>It is an important tool in the "holistic" approach to pain management, and can result in a reduction and even withdrawal of medications, therefore reducing costs and side effects whilst improving results. The indications for its use are vast. Applications for this technique include musculoskeletal pain, spinal dysfunction, and application prior, during and post-surgery to facilitate recovery. Its power can be manifested when used in conjunction with regenerative medicine (PRP and Stem Cell Therapy).</p>
                <p>Laser sounds scary, but this is not a surgical laser nor a lightsaber! Photobiomodulation is a preferable term to laser. Most patients tolerate and even enjoy this treatment. Endorphin release has been known to result in sleeping during treatments in dogs and purring in cats!</p>
                <p>This can be done in clinic or even in the home setting. A class 4 laser is used as not all machines are equal. Every case will need a bespoke treatment. Whilst benefits can often be seen within hours of treatment, there will need to be a commitment to treatment frequency for chronic conditions.</p>
                <p>I really believe in this technique, not only due to the scientific literature or the clinical changes I see with my own experience, but for the reason it does keep me hands-on and in contact with patients during the treatment as a whole.</p>
                <p>If you are interested in this modality or wonder if it is appropriate, please contact me to discuss further.</p>
                <h5>Basic Biophysics</h5>
                <p>Near-infrared light (810 and 980 nm) is applied to the tissue by a handpiece. Light contains energy in the form of photons. These photons are absorbed by tissue resulting in biophysical and biochemical changes. This specific wavelength is absorbed preferentially in the regions we want and not in regions we do not. The main target is Cytochrome Oxidase C in mitochondria. Cellular evidence is vast but the key mediators in this process are an increase in ATP, Nitric Oxide, Reactive Oxygen species and a cascade of alterations in cell signalling.</p>
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
