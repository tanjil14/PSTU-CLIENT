import React from 'react';
import DeanMessage from '../DeanMessage/DeanMessage';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <main>
      <Slider/>
      <NoticeBoard/>
      <DeanMessage/>
    </main>
  );
};

export default Home;