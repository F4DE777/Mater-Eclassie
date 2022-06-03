import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/smile@2x.png";
import Rev from "../../../../assets/front@2x.png";
import Build from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
// import Circle2 from "../assets/Circle.png";

import './Style.css';


function History() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/about/administrators-message">
          About
        </CBreadcrumbItem>
        <CBreadcrumbItem active>History of the School</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>About </small>
            <header>History of the School</header>
          </div>
          <div className=" create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about/administrators-message"}>
                    Administrator’s Message
                  </Link>
                </li>
                <li>
                  <Link to={"/about/proprietors-message"}>
                    Proprietor’s Message
                  </Link>
                </li>
                <li>
                  <Link className="active" to={"/about/history"}>
                    History Of The School
                  </Link>
                </li>
                <li>
                  <Link to={"contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <h4 className="bio">THE NAME MARYLAND</h4>
            <p style={{ paddingTop: "0", margin: "0" }}>
              What is now known as Maryland Comprehensive Secondary School
              emanated from Rev Mother Arcade, OLA of blessed memory, who prayed
              to our Lady that the land (Maryland Compound) be given to the
              Catholic Mission to establish a School? She promised our Lady that
              if her request was granted the school would be named after her.
              Thus, came the name “Maryland” in 1950 – a name that has now,
              become the landmark in the fast-spreading Lagos Metropolis of
              today.
            </p>
            <h4 className="bio">
              EARLY YEARS OF MARYLAND / ESTABLISHMENT OF MCSS
            </h4>
            <div>
              <img src={Rev} alt="" className="house-img" />
              <p>
                In 1950, Maryland was prepared for St. Agnes Teacher’s College
                which was moved from its Yaba site. The Teacher’s College was
                later relocated to form a co-educational teacher’s College with
                St. Leo’s College Abeokuta in 1968, which paved the way for the
                establishment of a new secondary school – Maryland Comprehensive
                Secondary School (MCSS). The School became the first
                co-educational institution, established by the founding mothers,
                the Sisters of Our Lady of Apostles on the 21st of January 1969
                (Feast of St Agnes), having founded so many Girls schools in
                different parts of the country. Thus, MCSS inherited the
                Structure and the vast acres of land originally earmarked for
                St. Agnes Teacher’s College. Between 1969 and 1979, the school
                bloomed, offering boarding facilities for girls while the boys
                were day students. The school attracted students from far and
                near, especially families who wanted their children to benefit
                from a Catholic education.
              </p>
            </div>
            {/* <div className='tour-img'>
                                    <img src={Rev} alt="" className='img-fluid' /> 
                                    <img src={Build} alt="" className='img-fluid v-hide' /> 
                                </div> */}

            <h4 className="bio">THE TAKE-OVER OF SCHOOL</h4>
            <p>
              In 1979, the Lagos State Government took over the school, as it
              did other mission Schools. The period coincided with the
              introduction of the Universal Primary Education Scheme (UPE) which
              recorded a phenomenal rise in school enrolments. Soon after the
              ‘Take-Over’, the government introduced both morning and afternoon
              sessions in the school and made it a “Day School”. The State
              government made a division in the early ’80s and the “Afternoon
              session” was named Mary Immaculate Secondary School, still located
              on the same complex, but in a separate building. The “Morning
              Session” remained Maryland Comprehensive Secondary School. MCSS
              was upgraded to a Model School in 1996 by the State government, a
              status that was justified, as the students always distinguished
              themselves in various local and national Competitions by winning
              many laurels for the school. However, what was once the entire
              compound of Maryland Comprehensive Secondary School and St. Agnes
              Primary School is now occupied by all education offices for
              kosofe; the State Universal Basic Education Board (SUBEB), three
              secondary schools, three primary schools, Basic Science Center and
              French Language
            </p>
            <h4 className="bio">ADMINISTRATOR’S BEFORE 2001</h4>
            <div>
              <img src={Rev} alt="" className="house-img" />
              <p>
                Maryland Comprehensive Secondary School was on the 2nd of
                October, 2001 returned to the Catholic Mission, headed by
                Anthony Cardinal Okogie (then Archbishop of the Metropolitan Sea
                of Lagos), by the Lagos State Government, during the
                administration of Governor Asiwaju Bola Ahmed Tinubu. The
                returned MCSS was different from what was taken over. There was
                infrastructure decay, over-population of students, indiscipline,
                to mention but a few. Thereafter, the Catholic Mission handed
                the administration of the School to the founding sisters who
                began again to practically rebuild from the cradle. From October
                2001 to September 2003, the School was headed by Rev. Sr. Mary
                Crowley, OLA who invariably became the first Administrator in
                the new dispensation. Rev. Sr. Esther Edeko OLA, was the
                Administrator of the School from September, 2003 to 2014. In
                September 2014, the present Administrator, Rev. Sr. Agnes
                Adepoju, OLA took over the management of the School.{" "}
              </p>
            </div>
            <h4 className="bio">
              MCSS TODAY
              {/* <img className="head-teacher-img circle" src={Circle2} alt="" /> */}
            </h4>
            <p>
              With the introduction of Universal Basic Education (UBE) and in
              line with the requirements of the program, the School was
              subdivided into both junior and senior Schools. Each School has
              its own Head Teacher and Sectional Head. The Administrator, Head
              Teacher, and Sectional Heads form the Administrative Team of the
              School. Construction of new School facilities, refurbishing,
              redeveloping and equipping have been very important and consuming
              aspects of what has been taking place in our school, especially
              since its return in 2001. It has been a continuous process, thus
              given the school a new facelift that could be compared with
              structures found internationally. As a School, our primary
              function is to provide an enabling environment and opportunities
              to maximize sound learning in all its forms; intellectually,
              socially, emotionally, physically, technologically, and
              spiritually. Consequently, the school has since her inception in
              1969, credibly produced a high caliber of students, academically,
              morally, and otherwise. Our graduates have served the nation in
              various capacities worthy of emulation. MCSS has come a long way
              from the time the founding ‘Mothers’, the Sisters of Our Lady of
              Apostles began their worthy endeavor to bring Catholic Education
              to this special corner of the world. Our School is not a
              neighborhood school of convenience like most Schools, rather, it
              is a destination School that is pursued and valued. Maryland
              Comprehensive Secondary School has the desire to be a first-class
              institution of learning, equipped with ultra-modern facilities
              that enhance teaching and learning for purposeful living. Our team
              of experienced and passionate teachers is charged with the task of
              transferring knowledge and sharing ideas with the students both
              within and outside the classroom. Character formation is key to
              our understanding of education. Founded on authentic Christian
              principles, we are confident that any child who passes through the
              educational experience of our College would certainly have a
              reason to be grateful.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default History