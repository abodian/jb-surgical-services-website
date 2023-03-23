import React from "react";
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { Link as ScrollLink } from "react-scroll";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function LandingNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const navbarRef = React.useRef(null);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top "} color="info" expand="lg" ref={navbarRef}>
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Navigate straight to a service
              </DropdownItem>
              <DropdownItem href="/soft-tissue-surgery">
                SOFT TISSUE SURGERY
              </DropdownItem>
              <DropdownItem href="/orthopaedic">
                ORTHOPAEDIC
              </DropdownItem>
              <DropdownItem href="/regenerative-medicine">
                REGENERATIVE MEDICINE
              </DropdownItem>
              <DropdownItem href="/photobiomodulation">
                PHOTOBIOMODULATION
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              <div id="vet-menu">Vet Practice Menu</div>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <ScrollLink className='nav-link' to="our-services-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
                  OUR SERVICES
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink className='nav-link' to="about-us-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
                  ABOUT US
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink className='nav-link' to="contact-us-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
                  CONTACT US
                </ScrollLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="mailto:jeremybodian@surgicalservices.co.uk"
                  id="email-us"
                >
                  <MdOutlineMarkEmailUnread size={30} />
                  <p className="d-lg-none d-xl-none">Email</p>
                </NavLink>
                <UncontrolledTooltip target="#email-us">
                  Email us
                </UncontrolledTooltip>
              </NavItem>


              {/* <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LandingNavbar;
