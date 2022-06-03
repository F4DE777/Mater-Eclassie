import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Quote from "../assets/Quote.svg";
import Parade from "../assets/Ellipse1@2x.png";
import Circle from "../assets/Circle.svg";



import "./Carousel.css";


function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 700, 
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        };
  return (
    <>
      <div className="mb-5 mt-5 " style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          <div>
            <div className="content-coner">
              <div className="hero-img">
                <img src={Parade} alt="something" className="img-fluid " />
              </div>
              <div className="contents-slide">
                <div className="date-event">
                  <div className="flexy down">
                    <div className="col-md-12">&nbsp;</div>{" "}
                    <img
                      className="head-teacher-img circle "
                      src={Circle}
                      alt=""
                    />
                  </div>
                  <label2>VOICES</label2>

                  <h1>Testimonials</h1>

                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Quote}
                      alt="something"
                      className="img-fluid  quote"
                    />
                  </div>
                  <p>
                    The best part of my experience has got to be the open-armed
                    friendliness that this school perpetuates. It has helped me
                    grow from someone who was in a shell to someone who is
                    comfortable and proud to be myself. I recommend MCSS for its
                    friendly atmosphere, relatively small class sizes and easy
                    and direct communication with teachers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="content-coner">
              <div className="hero-img">
                <img src={Parade} alt="something" className="img-fluid " />
              </div>
              <div className="contents-slide">
                <div className="date-event">
                  <div className="flexy down">
                    <div className="col-md-12">&nbsp;</div>{" "}
                    <img
                      className="head-teacher-img circle "
                      src={Circle}
                      alt=""
                    />
                  </div>
                  <label2>VOICES</label2>
                  <h1>Testimonials</h1>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Quote}
                      alt="something"
                      className="img-fluid  quote"
                    />
                  </div>
                  <p>
                    The best part of my experience has got to be the open-armed
                    friendliness that this school perpetuates. It has helped me
                    grow from someone who was in a shell to someone who is
                    comfortable and proud to be myself. I recommend MCSS for its
                    friendly atmosphere, relatively small class sizes and easy
                    and direct communication with teachers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="content-coner">
              <div className="hero-img">
                <img src={Parade} alt="something" className="img-fluid " />
              </div>
              <div className="contents-slide">
                <div className="date-event">
                  <div className="flexy down">
                    <div className="col-md-12">&nbsp;</div>{" "}
                    <img
                      className="head-teacher-img circle "
                      src={Circle}
                      alt=""
                    />
                  </div>
                  <label2>VOICES</label2>
                  <h1>Testimonials</h1>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Quote}
                      alt="something"
                      className="img-fluid  quote"
                    />
                  </div>
                  <p>
                    The best part of my experience has got to be the open-armed
                    friendliness that this school perpetuates. It has helped me
                    grow from someone who was in a shell to someone who is
                    comfortable and proud to be myself. I recommend MCSS for its
                    friendly atmosphere, relatively small class sizes and easy
                    and direct communication with teachers. It can be tough at
                    first getting used to the open-mindedness of most students
                    however I encourage all who decide to come to THS to use
                    this opportunity to learn about people and their different
                    cultures. It will help you broaden your world view and
                    ultimately make you a more well-rounde
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel