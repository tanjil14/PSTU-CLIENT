import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";
const Info = () => {
  return (
    <Col>
      <Row>
        <Col>
          <h3 className="f-title">Quick Links</h3>
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
        <Col>
          <h3 className="f-title">Contact Information</h3>
          <address>
            <small>
              Faculty of Computer Science and Engineering CSE and BBA Building
              Patuakhali Science and Technology University, Dumki,Patuakhali –
              8602 Fax: 04427-56009,56112 PABX:04427-56014 <br />
              <Link to="#">Email Us</Link>
            </small>
          </address>
          <address>
            <small>
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
