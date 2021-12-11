import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="nav">
              <div className="logo-container">
                  <Link to='/'> 
                    <img id="logo" src="https://i.imgur.com/Fv46bqj.jpg" />
                  </Link>
              </div>
              <div className="nav-btn-container">
              {/* insert nav ul here */}
              <ul>
                <li><Link to='/login'> Login</Link></li>
                <li><Link to='/register'> Register</Link></li>
              </ul>
              </div>
            </nav>
        </header>
    )
}
