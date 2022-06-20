import React from 'react';
// import { Link } from 'react-router-dom';
import Teacher from "../../../../assets/sister10@2x.png";
import Pex from "../../../../assets/Group10121@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import './Style.css'
import styled from 'styled-components';
import AboutItems, { Parts } from './AboutItems';
import {Bounce } from 'react-reveal';

function PrincipalsDesk() {
  return (
    <>
          <Bounce bottom cascade>

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
                <AboutItems/>
                <Bounce bottom cascade>
                        <section className="container">
                            <div className="comments">
                                <div className="intro">
                                    <small>About </small>
                                    <header>Administrator’s Message</header>
                                </div>
                                <div className="create">
                                        
                                        <img src={Teacher} alt="" className='principals-img' />
                                        <p>
                                        </p>
                                        
                                        <p>
                                            Welcome to Mater Ecclesiae College, a co-educational home for learning and culture. 
                                        </p>
                                        <p>
                                            The the burning desire of the catholic community of the Church of the Assumption, Falomo to offer a world-class institution of learning as well as contribute to the educational sector of the nation gave birth to this noble College project. In line with the desire of the universal church for catholic education, our College develops the spiritual, intellectual, moral and socio-cultural dimensions of her students. 
                                        </p>
                                        <p>
                                            With an understanding of today and a look at tomorrow, we prepare students for purposeful living in whatever society they find themselves. 
                                        </p>
                                        <p>
                                            Mater Ecclesiae students crave for excellence. Filled with dedication and commitment, the programme of studies fosters a steady understanding of self and the world. With a team of dedicated staff, we journey along with all our students to make them the best of themselves. 
                                            Life-long skills are incorporated into the learning experience to explore and enhance the creative skills and abilities of our students. 
                                        </p>
                                        <p>
                                                Mater Ecclesiae College has the desire to be a first-class institution of learning, equipped with ultra-modern facilities that enhance teaching and learning for purposeful living in a serene and quiet environment.
                                        </p>
                                        <p>
                                            Respect for the human person and appreciation of the uniqueness of the male and female genders is fostered in our students. 
                                        </p>
                                        <p>
                                            In an atmosphere of complementarity, our young boys and girls work together and offer their special abilities and potentials for the common good. The dignity of every human person regardless of gender is of utmost concern in our College.
                                        </p>
                                        <p>
                                            Trusting in the unfailing intercession of the Blessed Virgin Mary – the Mother of the Church – we are confident of God’s unfailing help as we strive to reach the heights in all we do.
                                        </p>
                                        <p>
                                            Imagine yourself at Mater Ecclesiae College. It is a tranquil place. 
                                        </p>
                                        <p>
                                        Peace and God bless.

                                        </p>
                                </div> 
                                <div className='rev'>
                                    <h4>REV. FR. JOHN NJORTEAH</h4>
                                    <h4>ADMINISTRATOR</h4>
                                </div>
                            </div>
                        </section>
                </Bounce>
                <Bounce bottom cascade>
                        <Part>
                            {Parts.map((pt,ind) => {
                                return(
                                    <div key={ind}>
                                        <img src={pt.Holder} alt="holder" />
                                        <header>{pt.Header}</header>
                                        <p>{pt.Text}</p>
                                    </div>

                                )
                            })

                            }           
                        </Part>
                </Bounce>
        </div>
           </Bounce> 
    </>
  )
}

export default PrincipalsDesk

const Part = styled.div`
    width:90% ;
    margin:10rem auto 0 auto;
    display:grid ;
    grid-template-columns:repeat(3, 1fr) ;
    gap:3rem;
div{
    img{
        width:100% ;
        height:20rem ;
        object-fit:cover ;
    }

    header{
        font-size:2.5rem ;
        font-family:sinhala ;
        margin:20px 0 ;
    }

    p{
        font-size:1.3rem ;
        font-family:monserat ;
    }
}
`