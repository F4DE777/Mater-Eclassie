import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Rectangle-2@2x.png";
import Des from "../assets/Rectangle-22@2x.png";
import Hard from "../assets/Rectangle-2e@2x.png";
import Pex from "../assets/Rectangle-2s@2x.png";
import Photos1 from "../assets/Rectangle18.png";
import Kid from "../assets/dockid.png";
import Photos2 from "../assets/Rectangle39@2x.png";
import Photos3 from "../assets/Rectangle43.png";
import PhotNur from "../assets/Rectangle40.png";
import Assem from "../assets/Rectangle44.png";
import Para from "../assets/Rectangle70.png";
import Team from "../assets/Rectangle177.png";
import Robo from "../assets/Rectangle8493.png";
import Photos4 from "../assets/Rectangle37.png";
import Photos5 from "../assets/Rectangle45.png";
import Photos6 from "../assets/Rectangle8453@2x.png";
import Photos7 from "../assets/Rectangle177@2x.png";
import Photos8 from "../assets/Rectangle444.png";
import Photo1 from "../assets/Rectangle44@2x.png";
import Teacher from "../MaryLand/1632735791._DSC3088.png";
import { Link } from "react-router-dom";
import Phyz from "../assets/Rectangle8453@2x.png"
import Prayer from "../assets/Rectangle8454@2x.png"
import House from "../assets/Rectangle466@2x.png"
import Cart from "./Carousel"
import Vision from "./Vision";
import "./HeroSection.css";

