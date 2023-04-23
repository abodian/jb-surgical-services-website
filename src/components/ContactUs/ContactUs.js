// Third-party libraries
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SiMinutemailer } from "react-icons/si";

const ContactUs = () => {

  return (
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
                    href="mailto:jeremybodian@surgicalservice.co.uk"
                  >
                    jeremybodian@surgicalservice.co.uk
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default ContactUs;