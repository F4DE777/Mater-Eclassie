import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Carousel";
import Violin from "../assets/1632735791._DSC3088@2x.png";
import Play from "../assets/1632735791._DSC3088ed@2x.png";
import Circle from "../assets/Circle.svg";
import Library from "../assets/1632735791._DSC3088rf@2x.png";
import GalleryIndex from "./gallery/GalleryIndex"
import Vision from "./Vision";
import "./HeroSection.css";
import Hero from "./Hero";
import { introSlider } from "./sliderData";
import styled from "styled-components";

function HeroSection() {
  return (
    <>
      <div className="page-trans ">
        <Hero/>
        
        <div className="hooked-cov ">
          <div className="hooked">
            <div className="search-fixed help">
              {" "}
              <Link to={'/'}>Search</Link>{" "}
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

        <Intro className="intro-container">
          {introSlider.map((intro, idx) => {
            return(
              <div  key={idx} className="cover">
                    <img src={intro.placeHolder} alt="holder" />
                    <div className="content">
                        <h4>{intro.Header}</h4>
                        <p>{intro.paragraph}</p>
                        <Link to={'/'}>Learn More</Link>
                    </div>
             
              </div>
            )
          })}

        </Intro>


        <Mission className="our-mission">
            <div className="wit">
              <div className="our-miss">
                <label>OUR MISSION</label>
                <h4>A College-Ready Environment</h4>
                <p>
                   We help our students realize their whole potential with a balanced approach to education that leads to brilliance.
                </p>
                <Link to={'/'}>Read More</Link>
              </div>
            </div>
            <div className="wit2">
              <div className="subject">
                <div className="box-out">
                      <img src={Violin} alt="violin" />
                      <h4>Career Exploration</h4>
                </div>
                <div className="box-center">
                      <img src={Play} alt="violin" />
                      <h4>Faith</h4>
                </div>
                <div className="box-over">
                      <img src={Library} alt="violin" />
                      <h4>Library</h4>
                </div>
              </div>
            </div>
        </Mission>

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



const Intro = styled.div`

  height:100vh ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  position: relative;
  &::after{
    content:'' ;
    background-image: url('../assets/Path4695@2x.png');
    /* background-color:#F2F5FF ; */
    position: absolute;
    left: 0;
    height: 100%;
    width: 30%;
    z-index:-10 ;
    bottom:-25rem ;
    border-bottom-right-radius:5rem;
    /* opacity:.3 ; */
    border: 30rem solid transparent;
	  border-right: none;
    border-left-color: #F2F5FF;

  }
  .cover{
      width:70% ;
      margin:0 auto ;
      display:grid ;
      grid-template-columns:repeat(2 ,1fr) ;
      justify-content:center ;
      align-items:center ;
      gap:2rem;
      img{
        width:100% ;
        height:100% ;
        object-fit:cover ;
        border-radius:10px;
      }

      .content{
        font-family:sinhala ;

        h4{
          font-size:clamp(2rem , 6vw, 2.5rem) ;
        }

        p{
          font-size:1rem ;
          line-height:25px ;
          font-family: monserat;
          padding:20px 0 0 20px  ;

        }

        a{
          width:5rem ;
          border:1px solid #042482 ;
          color:#042482 ;
          text-decoration:none ;
          border-radius:40px ;
          padding:10px 20px  ;
          font-size:18px;
          font-family: monserat;
          margin-top: 20px;
        }
      }
  }
`

const Mission = styled.div`
    display: flex;
    margin-top: 17rem;
    justify-content:center ;
    align-items:center ;
    position:relative ;
    height:30rem ;
.wit{
    flex: .4;

    .our-miss{
    text-align: left;
    width: 80%;
    margin: 0 auto;
    top: -5rem;
      label{
          color: #042482;
          margin: 0;
          font-style: 16px;
          position:absolute ;
          top:0 ;
          font-family: monserat;
          padding: 0;

          &::after{
            content:'' ;
          }
        }
        h4{
            font-size: 2.5rem;
            font-family: Sinhala;
            font-weight: 900;
          }
          p{
            font-family: monserat;
            padding: 30px 0 0 30px;
            margin-bottom:2rem ;

          }

          a{
            border:1px solid #042482 ;
            color:#042482 ;
            text-decoration:none;
            padding: 10px 20px  ;
            border-radius:20px ;
          }
}
}
.wit2{
    flex: 1;
    height: 100%;

    .subject{
      display:grid;
      grid-template-columns:repeat(3, 1fr) ;
      gap:1.5rem;

      .box-out{
        position:relative ;
        justify-content: center;
        display: flex;
        img{
          width:100% ;
          height:100% ;
          object-fit:cover ;
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


        &::after{
            content: '';
            width: 379px;
            height: 126px;
            background-color: #F2F5FF;
            border: 84px solid #F2F5FF;
            opacity: 1;
            z-index: -1;
            position: absolute;
            left: -20px;
            top: -80px;
          }
      }
      .box-center{
        position:relative ;
        justify-content: center;
        display: flex;
            img{
              width:100% ;
              height:100% ;
              object-fit:cover ;
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
                width: 50%;
                height: 126px;
                background-color: #F2F5FF;
                border: 121px solid #F2F5FF;
                /* opacity: 1; */
                z-index: -26;
                position: absolute;
                /* top: -41px; */
                right: 0;
                /* left: 0; */
                margin: 0 auto;
                bottom: -90px;
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

    }
}



`