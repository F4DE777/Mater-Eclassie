import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Bounce } from 'react-reveal';
import "./Vision.css";
import { Listed, Vision1 } from './Item';


function Vision() {
  return (
    <>
      <div className="box-event">
      <Bounce bottom cascade>
          <div className="box-event-cont">
            <label >NEWS + EVENTS</label>
            <h4>News and Updates</h4>
            <p> Stay in loop with our school events and activities  </p>
          </div>
        </Bounce>
      </div>

      <div className="vision-cont">
        <Carousel itemsToShow={1}>
          {Vision1.map(() => {
            return(
            <Item>
                  <ul className="event-list col-md-12 flexy">
                    {Listed.map((list, index)=> {
                      return(
                        <li key={index}>
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
                      )
                    })}
                  </ul>
                  <Link to="/News" className="more-news1">
                    See More
                  </Link>
            </Item>
            )
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Vision


const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 90%;
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
    grid-template-columns: repeat(3, auto);
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
  grid-template-columns: repeat(1,1fr);

}

`