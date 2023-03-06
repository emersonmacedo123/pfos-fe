import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import primates_logo_nobg from "../assets/images/primates_logo_nobg.png";
import { FaFacebook, FaInstagram, FaYoutube, FaAsterisk, FaSpotify } from 'react-icons/fa';
// import Linktree from '../assets/icons/linktree.svg';
import { Link } from "react-scroll"; //animateScroll as scroll


const NavbarMain = () => {
  const IconSize = 30;

  return (
    <>
      <Navbar bg="black" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <img
              src={primates_logo_nobg}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Primates Logo"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            
            
            <Nav.Link href="#History">
            <Link
                activeClass="active"
                to="History"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                History
              </Link>
            </Nav.Link>
            
            
            <Nav.Link href="#members">
            <Link
                activeClass="active"
                to="Members"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Members
              </Link>
            </Nav.Link>
            
            
            <Nav.Link href="#social-media">
              <Link
                activeClass="active"
                to="Social-media"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Social Media
              </Link></Nav.Link>
            
            
            <Nav.Link href="#list-of-concerts"><Link
                activeClass="active"
                to="Concerts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Concerts
              </Link></Nav.Link>
            
            <Nav.Link>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link></Nav.Link>
          </Nav>

          {/* Icons on the right */}
          <Nav>
            <Nav.Link className="social-icon" href="https://www.facebook.com/PrimatesFromOuterSpaceBand">
              <FaFacebook className="mr-1" size={IconSize} />
            </Nav.Link>
            <Nav.Link className="social-icon" href='https://www.instagram.com/primates_from_outer_space_band/'>
              <FaInstagram className="mr-1" size={IconSize} />
            </Nav.Link>
            <Nav.Link className="social-icon" href='https://www.youtube.com/'>
              <FaYoutube className="mr-1" size={IconSize} />
            </Nav.Link>

            <Nav.Link className="social-icon" href='https://linktr.ee/primates.from.outer.space?utm_source=linktree_profile_share&ltsid=a2a0d856-1fcd-4214-85fe-422c9b18d1c8'>
              <FaAsterisk className="mr-1" size={IconSize} />
            </Nav.Link>

            <Nav.Link className="social-icon" href='https://open.spotify.com/'>
              <FaSpotify className="mr-1" size={IconSize} />
            </Nav.Link>

          </Nav>

        </Container>
      </Navbar>
    </>

  )
}

export default NavbarMain