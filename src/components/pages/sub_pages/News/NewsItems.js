import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Violin from "../../../../assets/1632735791._DSC3088@2x.png";
import Interhouse from "../../../../assets/fe@2x.png";
import Church from "../../../../assets/1632735791._DSC3088sdd@2x.png";
export default function NewsItems() {
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
      title:'News and Events',
      cName:'linked',
      path:'/news/school_news'
    }
    

]

export const Listed = [
    {
        Holder:Violin,
    },
    {
        Holder:Interhouse,
    },
    {
        Holder:Church,
    },
    {
        Holder:Church,
    },
    {
        Holder:Church,
    },
    {
        Holder:Church,
    },
    {
        Holder:Church,
    },
    {
        Holder:Church,
    }
]