import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Apply() {
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
                <CBreadcrumbItem active>How to Apply</CBreadcrumbItem>
            </CBreadcrumb>

        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>ADMISSION </small>
                        <header>How to Apply</header>
                    </div>
                    <div className="create">
                    <div className='sub-cover'>
                                    <ul className='sub-menu'>
                                        <li>
                                            <Link to={'/'}>
                                                Home
                                            </Link>
                                        </li>
                                        <li >
                                            <Link  className="active"  to={'/academics/how_to_apply'}>
                                                How To Apply
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  to={'/academics/school-fees'}>
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
                        <div className='sale'>
                            <p>
                                Sale of Admission form into Jss1 usually starts in November (the year preceding the admission year) examination date is around February /March.
                            </p>
                            <p>  
                                To register your Child/Ward in Maryland Comprehensive Secondary School, you are required to:
                            </p>
                            <h4>
                            Obtain an Entrance Examination form for ₦5,000 from the following point of sale school Bookshop.Maryland Convent Private School, Maryland
                            </h4>
                            <p>
                                Leo’s Private School, Ikeja Catholic Church of the Presentation, GRA, Ikeja.

                            </p>
                            <h4>
                                And from the School Website using the Admission link. Fill the sections in the form appropriately and affix a passport photograph each on the required portions of the form. 

                            </h4>
                            <p>
                            Ensure that the “RECOMMENDATION BY HEADTEACHER” section is duly signed and stamped by the Head Teacher. 
                            </p>
                            <h4>
                                Return the form to the School or Collection Centre on/ before the last week of the examination date. Examination venues for Candidates who have chosen Maryland Comprehensive Secondary School as the School of choice will sit for their Entrance Examination in the School. 

                            </h4>
                            <p>
                                 Candidates must report at the venue of the Examination date before 7:30am. Punctuality is important.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
    
    
    
    
    </>
  )
}

export default Apply