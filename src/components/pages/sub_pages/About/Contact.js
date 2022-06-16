import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import Map from './Map';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom';

// import Circle from "../assets/Circle.svg";
import './Style.css'

function Contact() {
  return (
    <>
      <div></div>
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
        <CBreadcrumbItem active>Contact</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>About </small>
            <header>Contact </header>
          </div>
          <div className="create">
            
            <div>
              <h6 className="happy">We’re Happy To Hear From You</h6>
              <h6 className="happy1">
                  Mater Ecclesiae College
              </h6>
            </div>
            <div className="telecont flexy">
              <div>
                <h6>Telephone: </h6>
                <p>(+234) 0807 559 4742, 0704 507 7560</p>
              </div>
              <div>
                <h6>Address: </h6>
                <p>
                  Address: Old Isiwo Road, Igbodu Village, Epe <br /> Lagos State
                </p>
              </div>
              <div>
                <h6>Enquiries Email: </h6>
                <p> info@materecclesiaecollege.com <br />
                 Mon – Fri (8.00am – 5pm) <br /> Saturday – Sunday: Closed</p>
              </div>
            </div>


            <Map />
          </div>
        </div>
      </section>
      <div className="overlay-page"></div>
    </>
  );
}

export default Contact