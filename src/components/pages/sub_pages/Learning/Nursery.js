import React from 'react'
import Pex from "../../../../assets/studentLife@2x.png";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Nursery() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>

      <section className="container">
          <div className="intro">
            <small>Learning </small>
            <header>Junior School</header>
          </div>

          
      </section>
    </>
  );
}

export default Nursery