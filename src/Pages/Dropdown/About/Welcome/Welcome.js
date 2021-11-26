import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../../../Shared/Footer/Footer";
import TopHeader from "../../../../Shared/TopHeader/TopHeader";
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
    <TopHeader/>
    <section className="welcome-box my-5">
      <Container>
      <div className="main-box py-3 px-5">
        <h3 className="main-box-header text-center">Welcome To CSE PSTU</h3>
        <hr />
        <br />
        <br />
        <h3 className="main-box-header text-center">
        Why CSE PSTU
        </h3>
        <hr />
        <br />
        <p className="main-box-text lead">
            The Department of Computer Science and Engineering (CSE) at Patuakhali Science & Technology University is a place where brightest of minds from all over the country assemble for a greater future. The department, popularly known as CSEPSTU, has been inspiring the best and brightest for more than thirteen years in fostering the frontiers of Computer Science and Engineering. We consider all members of the community as catalysts of evolution and inspire them to break away from traditional learn and apply mentality to create new knowledge and instigate others to do the same. Our credibility and efficacy of the methods of education is reflected by our alumni who have been performing with excellence in their respective fields; Our students are well equipped to take the challenge to stand out as the leaders of tomorrow. We welcome all in our community who are willing to take the challenge. Welcome to progress. Welcome to CSEPSTU. The Faculty of Computer Science and Engineering at Patuakhali Science & Technology University provides one of the best learning environments for the students. The faculty has a total of eighteen faculty members with excellent academic and research records. Most of these faculty members are engaged in high quality research and are affiliated with some of the top raking universities in the world through research collaboration. Only the very best of academicians are offered teaching positions and become faculties of this prestigious organization and they are consistently motivated to lead the students towards a better future – both academically and socially. The faculty attracts only the very best of students who sit for the Patuakhali Science & Technology University admission test. Statistics from session 2014-2015 for C Unit (C-Unit) show that, in terms of performance, the CSE PSTU faculty hosts the top 3.65% students who are admitted in PSTU C unit, and this is 0.076% (60 students out of 10293 examines) of all the examines. These brightest of minds are nurtured through proper supervision by the esteemed faculty members to become future leaders in the field of research as well as the industry. The education principles of the faculty focuses on two major aspects. One of them is research, and the other is industry. The faculty and the curriculum are highly focused on research. The students are encouraged to move in to the world of research very early and are guided to pursue publications before graduation. The research friendly environment brings the best out of young researches and faculties alike. Publications in national and international conferences and journals are regular and the number of publications is increasing rapidly. With this background, the students of the faculty pursuing their higher studies in top ranking universities are performing significantly better than their counterparts. Being part of the largest multidisciplinary university in Bangladesh, the faculty provides ample opportunity for multidisciplinary research to tackle both local and global real world problems. The course curriculum are also designed to reflect the necessity of the current software industries. Graduates from the faculty are highly preferred by farms in the local software industry for employment. Many graduates have also made their place to the top companies. Apart from this, many graduates of the university are currently holding important positions as IT specialists in many telecom, financial, and government organizations. The faculty is also focused on enhancing the analytical skills of students through regular participation in Programming Contests. The contest training and related activities start very early side by side with the regular course curriculum. Interested students are guided by some of the most experienced contestants. The culture of programming contests is very rich in the faculty and it helps to bring everyone together through problem solving. In keeping with the tradition of Bangladesh and Patuakhali Science & Technology University unique place in the cultural activities in our country, the faculty passionately maintains it’s cultural heritage. The faculty arranges cultural extravaganzas in all major cultural festivals. It gives an opportunity for all to become a part of the faculty through festivities. These cultural activities are organized throughout the year which maintains a sunny and vibrant environment all the year round. The faculty is located in Dumki, Patuakhali. It is positioned about 14km from Patuakhali sadar. All major routes direct to this location which is an added benefit for the students, considering the transportation system of Bangladesh. The faculty, from its beginning has always been and is keen on continuing to be one of the top choices for higher education in Computer Science and Engineering in the country. 
        </p>
      </div>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default Welcome;
