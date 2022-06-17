import React, {useState,useRef, useEffect} from 'react'
import styled,{css} from 'styled-components/macro';
import { Voices } from './sliderData';
import RighArrow from '../assets/right-long-arrow.svg';
import LeftArrow from '../assets/left-long-arrow.svg';
// import { Link } from 'react-router-dom';
import Quote from "../assets/Quote.svg";
import {LightSpeed,Rotate} from 'react-reveal';



import "./Carousel.css";



export default function Carousel() {
    const [current, setCurrent] = useState(false);
    const length = Voices.length;
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if (timeout.current){
                clearTimeout(timeout.current)
            };
        }
    }, [current, length])
 

    const nextSlide = () => {
        if (timeout.current){
            clearTimeout(timeout.current)
        };
        setCurrent(current === length - 1 ? 0 : current + 1);

    };

    const prevSlide = () => {
        if (timeout.current){
            clearTimeout(timeout.current)
        };
        setCurrent(current === 0 ? length - 1  : current - 1);


    };

    if(!Array.isArray(Voices)  || Voices.length <= 0){
        return null
    }


  return (
    <HeroCov>
        <Slidecover>
        {Voices.map((slider, idx)=>{
            return(
                <Sliderpage key={idx}>
                        {idx === current && (
                            <Heroslider>
                                <LightSpeed left cascade>
                                    <Herocontent>
                                        <label>VOICES</label>
                                        <h4>{slider.title}</h4>
                                        <img src={Quote} alt="quote" />
                                        <p>{slider.paragraph}</p>
                                        <div className='comment'>
                                        <h6>{slider.Parent}</h6>
                                        <h6>{slider.Commentor}</h6>
                                        </div>
                                    </Herocontent>
                                </LightSpeed>
                                <Rotate top right cascade>
                                    <HolderBc>
                                        <Heroimg src ={slider.Holder}/>
                                    </HolderBc>
                                </Rotate>

                            </Heroslider>
                        )}
                    
                </Sliderpage>
            )
        })}
        <Sliderbuttons>
            <Prev src={LeftArrow} onClick={prevSlide}/>
            <Next src={RighArrow}  onClick={nextSlide}/>
        </Sliderbuttons>
        </Slidecover>

    </HeroCov>
  )
}



const HeroCov = styled.section`
    height:80vh ;
    position:relative ;
    margin-top:8rem ;
    display:flex ;

    &::after{
    content:'' ;
    position: absolute;
    right: 0;
    top:0 ;
    height: 100%;
    width: 30%;
    z-index:1 ;
    bottom:-25rem ;
    border-bottom-left-radius:5rem;
    border: 30rem solid transparent;
	  border-left: none;
    border-right-color: #F2F5FF;
    z-index:-10 ;

  }

`
const Slidecover = styled.div`
        height:100% ;
        width:100% ;
        position:relative ;
        display:flex ;
        justify-content:center ;
        align-items:center ;
       
       
`

const Sliderpage = styled.div`
    display:flex ;
    width: 100%;
    height:100% ;
`
const Heroslider = styled.div`
    position: absolute;
    left:0 ;
    right:0 ;
    width: 90%;
    height:100% ;
    align-items:center ;
    justify-content:center ;
    display:grid ;
    grid-template-columns:repeat(2, 1fr) ;
    margin: 0 auto ;
   
    @media screen and (max-width: 960px) {
        grid-template-columns:repeat(1, 1fr) ;

    }
   
`
 const Herocontent = styled.div`
        position: relative;
        display:flex ;
        flex-direction:column ;
        text-align: center;
        justify-content: center;

        label{
           color:#042482 ;
           font-family:monserat ;
           font-weight:100 ;
            font-size:18px ;
          &::after{
            content:'' ;
          }
        }
        h4{
            font-size:clamp(1.5rem, 6vw, 3rem) ;
            font-family: Sinhala;
            line-height: 48px;

        }

        p{
            font-size:18px ;
            padding:20px 0 0 20px ;
        }

        img{
          height:2rem ;
        }

        .comment{
          display:flex ;
          justify-content:center ;
        
          font-family: Sinhala;

          h6{
            font-size:30px ;
            &:last-child{

            &::before{
              content:'|' ;
              padding:20px ;
              font-size:30px ;
            }
            }
          }
        }

        @media screen and (max-width: 960px) {
            width: 60%;
            margin: 0 auto;
        }
`

const HolderBc = styled.div`
  position:relative ;
  justify-content:center ;
    display: flex;
    align-items: center;
    height: 100%;

    &::before{
      content:'' ;
      height:40rem ;
      width:40rem ;
      background-color:#F2F5FF ;
      position:relative ;
      border-radius:50%;
      top:0 ;
      z-index:-10 ;
    }

 
`

const Heroimg = styled.img`
    width: 30rem;
    height:30rem;
    object-fit: cover;
    position: absolute;
    top: 15%;
    border-radius: 50%;
    z-index: 10;
    @media screen and (max-width: 960px) {
        width: 20rem;
        height:20rem;           
        margin: 0 auto;
        }
`
const Sliderbuttons = styled.div`
   position: absolute;
    bottom: 0;
    left:25% ;
    @media screen and (max-width: 960px) {
    position: absolute;
    bottom: -60px;
    left: auto;
    }
`
const arrowButtons = css`
    width:50px ;
    height:50px ;
    cursor: pointer;
    color:#042482 ;
    transition: 0.3s;
    user-select: none;
    margin-right: 20px;
    &:hover{
        transform:scale(1.05) ;
    }
`

const Next = styled.img`
    ${arrowButtons}

`
const Prev = styled.img`
    ${arrowButtons}
`
 