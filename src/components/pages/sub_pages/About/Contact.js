import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import Map from './Map';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'

import './Style.css'

function Contact() {
  return (
    <>
    <div>
        
    </div>
        <section>
            <div className="header-img">
                <img src={Pex} alt="Header" className="img-fluid" />
            </div>
        </section>
            <CBreadcrumb style={{"--cui-breadcrumb-divider": "'>'"}}>
                <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
                <CBreadcrumbItem href="/about/administrators-message">About</CBreadcrumbItem>
                <CBreadcrumbItem active>Contact</CBreadcrumbItem>
            </CBreadcrumb>

        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>ADMISSION </small>
                        <header>Contact </header>
                    </div>
                    <div className="create">
                        <div>
                            <h6 className='happy'>
                                We’re Happy To Hear From You
                            </h6>
                            <h6 className='happy1'>
                                    Maryland Comprehensive Secondary School
                            </h6>
                        </div>
                        <div className='telecont'>
                            <div >
                                <h6>Telephone: </h6>
                                <p>(+234) 802 323 0290</p>
                            </div>
                            <div>
                                <h6>Address: </h6>
                                <p> Mission Compound, Maryland, <br /> Ikeja, Lagos State, Nigeria.</p>
                            </div>
                            <div>
                                <h6>Enquiries Email: </h6>
                                <p> info@mcssmaryland.org</p>
                            </div>

                        </div>
                       <Map/>
                    </div>
                </div>
            </section>
            <div className ="overlay-page"></div> 

    </>
  )
}

export default Contact