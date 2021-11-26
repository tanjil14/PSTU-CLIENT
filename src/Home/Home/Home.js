import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import TopHeader from '../../Shared/TopHeader/TopHeader';
import DeanMessage from '../DeanMessage/DeanMessage';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <>
    <TopHeader />
    <main>
      <Slider/>
      <NoticeBoard/>
      <DeanMessage/>
    </main>
    <Footer />
    </>
  );
};

export default Home;