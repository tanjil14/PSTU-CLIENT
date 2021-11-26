import React from "react";
import { Container } from "react-bootstrap";
import "./DeanOffice.css";
import DeanStuff from "./DeanStuff";
import img1 from "../../../images/salma.jpg"
import img2 from "../../../images/saiful.jpg"
import img3 from "../../../images/nurul_hoque.png"
import img from "../../../images/imag.png"
import TopHeader from "../../../Shared/TopHeader/TopHeader";
import Footer from "../../../Shared/Footer/Footer";
const DeanOffice = () => {
  return (
    <>
    <TopHeader/>
    <section className="welcome-box my-5">
      <Container>
        <div className="main-box py-3 px-5">
          <h3 className="main-box-header">Dean</h3>
          <hr />
          <br />
          <div className="dean-profile d-flex flex-column flex-md-row p-2 ">
            <div className="dean-img pe-md-5 mb-2">
              <img src={img} alt="" />
            </div>
            <div className="dean-info ps-md-5">
              <address>
                Professor Golam Md. Muradul Bashir <br />
                <b>E-mail:</b>deancse@pstu.ac.bd <br />
                <b>Mobile No.</b> 01718323601 <br />
                <b>Phone No.</b> 0442756331 <br />
                <b>Pabx:</b> 330(Office),288(Res).
              </address>
            </div>
          </div>
          <hr />
          <br />
          <h3 className="main-box-header">Administrative</h3>
          <hr />
          <DeanStuff 
          img={img1}
          name={"Salma Akter"}
          deg={"Deputy Registrar"}
          phone={"01717970038"}
          email={"salmazpstu@yahoo.com"}
          />
          <DeanStuff 
          img={img2}
          name={"Saiful Hasan Talukder"}
          deg={"Section Officer"}
          phone={"01729141406"}
          email={"saifulhasanpstu@gmail.com"}
          />
          <DeanStuff 
          img={img3}
          name={"Md. Nurul Hoque"}
          deg={"Administrative Officer"}
          phone={"01726736007"}
          email={"nurulhoque.pstu@gmail.com"}
          />
        </div>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default DeanOffice;
