import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image1 from '../../../../assets/Rectanglet10030@2x.png';
import Image2 from '../../../../assets/Rectanglett10046@2x.png';
import Image3 from '../../../../assets/Rectanglex10047@2x.png';
import Svg1 from '../../../../assets/handset@2x.png';
import Svg2 from '../../../../assets/web@2x.png';
import Svg3 from '../../../../assets/books@2x.png';
import Svg4 from '../../../../assets/hat@2x.png';



function AboutItems() {
    const currentPath = window.location.pathname;

  return (
    <>
        <List>
            {subRoute.map((sub, idx)=>{
              return(
                  <li key={idx}>
                      <Link className={sub.cName} to={sub.path}               
                        style={{color:sub.path.toString() === currentPath.toString()?'#042482':''  }}
                        >
                        {sub.title}
                      </Link>
                  </li>
              )
              
            })
            }
            
          </List>

    </>
  )
}

export default AboutItems





const List = styled.ul`
    width:85% ;
    display:flex ;
    list-style:none ;
    gap:2rem;
    justify-content:center ;
    background-color:#F2F5FF;
    align-items:center ;
    height:5rem ;
    margin:0 auto ;

    li{

        a{
            color:#191919 ;
            text-decoration:none ;
            font-family:monserat;
            font-size:1.2rem;

            &:hover{
                color:#042482 ;
            }
        }
    }
`

const subRoute = [
    {
      title:'Home',
      cName:'linked',
      path:'#'
    },
    {
      title:'Administrator’s Message',
      cName:'linked',
      path:'/about/administrators-message'
    },
    {
      title:'Proprietor’s Message',
      cName:'linked',
      path:'/about/proprietors-message'
    },
    {
      title:'History of The School',
      cName:'linked',
      path:'/about/history'
    },
    {
      title:'Contact Us',
      cName:'linked',
      path:'/about/contact-us'
    },
    {
      title:'Faculty & Staff Directory',
      cName:'linked',
      path:'/about/faculty'
    }

]

export const Parts = [
    {
        Holder:Image1,
        Header:'Our Mission',
        Text:'As a co-educational Catholic College, we fill students with the aspiration to attain the heights in academic pursuits, reverential appreciation for the sense of the sacred and love for the supremely divine as well as a strong belief in creative thinking and initiative.'
    },
    {
        Holder:Image2,
        Header:'Our Vision',
        Text:'To raise men and women of sterling character and profound integrity, imbued with sincere respect for the dignity of the human person regardless of creed, colour or class; love for learning and commitment to innovative leadership.'
    },
    {
        Holder:Image3,
        Header:'Our Values',
        Text:'We believe firmly in christian morality,politeness, hard work,responsibility, respect, courtesy and good manners.'
    }
]


export const Tech  = [
    {
        Svg:Svg1,
        Head:'E-Learning',
        Text:'We expose students to all of the best available resources online and offline to keep abreast with theeir counterparts in other schools of the world.'
    },
    {
        Svg:Svg2,
        Head:'Technology',
        Text:'Our E-learning educational platforms and resources aim to help parents, teachers and pupils relate and make learning easier .'
    },
    {
        Svg:Svg3,
        Head:'Tuition',
        Text:'Our tuition fees are the best available for the standards we provide contact us for more information on tuition fees'
    },
    {
        Svg:Svg4,
        Head:'Alumni',
        Text:'Students are exposed to extra artificial intelligience technology provided by Robotic Center.'
    }

]