import React from "react";
import { Container } from "react-bootstrap";

import { useEffect } from "react";
import { useState } from "react";
import TopHeader from "../../../Shared/TopHeader/TopHeader";
import Footer from "../../../Shared/Footer/Footer";
import { useParams } from "react-router-dom";
const SingleNews = () => {
    const { id } = useParams();
  const [news,setNews]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/news/${id}`)
    .then(res=>res.json())
    .then(data=>setNews(data))
  },[id])
  
  return (
    <>
    <TopHeader/>
    <section className="welcome-box my-5">
      <Container className="main-box p-3">
        <h2>{news?.title}</h2>
        <p>{news?.description}</p>
        <small>{news?.date}</small>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default SingleNews;
