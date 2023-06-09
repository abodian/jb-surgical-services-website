// Third-party libraries
import React from "react";
import { Container } from "reactstrap";
import { StyleRoot } from "radium";

// Components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import ContactUs from "components/ContactUs/ContactUs.js"
import DefaultFooter from "components/Footers/DefaultFooter.js";

// Styles
require('./IndividualServices.css')

function RegenerativeMedicine() {
  
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
                <h1 id="our-services-title">Regenerative Medicine <br /> (Stem Cell Therapy and Platelet Rich Plasma)</h1>
              </div>

              <div className="service-information">
                <p>I am very excited to be able to offer this service. Regenerative medicine is well known in human and equine fields. Please do not forget our smaller furry friends! After all, significant research for humans has come from animal models. There is a large body of evidence to support this modality. Fortunately, it seems we are starting to catch up with are American and Human counterparts in clinical application.</p>
              <h3>Palliation vs Cure</h3> 
                <p>Drugs palliate disease. When we withdraw medications, the symptoms are unmasked again. Regenerative medicine is focused more on a curative process by actively modifying the disease and its progression. This can help in the short term but also should be seen as an investment for the future health of the patient. These treatments are variable in cost but can reduce total costs and increase treatment success in the long run.</p>
              <h3>Expectations</h3>
                <p>Potential resolution of disease can be seen in certain acute conditions and for chronic conditions can provide a long-lasting benefit.</p>
              <h3>Common applications include:</h3>
              <p>
                <li>Osteoarthritis</li>
                <li>Soft tissue disease including tendon, ligament and muscular injury</li>
                <li>Joint conditions commonly seen in practice including Cruciate ligament disease, Elbow dysplasia, Hip dysplasia, Shoulder ligament/tendon muscle disease.</li>
              </p>
              <h3>Process</h3>
                <p>The system used is important. Companion Care CRT is validated and provides confidence in the end product after processing. The techniques require obtaining blood (for PRP) or bone marrow aspiration (Stem Cells) from the patient. This is therefore an “autologous” (from self) treatment minimising risks and side effects possible with other medications. Autologous sampling, bespoke laboratory processing and reinjection into the target site occurs in one procedure with this system. Typically, these procedures take less than 30 minutes and are a half day stay in the hospital.</p>
              <h3>PRP</h3>
                <p>PRP is less invasive and cheaper. There is a requirement for a short sedation. Improvements can be seen with PRP for 6-12 months. One injection is required for many patients but some will require repeat injections over time.</p>
              <h3>Stem Cell Therapy</h3>
                <p>Stem Cell Therapy does involve obtaining bone marrow aspiration and requires general anaesthesia. It is more expensive than PRP but more potent, longer lasting results are typically seen in comparison.</p>
                <p>For many cases PRP will be sufficient. However, for more sever osteoarthritis or if cost is not a factor, Stem Cell can be considered from the onset. PRP and Stem Cell combinations are something to consider at the same treatment time.</p>
                <p>If you are interested in this area of treatment, please contact me to discuss further as to the suitability in your case.</p>
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

export default RegenerativeMedicine;
