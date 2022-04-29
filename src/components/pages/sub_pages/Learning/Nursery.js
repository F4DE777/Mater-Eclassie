import React from 'react'
import Pex from "../../../../assets/studentLife@2x.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Nursery() {
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
                        <small>Learning </small>
                        <header>Junior School</header>
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
                                            <Link  to={'/learn/early-years'}>
                                                Senior School
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  className="active"                                                                                                                                                                              to={'/learn/nursery'}>
                                              Junior school
                                            </Link>
                                        </li>
                                        
                                        
                                    </ul>
                    </div>
                    </div>
                </div>
            </section>
    
    </>                                                             
  )
}

export default Nursery