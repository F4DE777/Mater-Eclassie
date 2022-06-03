import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Rectangle-2@2x.png";
import Des from "../assets/Rectangle-22@2x.png";
import Hard from "../assets/Rectangle-2e@2x.png";
import Pex from "../assets/Rectangle-2s@2x.png";
import Believe from "../assets/Group1080ed@2x.png";
import Inspire from "../assets/Group1080e@2x.png";
import Succeed from "../assets/Group1130uyjjy@2x.png";
import Photos2 from "../assets/Rectangle-2s@2x.png";
import Photos3 from "../assets/Rectangle9err@2x.png";
import Photos4 from "../assets/Rectangle-22@2x.png";
import Photos5 from "../assets/Rectanglehlijkn@2x.png";
import Photos6 from "../assets/Rectangle9rrf@2x.png";
import Photos7 from "../assets/Rectangle9@2x.png";
import Photos8 from "../assets/Rectangle9rrr@2x.png";
import Photo1 from "../assets/Rectanglefff@2x.png";
import Teacher from "../MaryLand/1632735791._DSC3088@2x.png";
import { Link } from "react-router-dom";
import Cart from "./Carousel";
import Violin from "../assets/1632735791._DSC3088@2x.png";
import Play from "../assets/1632735791._DSC3088ed@2x.png";
import Line from "../assets/Rectangle 10018@2x.png";
import Circle from "../assets/Circle.svg";
import Circle2 from "../assets/Circle.png";
import GalleryIndex from "./gallery/GalleryIndex"

import Vision from "./Vision";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="page-trans ">
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={scholar}
                alt="Scholar"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imgCaro  d-block w-100 img-fluid "
                src={Des}
                alt="Student"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Hard}
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Pex}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="believe">
          <h4>Believe.</h4>
          <h4>Inspire.</h4>
          <h4>Succeed.</h4>
        </div>
        <div className="hooked-cov ">
          <div className="hooked">
            <div className="search-fixed help">
              {" "}
              <Link>Search</Link>{" "}
            </div>
            <div className="enquire-fixed help">
              <Link to="/Contact">Enquire</Link>
            </div>
            <div className="apply-fixed help">
              <Link to="/Apply">Apply</Link>
            </div>
            <div className="visit-fixed help">
              <Link to="/Contact">Visit</Link>
            </div>
          </div>
        </div>

        <div className="intro-container">
          <div className="intro-cover">
            <div className="welcome-note">
              <span className="tip-block"></span>
              <label2 htmlFor="#">GREETINGS</label2>
              <h3>Welcome to MCSS</h3>

              <div className="mt-3 greet">
                <p>
                  I welcome you all to this noble institution, Maryland
                  Comprehensive Secondary School and I congratulate your beloved
                  parents/guardian on your admission to this school.
                  <br />
                  I must say that it is a great privilege to be in this great
                  school that has and will continue to provide highly esteemed
                  and holistic, qualitative education to many people holding key
                  posts in various works of life in and outside our country.
                  <br /> <br />
                  You have come therefore to be part of MCSS family and to show
                  the stuff you are made of, in contributing to the good and
                  golden legacy that the school has made in world history. Once
                  again you are welcome.
                </p>
              </div>
              <div className="mt-5 flexy">
                <a href={"/principal"} className="read">
                  Read More
                </a>
                <div className="col-md-2">&nbsp;</div>

                <img className="line d-block " src={Line} alt="" />
              </div>
            </div>
            <div className="welcome-img">
              <img className="head-teacher-img " src={Teacher} alt="" />
              <img className="head-teacher-img circle" src={Circle} alt="" />
            </div>
          </div>
        </div>

        <div className="container marg ">
          <div className="row">
            <div className="col-12 yellow-border">
              <div>
                <div className="mission-cont">
                  <label2 htmlFor="#"> OUR MISSION</label2>
                  <h4>At A Glance</h4>
                  <div>
                    <p>
                      AT MCSS we are Intentional with providing an enduring
                      legacy of qualitative and affordable education in Nigeria.
                      Our students as much as possible, acquire the best
                      education in a conducive, fair, competitive and dynamic
                      atmosphere with the assistance of competent and dedicated
                      teache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy down">
          <div className="col-md-4"> &nbsp;</div>{" "}
          <img className="head-teacher-img circle " src={Circle} alt="" />
        </div>

        <div className="container">
          <div className="row " style={{ marginTop: "7rem" }}>
            <div
              className="col-lg-4 col-md-4 col-sm-12  col-xs-12 swift "
              style={{
                background: `url(${Believe}) center/cover no-repeat`,
                height: "624px",
                width: "31%",
                maxWidth: "31%",
              }}
            >
              <h4>Believe</h4>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 col-xs-12 swift"
              style={{
                background: `url(${Inspire}) center/cover no-repeat`,
                height: "881px",
                width: "31%",
                maxWidth: "31%",
              }}
            >
              <h4>Inspire</h4>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 col-xs-12 swift"
              style={{
                background: `url(${Succeed}) center/cover no-repeat`,
                height: "724px",
                width: "31%",
                maxWidth: "31%",
              }}
            >
              <h4>Succeed</h4>
            </div>
          </div>
        </div>

        <div className="our-mission">
          <div className="wit">
            <div className="our-miss">
              <label2 htmlFor="">OUR MISSION</label2>
              <h4>Our Group Of Schools</h4>
              <p>
                OUR STUDENTS ARE PREPARED TO SEEK KNOWLEDGE FOR IT'S OWN SAKE
                AND TO PURSUE FURTHER STUDY AT THE FINEST COLLEGES AND
                UNIVERSITIES.
              </p>
              <div className="up">
                <img
                  className="head-teacher-img circle "
                  src={Circle2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container wit2">
            <div className="row">
              <div className="col-6 box-out">
                <div
                  style={{
                    background: `url(${Violin}) center/cover no-repeat`,
                    height: "427px",
                    width: "-webkit-fill-available",
                  }}
                  className="swift"
                >
                  <h4>Inspire</h4>
                </div>
              </div>
              <div className="col-6 box-over">
                <div
                  style={{
                    background: `url(${Play}) center/cover no-repeat`,
                    height: "427px",
                    width: "-webkit-fill-available",
                  }}
                  className="swift"
                >
                  <h4>Succeed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Vision />
        <Cart />

        <div className="gallery-cont">
          <div className="btm-yellow">
            <div className="gallery-head">
              <label2 htmlFor="">EXPLORE</label2>
              <h1>Take A School Tour</h1>
              <p>
                Our Campus Have A Lot To Offer For Our Students{" "}
                <span className="levt">
                  {" "}
                  <img className="circle img-fluid " src={Circle} alt="" />
                </span>
              </p>
            </div>
            <GalleryIndex />
            {/* <table className="gallery">
              <tr>
                <td className="mic-img">
                  <div
                    style={{
                      background: `url(${Photos7}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
                <td colSpan="2" style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photos4}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
                <td rowSpan="2" style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photos2}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photos3}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photos8}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photo1}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photos5}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: "350px" }}>
                  <div
                    style={{
                      background: `url(${Photos6}) center/cover no-repeat`,
                      height: "100%",
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  >
                    <div className="text-cover">
                      <div className="text-content">
                        <i class="fas fa-caret-left"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fas fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table> */}
            <div>
              <Link to="/News" className="more-news1">
                <button>Go to Gallery</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
