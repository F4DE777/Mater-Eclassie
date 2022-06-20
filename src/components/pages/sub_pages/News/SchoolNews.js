import React from 'react';
import Pex from "../../../../assets/smile2.png";
import styled from 'styled-components';
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import "./News.css";
import {Bounce} from 'react-reveal';
import NewsItems, { Listed } from './NewsItems';
import { Link } from 'react-router-dom';

function SchoolNews() {
  return (
    <>
        <div>
          <div className="header-img">
            <img src={Pex} alt="Header" className="img-fluid" />
          </div>
        </div>
          <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
              <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
              <CBreadcrumbItem active>News & Events</CBreadcrumbItem>
          </CBreadcrumb>
        <NewsItems/>
      <Section>
        <div className='heading'>
            <small>HOME </small>
            <header>News & Events</header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem error labore vero minima assumenda, pariatur similique consequuntur nemo cum harum.</p>
        </div>
        
          <Item>
              <ul className="event-list col-md-12 flexy" >
                {Listed.map((list, index)=> {
                  return(
                    <Bounce bottom cascade > 
                        <li key={index} >
                            <img src={list.Holder} alt=""  />
                            <Link to={'/'}  className='event'>EVENT</Link>
                            <button>
                                <span>
                                  <p>CULTURAL DAY</p>
                                  <label >02/04/2020</label>
                                  </span>
                                  <Link to={'/'}>Read More</Link>
                              </button>
                          </li>
                      </Bounce>
                    )
                  })}
              </ul>
          </Item>
      </Section>
    </>
  );
}

export default SchoolNews

const Section = styled.section`
    width:85% ;
    margin:0 auto ;

    .heading{
      margin: 3rem 0 ;
      small{
        color:#042482 ;
        font-family:monserat ;
        font-size:19px ;
        font-weight:600 ;
      }

      header{
        color:#191919 ;
        font-size:3rem ;
        font-family:sinhala ;
      }
    }

`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  margin: 15px;
  position:relative ;
  .more-news1{
    position:relative ;
    margin:0 auto ;
    border: 1px solid #042482 ;
    padding:10px 20px  ;
    border-radius:50px ;
    font-size:18px ;
    color:#042482 ;
    margin-top:2rem;

    &:hover{
      background-color:#042482 ;
      color:#fff ;
    }
  }

  .event-list{
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    padding: 0;

    li{
      height: 24rem;
      position: relative;
      display:flex ;
      justify-content:center ;
      img{
        width:100% ;
        height:100% ;
        object-fit:cover ;
        border-radius:20px ;

      }

      .event{
        width: 91px;
        height: 46px;
        background-color: #fff;
        color: #00022c;
        border: 0;
        position: absolute;
        left: 15px;
        top: 15px;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        text-decoration: none;
        border-radius: 7px;
      }

      button{
        display:flex ;
        position:absolute ;
        bottom:20px ;
        width:90% ;
        margin:0 auto ;
        justify-content:space-between ;
        background-color:#fff ;
        border:0 ;
        border-radius:10px ;
        padding:10px ;
          span{
            text-align:left ;
            p{
              margin:0 ;
              font-family: Sinhala;
              font-size:25px ;
              line-height:20px ;

            }
            label{
              padding:0 ;
              font-weight:100 ;
              font-size:16px ;

              &::after{
                content:'' ;
              }
            }
          }
        a{
          position:absolute ;
          right:2% ;
          margin:0 ;
          bottom:0 ;
          color:#191919 ;
          font-size:16px ;
        }
      }
    }
    @media screen and (max-width: 960px) {
      grid-template-columns: repeat(1,1fr);

    }
}
@media screen and (max-width: 960px) {
  grid-template-columns: repeat(2,1fr);

}

`