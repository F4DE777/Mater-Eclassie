import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Carousel";
import Violin from "../assets/1632735791._DSC3088@2x.png";
import Play from "../assets/1632735791._DSC3088ed@2x.png";
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
        
        <Hooked >
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
        </Hooked>

        <Intro className="intro-container">
          {introSlider.map((intro, idx) => {
            return(
              <div  key={idx} className="cover">
                    <img src={intro.placeHolder} alt="holder" />
                    <div className="contentUp">
                        <h4>{intro.Header}</h4>
                        <p>{intro.paragraph}</p>
                        <Link to={'/'}>Learn More</Link>
                    </div>
             
              </div>
            )
          })}

        </Intro>


        <Mission>
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

        <Gallery>
            <div className="explore">
              <div className="gall">
                  <label>EXPLORE</label>
                  <h1>Take A School Tour</h1>
                </div>
                  <GalleryIndex />
                <MoreImg to={'/'}>
                      See More
                </MoreImg>
            </div>
              
        </Gallery>
      </div>
    </>
  );
}

export default HeroSection;

const Hooked = styled.div`
      position: fixed;
      right: 0;
      display: flex;
      z-index: 100;
      top: 20%;

      .hooked{

        div{
              transform: rotate(91deg) ;
              margin: 48px -30px;
              height: 3rem;
              width: 5rem;
              padding: 20px;
            }
            .search-fixed {
                text-align:center ;
                display:flex ;
                justify-content:center ;

                a{
                          font-size:16px ;
                          color: #042482 ;
                          text-decoration: none;
                      }

                      &:hover{
                        background-color:#042482 ;
                        a{
                            color: #fff;
                            text-decoration: underline;
                            
                          }
                      }
              }

              .enquire-fixed{
                      background-color: #fff;
                      padding: 20px 0 27px 15px;
                      margin-top:-16px ;
                      height:3.1rem ;

                      a{
                          font-size:16px ;
                          color: #042482 ;
                          text-decoration: none;
                      }

                      &:hover{
                        background-color:#042482 ;
                        a{
                            color: #fff;
                            text-decoration: underline;
                            
                          }
                      }
                }

                .apply-fixed{
                    background-color: #fff;
                    padding: 25px 0 27px 15px;
                    margin-top:-19px ;
                    a{
                          font-size:16px ;
                          color: #042482 ;
                          text-decoration: none;
                      }

                      &:hover{
                        background-color:#042482 ;
                        a{
                            color: #fff;
                            text-decoration: underline;
                            
                          }
                      }

                }

                .visit-fixed{
                    background-color: #fff;
                    padding: 25px 0 27px 15px;
                    margin-top:-21px ;
                    height:3.4rem ;
                    a{
                          font-size:16px ;
                          color: #042482 ;
                          text-decoration: none;
                      }

                      &:hover{
                        background-color:#042482 ;
                        a{
                            color: #fff;
                            text-decoration: underline;
                            
                          }
                      }
                    
                }

      }
`

const Intro = styled.div`

  height:100vh ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  position: relative;
  &::after{
    content:'' ;
    /* background-image: url('../assets/Path4695@2x.png'); */
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

      .contentUp{
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
        @media screen and (max-width: 960px) {
          p{
            padding:0 ;
          }
        }
      }

      @media screen and (max-width: 960px) {
        width:90% ;
        display:grid ;
        grid-template-columns:repeat(1 ,1fr) ;
        justify-content:center ;
        align-items:center ;
        gap:2rem;
        padding:0 !important ;
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
@media screen and (max-width: 960px) {
      flex-direction:column ;
      gap:3rem;
      margin-top: 7rem;

      .wit{
        flex:1 ;

        .our-miss{
          width: 90%;

            label{
              top: -50px;
            }

            p{
              padding:0 !important;
            }
        }
      }

      .wit2{

        
        .subject{
            display:grid;
            grid-template-columns:repeat(2, 1fr) ;
            gap:1.5rem;
            width:90% ;
            margin:0 auto ;
           div{
            &:last-child{
              display:none ;
            }
           }
          }
      }
         
        }


`

const Gallery = styled.div`
      justify-content: center;
      position:relative ;

      &::after{
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
        width: 30%;
        z-index: -10;
        bottom: -35rem;
        border-bottom-right-radius: 5rem;
        border-radius: 5rem;
        border: 30rem solid transparent;
        border-right: none;
        border-left-color: #F2F5FF;
      }

    .explore{
        margin:  15rem auto;
        width:90% ;
        display:flex ;
        flex-direction:column ;
      .gall{
      margin-bottom:5rem;
      label{
        color:#042482 ;
        font-family:monserat ;
        font-weight:100;
        padding:0 ;
        font-size:18px;
      }
      h1{
        font-family: Sinhala;
        font-size:2.5rem;
        color:#000 ;
      }
    }
    }

`

const MoreImg = styled(Link)`

    position:relative ;
    margin:3rem auto ;
    border:1px solid #042482 ;
    color:#042482 ;
    text-decoration:none ;
    padding:10px 20px  ;
    border-radius:30px ;
    font-size:20px ;
    font-family:monserat ;
`