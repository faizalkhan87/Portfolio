import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/images/logo 1.svg";
import navIcon1 from "./assets/images/nav-icon1.svg";
import navIcon2 from "./assets/images/nav-icon4.svg";
import navIcon3 from "./assets/images/nav-icon3.svg";
import mute from "./assets/images/mute.svg";
import play from "./assets/images/play-btn.svg";

import { HashLink } from "react-router-hash-link";
import { Link, Outlet, BrowserRouter as Router } from "react-router-dom";
import { WelcomeModal } from "./WelcomeModal";
import { AudioFile } from "./context/sharedContext";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { audioFile } = useContext(AudioFile);
  // const navigate = useNavigate();

  const handleMusicStop = () => {
    audioFile.pause();
  };
  const handleMusicPlay = () => {
    audioFile.play();
  };

  const navigateToProjects = () => {
    console.log("navigat");
    // navigate("/Projects");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        {/* <WelcomeModal /> */}
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("Projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/faizal-khan-bb2a971a7/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/faizalkhan87">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/faizal-khan-bb2a971a7/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <div className="social-icon" onClick={handleMusicStop}>
                <a href="#">
                  <img src={mute} alt="" />
                </a>
              </div>
              <div className="social-icon" onClick={handleMusicPlay}>
                <a href="#">
                  <img src={play} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
