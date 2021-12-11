import './App.css';
import React, {Component} from 'react'

import Header from './components/imports/Header'
import Footer from './components/imports/Footer'
import Landing from './components/pages/Landing'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Memo from './components/pages/Memo'

import { BrowserRouter, Switch, Route} from 'react-router-dom'


let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {

  render () {
    return (
          <div className="App">
            <BrowserRouter>
              <Header />
                <Switch>
                  <Route exact path='/' component={Landing}></Route>
                  {/* <Route path='/login' component={Login}></Route>
                  <Route path='/register' component={Register}></Route>
                  <Route path='/memo' component={Memo}></Route> */}
                  
                </Switch>
  
                <img id="home" src="https://parade.com/wp-content/uploads/2019/04/pet-quotes.jpg" alt=""></img>
  
              <Footer />
            </BrowserRouter>
         
            
          </div>
      );
    }
  }



export default App;
