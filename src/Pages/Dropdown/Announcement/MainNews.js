import React from "react";
import { Container } from "react-bootstrap";
import banner1 from "../../../images/laravel-workshop.png";
import banner2 from "../../../images/IMG_60531.jpg"
import banner3 from "../../../images/cc.jpg"
import "./MainNews.css";
import SubNews from "./SubNews";
import Footer from "../../../Shared/Footer/Footer";
import TopHeader from "../../../Shared/TopHeader/TopHeader";
const MainNews = () => {
  return (
    <>
    <TopHeader/>
    <section className="welcome-box my-5">
      <Container className="main-box">
        <SubNews
          img={banner1}
          title="A training program on LARAVEL"
          time="2018-10-04 16:48:34"
          description="Faculty of Computer Science and Engineering, PSTU is going to arrange a training program on LARAVEL"
        />
        <SubNews
          img={banner2}
          title="পবিপ্ৰবি তথ্যপ্রযুক্তি উৎসব ২০১৮ সফলভাবে সম্পন্ন"
          time="2018-04-11 13:57:36 "
          description="পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে ৩য় বারের মত অনুষ্ঠিত হল তথ্যপ্রযুক্তি উৎসব। বিশ্ববিদ্যালয়ের অডিটোরিয়ামে ২দিন ব্যাপী এই ইভেন্ট চলে ২২-২৩ মার্চ ২০১৮। এতে বিভিন্ন বিশ্ববিদ্যালয়ের প্রায় ৩০০ জন শিক্ষার্থী অংশগ্রহণ করেন৷"
        />
        <SubNews
          img={banner3}
          title="PSTU Independence Day Programming Contest Has Ended Successfully."
          time="2017-03-28 22:14:39"
          description="Approximately 150 teams for various university have participated in our online version of contest.Teams form PSTU participated the onsite contest."
        />
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default MainNews;
