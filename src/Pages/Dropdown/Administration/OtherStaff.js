import React from "react";
import { Container } from "react-bootstrap";
import rubel from "../../../images/rubel.jpg";
import khalil from "../../../images/khalil.jpg"
import adil from "../../../images/adil.jpg"
import fake from "../../../images/imag.png"
import harun from "../../../images/harun.jpg"
import mamun from "../../../images/mamun.jpg"
import sherin from "../../../images/sherin_akter.jpg"
import Staff from "./Staff";
import TopHeader from "../../../Shared/TopHeader/TopHeader";
import Footer from "../../../Shared/Footer/Footer";
const OtherStaff= () => {
  return (
    <>
    <TopHeader/>
    <section className="welcome-box my-5">
      <Container>
        <div className="main-box py-3 px-5">
          <h3 className="main-box-header">Office Staffs</h3>
          <hr />
          <Staff
            img={rubel}
            name={"Md. Nurul Hasan Khan"}
            deg={"Lab Attendent"}
            dep={"CIT"}
            phone={"01717970038"}
            
          />
          <Staff
            img={khalil}
            name={"Md. Khalilur Rahman "}
            deg={"Lab Attendent"}
            dep={"PME "}
            phone={"01946619844 "}
          />
          <Staff
            img={adil}
            name={"Md. Adil"}
            deg={"Lab Attendent"}
            dep={"EEE"}
            phone={"01731198593"}
          />
          <Staff
            img={fake}
            name={"Md. Alomgir Hossen"}
            deg={"MLSS"}
            dep={"CIT"}
            phone={"01727110391"}
          />
          <Staff
            img={fake}
            name={"Md. Badruzzaman Joni"}
            deg={"Regular Mastarol"}
            dep={"Mathemetics"}
            phone={"01728871616"}
          />
          <Staff
            img={harun}
            name={"Md. Harun Hawladar"}
            deg={"Regular Mastarol"}
            dep={"EEE"}
            phone={"01932095867"}
          />
          <Staff
            img={mamun}
            name={"Md. Mamun Shikder"}
            deg={"Regular Mastarol"}
            dep={"CCE"}
            phone={"01731252539"}
          />
          <Staff
            img={sherin}
            name={"Sherin Akter"}
            deg={"Regular Mastarol"}
            dep={"PME"}
            phone={"01718346797"}
          />
        </div>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default OtherStaff;
