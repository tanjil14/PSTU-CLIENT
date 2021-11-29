import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import TopHeader from "../../../Shared/TopHeader/TopHeader";

const SingleNews = () => {
    const { id } = useParams();
  const [news,setNews]=useState([])
  useEffect(()=>{
    fetch(`https://pure-wildwood-54871.herokuapp.com/news/${id}`)
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
