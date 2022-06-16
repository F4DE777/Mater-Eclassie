import React from 'react';
import Pex from "../../../../assets/smile2.png";


// import Circle from "../../../assets/circle2.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import "./News.css";
// import Circle from "../../assets/Circle.svg";


function SchoolNews() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>

        <CBreadcrumbItem active>News & Events</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>HOME </small>
            <header>News & Events</header>
            {/* <img className="circle img-fluid " src={Circle} alt="" /> */}
          </div>

        </div>
      </section>
    </>
  );
}

export default SchoolNews