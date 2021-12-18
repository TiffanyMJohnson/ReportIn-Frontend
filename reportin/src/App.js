import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Nav from './Nav'
import CalendarApp from './Calender'
import Memos from './Memos'
import Home from './Home'





function App () {
    return (
      <Router>

          <div className="App">

            <Nav/>

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/calendar' element={<CalendarApp />}/>
              <Route path='/memos' element={<Memos/>}/>
           </Routes>  

          <footer>
            <div>
              <h3>CONTACT INFORMATION</h3>
              <p>
                  Head Instructor: Shannon Hoffman <br/>
                  Email: gunslingers.drillteam@yahoo.com <br/>
                  Phone: (425) 210-8682
              </p>
              <div id="appname">
                  <p>© 2021 ReportIn </p> 
              </div>
            </div>
          </footer>

          </div>

       </Router>


      );
    }


export default App;
