import React from 'react';
import Pex from "../../../../assets/History@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import styled from 'styled-components';

import './Style.css';
import AboutItems, { Parts, Tech } from './AboutItems';


function History() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/about/administrators-message">
          About
        </CBreadcrumbItem>
        <CBreadcrumbItem active>History of the School</CBreadcrumbItem>
      </CBreadcrumb>
      <AboutItems/>

      <Section>
            <div className="intro">
              <small>About </small>
              <header>History of the School</header>
            </div>
            <div>
                <p>
                    Mater Ecclesiae College is situated at Old Isiwo Road, Igbodu Village off Molajoye Secondary School Road, Epe, Lagos State. The Church of the Assumption, Falomo acquired and fenced the 40 acres school land and built the school to contribute to the educational sector in Lagos State. It has been the desire of the parish community to respond to the need for sound moral cum academic upbringing in the younger members of society in order to better equip them for the challenges of life in today’s society. We cannot afford to have young leaders without a passion to make a positive difference in society. The pioneer students resumed on the 13th of September, 2015 with 25 students and to the glory of God, there has been a steady increase in the number of students admitted to the College, well above a hundred within a short space of time. The pioneer set of students sat for the 2018 Basic Education Certificate Examinations organized by the national and state boards and all recorded impressive results, with distinctions and credits – the fruit of their hard work and dedication. On the 9th of October, 2021 we graduated our pioneer students – Our First Fruits. To the glory of God we have received great testimonies on their progress. The 26 of them are Soaring high in their different institutions and endeavours. 
                </p>
                <p>
                      Mater Ecclesiae College has the desire to be a first class institution of learning, equipped with ultra- modern facilities that enhance teaching and learning for purposeful living. Our team of experienced and passionate teachers is charged with the task of transferring knowledge and sharing ideas with the students both within and outside the classroom. Character formation is key to our understanding of education. Founded on authentic Christian principles, we are confident that any child who passes through the educational experience of our College would certainly have a reason to be grateful.
                </p>
            </div>

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

      </Section>
    </>
  );
}

export default History


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
  width:80% ;
  margin:0 auto ;

`

const Part = styled.div`
    width:100% ;
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