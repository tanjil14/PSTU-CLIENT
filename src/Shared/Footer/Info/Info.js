import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";
const Info = () => {
  return (
    <Col className="mt-sm-5">
      <Row>
        <Col xs={12} sm={6}>
          <h3 className="f-title mb-3">Quick Links</h3>
          <ListGroup className="link-list" variant="flush">
            <Link to="#">
              <ListGroup.Item>PSTU at a Glance</ListGroup.Item>
            </Link>
            <Link to="#">
              <ListGroup.Item>PSTU Official Web Site</ListGroup.Item>
            </Link>
            <Link to="#">
              <ListGroup.Item>Admission in PSTU</ListGroup.Item>
            </Link>
            <Link to="#">
              <ListGroup.Item>Residential Hall</ListGroup.Item>
            </Link>
            <Link to="#">
              <ListGroup.Item>Image Gallery</ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col xs={12} sm={6}>
          <h3 className="f-title mb-3">Contact Information</h3>
          <address>
            <small className="text-white">
              Faculty of Computer Science and Engineering CSE and BBA Building
              Patuakhali Science and Technology University, Dumki,Patuakhali –
              8602 Fax: 04427-56009,56112 PABX:04427-56014 <br />
              <Link className="email-link" to="#">Email Us</Link>
            </small>
          </address>
          <address>
            <small className="text-white">
              Dhaka Liaison Office Flat No. #A-4 Building: Kalotan Tower House
              No: #27 Road No: 16(New), 27(old) Dhanmondi,Dhaka-1209
            </small>
          </address>
        </Col>
      </Row>
    </Col>
  );
};

export default Info;