function HeroSection() {


  return (
    <>
    <div className="page-trans ">
        <div>
          <Carousel fade >
            <Carousel.Item>
              <img className="imgCaro d-block w-100 img-fluid " src={scholar} alt="Scholar" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="imgCaro  d-block w-100 img-fluid " src={Des} alt="Student" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="imgCaro d-block w-100 img-fluid " src={Hard} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="imgCaro d-block w-100 img-fluid " src={Pex} alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
          <div className="believe">
              <h4>Believe.</h4>
              <h4>Inspire.</h4>
              <h4>Succeed.</h4>
          </div>
          <div className="hooked-cov">
            <div className="hooked">
                <div className="search-fixed"> <Link>Search</Link> </div>
                <div className="enquire-fixed"><Link>Enquire</Link></div>
                <div className="apply-fixed"><Link>Apply</Link></div>
                <div className="visit-fixed"><Link>Visit</Link></div>
            </div>
          </div>

          <div className="intro-container">
            <div className="intro-cover">
              <div className="welcome-note">
                <span className="tip-block"></span>
                <label htmlFor="#">GREETINGS</label>
                <h3>
                  Welcome to MCSS
                </h3>
                <div  className="mt-3">
                    <p>I welcome you all to this noble institution, Maryland Comprehensive Secondary School and I congratulate your beloved parents/guardian on your admission to this school.</p>
                    <p>
                        I must say that it is a great privilege to be in this great school that has and will continue to provide highly esteemed and holistic, qualitative education to many people holding key posts in various works of life in and outside our country. You have come therefore to be part of MCSS family and to show the stuff you are made of, in contributing to the good and golden legacy that the school has made in world history.
                    </p>
                    <p>Once again you are welcome.</p>
                </div>
                <div className="mt-5">
                  <button to={"/"} className="read">
                    Read More
                  </button>
                </div>
                <span className="green-line"></span>
              </div>
              <div className="welcome-img">
                <img className="head-teacher-img " src={Teacher} alt="" />
              </div>
            </div>
          </div>
          

          <div className="discover">
            <div className="discover-cover">
              <div className="disc-head">
                <h1>Discover Our Divisions</h1>
                <hr />
              </div>
              <div className="container-xl mt-5">
                <div className="row mt-5">
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <div>
                      <div className="disc-img" style={{ backgroundImage: `url(${Photos1})` }}  >
                        <div className="overlay">
                          <img className="eyfs" src={Kid} alt="" />
                        </div>
                      </div>
                      <div className="disc-body">
                        <h4> EYFS </h4>
                        <p>
                          Our crèche is home away from home where babies play and
                          rest. We have a wide range of age-appropriate toys
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <div>
                      <div  className="disc-img" style={{ backgroundImage: `url(${Photos2})` }} >
                          <div className="overlay">
                            <img className="eyfs" src={PhotNur} alt="" />
                          </div>
                      </div>
                      
                      <div className="disc-body">
                        <h4> Nursery </h4>
                        <p>
                          We offer early childhood education to children usually
                          between the age of 2 and 5. In Nursery, children are
                          involved in physical activities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <div>
                      <div  className="disc-img" style={{ backgroundImage: `url(${Assem})` }} >
                          <div className="overlay">
                            <img className="eyfs" src={Photos3} alt="" />
                          </div>
                      </div>
                      <div className="disc-body">
                        <h4> Primary School </h4>
                        <p>
                          Primary education is an important stage in a child’s
                          education. Our primary section supports your child’s
                          continuity of learning development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <div>
                      <div  className="disc-img" style={{ backgroundImage: `url(${Photos4})` }} >
                          <div className="overlay">
                            <img className="eyfs" src={Para} alt="" />
                          </div>
                      </div>
                      <div className="disc-body">
                        <h4> Junior School </h4>
                        <p>
                          The environment is friendly and extremely conducive for
                          learning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <div>
                      <div  className="disc-img" style={{ backgroundImage: `url(${Photos5})` }} >
                          <div className="overlay">
                            <img className="eyfs" src={Team} alt="" />
                          </div>
                      </div>
                      <div className="disc-body">
                        <h4> Secondary School </h4>
                        <p>
                          The environment is friendly and extremely conducive for
                          learning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 col-xs-12">
                    <div>
                    <div  className="disc-img" style={{ backgroundImage: `url(${Photos6})` }} >
                          <div className="overlay">
                            <img className="eyfs" src={Robo} alt="" />
                          </div>
                      </div>
                      <div className="disc-body">
                        <h4> Robotics </h4>
                        <p>
                          We offer Robotics program to give our students insight on
                          the new world of Ai{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Vision/>
          <Cart/>
          <div className="gallery-cont">
          <div>
              <div className="gallery-head">
                  <h1>Gallery</h1>
                    <hr/>
                </div>
              <table className='gallery'>
                <tr>
                  <td className='mic-img'>
                    <div  style={{ background: `url(${Photos7}) center/cover no-repeat`, backgroundColor: 'black',   height: '100%', width: '-webkit-fill-available'   }} >
                        <div className='text-cover'>
                            <div className='text-content'>
                            <i class="fas fa-caret-left"></i>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-caret-right"></i>
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </div>
                    </div>
                      
                  </td>
                  <td colSpan='2'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                    <div style={{ background: `url(${Photos4}) center/cover no-repeat`,  backgroundColor: 'black',  height: '100%', width: '-webkit-fill-available'  }} className='img-fluid'>
                      <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                    </div>
                  </td>
                  <td rowSpan='2'>
                    <div style={{
                      background: `url(${Photos2}) center/cover no-repeat`,
                      backgroundColor: 'black',
                      height: '100%', width: '417px'
                    }} className='img-fluid'>
                        <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                    </div>
                  </td>
                  <td>
                    <div style={{
                      background: `url(${Photos3}) center/cover no-repeat`,
                      backgroundColor: 'black',
                      height: '100%', width: '-webkit-fill-available'
                    }} className='img-fluid'>
                        <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td >
                    <div style={{
                      background: `url(${Photos8}) center/cover no-repeat`,
                      backgroundColor: 'black',
                      height: '100%', width: '500px'
                    }} className='img-fluid'>
                        <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                    </div>
                  </td>
                  <td>
                  <div style={{
                      background: `url(${Photo1}) center/cover no-repeat`,
                      backgroundColor: 'black',
                      height: '100%', width: '500px'
                    }} className='img-fluid'>
                        <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                    </div>
                  </td>
                  <td>
                    <div style={{
                      background: `url(${Photos5}) center/cover no-repeat`,
                      backgroundColor: 'black',
                      height: '100%', width: '500px'
                    }} className='img-fluid'>
                        <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                    </div>
                  </td>
                  <td>
                    <div style={{
                      background: `url(${Photos6}) center/cover no-repeat`,
                      backgroundColor: 'black',
                      height: '100%', width: '500px'
                    }} className='img-fluid'>
                        <div className='text-cover'>
                          <div className='text-content'>
                          <i class="fas fa-caret-left"></i>
                          <i class="fas fa-search"></i>
                          <i class="fas fa-caret-right"></i>
                          <i class="fa-solid fa-magnifying-glass-plus"></i>
                          </div>
                        </div>
                </div>             
                </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="container-lg  smooth">
                        <div className="join-head">
                            <h1>Join Us</h1>
                                <hr/>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12  ">
                                <div className='join-img'>
                                    <img src={Phyz} alt="stairs " className="img-fluid"/>
                                </div>
                                <div>
                                    <a href="#" target={'_blank'} className={'clicker'}
                                    style={{width: '100%', borderRadius: '5px'}}>Inquire</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 ">
                                <div className='join-img'>
                                    <img src={Prayer} alt="stairs" className="img-fluid"/>
                                </div>
                                <div>
                                    <a href="#" target={'_blank'} className={'clicker'}
                                  style={{width: '100%', borderRadius: '5px'}}>Apply</a>
                                </div>

                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 ">
                                <div className='join-img'>
                                    <img src={House} alt="stairs" className="img-fluid"/>
                                </div>
                                <div>
                                    <a href="#" target={'_blank'} className={'clicker'}
                                  style={{width: '100%', borderRadius: '5px'}}>Take a tour</a>
                                </div>
                                
                            </div>

                        </div>
          </div>

    </div>

    </>
  );
}

export default HeroSection;
