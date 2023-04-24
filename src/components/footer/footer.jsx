import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import logo4 from "../img/logo6.avif";
export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer_txt">
          <Row>
            <Col>
              <h5>
                <b>CONTACT US</b>{" "}
              </h5>
              <p><i>Email</i></p>
              <p><i>Phone</i></p>
              <p><i>Whatsapp</i></p>
              <p><i>location</i></p>
            </Col>{" "}
            <Col>
              <h5><b>DEPARTMENTS</b></h5>
              <p><i>Music</i></p>
              <p><i>Personal Ministries</i></p>
              <p><i>Youth</i></p>
              <p><i>Communication</i></p>
          
            </Col>
            <Col>
              <h5><b>Support</b></h5>
              <p><i>Mobile Money</i></p>
              <p><i>Merchant Number</i></p>
              <p><i>Account Number</i></p>
            </Col>{" "}
          </Row>
        </div>{" "}
      </footer>
    </div>
  );
}
