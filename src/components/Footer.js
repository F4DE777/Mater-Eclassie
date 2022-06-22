import React from 'react';
import {Link} from "react-router-dom";
import SchLogo from '../assets/MaterLogo@2x.png'
import Twitter from "../assets/Component48–1.svg";
import Face from "../assets/Component47–1.svg";
import Insta from "../assets/Component49–1.svg";
import WaterMark from "../assets/Group1066.png";
import Enquire from "../assets/1632735791._DSC3088ytht@2x.png"
import Visit from "../assets/1632735791._DSC3088sdd@2x.png"
import Apply from "../assets/1632735791._DSC3088rf@2x.png"
import "./Footer.css";
import styled from 'styled-components';
import {Bounce,Roll} from 'react-reveal';
import Quote from "../assets/Path4695.svg";



function Footer() {
  return (
    <>
      <ApplyCov className=" smooth">
      <Bounce bottom cascade>
          <div className="join-head">
              <label>EXPLORE</label>
              <h1>Discover More</h1>
          </div>
        </Bounce>
          <Roll right cascade>
            <div className="joinCont">
              <div className="sub ">
                    <img src={Enquire} alt="stairs " className="img-fluid" />
                    <Link to="/Contact" className="go">
                        <h4>Enquire</h4>
                        <div className="int-tag">  </div>
                    </Link>
              </div>
              <div className="sub ">
                    <img src={Visit} alt="stairs " className="img-fluid" />
                    <Link to="/Contact" className="go">
                          <h4>Visit</h4>
                          <div className="int-tag">  </div>
                    </Link>
              </div>
              <div className=" sub">
                    <img src={Apply} alt="stairs " className="img-fluid" />
                    <Link to="/Contact" className="go">
                        <h4>Apply</h4>
                        <div className="int-tag">  </div>
                    </Link>
              </div>
            </div>
          </Roll>
      </ApplyCov>




      <FooterCont>
          <div className="infos">
              <div className='cont1'>
                  <img src={SchLogo} alt="banner" />
                  <p>
                    Mater Ecclesiae College is a Catholic College established by the Church of the Assumption, Falomo to contribute to the educational sector in Lagos State. Operating since 2015 with 25 students, there has been a steady increase in the number of students admitted to the College.
                  </p>
              </div>
              <div className='cont2'>
                  <header>
                    Get In Touch
                  </header>
                  <div>
                    <h4>Telephone: </h4>
                    <p>(+234)0704 507 7560, 0807 559 4742</p>
                  </div>
                  <div>
                    <h4>Enquiries Email: </h4>
                    <p>MaterEcclesiaeCollege@yahoo.com </p>
                  </div>
                  <div>
                    <h4>Address: </h4>
                    <p>
                        Old Isiwo Road, Igbodu Village, Epe Lagos State
                    </p>
                  </div>
              </div>
              <div className='cont3'>
                    <div>
                      <h6>Useful Links </h6>
                      <ul>
                        <li>
                          <a href={"/junior"}>Junior School</a>
                        </li>
                        <li>
                          <a href={"/senior"}>Senior School</a>
                        </li>
                        <li>
                          <a href={"/Contact"}>Enquire</a>
                        </li>
                        <li>
                          <a href={"/Apply"}>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="w-mark">
                        <a
                          href={"http://educare.school/"}
                          target={"_blank"}
                          rel="noreferrer"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            src={WaterMark}
                            alt="Aisa"
                            className="img-fluid"
                          ></img>
                        </a>
                      </div>
                    </div>
                    <div className="socials">
                        <header>
                          Connect And Share
                        </header>
                        <ul>
                          <li>
                            <a href="/" className={"link"} target={"_blank"}>
                              <img src={Face} alt="social" className="img-fluid" />
                            </a>
                          </li>
                          <li>
                            <a href="/" className={"link"} target={"_blank"}>
                              <img
                                src={Twitter}
                                alt="social"
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/" className={"link"} target={"_blank"}>
                              <img src={Insta} alt="social" className="img-fluid" />
                            </a>
                          </li>
                        </ul>
                    </div>
              </div>
          </div>
           
          <div className="divider"> </div>
          <div className="copyrights">
            <div>
              <p>
                &copy; {new Date().getFullYear()} {""} MATER ECCLESIAE COLLEGE{" "}
              </p>
            </div>
            <div className="policy">
              <p>Contact Us</p>
              <div className="divide" />
              <p>Privacy Policy</p>
            </div>
          </div>
      </FooterCont>
    </>
  );
}

export default Footer


