import React, { useState } from 'react';
import './App.css';
import { AiOutlineTablet} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCancelCircle} from 'react-icons/im'
const Navlink = () => {
    const [ismobile,setMobile] = useState(false);
    return (
        <>
        <div className='navbar'>
        <div className="icon">
        <AiOutlineTablet/>
        </div>
         <ul className={ismobile?'mobile-links':'navbar-links'} 
         onClick={()=>setMobile(false)}>
         <li> <a href="/">about</a></li>
         <li> <a href="/home">home</a></li>
        <li> <a href="/news">news</a></li>
         <li><a href="/profile">profile</a></li>
          <a href="/login"><button className='btn-danger btn'>login</button></a>
          </ul> 
          <button className='btn2' onClick={()=>setMobile(!ismobile)}>{ismobile?<ImCancelCircle/>:<GiHamburgerMenu/>} </button>
        </div>
        </>
    );
}

export default Navlink;
