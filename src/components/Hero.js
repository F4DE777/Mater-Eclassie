import React, {useState,useRef, useEffect} from 'react'
import styled,{css} from 'styled-components/macro';
import { sliderData } from './sliderData';
import RighArrow from '../assets/right-long-arrow.svg';
import LeftArrow from '../assets/left-long-arrow.svg';
import {LightSpeed,Fade } from 'react-reveal';

// import {IoMdArrowBack,IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';

export default function Hero() {
    const [current, setCurrent] = useState(false);
    const length = sliderData.length;
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

    if(!Array.isArray(sliderData)  || sliderData.length <= 0){
        return null
    }


  return (
    <HeroCov>
        <Slidecover>
        {sliderData.map((slider, idx)=>{
            return(
                <Sliderpage key={idx}>
                        {idx === current && (
                            <Heroslider>
                                <LightSpeed left cascade>
                                    <Herocontent>
                                        <h4>{slider.title}</h4>
                                        <p>{slider.paragraph}</p>
                                        <BtnLink to={'/'}>Discover</BtnLink>
                                    </Herocontent>
                                </LightSpeed>
                                <Fade  cascade >
                                    <Heroimg src ={slider.Holder}/>
                                </Fade>

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

const BtnLink = styled(Link)`
    background-color:transparent ;
    color:#042482 ;
    text-decoration:none ;
    border:1px solid #042482 ;
    width:7rem ;
    text-align:center ;
    padding:.5rem 0 ;
    border-radius:50px ;
    font-size:18px ;
`

// HeroSection
const HeroCov = styled.section`
    height:80vh ;
    position:relative ;
    overflow:hidden ;
    margin-top:8rem ;
    display:flex ;

`
// HeroWrapper
const Slidecover = styled.div`
        height:100% ;
        width:100% ;
        position:relative ;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        overflow:hidden ;
        &::after{
            content: '';
            position: absolute;
            width: 50%;
            height: 100%;
            top: 0;
            right: 0;
            opacity: 1;
            background: #F2F5FF;
            z-index:-10 ;
        }
`

// HeroSlide
const Sliderpage = styled.div`
    display:flex ;
    width: 100%;
    height:100% ;
    /* z-index:1 ; */
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
    grid-template-columns:30% 1fr ;
    margin: 0 auto ;
    &::before{
        content:'';
        position:absolute ;
        width:100% ;
        height:50% ;
        bottom:0 ;
        left:0;
        opacity: 1;
        background:#F2F5FF ;
    }
    @media screen and (max-width: 960px) {
        position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: flex;
    /* grid-template-columns: 1fr; */
    /* flex-direction: column; */
    margin: 0 auto;
    flex-direction: column-reverse;
    }
   
`
 const Herocontent = styled.div`
        position: relative;
        /* z-index:10 ; */
        display:flex ;
        flex-direction:column ;

        h4{
            font-size:clamp(1.5rem, 6vw, 3rem) ;
            font-family: Sinhala;
            line-height: 48px;

        }

        p{
            font-size:18px ;
            padding:20px 0 0 20px ;
        }

        @media screen and (max-width: 960px) {
            padding:0 10px ;
        }
`
const Heroimg = styled.img`
    /* position:absolute ; */
    width:100% ;
    height:100% ;
    object-fit:cover ;
    top:0 ;
    border-radius:20px;
    z-index:1 ;
`
const Sliderbuttons = styled.div`
   
    @media screen and (min-width: 960px) {
        position: absolute;
        bottom: 10%;
        left:10% ;
    }

    @media screen and (max-width: 960px) {
        position: absolute;
        bottom: 0 ;
        right: 0 ;

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
 