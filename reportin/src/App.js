import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import MemoList from './MemoList'
import Home from './Home'
import Nav from './Nav'
import Calendar from './Calender'
import MemoForm from './MemoForm';



// let baseUrl = process.env.REACT_APP_BASEURL

function App () {
    return (
      <Router>

          <div className="App">

            <Nav/>

            <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/memolist' element={<MemoList />}/>
              <Route path='/calendar' element={<Calendar />}/>
              <Route path='/memoform' element={<MemoForm />}/>
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
