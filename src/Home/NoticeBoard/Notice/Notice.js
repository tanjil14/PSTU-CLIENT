import React from 'react';
import { Col } from 'react-bootstrap';
import Notices from '../Notices/Notices';
import "./Notice.css"
const Notice = () => {
    return (
        <Col sm={12} md={6}>
            <h2 className="text-center" style={{fontSize:"1.5rem"}}>Notice Board</h2>
            <Notices/>
        </Col>
    );
};

export default Notice;