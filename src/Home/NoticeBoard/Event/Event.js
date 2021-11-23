import React from 'react';
import { Col } from 'react-bootstrap';
import News from '../News/News';

const Event = () => {
    return (
        <Col sm={12} md={6}>
            <h2 className="text-center" style={{fontSize:"1.5rem"}}>News and Events</h2>
            <News/>
            
        </Col>
    );
};

export default Event;