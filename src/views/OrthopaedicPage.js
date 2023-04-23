// Third-party libraries
import React from "react";
import { Container} from "reactstrap";

import { StyleRoot } from "radium";

// Components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import ContactUs from "components/ContactUs/ContactUs.js"
import DefaultFooter from "components/Footers/DefaultFooter.js";

// Assets

// Styles
require('./IndividualServices.css')

function OrthopaedicPage() {
  
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
                <h1 id="our-services-title">Orthopaedics Services</h1>
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

              <h3>Corns</h3>
              <p>Treatment of Corns by “Superficial Digital Flexor Tenotomy” provides high rates of cure compared to traditional Corn Removal procedures</p>
              
              <h3>Corrective limb alignment “corrective osteotomies” <br />(subject to imaging available)</h3>

              <h3>Spinal Surgery</h3>
              <p>I believe that this type of surgery is better placed in referral hospitals to make use of advanced imaging and spinal rehabilitation.</p>

              </div>
            </Container>
          </div>
          <ContactUs />
          <DefaultFooter />
        </div>
      </StyleRoot>
    </>
  );
}

export default OrthopaedicPage;
