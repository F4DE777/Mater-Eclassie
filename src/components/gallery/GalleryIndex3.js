import React from "react";

import Compute from "../../assets/compute.png";
import Building from "../../assets/Rectangle2s.png";
import Chicken from "../../assets/chicken.png";
import Craft3 from "../../assets/craft3.png";
import Craft4 from "../../assets/craft4.png";
import Practical from "../../assets/practical.png";
import styled from 'styled-components';

import "../HeroSection.css";

export default function GalleryIndex3() {
  return (
            <>
           
            <ImageSection>
                <ImageCont className='one'>
                    <img src={Compute} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
                <ImageCont className='two'>
                    <img src={Building} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
                <ImageCont className='three'>
                    <img src={Chicken} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
                <ImageCont className='four'  >
                    <img src={Craft3} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
                <ImageCont className='five'>
                    <img src={Craft4} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
                <ImageCont className='six'>
                    <img src={Practical} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
                <ImageCont  className='seven'>
                    <img src={Chicken} alt="gallery" />
                    <div className='overlay'>
                        <div>
                            <i class="fas fa-caret-left"></i>
                            <i class="fa fa-search-plus" aria-hidden="true"></i>
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </ImageCont>
            </ImageSection>
      </>
    
  )
}




const ImageSection = styled.section` 
    position:relative ;
    display:grid;
    grid-template-columns:repeat(10, 1fr);
    grid-template-rows:repeat(2, minmax(150px, auto)) ;
    transition: all 5s linear;

   .one{
       grid-column:1/4 ;
   }

   .two{
       grid-column:4/7 ;
   }

   .three{
       grid-column:7/11 ;
   }

   .four{
       grid-column:1/3 ;
   }

   .five{
       grid-column:3/6 ;
   }

   .six{
       grid-column:6/8 ;
   }

   .seven{
       grid-column:8/11 ;
   }
   @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns:repeat(8, 1fr);
    grid-template-rows:repeat(2, minmax(150px, auto)) ;
    .one{
       grid-column:1/5 ;
   }

   .two{
       grid-column:5/9 ;
   }

   .three{
       grid-column:1/9 ;
   }
   .four{
       grid-column:1/4 ;

   }

   .five{
       grid-column:4/9 ;

   }

   .six{
       grid-column:1/5 ;

   }
   .seven{
       grid-column:5/9 ;

   }
   }
`


const ImageCont = styled.div`
            height:350px ;
            position:relative ;

        img{
            width:100% ;
            height:100%;
            object-fit:cover ;
        }



        .overlay{
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            display:none ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;
            background-color:rgba(0,0,0,0.5) ;
            cursor: pointer;
            
            div{
                display:flex ;
                gap:1rem;
                color:#fff ;
            }

        }


        &:hover .overlay{
                display:flex ;
                
            }
`