import React from 'react';
import {Link} from "react-router-dom";
import SchLogo from '../assets/MaterLogo@2x.png'
import Twitter from "../assets/Component48–1.svg";
import Face from "../assets/Component47–1.svg";
import Insta from "../assets/Component49–1.svg";
import WaterMark from "../assets/Group1066.png";
import Alliance from "../assets/alliancef1.png";
import Cobis from "../assets/cobis.png";
import Acca from "../assets/Acca.png";
import Enquire from "../assets/1632735791._DSC3088ytht@2x.png"
import Visit from "../assets/1632735791._DSC3088sdd@2x.png"
import Apply from "../assets/1632735791._DSC3088rf@2x.png"
import Aisha from "../assets/aisa-logo-blk.png";
import Apen from "../assets/Apen.png";
import Microsoft from "../assets/Microsoft.png";



import "./Footer.css";
import styled from 'styled-components';



function Footer() {
  return (
    <>
      <ApplyCov className="container  smooth">
        <div className="join-head">
            <label>EXPLORE</label>
            <h1>Discover More</h1>
        </div>
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
      </ApplyCov>




      <footer className="footer ">
        <div className="container-lg">
          <div className="row">
            <div className=" col-xl-5 col-md-5 col-sm-12 col-xs-12 mb-2 mb-lg-0 Army ">
              <div className="container-lg useful1">
                <span>
                  <img src={SchLogo} alt="banner" />
                </span>
                <div className="carr-add">
                  <p className="text-small ">
                      Mater Ecclesiae College is a Catholic College established by the Church of the Assumption, Falomo to contribute to the educational sector in Lagos State. Operating since 2015 with 25 students, there has been a steady increase in the number of students admitted to the College.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-xl-3 col-md-3 col-sm-12 col-xs-12  mt-4">
              <div className="container-lg usefuls">
                <div className="ett">
                  <header className="h5  lined mb-4">
                    Get In Touch
                  </header>
                  <div className="telephone">
                    <h4>Telephone: </h4>
                    <p>(+234)0802 323 0290</p>
                  </div>
                  <div className="telephone">
                    <h4>Enquiries Email: </h4>
                    <p>mcssmaryland@yahoo.com </p>
                  </div>
                  <div className="telephone">
                    <h4>Address: </h4>
                    <p>
                        Old Isiwo Road, Igbodu Village, Epe Lagos State
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-md-4 col-sm-12 col-xs-12  mt-3 Army ">
              <div className="container-lg  Gap">
                <div className="row">
                  <div className="col-6">
                    <h6 className="use text-white">Useful Links </h6>
                    <ul className="grade-level">
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
                  <div className="col-6">
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
                </div>

                <div>
                  <div className="socials">
                    <header className="h5 text-left lined ">
                      Connect And Share
                    </header>
                    <ul className="list-unstyled d-flex mr-4 mb-4">
                      <li className="  mr-4  dxty">
                        <a href="/" className={"link"} target={"_blank"}>
                          <img src={Face} alt="social" className="img-fluid" />
                        </a>
                      </li>
                      <li className="mr-4 dxty med">
                        <a href="/" className={"link"} target={"_blank"}>
                          <img
                            src={Twitter}
                            alt="social"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="mr-4 dxty">
                        <a href="/" className={"link"} target={"_blank"}>
                          <img src={Insta} alt="social" className="img-fluid" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         


          <div className="divider">
            <div className="container-lg">
              {/* <h4>
                <a href="#">Back to top</a>
              </h4> */}
            </div>
          </div>
          <div className="container-lg">
            <div className="copyrights">
              <div className=" ">
                <p className=" mb-0  fullyear">
                  &copy; {new Date().getFullYear()} {""} MATER ECCLESIAE COLLEGE{" "}
                </p>
              </div>
              <div className="policy">
                <p>Contact Us</p>
                <div className="divide" />
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer


const ApplyCov = styled.div`
    margin: 13rem auto;

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
    }

`