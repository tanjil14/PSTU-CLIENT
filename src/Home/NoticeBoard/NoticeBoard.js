import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from './Event/Event';
import Notice from './Notice/Notice';
import "./NoticeBoard.css"
const NoticeBoard = () => {
    return (
        <section className="notice-board">
            <Container>
            <h2 className="notice-header my-4 py-2 text-center fw-normal">Welcome to PGS PSTU- Creator of the Excellence</h2>
            <Container className="notice-header pt-3 pb-4">
               <Row>
                   <Event/>
                   <Notice/>
               </Row>
            </Container>
            </Container>
        </section>
    );
};

export default NoticeBoard;