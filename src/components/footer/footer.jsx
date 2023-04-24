import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import logo4 from "../img/logo6.avif";
export default function Footer() {
  const Year = new Date().getFullYear();

  return (
    <div>
      <footer id="footer">
        <div className="footer_txt">
          <Row>
            <Col>
              <h5>
                <b>CONTACT US</b>{" "}
              </h5>
              <p>
                <i>Email</i>
              </p>
              <p>
                <i>Phone</i>
              </p>
              <p>
                <i>Whatsapp</i>
              </p>
              <a href="https://goo.gl/maps/Ti63XJ9B9iuo7wnM8">
                <i>location</i>
              </a>
            </Col>{" "}
            <Col>
              <h5>
                <b>DEPARTMENTS</b>
              </h5>
              <p>
                <i>Music</i>
              </p>
              <p>
                <i>Personal Ministries</i>
              </p>
              <p>
                <i>Youth</i>
              </p>
              <p>
                <i>Communication</i>
              </p>
            </Col>
            <Col>
              <h5>
                <b>Support</b>
              </h5>
              <p>
                <i>Mobile Money</i>
              </p>
              <p>
                <i>Merchant Number</i>
              </p>
              <p>
                <i>Account Number</i>
              </p>
              <p>All rights  reserved,&copy; {Year}</p>
            </Col>{" "}
          </Row>
        </div>{" "}
      </footer>
    </div>
  );
}
