import React from 'react';
import {Link} from "react-router-dom";
import SchLogo from '../assets/MaryLandlogo.png'
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



function Footer() {
  return (
    <>
      <div className="container  smooth">
        <div className="join-head">
          <label2 htmlFor="">EXPLORE</label2>
          <h1>Discover More</h1>
        </div>
        <div className="row mb-5 mt-5">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12  ">
            <div className="join-img">
              <img src={Enquire} alt="stairs " className="img-fluid" />
            </div>

            <Link to="/Contact" className="go">
              <div className="ing-tag">
                <h4>Enquire</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 ">
            <div className="join-img1">
              <img src={Visit} alt="stairs" className="img-fluid" />
            </div>

            <Link to="/Contact" className="go">
              <div className="ing-tag">
                <h4>Visit</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 ">
            <div className="join-img2 ">
              <img src={Apply} alt="stairs" className="img-fluid" />{" "}
            </div>

            <Link to="/Apply" className="go">
              <div className="ing-tag">
                <h4>Apply</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>






      <footer className="footer ">
        <div className="container-lg">
          <div className="row">
            <div className=" col-xl-5 col-md-5 col-sm-12 col-xs-12 mb-2 mb-lg-0 Army ">
              <div className="container-lg useful1">
                <span>
                  <img src={SchLogo} alt="banner" />
                </span>
                <div className="carr-add">
                  <p className="text-white text-small ">
                    MCSS as an institution was established in the year 1969,
                    that seeks after not only academic excellence but also
                    morally sound students with integrity and nobility as proper
                    tools for the development of a complete personality in the
                    society.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-xl-3 col-md-3 col-sm-12 col-xs-12  mt-4">
              <div className="container-lg usefuls">
                <div className="">
                  <header className="h5 text-white lined mb-4">
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
                      Mission Compound, Maryland, <br /> Ikeja, Lagos State,
                      Nigeria.
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
                    <header className="h5 text-white text-left lined ">
                      Connect And Share
                    </header>
                    <ul className="list-unstyled d-flex text-white mr-4 mb-4">
                      <li className="  mr-4  dxty">
                        <a href="#" className={"link"} target={"_blank"}>
                          <img src={Face} alt="social" className="img-fluid" />
                        </a>
                      </li>
                      <li className="mr-4 dxty med">
                        <a href="#" className={"link"} target={"_blank"}>
                          <img
                            src={Twitter}
                            alt="social"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="mr-4 dxty">
                        <a href="#" className={"link"} target={"_blank"}>
                          <img src={Insta} alt="social" className="img-fluid" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="affliation">
            <div className="white-line"></div>
            <div className="text-aff">
              <h4>AFFLIATIONS</h4>
            </div>
            <div className="white-line"> </div>
          </div>
          <div className="contain-sponsors">
            <ul className="sponsors col-md-12">
              <li className="col-4">
                {" "}
                <img src={Alliance} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Cobis} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Alliance} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Microsoft} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Apen} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Acca} alt="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Aisha} alt="sponsors" srcset="" />
              </li>
            </ul>
          </div>

          <div className="contain-sponsors2 s2">
            <ul className="sponsors col-md-12">
              <li className="col-4">
                {" "}
                <img src={Alliance} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Cobis} alt="sponsors" srcset="" />
              </li>
              <li className="col-4">
                {" "}
                <img src={Alliance} alt="sponsors" srcset="" />
              </li>
            </ul>
          </div>

          <div className="contain-sponsors2">
            <ul className="sponsors col-md-12">
              <li className="col-3">
                {" "}
                <img src={Microsoft} alt="sponsors" srcset="" />
              </li>
              <li className="col-3">
                {" "}
                <img src={Apen} alt="sponsors" srcset="" />
              </li>
              <li className="col-3">
                {" "}
                <img src={Acca} alt="" />
              </li>
              <li className="col-3">
                {" "}
                <img src={Aisha} alt="sponsors" srcset="" />
              </li>
            </ul>
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
                <p className=" mb-0 text-white fullyear">
                  &copy; {new Date().getFullYear()} {""} Maryland Comprehensive
                  Secondary School{" "}
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