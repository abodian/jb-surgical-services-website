import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

import logo from '../../assets/img/jblogolandscape.jpg'

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>

        <div
          className="page-header-image"
          style={{ height: "10%" }}
          ref={pageHeader}
        ></div>
        <div className="d-flex justify-content-center align-items-center h-100">
          <Container style={{ width: "150%" }}>
            <div>
              <img id="header-logo" src={logo} alt="JBSS logo" />
            </div>
          </Container>
        </div>

    </>
  );
}

export default LandingPageHeader;
