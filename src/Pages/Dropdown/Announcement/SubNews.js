import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubNews = ({img,title,time,date,description,by}) => {
    return (
        <Row className="py-3 px-5  ">
          <hr className="my-5"/>
          <br />
          <Col sm md={5} className="box-banner  p-2">
            <img src={img} alt="" />
          </Col>
          <Col sm md={7} className="box-banner-info">
            <h4>{title}</h4>
            <small>{time}</small> <small>{date}</small><br />
            <small>Post by : {by}</small><br />
            <small>{description}</small> <br />
            <Link to="#">Read More</Link>
          </Col>
        </Row>
    );
};

export default SubNews;