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
       
        </div>
      </section>
    </>
  );
}

export default History