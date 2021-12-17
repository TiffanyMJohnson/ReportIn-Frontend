import React from "react";
import './App.css'
import {Link} from 'react-router-dom'


function Nav () {

    const navStyle = {
        color: 'white'
    }
    return (
        <nav>

       <Link to='/'> <img className="logo" src="https://i.imgur.com/Fv46bqj.jpg" alt="Home" /></Link> 

        <li><Link  style={navStyle} to='/memoslist'> Memos</Link></li>
        <li><Link style={navStyle} to='/calendar'> Calendar</Link></li>
      
          
        </nav>
    )
}


export default Nav;
