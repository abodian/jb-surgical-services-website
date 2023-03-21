import React from "react";
import {useRef} from "react";
// animation
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import { useInViewport } from 'react-in-viewport';


// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ServicesCarousel from "components/Carousels/ServicesCarousel.js"
import DefaultFooter from "components/Footers/DefaultFooter.js";
import JeremyProfilePicture from '../assets/img/jeremyprofile.jpg'
import SarahProfilePicture from '../assets/img/sarahprofile.JPEG'
import JemSarahWalk from '../assets/img/jemsarahwalk.jpg'


require('./LandingPage.css')

function LandingPage() {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  
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
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

  return (
    <>
    <StyleRoot>
      <ExamplesNavbar />
      <div className="wrapper">
        <div ref={myRef} className="section section-about-us">
          <Container className="ml-auto mr-auto text-center">
         <div className='top-title'><h1 id='landing-page-title'>Jeremy Bodian <br></br>Surgical Services</h1></div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h5 className="description">
                <b>Orthopaedic and soft tissue inhouse surgical consultancy in Lincolnshire and South Yorkshire</b><br></br>
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage: `url(${require("assets/img/jemsarahdog.jpg")})`,
                        ...styles.fadeIn,
                      }}
                    >
                    </div>
                  
                  <div className='about-us-title'><h1 id='about-us-title'>About Us</h1></div> 
                  <div className='about-us-intro'>JB Surgical Services are an established independent service, consisting of husband and wife, Jeremy and Sarah Bodian. 
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage: `url(${require("assets/img/jeremysarahprof.jpg")})`,
                      ...styles.fadeIn,
                    }}
                  ></div>
                </Col>
                <div className='about-us-full'>Our mission is to alleviate the pain and suffering of our patients through a combination of surgery and/or rehabilitation. 
                It is important to us that clients receive excellent unbiased communication at all stages. The practices we work with are treated with friendly respect,
                the goal being to integrate as a true member of the team. 
                  </div>
              </Row>
            </div>
          </Container>
        </div>
        <div className="text-center">
          <Container className="ml-auto mr-auto text-center">
          <h1 id='our-team-title'>Our Team</h1>
          <Row>
            <Col ref={myRef} md="6">
              <div  className="team left-column-profile">

              {inViewport && (
                <div className="team left-column-profile">
                  <div style={styles.fadeIn}>
                    <img className="profile-picture" src={JeremyProfilePicture} alt="Jeremy-Profile" />
                  </div>
                </div>
              )}

                <div className='profile-title'><h1 id='jeremy-profile-title'>Jeremy Bodian</h1></div> 
                <div className='profile-title'><h3 id='jeremy-profile-title'>Clinical Director</h3></div> 
                <div className='profile-text'>
                <p>My love of animals and science led me to achieve a Bachelor of Veterinary Science at Bristol University 2008
                BVSc. After two years in a “mixed veterinary” environment I decided to focus purely on “small animal”
                practice. I moved to Lincolnshire, married and started a family with Sarah in 2011 and have worked in private
                and charity hospitals, most recently at Clinical Director level.
                </p>
                <p>After further surgical training I was awarded the British Small Animal Veterinary Association Post Graduate
                Certificate (Distinction) in Small Animal Surgery BSAVA PGcertSAS in 2016. A further focus in musculoskeletal
                disease led me to complete the European School of Post Graduate Studies General Practitioner Advanced
                Certificate in Small Animal Orthopaedic Surgery GPAdvCert (SAOS) in 2019.
                </p>
                <p>I now work independently as a “peripatetic vet” traveling to a variety of general practices and private clients
                in Lincolnshire and beyond offering my skills and services. I have found this the most rewarding phase of my
                career so far with more time devoted to my patients and clients consequently.
                </p>
                <p>Whilst I am primarily a surgeon, my view is to continue to develop treatment of my patients in the most
                holistic manner possible. I have a special interest in musculoskeletal function and pain management. I ask
                myself how can I make the greatest impact? Pain in animals is the most common condition we see as vets
                and the greatest area for improvement. My goal is therefore the “management of pain and promotion of
                quality of life”.
                </p>
                <p>Sarah my wife, Isabella and Amelia my daughters, are my inspiration. If I have any time between work and
                family (rare), I can be seen exploring the countryside on my bike or visiting the clouds in a plane.
                Significantly I have three boxers (Bee, Flo and Moby), one Beagle (Clause) and one tabby cat (Mustafa). They
                have learned to accept me as an owner despite being a VET! I also inherit every clients animal friend as my
                own whilst under my care.
                </p>
                </div>
              </div>
            </Col>
            <Col  md="6">
              <div ref={myRef}>
                {inViewport && (
                  <div  className="team right-column-profile">
                  
                  
                    <div className="team left-column-profile">
                      <div style={styles.fadeIn}>
                        <img className="profile-picture" src={SarahProfilePicture} alt="Sarah-Profile" />
                      </div>
                    </div>
                  
                  
                  <div className='profile-title'><h1 id='jeremy-profile-title'>Sarah Bodian</h1></div> 
                  <div className='profile-title'><h3 id='jeremy-profile-title'>Head Nurse</h3></div> 
                  <div className='profile-text'>
                    <p>I qualified as a Registered Veterinary Nurse from Myerscough college in 2009 and since have been
                    working in a busy small animal hospital enjoying all areas in veterinary nursing.
                    </p> 
                    <p>I especially enjoy spending time consulting with clients and being hands on with my patients.
                    In work mode, I often help in clinic with surgical procedures and with rehabilitation post operation.
                    </p>
                    <p>At all other times I am in the middle of a very busy household. I enjoy country walks and picnics with
                    the family and horse riding when time permits.
                    </p>
                  </div>
                  
                  <div className="team right-column-profile">
                    <div style={styles.fadeIn}>
                      <img className="profile-picture" src={JemSarahWalk} alt="JS-Dog-Walk" />
                    </div>
                  </div>
                  
                </div>
              )}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="section section-about-us">
        
        <Container className="ml-auto mr-auto text-center">
          <div className='about-us-title'><h1 id='our-services-title'>Our Services</h1></div> 
          <ServicesCarousel/>

        </Container>
        </div>
        </div>
      


        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Contact Us</h2>
            <p className="description"></p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                Contact Us Section Here
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

export default LandingPage;
