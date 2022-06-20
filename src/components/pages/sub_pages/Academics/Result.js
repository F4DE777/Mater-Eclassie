import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import AcaItems from './AcaItems';
import {Bounce } from 'react-reveal';

function Result() {
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
                        <CBreadcrumbItem active>Transfer</CBreadcrumbItem>
                    </CBreadcrumb>
                    <AcaItems/>
                <section className="container">
                        <div className="comments">
                            <div className="intro">
                                <small>ADMISSION </small>
                                <header>Transfer</header>
                            </div>
                            
                        </div>
                </section>
        
        </Bounce> 

    </>
  )
}

export default Result