import React from 'react'
import Pex from "../../../../assets/Rectangle2e.png";
import Circle2 from "../../../../assets/Circle.svg";

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Eyfs() {
  return (
    <>
      <section >
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>Learning </small>
            <header>Senior School</header>
          </div>

          <div className="col-md-12 row flexy">
            <div className="col-md-9 sen">
              <h4>
                GO BEYOND INSTRUCTION; INSPIRE LEADERSHIP{" "}
                <img src={Circle2} alt="Header" className="img-fluid cir" />
              </h4>
              <p>
                From personalized and targeted instruction in the classroom to
                opportunity-based clubs that give our students real-world
                experiences, there is an intentional effort to combine
                challenging programs with a culture that encourages a
                Christ-centered community. We want our students to live up to
                their full God-given potential, and we train them to be
                courageous followers of Christ.
              </p>
              <br />
            </div>

            <div className=" create col-md-3">
              <div className="sub-cover">
                <ul className="sub-menu">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link className="active" to={"/learn/early-years"}>
                      Senior School
                    </Link>
                  </li>
                  <li>
                    <Link to={"/learn/nursery"}>Junior school</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {}
        </div>

        <div className="col-md-12 flexy mov">
          <div className="col-md-4">
            <h4>SENIOR SCHOOL ELECTIVES</h4>
            <br />
          

            <ul className="list-unstyled">
              <li>ART1</li>
              <li>CERAMICS</li>
              <li>CHAMBER CHOIR</li>
              <li>DRAWING</li>
              <li>PAINTING</li>
              <li>ROBOTICS</li>
              <li>PHOTOGRAPHY</li>
              <li>GRAPHIC DESIGN</li>
              <li>GAME DESIGN</li>
              <li>CLOTHING</li>
              <li>MUSIC THEORY</li>

              <li>PSYCHOLOGY</li>
              <li>ECONOMICS</li>
              <li>INNOVATION & DESIGN LABS</li>
              <li>INTERIOR DESIGN</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>SENIOR SCHOOL CLUBS</h4>
            <br />
            

            <ul className="list-unstyled">
              <li>BRIDGE BUILDERS CLUBS</li>
              <li>DRAMA CLUB</li>
              <li>FINE ARTS</li>
              <li>INTRAMURALS</li>
              <li>PEER TUTORING</li>
              <li>PIT ORCHESTRA</li>
              <li>SEWING CLUB</li>
              <li>TECHNOLOGY CLUB</li>
              <li>TRUMPET</li>
              <li>WORLDVIEW CLUB</li>
              <li>SCHOLASTIC BOWL</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>SENIOR SCHOOL EXAMINATIONS</h4>
            <br />
            <p>
              In Senior School, various external examinations are offered, from
              SS2 classes our students begin taking these exams
            </p>
            <h6>IGCSE(Cambridge exams)</h6>
            <h6>WAEC</h6>
            <h6>NECO (Optional)</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eyfs