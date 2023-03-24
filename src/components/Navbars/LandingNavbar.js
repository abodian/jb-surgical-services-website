import React from "react";
import { Link } from 'react-router-dom';
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
import companyLogo from './logo-white.png';

require('./responsive.css')

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
        <Container className='navbar-container'>
        <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
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
              <Link className='vet-link' to="/soft-tissue-surgery">
                <DropdownItem>- SOFT TISSUE SURGERY</DropdownItem>
              </Link>
              <Link className='vet-link' to="/orthopaedic">
                <DropdownItem>- ORTHOPAEDIC</DropdownItem>
              </Link>
              <Link className='vet-link' to="/regenerative-medicine">
                <DropdownItem>- REGENERATIVE MEDICINE</DropdownItem>
              </Link>
              <Link className='vet-link' to="/photobiomodulation">
                <DropdownItem>- PHOTOBIOMODULATION</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>

        {/* Mobile Menu */}
          <NavItem className="mobile-menu">
          <Link className='nav-link' to="/">
            HOME
          </Link>
          </NavItem>
          <NavItem className="mobile-menu">
          <ScrollLink className='nav-link' to="our-services-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
            SERVICES
          </ScrollLink>
          </NavItem>
          <NavItem className="mobile-menu">
          <ScrollLink className='nav-link' to="about-us-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
            ABOUT
          </ScrollLink>
          </NavItem>
          <NavItem className="mobile-menu">
          <ScrollLink className='nav-link' to="contact-us-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
            CONTACT
          </ScrollLink>
          </NavItem>
          {/* End of mobile menu */}

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
              <NavItem className="desktop-menu">
                <Link className='nav-link' to="/">
                  HOME
                </Link>
              </NavItem>
              <NavItem className="desktop-menu">
                <ScrollLink className='nav-link' to="our-services-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
                  OUR SERVICES
                </ScrollLink>
              </NavItem>
              <NavItem className="desktop-menu">
                <ScrollLink className='nav-link' to="about-us-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
                  ABOUT US
                </ScrollLink>
              </NavItem>
              <NavItem className="desktop-menu">
                <ScrollLink className='nav-link' to="contact-us-title" smooth={true} duration={500} offset={-navbarRef.current?.clientHeight || -100} style={{"cursor":"pointer"}}>
                  CONTACT US
                </ScrollLink>
              </NavItem>
              <NavItem className="desktop-menu">
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LandingNavbar;
