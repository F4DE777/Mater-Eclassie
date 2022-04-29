import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'

function AgeCons() {
  return (
    <>
    
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

        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>ADMISSION </small>
                        <header>School Fees</header>
                    </div>
                    <div className=" create">
                    <div className='sub-cover'>
                                    <ul className='sub-menu'>
                                        <li>
                                            <Link to={'/'}>
                                                Home
                                            </Link>
                                        </li>
                                        <li >
                                            <Link   to={'/academics/how_to_apply'}>
                                                How To Apply
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="active"  to={'/academics/school-fees'}>
                                                School Fees
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/academics/result_&_scholarships'}>
                                                Transfer
                                            </Link>
                                           
                                        </li>
                                        
                                    </ul>
                    </div>
                            <div>
                                <p>
                                    Maryland Comprehensive Secondary School is a co-educational Catholic School, and the fees are affordable in comparison with standard private schools. 
                                </p>
                                <p>
                                    PROCEDURES FOR ADMISSION – BOARDING HOUSE, JSS 1, JSS 2, SS 1.
                                </p>
                                <p>
                                    BOARDING HOUSE 
                                </p>
                                <p>
                                    Payment of N10,000.00 for Boarding House Application form into: 

                                </p>
                                <p>
                                    Fidelity Bank 
                                </p>
                                <p>
                                    Acc/No: 5080109077 
                                </p>
                                <p>
                                    Acc.Name: MCSS 
                                </p>
                                <p>
                                    Return of teller stating candidates name and class on the reverse side.
                                </p>
                            </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default AgeCons