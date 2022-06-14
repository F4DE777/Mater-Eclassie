import React from 'react';
import Carousel from 'react-elastic-carousel'
import Violin from "../assets/1632735791._DSC3088@2x.png";
import Interhouse from "../assets/fe@2x.png";
import Church from "../assets/1632735791._DSC3088eee@2x.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./Vision.css";
import { Listed, Vision1 } from './Item';


function Vision() {
  return (
    <>
      <div className="box-event">
        <div className="box-event-cont">
          <label htmlFor="">NEWS + EVENTS</label>
          <h4>News and Updates</h4>
          <p> Stay in loop with our school events and activities  </p>

          
        </div>
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
                            <Link to={'/'} >EVENT</Link>
                        </li>
                      )
                    })}
                    
                    {/* <li>
                      <img src={Interhouse} alt="" className="img-fluid" />
                      <button className="event-btn">EVENT</button>
                    </li>
                    <li className="v-hide ">
                      <img src={Church} alt="" className="img-fluid" />
                      <button className="event-btn">EVENT</button>
                    </li> */}
                  </ul>
                  <Link to="/News" className="more-news1">
                    <button>More News + Events</button>
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


  .event-list{
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    padding: 0;

    li{
      height: 24rem;
      position: relative;

      img{
        width:100% ;
        height:100% ;
        object-fit:cover ;
      }

      a{
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
    }
}
`