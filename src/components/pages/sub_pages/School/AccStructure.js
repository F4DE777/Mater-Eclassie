import React from 'react'
import Pex from "../../../../assets/building@2x.png";

function AccStructure() {
  return (
    <>
        <section>
            <div className="header-img">
                <img src={Pex} alt="Header" className="img-fluid" />
            </div>
        </section>


        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>ACADEMICS </small>
                        <header>Age Consideration</header>
                    </div>
                    
                </div>
            </section>
    </>
  )
}

export default AccStructure