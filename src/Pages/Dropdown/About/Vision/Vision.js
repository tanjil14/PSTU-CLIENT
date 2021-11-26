import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../../../Shared/Footer/Footer";
import TopHeader from "../../../../Shared/TopHeader/TopHeader";

const Vision = () => {
  return (
    <>
      <TopHeader />
      <section className="welcome-box my-5">
        <Container>
          <div className="main-box py-3 px-5">
            <h3 className="main-box-header">Vision & Mission</h3>
            <hr />
            <br />
            <p className="main-box-text lead">
              Patuakhali Science and Technology University aspires to be a home
              of excellence for producing competent professionals with improved
              knowledge and skills to meet national and global challenges.
            </p>
            <p className="main-box-text lead">
              The mission of Patuakhali Science and Technology University is to
              provide cutting-edge education, research, training and develop
              entrepreneurship at both undergraduate and postgraduate levels for
              creating skilled and enlightened personnel to serve the nation.
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Vision;
