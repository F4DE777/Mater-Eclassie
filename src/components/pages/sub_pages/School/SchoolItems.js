import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function SchoolItems() {
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
      title:'Student Life',
      cName:'linked',
      path:'/school/curriculum'
    },
    // {
    //   title:'Senior School ',
    //   cName:'linked',
    //   path:'/learn/nursery'
    // },
    // {
    //   title:'Transfer',
    //   cName:'linked',
    //   path:'/academics/result_&_scholarships'
    // },
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