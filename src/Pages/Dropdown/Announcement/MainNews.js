import React from "react";
import { Container } from "react-bootstrap";
import "./MainNews.css";
import SubNews from "./SubNews";
import Footer from "../../../Shared/Footer/Footer";
import TopHeader from "../../../Shared/TopHeader/TopHeader";
import { useEffect } from "react";
import { useState } from "react";
const MainNews = () => {
  const [news,setNews]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/news')
    .then(res=>res.json())
    .then(data=>setNews(data))
  },[])
  
  return (
    <>
    <TopHeader/>
    <section className="welcome-box my-5">
      <Container className="main-box">
      {
      news.map(nw=><SubNews
         img={nw.image}
         key={nw._id}
         title={nw.title}
         date={nw.date}
         time={nw.time}
         by={nw.name}
         description={nw.textarea}
      ></SubNews>)
    }
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default MainNews;
