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
          <div style={{ justifyContent: "center" }}>
            <p style={{ color: "white", textAlign: "center", fontSize: "2.5vh" }}>
              "I cannot recommend the surgical service offered by Jeremy more
              highly. The opportunity to employ a visiting surgeon for our
              orthopaedic and complex soft tissue surgery needs has had a very
              positive impact on both our team and clients, allowing us to
              maintain an extensive in-house service for high value cases that
              would otherwise have been referred.
            </p>
            <p></p>
            <h5 style={{ color: "white", textAlign: "center", fontSize: "2.8vh" }}>
              Dr Amanda Straughton
              <p></p> BVMedSci (Hons) BVM BVS (Hons) Cert AVP PG Cert VPS MRCVS
              Clinical Director, Orby Vets
            </h5>
          </div>
          <div style={{ justifyContent: "center" }}>
            <p style={{ color: "white", textAlign: "center", fontSize: "2.5vh" }}>
              “Very empathetic and compassionate towards both us and our cat. 
              After care is second to none.”
            </p>
            <h5 style={{ color: "white", textAlign: "center", fontSize: "2.8vh" }}>Floki Cadey</h5>
          </div>
          <div style={{ justifyContent: "center" }}>
            <p style={{ color: "white", textAlign: "center", fontSize: "2.5vh" }}>
              “Having enjoyed a 15-year career as a vet in small animal practice myself, 
              I have high expectations when it comes to care for my pets. But I was reassured 
              from the outset by Jeremy’s clear communication, demonstrable
              depth of skill and knowledge, and evident compassion. I’m delighted with 
              the treatment he provided for my dog’s cruciate injury, and couldn’t be more grateful 
              for his ongoing expert support throughout Zog’s recovery.”
            </p>
            <h5 style={{ color: "white", textAlign: "center", fontSize: "2.8vh" }}>Yvonne, owner of Zog, MRCV BVSc BSAVA PGcertSAS ESVPS </h5>
          </div>
        </Slider>
      </div>
    );
  }
}
