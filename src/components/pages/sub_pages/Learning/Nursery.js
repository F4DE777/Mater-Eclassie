import React from 'react'
import Pex from "../../../../assets/studentLife@2x.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Circle2 from "../../../../assets/Circle.svg";

function Nursery() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>Learning </small>
            <header>Junior School</header>
          </div>

          <div className="col-md-12 flexy ">
            <div className="col-md-10 sen">
              <h4>
                GO BEYOND GROWING MINDS; TRANSFORM HEARTS{" "}
                <img src={Circle2} alt="Header" className="img-fluid cir2" />
              </h4>
              <p>
                Junior school at Maryland Comprehensive Secondary School is more
                than a prelude to the high school years. Junior school is an
                intentional effort to combine an individually-customized
                academic program with a Christ-centered culture. Junior school
                classes build upon the foundation of the student’s elementary
                years, preparing for the best of what is to come in high school.
                With differentiated instruction and workshop model classrooms,
                our teachers Go Beyond, ignite academic growth, and help
                students identify and nurture their God-given gifts and talents
                – one student at a time.
              </p>
            </div>

            <div className="create col-md-2 ">
              <div className="sub-cover">
                <ul className="sub-menu">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/learn/early-years"}>Senior School</Link>
                  </li>
                  <li>
                    <Link className="active" to={"/learn/nursery"}>
                      Junior school
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy mov">
          <div className="col-md-4">
            <h4>JUNIOR SCHOOL ELECTIVES</h4>
            <br />

            <ul className="list-unstyled">
              <h6>
                All middle school students have the opportunity to choose
                electives. These electives and clubs enhance the core
                curriculum:
              </h6>
              <li>ART & DESIGN</li>
              <li>BUSINESS MANAGEMENT</li>
              <li>CREATIVE WRITING</li>
              <li>DRAMA</li>
              <li>HOME ECONOMICS</li>
              <li>PHOTOGRAPHY</li>
              <li>PROBOTICS</li>
              <li>WORLD LANGUAGES</li>
              <li>GAME DESIGN</li>
              <li>YEARBOOK</li>
              <li>WORLD LANGUAGES</li>

              <li>STUDY SKILLS</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>JUNIOR SCHOOL CLUBS</h4>
            <br />

            <ul className="list-unstyled">
              <li>GIRLS VOLLEYBALL</li>
              <li>BOYS VOLLEYBALL</li>
              <li>CROSS COUNTRY</li>
              <li>GIRLS SOCCER</li>
              <li>BOYS SOCCER</li>
              <li>CHEERLEADING</li>
              <li>GIRLS BASKETBALL</li>
              <li>BOYS BASKETBALL</li>
              <li>TRACK & FIELD</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>JUNIOR SCHOOL EXAMINATIONS</h4>
            <br />
            <p>
              In Junior School, various external examinations are offered, from
              JS2 classes our students begin taking these exams
            </p>
            <h6>JSCE(Junior School Certificate Exams)</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nursery