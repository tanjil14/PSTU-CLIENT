import React from 'react';
import { Container } from 'react-bootstrap';
import SingleNotice from './SingleNotice';

const NoticeBoard = () => {
    return (
        <section className="welcome-box my-5">
      <Container>
        <div className="main-box py-3 px-5">
         <SingleNotice title="Class Routine"
         date="July December 2020"
         writer="SomeOne"
         time="2021-01-10 10:52:56"/>
         <SingleNotice title="Exam Routine July-December 2017"
         date="July December 2020"
         writer="SomeOne"
         time="2017-11-08 11:48:24"/>
         <SingleNotice title="Class Routine"
         date="July December 2020"
         writer="SomeOne"
         time="2021-01-10 10:52:56"/>
        </div>
      </Container>
    </section>
    );
};

export default NoticeBoard;