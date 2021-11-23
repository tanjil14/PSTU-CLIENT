import React from "react";
import { Container } from "react-bootstrap";
import img from "../../images/16487514_1346979582039249_7886773494461505188_o11.jpg";
import img1 from "../../images/scholership.png"
import "./DeanMessage.css";
const DeanMessage = () => {
  return (
    <section className="my-4 ">
      <Container>
        <Container className="dean-message p-0">
          <ul
            className="nav nav-tabs d-flex justify-content-start"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                id="pills-home-tab"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <h6>Dean Message</h6>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-success"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-events"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <h6>Events</h6>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-success"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-scholarship"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <h6>Scholarship</h6>
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Container>
                <div className="row g-4">
                  <div className="col-sm-12 col-md-6">
                    <div className="tabs-left-part pb-3 my-3 pe-3 ms-3 me-0">
                      <img src={img} alt="" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="tabs-right-part pb-3 my-3 px-3 mx-3">
                      <h4 className="dean-message-header text-center py-3">
                        Message From Dean
                      </h4>
                      <p className="tab-description">
                        The Faculty of Computer Science and Engineering (CSE)
                        offers a four-year program which leads the degree of
                        Bachelor of Science in Computer Science and Engineering
                        – in short B.Sc. Engg (CSE). The CSE faculty started
                        just after the university was established and 41
                        students were admitted into the program in the first
                        session which was 2003-2004 session. Till now, 400
                        students from 11 batches completed their degree and are
                        working in different government and non-government
                        organizations. Currently, 230 students are studying in
                        four batches in the faculty. The faculty has five
                        departments namely – department of Computer Science and
                        Information Technology (CSIT), department of Computer
                        and Communication Engineering (CCE), department of
                        Electrical and Electronic Engineering (EEE), department
                        of Mathematics (Math) and department of Physics and
                        Mechanical Engineering (PME). These departments offer
                        different relevant courses of the bachelor degree in
                        CSE. The faculty has 21 teachers in these five
                        departments among whom five are PhD holders. The faculty
                        of CSE has 5 laboratories such as – Programming Lab,
                        Computer Network Lab, Microprocessors and Microcomputers
                        Lab, Electrical and Electronic Lab and Physics and
                        Mechanical Lab. Recently, honorable state minister of
                        Information and Communication Technologies department
                        Junaid Ahmed Palak granted 8.6 million taka to establish
                        a lab named Advanced Computing Lab. Moreover, a Mobile
                        Computng Lab development lab was also established by the
                        department of Information and Communication
                        Technologies, Government of Bangladesh.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div
              className="tab-pane fade"
              id="pills-events"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Container>
              <div className="row g-4 mb-5">
                <div className="col-sm-12 col-md-6">
                  <div className="tabs-left-part pb-3 my-3 pe-3 ms-3 me-0">
                    <img src={img} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="tabs-right-part pb-3 my-3 px-3 mx-3">
                    <h4 className="dean-message-header text-center py-3">
                      IT Curnival Programming Contest(2015)
                    </h4>
                    <p className="tab-description">
                      Independence day IT Carnivals Programming Contest (2015)
                      was arranged by the CSE PSTU on 26th march in
                      2015.Organiser also arranged gaming contest, idea contest
                      and project fair. There are great responses from the
                      others’ faculty students in gaming contest. Many of them
                      participate in that game. Idea contest discovers many of
                      innovates. There are lots of female participants in this
                      section and they placed their position in top three. In
                      the project fair there are lots of project displayed in
                      the auditorium of PSTU. A silent Eagle was presented by
                      another faculty student and he keeps the second prize in
                      his pocket. Honorable VC sir was present in prize giving
                      ceremony to make the environment warm.
                    </p>
                  </div>
                </div>
              </div>
              </Container>
            </div>

            <div
              className="tab-pane fade"
              id="pills-scholarship"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
                <Container>
                <div className="row g-4 mb-5">
                <div className="col-sm-12 col-md-6">
                  <div className="tabs-left-part pb-3 my-3 pe-3 ms-3 me-0">
                    <img src={img1} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="tabs-right-part pb-3 my-3 px-3 me-3">
                    <h4 className="dean-message-header text-center py-3">
                    Ankur Undergraduate Scholarship for CSE PSTU
                    </h4>
                    <p className="tab-description">
                    Ankur International was formed in March 28, 2007 with a mission to help destitute children and mothers, locally and internationally. As of now Ankur International is headquartered in Portland, Oregon, USA without any branch office anywhere. Ankur International has become exempt from Federal income tax under section 501 (c) (3) of the Internal Revenue Code since March 28, 2007. Contributions to Ankur International are deductible under section 170 of the code. Memberships Anybody supporting Ankur International’s mission can become a member of Ankur International with a minimum monthly membership fee. Kids and young adults can also become member of Ankur International. 
                    </p>
                  </div>
                </div>
              </div>
                </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default DeanMessage;
