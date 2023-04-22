/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © Jeremy Bodian Surgical Service Ltd. {new Date().getFullYear()}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
