import React from "react";
import { Card, Carousel } from "react-bootstrap";
import QuantamArDark from "./assets/images/quantamarc.png";
import Qarc from "./assets/images/qc.png";
import Qar from "./assets/images/quantamarcdark.png";

const Projects = () => {
  return (
    <section className="project p-5" id="projects">
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <center>
            <Card style={{ width: "50rem" }}>
              <Card.Img src={Qarc} text="First slide" />
            </Card>
          </center>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <center>
            <Card style={{ width: "48rem" }}>
              <Card.Img src={QuantamArDark} text="First slide" />
            </Card>
          </center>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <center>
            <Card style={{ width: "48rem" }}>
              <Card.Img src={Qar} text="First slide" />
            </Card>
          </center>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Projects;
