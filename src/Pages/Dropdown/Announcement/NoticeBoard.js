import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import TopHeader from '../../../Shared/TopHeader/TopHeader';
import SingleNotice from './SingleNotice';

const NoticeBoard = () => {
  const [notices,setNotices]=useState([])
    useEffect(()=>{
        fetch("https://pure-wildwood-54871.herokuapp.com/notices")
        .then(res=>res.json())
        .then(data=>setNotices(data))
    },[])
    return (
      
      <>
      <TopHeader/>
        <section className="welcome-box my-5">
      <Container>
        <div className="main-box py-3 px-5">
         {
           notices.map(notice=><SingleNotice key={notice._id} title={notice.title}
            length={notice.length}
            writer={notice.name}
            time={notice.date}
            URL={notice.URL} />)
         } 
        </div>
      </Container>
    </section>
    <Footer/>
    </>
    );
};

export default NoticeBoard;