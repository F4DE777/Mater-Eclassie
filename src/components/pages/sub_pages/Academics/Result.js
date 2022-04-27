import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'

function Result() {
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
                <CBreadcrumbItem active>Transfer</CBreadcrumbItem>
            </CBreadcrumb>

        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>ADMISSION </small>
                        <header>Transfer</header>
                    </div>
                    <div className="create">
                        <p>                           
                             Admission Requirements
                        </p>
                        <p>
                        JSS 2 & SS 1 (TRANSFER) 
                        </p>
                        <p>
                             
                             Sale of Admission form for Jss2 and SS1 transfer usually starts April and it runs in batches. Sales of Entrance Forms (Point of Sales are usually: Maryland Convent Private School, Maryland; Catholic Church of Presentation G.R.A & School Bookshop). 
                        </p>
                        <h4>
                            SS 1 (RETURNING STUDENTS) 
                        </h4>
                        <p>
                             Returning Student here refers to old MCSS Students from JS 3 coming into SS 1
                        </p>
                        <p>
                            Payment of N2, 000.00 for Application into Senior School form via cash.
                        </p>
                    </div>
                </div>
            </section>
    
    
    </>
  )
}

export default Result