import React from "react";
import './App.css'
import {Link} from 'react-router-dom'


function Nav () {
    return (
        <nav>

       <Link to='/'> <img className="logo" src="https://i.imgur.com/Fv46bqj.jpg" alt="Home" /></Link> 

        <li><Link to='/memolist'> Memos</Link></li>
        <li><Link to='/calendar'> Calendar</Link></li>
      
          
        </nav>
    )
}


export default Nav;
