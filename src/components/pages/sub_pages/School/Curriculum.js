import React from 'react'
import Pex from "../../../../assets/studentLife.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import SchoolItems from './SchoolItems';
import styled from 'styled-components';

function Curriculum() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
          <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
          <CBreadcrumbItem active>Student Life</CBreadcrumbItem>
      </CBreadcrumb>
      <SchoolItems/>
      <Section>
        <div className="commen">
          <div className="intro">
            <small>HOME </small>
            <header>Student Life</header>
          </div>
          <div className='passion'>
            <h5>We are passionate about giving you more</h5>
            <p>
              At Mater Ecclesiae College we provide state of the art facilities for your wards in order to promote good academic standards ,staff & students’ comfort and safety as well as general well being at all times
            </p>
            <div className='hostels'>
                <div className='right-img'>
                  <div>
                    <h3>Condusive Hostels</h3>
                    <p>Our new campus hostels , designed by world-renowned architect provide myriad advantages for our learning community.</p>
                  </div>
                  <div>
                      <img src={Pex} alt="sfd" />
                  </div>
                </div>
                <div className='left-img'>
                  <div>
                    <h3>Library</h3>
                    <p>We pride ourselves on offering a well-balanced education with opportunities for students to excel in many different areas. Academics are of course a priority for our students, and their hard work and talents are demonstrated through a variety of assessments, including external examinations.Thanks to our echelons of library resources online and offline.</p>
                  </div>
                  <div>
                      <img src={Pex} alt="sfd" />
                  </div>
                </div>
                <div className='right-img-fix'>
                  <div>
                  <img src={Pex} alt="sfd" />
                    
                  </div>
                  <div>
                    <h3>Sports Activities</h3>
                    <p>Learning is a developmental process that changes our thinking and behaviours, enabling us to acquire skills, knowledge and attitudes while providing a catalyst for creativity, critical thinking and independent reasoning.</p>
                  </div>
                </div>
                <div className='left-img-fix'>
                  <div>
                      <img src={Pex} alt="sfd" />
                  </div>
                  <div>
                    <h3>Laboratories</h3>
                    <p>Learning through inquiry extends the development of students. Our students get the best practical knowledge as their conterparts around the world.</p>
                  </div>
                  
                </div>
                <div className='right-img'>
                  <div>
                    <h3>Extra-curricular Activités</h3>
                    <p>Every day in Mater Ecclesiae College is special. Our inspiring nutrition concept, signature programmes, and extensive range of extra-curricular activities round out a holistic BIS education.</p>
                  </div>
                  <div>
                      <img src={Pex} alt="sfd" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Section>
      
    </>
  );
}

export default Curriculum


const Section = styled.div`
  width:85% ;
  margin:0 auto ;

  .commen{
      .intro{  }

      .passion{
          h5{
            font-family:sinhala ;
            font-size:35px ;
            color:#191919 ;
          }

          p{
            font-family:monserat ;
            font-size:20px ;
            color:#191919 ;
          }

          .hostels{

            .right-img{
              display:grid ;
              grid-template-columns:repeat(2, 1fr) ;
              justify-content:center ;
              align-items:center ;
              margin-top:5rem;
              gap:3rem;

              div{
                height:20rem ;
                display:flex ;
                flex-direction:column ;
                text-align:left ;
                text-align: left;
                justify-content: center;
                align-items: baseline;
                position:relative ;
                h3{
                  font-family:sinhala ;
                  color:#191919 ;
                  font-size:35px ;
                }

                p{
                  font-family:monserat ;
                  font-size:19px ;
                }
                img{
                  width:80% ;
                  height:100%;
                  object-fit:cover ;

                  
                }

                &:last-child{
                  &::after{
                    content:'' ;
                    position:absolute ;
                    background-color:#F2F5FF ;
                    height:130% ;
                    width:80% ;
                    display:flex ;
                    right:0 ;
                    z-index:-10 ;

                  }
                }

                &:first-child{
                  padding: 0 3rem 0 7rem;

                }
                
              }
            }

            .left-img{
              display:grid ;
              grid-template-columns:repeat(2, 1fr) ;
              justify-content:center ;
              align-items:center ;
              margin-top:10rem;
              gap:3rem;

              div{
                height:20rem ;
                display:flex ;
                flex-direction:column ;
                text-align:left ;
                text-align: left;
                justify-content: center;
                align-items: baseline;
                position:relative ;
                h3{
                  font-family:sinhala ;
                  color:#191919 ;
                  font-size:35px ;
                }

                p{
                  font-family:monserat ;
                  font-size:19px ;
                }
                img{
                  width:80% ;
                  height:100%;
                  object-fit:cover ;

                  
                }

                /* &:last-child{
                  &::after{
                    content:'' ;
                    position:absolute ;
                    background-color:#F2F5FF ;
                    height:130% ;
                    width:80% ;
                    display:flex ;
                    right:0 ;
                    z-index:-10 ;

                  }
                } */

                &:first-child{
                  background-color:#F2F5FF ;
                  padding: 0 3rem 0 7rem;
                }
                
              }
            }
            .right-img-fix{
              display:grid ;
              grid-template-columns:repeat(2, 1fr) ;
              justify-content:center ;
              align-items:center ;
              margin-top:5rem;
              gap:3rem;

              div{
                height:20rem ;
                display:flex ;
                flex-direction:column ;
                text-align:left ;
                text-align: left;
                justify-content: center;
                align-items: baseline;
                position:relative ;
                h3{
                  font-family:sinhala ;
                  color:#191919 ;
                  font-size:35px ;
                }

                p{
                  font-family:monserat ;
                  font-size:19px ;
                }
                img{
                  width:100% ;
                  height:100%;
                  object-fit:cover ;

                  
                }

                &:first-child{
                  &::after{
                    content:'' ;
                    position:absolute ;
                    background-color:#F2F5FF ;
                    height:130% ;
                    width:80% ;
                    display:flex ;
                    left:0 ;
                    z-index:-10 ;

                  }
                }

                &:first-child{
                  padding: 0 3rem 0 7rem;

                }
                
              }
            }

            .left-img-fix{
              display:grid ;
              grid-template-columns:repeat(2, 1fr) ;
              justify-content:center ;
              align-items:center ;
              margin-top:10rem;
              gap:3rem;

              div{
                height:20rem ;
                display:flex ;
                flex-direction:column ;
                text-align:left ;
                text-align: left;
                justify-content: center;
                /* align-items: baseline; */
                position:relative ;
                h3{
                  font-family:sinhala ;
                  color:#191919 ;
                  font-size:35px ;
                }

                p{
                  font-family:monserat ;
                  font-size:19px ;
                }
                img{
                  width:100% ;
                  height:100%;
                  object-fit:cover ;

                  
                }

                /* &:last-child{
                  &::after{
                    content:'' ;
                    position:absolute ;
                    background-color:#F2F5FF ;
                    height:130% ;
                    width:80% ;
                    display:flex ;
                    right:0 ;
                    z-index:-10 ;

                  }
                } */

                &:last-child{
                  background-color:#F2F5FF ;
                  padding-left: 20px;
                }
                
              }
            }

          }
      }
  }

`