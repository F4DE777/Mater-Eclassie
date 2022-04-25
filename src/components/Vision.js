import React from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
import Violin from "../assets/1632735791._DSC3088@2x.png";
import Interhouse from "../assets/fe@2x.png";
import Church from "../assets/1632735791._DSC3088eee@2x.png";

import "./Vision.css";


function Vision() {
  return (
    <>
    <div className='box-event'>
        <div className='box-event-cont'>
            <label htmlFor="">NEWS + EVENTS</label>
            <h4>Happenings at MCSS</h4>
            <p>Quiere la boca exhausta vid, kiwi, piña y
                 fugaz jamón. Fabio me exige, sin tapujos, que añada
                  cerveza al whisky.</p>
        </div>

    </div>

    <div className='vision-cont'>
      <Carousel itemsToShow={1}>
          <Item>
                <div  className="moreEvents">
                        <ul className='event-list'>
                            <li>
                                <img src={Violin} alt="" className='img-fluid' />
                                <button className='event-btn'>EVENT</button>
                            </li>
                            <li>
                                <img src={Interhouse} alt="" className='img-fluid' />
                                <button className='event-btn'>EVENT</button>

                            </li>
                            <li className='v-hide'>  
                                <img src={Church} alt="" className='img-fluid' />
                                <button className='event-btn'>EVENT</button>

                            </li>
                        </ul>
                </div>
                <div className="more-news1">
                      <button>More News + Events</button>
                </div>
          </Item>
          <Item>
                <div  className='yellow-stand moreEvents'>
                            <ul className='event-list'>
                                <li>
                                    <img src={Violin} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li>
                                    <img src={Interhouse} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li className='v-hide' >  
                                    <img src={Church} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                            </ul>
                    </div>
                <div className="more-news1">
                    <button>More News + Events</button>
                </div>
               
          </Item>
          <Item>
                    <div  className="moreEvents">
                            <ul className='event-list'>
                                <li>
                                    <img src={Violin} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li>
                                    <img src={Interhouse} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                                <li className='v-hide'>  
                                    <img src={Church} alt="" className='img-fluid' />
                                    <button className='event-btn'>EVENT</button>

                                </li>
                            </ul>
                    </div>
                    <div className="more-news1">
                        <button>More News + Events</button>
                    </div>
          </Item>
    
          
      </Carousel>
      </div>
    
    </>
  )
}

export default Vision