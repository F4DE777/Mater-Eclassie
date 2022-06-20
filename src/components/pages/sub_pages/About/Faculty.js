import React from 'react';
import Pex from "../../../../assets/History@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import AboutItems, { Staff } from './AboutItems';
import styled from 'styled-components';
import {Bounce } from 'react-reveal';

export default function Faculty() {
  return (
    <div>
        <Bounce bottom cascade>
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
                    <CBreadcrumbItem active>Faculty & Staff Directory</CBreadcrumbItem>
            </CBreadcrumb>
            <AboutItems/>
            <Section>
                    <div className="intro">
                    <small>About </small>
                    <header>Faculty & Staff Directory</header>
                    </div>
                        <div className='images'>
                            <Bounce bottom cascade>
                                {Staff.map(( st, ind) =>{
                                    return(
                                        <div key={ind}>
                                            <img src={st.Holder} alt="staff photo" />
                                            <h4>{st.Name}</h4>
                                            <label>{st.Tag}</label>
                                        </div>
                                    )
                                })

                                }
                            </Bounce>
                        </div>
            </Section>
        </Bounce>
    </div>
  )
}


const Section = styled.section`
        width:80% ;
        margin:0 auto ;

        .images{
            display:grid ;
            grid-template-columns:repeat(4, 1fr) ;
            gap:1rem;
            border-top: 1px solid #042482;
            margin-top:5rem;
            padding-top:5rem;

            div{

                img{
                    width:100% ;
                    height:414px ;
                    border-radius:30px;
                    object-fit:cover ;
                }

                h4{
                    font-family:Sinhala;
                    font-size:2rem;
                }

                label{
                    font-family:monserat;
                    font-size:1rem;
                    padding:0 ;
                    font-weight:100;
                }
            }
        }

`