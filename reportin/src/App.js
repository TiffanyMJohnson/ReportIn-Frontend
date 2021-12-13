import './App.css';
import React, {Component} from 'react'
import User from './User'
import Memo from './Memo'
import Home from './Home'
import Nav from './Nav'


let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      memosData: [],
      userLoggedIn: false,
      memosFormModal: false,
    };
  }
  registerUser = async (event) => {
    console.log('hit sign up')
    event.preventDefault()
    const url = baseUrl + '/users/signup'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: event.target.email.value,
          username: event.target.username.value,
          password: event.target.password.value,
          confirmedPassword: event.target.confirmedPassword.value

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) {
        alert('User is registered!')
      } else {
        response.json().then((data) => {
          console.log(data);
        })}
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }


  loginUser = async (event) => {
    console.log('loginUser')
    event.preventDefault()
    const url = baseUrl + '/users/login'
    const loginBody = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })
      console.log(response)
      console.log("BODY: ", response.body)

      if (response.status === 200) {
        this.setState({
          userLoggedIn: true
        })
      } else {
        response.json().then((data) => {
          console.log(data);
        })}
    }
    catch (err) {
      console.log('Error => ', err)
      alert('Error: Unable to log in at this time.')
    }
  }

  logout =  (event) => {
    event.preventDefault()
    const url = baseUrl + '/users/logout'
    const response = fetch(url, {
      method: "DELETE",
      credentials: "include"
    }).then((response => {
      this.setState({
        userLoggedIn: false
      })
    }))
    
  }

  // getMemos = () => {
  //   fetch(baseUrl + "/home", {
  //     credentials: "include"
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       } else {
  //         return [];
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         memosData: data,
  //       });
  //     });
  // };

  // addMemo = (newMemo) => {
  //   const copyMemos = [...this.state.memosData];
  //   copyMemos.push(newMemo);
  //   this.setState({
  //     memos: copyMemos,
  //   });
  //   this.memosTasks();
  // };

  // handleEditedMemoData = (data) => {
  //   this.setState({
  //     memosData: data,
  //   });
  // };

  // deleteMemo = (id) => {
  //   fetch(baseUrl + "/home/" + id, {
  //     method: "DELETE",
  //     credentials: "include"
  //   }).then((res) => {
  //     console.log(res);
  //     const findIndex = this.state.memosData.findIndex(
  //       (memo) => memo._id === id
  //     );
  //     const copyMemos = [...this.state.memosData];
  //     copyMemos.splice(findIndex, 1);
  //     this.setState({
  //       memosData: copyMemos,
  //     });
  //     this.getMemos();
  //   });
  // };

// //======= MODALS ========

// toggleMemoModal = () => {
//   this.setState({
//     memosFormModal: !this.state.memosFormModal,
//   });
// };

// componentDidMount() {
//   this.getMemos();
// };

  // render () {
  //   return (
  //     <React.Fragment>
  //         <div className="App">
           
  //             <header>
  //               <nav className="nav">
  //               <div className="logo-container">
  //                     <img id="logo" src="https://i.imgur.com/Fv46bqj.jpg" />
  //               </div>
  //               <div className="nav-btn-container">
  //               <button>Login</button> | <button>Create Account</button> 
  //               </div>
  //              </nav> 
  //             </header>
  //             <div id="landing">
  //             <p id="about"> 
  //                 The Gunslingers Drill Team was formed in 1991 with thier Red & Black western style uniforms. The team is based out of Lake Stevens, Washington, however their team members come from all over Snohomish County (Lynnwood, Everett, Lake Stevens, Marysville, and Arlington). Team members range from age 6 - 19 years old with differing levels of experience. By utizlizing both rifles and hand drills, the Gunslingers add complexity to their military styled routines. The team travels all over Washington state particiapting in competitions and parades. If you or your child are interested in joining, please contact the team at the email or phone number listed below.
  //               </p>
  
  //               <img id="teamphoto" src="https://i.imgur.com/cVktUBg.jpg" alt=""></img>
  //             </div>
  //             <footer>
  //               <div>
  //                 <h3>CONTACT INFORMATION</h3>
  //                 <p>
  //                   Head Instructor: Shannon Hoffman <br/>
  //                   Email: gunslingers.drillteam@yahoo.com <br/>
  //                   Phone: (425) 210-8682
  //                 </p>
  //               </div>
  //               <div id="appname">
  //               <p>© 2021 ReportIn </p> 
  //               </div>
  //             </footer>
 
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // }

  render() {
    return (
      <React.Fragment>
      <>
        {this.state.userLoggedIn ? (
          <>
            <Nav
              toggleMemoModal={this.toggleMemoModal}
              logout={this.logout}
            />

            {this.state.memosFormModal && (
              <>
                <MemosForm baseUrl={baseUrl} addMemo={this.addMemo}  memosFormModal={this.state.memosFormModal} toggleMemoModal={this.toggleMemoModal} />
              </>
            )}



            {/* <Calendar /> */}
            {/* {/* <GoalsForm baseUrl={baseUrl} addGoals={this.addGoal} /> */}


            <br></br>
            <MemosList
              tasks={this.state.memosData}
              handleEditedMemoData={this.handleEditedMemoData}
              baseUrl={baseUrl}
              getMemos={this.getMemos}
              deleteMemo={this.deleteMemo}
            />
          </>
        ) : (
          <User  loginUser={this.loginUser} registerUser={this.registerUser} baseUrl={baseUrl}/>
        )}
      </>
      </React.Fragment>
    );
  }
}


export default App;
