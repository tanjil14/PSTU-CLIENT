import React from "react";
import { Container, Table } from "react-bootstrap";
import "./Cse.css";
import TableDataForCsePage from "./TableDataForCsePage";
import TableForCse from "./TableForCse";
import TableHeaderForCsePage from "./TableHeaderForCsePage";
const Cse = () => {
  return (
    <section className="bsc_in_cse my-4">
      <Container className="cse-box">
        <div className=" py-3 px-4">
          <h3>
            Course Layout of Bachelor of Science in Computer Science and
            Engineering [B.Sc.Engg.(CSE)
          </h3>
          <br />
          <h4>Level-1,Semester-I</h4>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <TableHeaderForCsePage />
            </thead>
            <tbody>
              <TableDataForCsePage
                courseCode={"PHY 111"}
                courseTitle={"Physics-I"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"PHY 112"}
                courseTitle={"Physics-I Sessional"}
                creditHour={0.75}
              />
              <TableDataForCsePage
                courseCode={"CHE 111"}
                courseTitle={"Chemistry"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"CHE 112"}
                courseTitle={"Chemistry Sessional"}
                creditHour={0.75}
              />
              <TableDataForCsePage
                courseCode={"MAT 111"}
                courseTitle={"Mathematics-I"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"EEE 111"}
                courseTitle={"Basic Electrical Engineering"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"EEE 112"}
                courseTitle={"Basic Electrical Engineering Sessional"}
                creditHour={1.5}
              />
              <TableDataForCsePage
                courseCode={"CIT 111"}
                courseTitle={"Programming Language"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"CIT 112"}
                courseTitle={"Programming Language Sessional"}
                creditHour={1.5}
              />
              <TableDataForCsePage
                courseCode={"CCE 112"}
                courseTitle={"Engineering Drawing"}
                creditHour={0.75}
              />
            </tbody>
          </Table>
        </div>
        <div className="cse-box my-0 px-4">
          <h4>Level-1,Semester-II</h4>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <TableHeaderForCsePage />
            </thead>
            <tbody>
              <TableDataForCsePage
                courseCode={"PHY 121"}
                courseTitle={"Physics-II"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"PHY 122"}
                courseTitle={"Physics-II Sessional"}
                creditHour={0.75}
              />
              <TableDataForCsePage
                courseCode={"CIT 121"}
                courseTitle={"Discrete Mathematics"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"LCM 121"}
                courseTitle={"Communicative English"}
                creditHour={2}
              />
              <TableDataForCsePage
                courseCode={"MAT 121"}
                courseTitle={"Mathematics-II"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"EEE 121"}
                courseTitle={"Electronic Device and Circuits"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"EEE 122"}
                courseTitle={"Electronic Device and Circuits Sessional"}
                creditHour={1.5}
              />
              <TableDataForCsePage
                courseCode={"CCE 121"}
                courseTitle={"Object Oriented Programming"}
                creditHour={3}
              />
              <TableDataForCsePage
                courseCode={"CCE 122"}
                courseTitle={"Object Oriented Programming Sessional"}
                creditHour={1.5}
              />
              <TableDataForCsePage
                courseCode={"CCE 124"}
                courseTitle={"Computer Programming Contest-I"}
                creditHour={0}
              />
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};
export default Cse;
