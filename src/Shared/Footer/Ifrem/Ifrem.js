import React from 'react';
import { Col } from 'react-bootstrap';
import "./Ifrem.css"
const Ifrem = () => {
    return (
        <Col sm={12} lg={5}>
           <iframe title="Iframe Example" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.3353491858653!2d90.38243202917735!3d22.465358899077394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aacf2fc2fa6d77%3A0x16cc4b95c2c20d95!2sCSE-BBA+Building%2C+Road%2C+Bangladesh!5e1!3m2!1sen!2sbd!4v1475918199142">
           </iframe>
        </Col>
        
    );
};

export default Ifrem;