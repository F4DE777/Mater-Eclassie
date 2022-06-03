import React from 'react';
import { Link } from 'react-router-dom';
import Teacher from "../../../../assets/sister10@2x.png";
import Pex from "../../../../assets/Group10121@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import './Style.css'

function PrincipalsDesk() {
  return (
    <>
        <div className="page-trans">
                <section >
                    <div className="header-img " >
                        <img src={Pex} alt="Header" className="img-fluid" />
                    </div>
                </section>
                <CBreadcrumb style={{"--cui-breadcrumb-divider": "'>'"}}>
                    <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
                    <CBreadcrumbItem href="/about/administrators-message">About</CBreadcrumbItem>
                    <CBreadcrumbItem active>Administrator’s Message</CBreadcrumbItem>
                </CBreadcrumb>

                <section className="container">
                    <div className="comments">
                        <div className="intro">
                            <small>About </small>
                            <header>Administrator’s Message</header>
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
                                            <Link className="active" to={'/about/administrators-message'}>
                                                Administrator’s Message
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about/proprietors-message'}>
                                                Proprietor’s Message
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about/history'}>
                                                History Of The School
                                            </Link>
                                           
                                        </li>
                                        <li>
                                            <Link to={'contact-us'}>
                                                Contact Us
                                            </Link>
                                            
                                        </li>
                                    </ul>
                                </div>
                                <img src={Teacher} alt="" className='principals-img' />
                                 <p>
                                I welcome you all to this noble institution, Maryland Comprehensive Secondary School and I congratulate your beloved parents/guardian on your admission to this school. I must say that it is a great privilege to be in this great school that has and will continue to provide highly esteemed and holistic, qualitative education to many people holding key posts in various works of life in and outside our country. You have come therefore to be part of MCSS family and to show the stuff you are made of, in contributing to the good and golden legacy that the school has made in world history.
                                </p>
                                
                                <p>
                                I encourage you to be open to the information you will receive 
                                from the school. Be prepared to participate actively in various
                                 school programmes:- academic, spiritual, social and morally geared
                                  towards giving you holistic formation. In order to achieve your aim
                                   and the purpose for which you are here, your sincere contribution 
                                   and co-operation is highly needed. You must makeup your mind to 
                                   work hard from day one; you are also encouraged not to hide your
                                    talent, because talent shared is talent regained. Be a dignified 
                                    personage not only in character but also in thoughts, words and 
                                    actions. Believe in your dreams and work towards achieving your aim
                                     and purpose for which you are here for. Dear parents, we encourage
                                      you to once again on the admission of your child/ward to this noble
                                       institution, thank you for entrusting them to our care. We are all 
                                       entrusted to God’s care in return. We want to assure of our commitment
                                        to work diligently in ensuring the physical, social, emotional and 
                                        intellectual growth of each child that is entrusted to us here in MCSS.
                                </p>
                                <p>
                                Here in MCSS we believe in varying the teaching methods, adapting the curriculum to suit individual student’s needs and providing challenge that will help develop knowledge, self esteem, independent thinking, and community awareness. As a Catholic Secondary School which places emphasis on traditional Christian values, we also endeavour to educate our students to become responsible citizens. We emphasize cooperation and concern for others and respect for individual and cultural differences. Furthermore we promote a comfortable atmosphere where home and school may work together to support student’s success. Back to you my dear children; be optimistic that you can join the team of achievers that both Nigeria and the world have ever received; it may not be easy, but it is possible. As you have come to be part of MCSS family, try to be good Ambassadors of this great citadel of learning obey the school rules and regulations, be punctual, attentive
                                 and open. Once again you are highly welcome and remain blessed.
                                </p>
                        </div> 
                        <div className='rev'>
                            <h4>REV. SR. AGNES ADEPOJU, OLA </h4>
                            <h4>ADMINISTRATOR</h4>
                        </div>
                    </div>
                </section>
 
        </div>
            
    </>
  )
}

export default PrincipalsDesk