const ApplyCov = styled.div`
    margin: 0 auto;
    width:85% ;
    z-index:-10 ;
    position:relative ;
    overflow:visible ;
    &::before{
        content:'' ;
        position: absolute;
        left: -45%;
        height: 70rem;
        width: 70%;
        z-index:-1 ;
        bottom:10rem ;
        border-right: none;
        background-image: url(${Quote});
        background-position: cover;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(13deg) ;
      }
    .join-head{
        text-align: center;
        /* margin-top: 9rem; */
    
        h1{
        font-size: 40px;
        font-family: sinhala;
        color: #000;
      }

      label{
        font-size: 18px;
        font-family: monserat;
        color: #042482;
        font-weight:100 ;
        margin: 0;
    }
    }

    .joinCont{
      margin: 5rem 0 6rem 0 ;
      display:grid ;
      grid-template-columns:repeat(3, 1fr) ;
      gap:1.5rem;

      .sub{
        display: flex;
        flex-direction: column;
        justify-content: center;

        img{
              width: 100%;
              position: relative;
              object-fit: cover;
              height: 20rem;
              border-radius:10px 10px 0 0 ;
        }
        a{
          height:5rem ;
          border-radius: 0 0 10px 10px  ;
          position:relative ;
          justify-content:center ;
          text-align:center ;
          transition: all .5s linear ;
            h4{
              font-family:sinhala ;
              color:#000 ;
              font-size:30px ;
            }
          .int-tag{
            background-color:#042482 ;
            /* position:absolute ; */
            height:2rem ;
            bottom:0 ;
            border-radius: 0 0 10px 10px  ;

          }

          &:hover{
            h4{
              font-family:sinhala ;
              color:#fff ;
              font-size:30px ;
              position:absolute ;
              text-align:center ;
              display:flex ;
              width:100% ;
              left:0 ;
              right:0 ;
              justify-content: center;

            }
          .int-tag{
            background-color:#042482 ;
            /* position:absolute ; */
            height:5rem ;
            bottom:0 ;
            border-radius: 0 0 10px 10px  ;

          }
          }
        }
      }
      @media screen and (max-width: 960px) {
        display:grid ;
        grid-template-columns:repeat(1, 1fr) ;
        gap:1.5rem;
    }
    }
    @media screen and (max-width: 960px) {
      margin: 0 auto;

    }
`

const FooterCont = styled.footer`
        box-sizing: border-box;
        background-color: #F2F5FF;
        width: 100%;
        color: #042482;
        justify-content: center;
        align-items:center ;
        display:flex ;
        justify-content:center ;
        flex-direction:column ;
        padding-top:5rem ;
    .infos{
      display:grid ;
      grid-template-columns:repeat(3, 1fr) ;
      width:90% ;
      margin:0 auto ;
      .cont1{
          display:grid ;
          grid-template-columns: 1fr;
          width:85% ;

        img{
          position:relative ;
          height:7rem ;
          height:7rem ;
        }
        p{
          font-size:1rem ;
          line-height:25px ;
          font-weight:100 ;
          font-family:monserat ;
        }
      }

      .cont2{
        header{
          font-size:2rem !important;
          font-family:sinhala ;
          margin:0 !important;
        }

        div{
          position:relative ;
          margin-top:20px ;
          h4{
            font-family:monserat;
            font-size:1.3rem ;
            font-weight:900 ;
          }

          p{
            font-size:1rem ;
          }

        }

      }

      .cont3{
        display:grid ;
        grid-template-columns:repeat(2, 1fr) ;

        div{

          h6{
            font-size:2rem;
            font-family:sinhala ;
          }
          ul{
            list-style: none;
            padding:0 ;
            line-height:30px ;

            li{

              a{
                color:#042482 ;
                font-family:monserat ;
                text-decoration:none ;
                font-size:1rem ;

                &:hover{
                  color:red ;
                }
              }
            }
          }
        }
        .socials{
            margin-top: 2rem;

            header{
                color: #042482;
                font-family:sinhala ;
                font-size:2rem ;
                font-weight:100 ;
                }
            ul{
              display:flex ;
              li{
                width: 3rem;
                height: 3rem;
                text-align: left;
                border-radius: 100%;
                justify-content: center;
                transition: background-color .5s linear ;
              }
            }
          }
      }
      @media screen and (max-width: 960px) {
        grid-template-columns:repeat(1, 1fr) ;

    }
    }

    .divider{
        width: 100%;
        border-bottom: 1px solid #042482;
        display: block;
        margin-top: 4.5rem;
    }

    .copyrights{
        padding-top: 1rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        position: relative;

        div{
            p{
              font-size:1rem ;
            font-family:monserat ;
            }
        }

        .policy{
          position: relative;
          display: flex;
          width: 15%;
          justify-content: space-between;
          font-size:1rem ;
        }

        .divide{
        border-right: 2px solid #042482;
        display: flex;
        height: 1rem;
    }
    @media screen and (max-width: 960px) {
      flex-direction:column ;

      .policy{
          position: relative;
          display: flex;
          width: 50%;
          justify-content: space-between;
          font-size:1rem ;
        }
    }
    }
    @media screen and (max-width: 960px) {
    }
`