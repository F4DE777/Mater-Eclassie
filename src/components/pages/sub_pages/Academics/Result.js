import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import AcaItems,{Tech}  from '../About/AboutItems';
import {Bounce } from 'react-reveal';
import styled from 'styled-components';

function Result() {
  return (
    <>
        <Bounce bottom cascade>
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
                    <AcaItems/>
                <section className="container">
                        <div className="comments">
                            <div className="intro">
                                <small>ADMISSION </small>
                                <header>Transfer</header>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem fuga laboriosam, quas dolore doloremque quasi obcaecati ipsum quis sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet ducimus in. Natus vel omnis perferendis at provident, quo necessitatibus minima et ea aspernatur, a, saepe iusto velit autem quod ipsam esse explicabo! Quis molestias saepe in quisquam atque? Fugit rerum voluptates beatae numquam dolore ipsa voluptas esse repellat. Natus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit blanditiis minus temporibus quaerat quam sunt sed, possimus nulla voluptatum ipsa nihil laboriosam quis exercitationem, quibusdam facere? Nihil dolor nesciunt aliquid quaerat optio consequuntur tempore numquam magni nisi reiciendis. Blanditiis, quidem tenetur est vero atque recusandae labore accusamus quo cum ratione odit ex at sunt natus quaerat iste, repellat incidunt dolor suscipit officiis consequatur distinctio. Veritatis totam accusantium facere dignissimos voluptatum.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non at, quasi pariatur nesciunt cum aliquid omnis itaque soluta ex impedit distinctio officia fugit, quos necessitatibus, doloribus deserunt vitae corrupti? Dolores dolorem adipisci earum neque eum doloremque dicta animi dolor sequi, eos, deleniti nam vitae sapiente odio ea eligendi praesentium magni exercitationem facilis molestias vel numquam quaerat? Veritatis doloribus excepturi repudiandae dolorum totam non ullam esse, expedita tempora modi nemo fugiat!</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quos sapiente. Iure unde voluptate corrupti aut nobis. Inventore porro delectus aspernatur quia nesciunt corporis dolorem debitis natus, minus repellat, necessitatibus atque nobis ipsam reiciendis fugit cumque obcaecati quasi consequatur saepe cupiditate. Praesentium minus repellendus maiores qui provident voluptas reprehenderit optio ipsa aut explicabo facilis at, consectetur, fuga totam quam sint, magnam quos laudantium voluptatem magni eos eligendi! Similique aliquam maxime dolores amet possimus neque deleniti velit cupiditate voluptatem? Nisi accusamus, optio ipsam aliquid recusandae doloribus aperiam, id voluptates exercitationem dolor est quis quaerat officia vero deserunt. Ipsum fugit possimus rerum?</p>
                            </div>
                        </div>

                <Techno>
                    {Tech.map((pt,ind) => {
                                  return(
                                      <div key={ind}>
                                          <span>
                                              <img src={pt.Svg} alt="holder" />
                                              <header>{pt.Head}</header>
                                          </span>
                                          <p>{pt.Text}</p>
                                      </div>

                                  )
                              })

                              }  

                </Techno>
                </section>
            
        
        </Bounce> 

    </>
  )
}

export default Result


const Techno = styled.div`
  display:grid ;
  grid-template-columns:repeat(3, 1fr) ;
  margin-top:10rem ;
  justify-content:center ;


  div{

    span{
        display:flex ;
        align-items:center ;
        gap:1rem;
        font-family:sinhala ;
        font-size:2rem ;
        color:#191919 ;
        img{
          height:3rem ;
          width:3rem ;
          object-fit:contain ;
        }
      }

      p{
        font-size:1.1rem ;
        font-family:monserat ;
      }
      &:last-child:nth-child(3n - 2) {
          grid-column-end: 3;
        }
  }
`
