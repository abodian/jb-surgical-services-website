import React, {useRef, useState} from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
} from "reactstrap";
import Radium, {StyleRoot} from 'radium';
import JeremyProfilePicture from '../assets/img/jeremyprofile.jpg'
import SarahProfilePicture from '../assets/img/sarahprofile.JPEG'
import { fadeIn } from 'react-animations'
import { useInViewport } from 'react-in-viewport';

const OurTeam = () => {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  const [jeremyCollapseOpen, setJeremyCollapseOpen] = useState(false);

  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

const toggleJeremyCollapse = () => setJeremyCollapseOpen(!jeremyCollapseOpen);

return (
<StyleRoot>
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
              <div className="jeremy-collapse-profile">
              <Button
                color="link"
                onClick={toggleJeremyCollapse}
                id='jeremy-profile-button'
              >
              Read More
              </Button>
              <Collapse isOpen={jeremyCollapseOpen}>
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
                </Collapse>
            </div>

          </div>
          </div>
        </Col>
        <Col  md="6">
          <div >
              <div  ref={myRef} className="team right-column-profile">
              
              {inViewport && (
                <div className="team right-column-profile">
                  <div style={styles.fadeIn}>
                    <img id='sarah-profile-picture' className="profile-picture" src={SarahProfilePicture} alt="Sarah-Profile" />
                  </div>
                </div>
              )}
              
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
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</StyleRoot>
  );
};

export default OurTeam;