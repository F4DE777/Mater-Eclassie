import React from 'react'
import Pex from "../../../../assets/Rectangle2e.png";

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Eyfs() {
  return (
    <>
      <section >
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>Learning </small>
            <header>Senior School</header>
          </div>
        </div>

        
      </section>
    </>
  );
}

export default Eyfs