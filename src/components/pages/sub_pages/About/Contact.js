import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import Map from './Map';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import styled from 'styled-components';

// import Circle from "../assets/Circle.svg";
import './Style.css'
import AboutItems, {  Tech } from './AboutItems';

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
      <AboutItems/>

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
            <Techno>
               {Tech.map((pt,ind) => {
                            return(
                                <div key={ind}>
                                    <span>
                                        <img src={pt.Svg} alt="holder" />
                                        <header>{pt.Head}</header>
                                    </span>
                                    <p>{pt.Text}</p>
                                </div>

                            )
                        })

                        }  

            </Techno>
          </div>
        </div>
      </section>
      <div className="overlay-page"></div>
    </>
  );
}

export default Contact


const Techno = styled.div`
  display:grid ;
  grid-template-columns:repeat(3, 1fr) ;
  margin-top:10rem ;
  justify-content:center ;


  div{

    span{
        display:flex ;
        align-items:center ;
        gap:1rem;
        font-family:sinhala ;
        font-size:2rem ;
        color:#191919 ;
        img{
          height:3rem ;
          width:3rem ;
          object-fit:contain ;
        }
      }

      p{
        font-size:1.1rem ;
        font-family:monserat ;
      }
      &:last-child:nth-child(3n - 2) {
          grid-column-end: 3;
        }
  }
`