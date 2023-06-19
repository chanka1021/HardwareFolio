import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";


const Footer = () => {

  const handleClick = () => {
    window.open('https://www.achrafchouache.me', '_blank');
  };
  
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>HardwareFolio</h5>
              <p>
              Your one-stop shop for high-quality PC parts. Build your dream PC hassle-free with HardwareFolio.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Opening Time</h5>
            <ListGroup className="opening_time-list">
              <ListGroupItem className=" opening__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>09:00am - 10:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" opening__time-item border-0 ps-0">
                <span>Saturday</span>
                <p>09:00am - 05:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="opening_time-list">
              <ListGroupItem className=" opening__time-item border-0 ps-0">
                <p>Location: Casablanca, Ain Sbaa-3100, Morocco</p>
              </ListGroupItem>
              <ListGroupItem className=" opening__time-item border-0 ps-0">
                <span>Phone: +123 123456789</span>
              </ListGroupItem>

              <ListGroupItem className=" opening__time-item border-0 ps-0">
                <span>Email: HardwareFolio@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
            <p className="copyright__text">
               website made by <a className="chanka" onClick={handleClick}>@Chanka1021</a>. All Rights
              Reserved.
            </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
