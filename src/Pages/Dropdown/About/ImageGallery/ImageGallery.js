import React from 'react';
import { Container } from 'react-bootstrap';
import TopHeader from "../../../../Shared/TopHeader/TopHeader"
import Footer from "../../../../Shared/Footer/Footer"
const ImageGallery = () => {
    return (
      <>
      <TopHeader/>
        <section className="welcome-box my-5">
      <Container>
        <div className="main-box py-3 px-5">
          <h3 className="main-box-header">Image is Loading...</h3>
        </div>
      </Container>
    </section>
    <Footer/>
    </>
    );
};

export default ImageGallery;