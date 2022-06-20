import React from 'react'
import Pex from "../../../../assets/Rectangle2e.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import LearnItems from './LearnItems';
import {Bounce } from 'react-reveal';

function Eyfs() {
  return (
    <>
        <Bounce bottom cascade>
          <section >
            <div className="header-img">
              <img src={Pex} alt="Header" className="img-fluid" />
            </div>
          </section>
          <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
            <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
            <CBreadcrumbItem href="/learn/early-years">
              Learning
            </CBreadcrumbItem>
            <CBreadcrumbItem active>Senior School</CBreadcrumbItem>
          </CBreadcrumb>
          <LearnItems/>
          <section className="container">
            <div className="comments">
              <div className="intro">
                <small>Learning </small>
                <header>Senior School</header>
              </div>
            </div>

            
          </section>
          </Bounce>

    </>
  );
}

export default Eyfs