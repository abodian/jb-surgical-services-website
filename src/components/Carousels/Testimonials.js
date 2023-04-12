import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (
      <div>
        <Slider {...settings}>
          <div style={{justifyContent: 'center' }}>
            <p style={{color: 'white', textAlign: 'center', fontSize: '2.5vh'}}>
              "I cannot recommend the surgical service offered by Jeremy more
              highly. The opportunity to employ a visiting surgeon for our
              orthopaedic and complex soft tissue surgery needs has had a very
              positive impact on both our team and clients, allowing us to
              maintain an extensive in-house service for high value cases that
              would otherwise have been referred.<p></p> From TECA-BO to TPLO, Jeremy
              offers a comprehensive, reassuring and high-quality service which
              includes detailed pre-operative contact and thorough
              post-operative instructions. Jeremy integrates so seamlessly with
              our team that we now consider him one of us. His highly personable
              and approachable nature ensures client confidence and his
              availability for remote advice for tricky cases, including
              reviewing radiographs and chatting with clients about options is
              hugely valuable."
              <p></p><h5>Dr Amanda Straughton<p></p> BVMedSci (Hons) BVM BVS (Hons)
              Cert AVP PG Cert VPS MRCVS Clinical Director, Orby Vets
              </h5>
            </p>
          </div>
          <div style={{justifyContent: 'center' }}>
            <p style={{color: 'white', textAlign: 'center'}}>
            “Very empathetic and compassionate towards both us and our cat. 
            After care is second to none.”
              <p></p><h5>Floki Cadey
              </h5>
            </p>
          </div>
          <div style={{justifyContent: 'center' }}>
            <p style={{color: 'white', textAlign: 'center'}}>
              “Having enjoyed a 15-year career as a vet in small animal practice myself, 
              I have high expectations when it comes to care for my pets. But I was reassured 
              from the outset by Jeremy’s clear communication, demonstrable
              depth of skill and knowledge, and evident compassion. I’m delighted with 
              the treatment he provided for my dog’s cruciate injury, and couldn’t be more grateful 
              for his ongoing expert support throughout Zog’s recovery.”
              <p></p><h5>Yvonne, owner of Zog, MRCV BVSc BSAVA PGcertSAS ESVPS 
              </h5>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
