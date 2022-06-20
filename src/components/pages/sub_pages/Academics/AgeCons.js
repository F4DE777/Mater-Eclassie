import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import {Bounce } from 'react-reveal';
import AcaItems from './AcaItems';

function AgeCons() {
  return (
    <>
    <Bounce bottom cascade>

        <section>
            <div className="header-img">
                <img src={Pex} alt="Header" className="img-fluid" />
            </div>
        </section>
            <CBreadcrumb style={{"--cui-breadcrumb-divider": "'>'"}}>
                <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
                <CBreadcrumbItem href="/academics/how_to_apply">Admission</CBreadcrumbItem>
                <CBreadcrumbItem active>School Fees</CBreadcrumbItem>
            </CBreadcrumb>
            <AcaItems/>
            <Bounce bottom cascade>
                <section className="container">
                        <div className="comments">
                            <div className="intro">
                                <small>ADMISSION </small>
                                <header>School Fees</header>
                        </div>
                        
                    </div>
                </section>
            </Bounce> 
    </Bounce> 

    </>
  )
}

export default AgeCons