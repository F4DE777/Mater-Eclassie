import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Svg1 from '../../../../assets/junior@2x.png';
import Svg2 from '../../../../assets/chart@2x.png';
import Svg3 from '../../../../assets/people@2x.png';
import Svg4 from '../../../../assets/hat@2x.png';
function AcaItems() {
    const currentPath = window.location.pathname;

  return (
    <div>
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

    </div>
  )
}

export default AcaItems

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
      title:'How To Apply',
      cName:'linked',
      path:'/academics/how_to_apply'
    },
    {
      title:'School Fees',
      cName:'linked',
      path:'/academics/school-fees'
    },
    {
      title:'Transfer',
      cName:'linked',
      path:'/academics/result_&_scholarships'
    },
    // {
    //   title:'Contact Us',
    //   cName:'linked',
    //   path:'/about/contact-us'
    // },
    // {
    //   title:'Faculty & Staff Directory',
    //   cName:'linked',
    //   path:'/about/faculty'
    // }

]

export const Tech  = [
    {
        Svg:Svg1,
        Head:'Junior & Secondary Schools',
        Text:'We are accepting applications into the Junior Secondary School as well as Senior Secondary Schools. Let’s prepare you for the most promising future you can imagine'
    },
    {
        Svg:Svg2,
        Head:'Academic Growth',
        Text:'Returning students experience all-round academic growth compared to where they have been. We provide very good standards academically and we allow students to explore their innate strengths.'
    },
    {
        Svg:Svg3,
        Head:'Best Learning Space',
        Text:'We have over 200 students, comfortable classrooms and laboratories for all students.'
    },
    {
        Svg:Svg4,
        Head:'Alumni',
        Text:'Our alumni will attest to the quality of education and formation we provide as they are successful in their endeavors in life.'
    }

]