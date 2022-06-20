import React from 'react';
import Pex from "../../../../assets/studentLife@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import AcaItems,{Tech} from './AcaItems';
import {Bounce } from 'react-reveal';
import styled from 'styled-components';
import {Rotate} from 'react-reveal';
import Violin from "../../../../assets/1632735791._DSC3088@2x.png";
import Library from "../../../../assets/1632735791._DSC3088rf@2x.png";
function Apply() {
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
                <CBreadcrumbItem active>How to Apply</CBreadcrumbItem>
            </CBreadcrumb>
            <AcaItems/>
        <Bounce bottom cascade>
            <Section >
                <div className="comments">
                    <div className="intro">
                        <small>ADMISSION </small>
                        <header>How to Apply</header>
                    </div>
                    
                </div>
                <div>
                <div className="wit2">
                    <Rotate top right cascade>
                        <div className="subject">
                            <div className="box-out">
                                    <img src={Violin} alt="violin" />
                                    <h4>Junior School</h4>
                            </div>
                            <div className="box-over">
                                    <img src={Library} alt="violin" />
                                    <h4>Senior School</h4>
                            </div>
                            <div className='cont-box'>
                                <h4>Now Accepting Applications</h4>
                                <p>
                                    At Mater Ecclesiae College, our leadership and staff’s unique way of seeing the world reflects our focus on the Life of the Mind: we aim to foster critical and independent thinking, deep intellectual curiosity, exploration, and a lifelong love of learning in everything we do. If you want to be part of a dynamic and robust learning community, we welcome you to consider joining us at Mater Ecclesiae College.
                                </p>
                            </div>
                        </div>
                    </Rotate>
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
                </div>
            </Section>
        </Bounce>
    </Bounce> 

    
    
    </>
  )
}

export default Apply



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


const Section = styled.section`
    width:85% ;
    margin:0 auto ;


    .wit2{
    flex: 1;
    height: 100%;

    .subject{
      display:grid;
      grid-template-columns:repeat(2, 1fr) ;
      gap:1.5rem;
      grid-template-rows: 30rem;
      margin-top:4rem ;
        .box-out{
            position:relative ;
            justify-content: center;
            display: flex;
            img{
            width:100% ;
            height:100% ;
            object-fit:cover ;
            border-radius:20px ;
            }
            h4{
                position:absolute ;
                bottom:10% ;
                text-align:center ;
                width: 80%;
                margin: 0 auto;
                background-color:#FFFFFF ;
                padding: 10px 20px ;
                font-family: monserat;

                }


        
            @media screen and (max-width: 960px) {
                &::after{
                content: '';
                background-color: transparent;
                border:0 ;
            }
            }
        }
      .box-over{
         position:relative ;
        justify-content: center;
        display: flex;
            img{
              width:100% ;
              height:100% ;
              object-fit:cover ;
              border-radius:20px ;

            }

            h4{
              position:absolute ;
              bottom:10% ;
              text-align:center ;
              width: 80%;
              margin: 0 auto;
              background-color:#FFFFFF ;
              padding: 10px 20px ;
              font-family: monserat;
              
            }
        &::before{
            content: '';
            width: 227px;
            height: 126px;
            background-color: #F2F5FF;
            border: 121px solid #F2F5FF;
            opacity: 1;
            z-index: -26;
            position: absolute;
            /* left: -20px; */
            top: -41px;
            right: 0;
          }
      }
      .cont-box{
          grid-column:1/3 ;
          margin-top:10rem ;

          h4{
              font-family:sinhala ;
              font-size:2rem ;
              color:#191919 ;
          }

          p{
              color:#191919 ;
              font-family:monserat ;
              font-size:19px ;
          }
      }
    }
}
`