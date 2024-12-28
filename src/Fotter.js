import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "./assets/images/logo.svg";
import navIcon1 from "./assets/images/nav-icon1.svg";
import navIcon2 from "./assets/images/nav-icon2.svg";
import navIcon3 from "./assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">

      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <iframe
            title="unique"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.3225309617337!2d74.80421078000406!3d34.093852708073996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18560d32110ad%3A0x54f450c3c3186183!2zUGF0aGFyIE1hc2ppZCBTcmluYWdhciDZvtiq2r7YsSDZhdiz2KzYryDYs9ix24wg2Ybar9ix!5e0!3m2!1sen!2sin!4v1682879548265!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <h4>ACE</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/faizal-khan-bb2a971a7/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/faizal-khan-bb2a971a7/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/faizal-khan-bb2a971a7/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Shelby </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
