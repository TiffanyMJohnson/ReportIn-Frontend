import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModal: false,
      loginModal: false,
      email: '',
      username: '',
      password: '',
      role: "",
      admin: "",
    };
  }

  toggleSignUpModal = (event) => {
    event.preventDefault();

    this.setState({
      signUpModal: !this.state.signUpModal,
    });
  };

  toggleLoginModal = (event) => {
    event.preventDefault();

    this.setState({
      loginModal: !this.state.loginModal,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  registerUser = async (event) => {
    console.log('hit sign up')
    event.preventDefault()
    const url = this.props.baseUrl + '/users/signup'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: event.target.email.value,
          username: event.target.username.value,
          password: event.target.password.value,
          role: event.target.role.value,
          admin: event.target.admin.value

        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
      })
      if (response.status === 200) {
        alert('User is registered!')
        this.setState({
            email: '',
            username: '',
            password: '',
            role: "",
            admin: "",
        })
        this.toggleSignUpModal()
      } else {
        response.json().then((data) => {
          console.log(data);
        })}
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }


    render() {
        return (
            <div className="welcome-margin">
            <div className="container position-absolute">
            <h1 className="font-welcome">Welcome Members & Parents</h1>
            <h4 className="font-welcome-text">Sign up for access to Gunslingers Drill Team portal.</h4>



        

            {/* Sign Up Modal */}
            <div className="modal fade" id="signUpModal" 
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content bg-light">
                <form onSubmit={this.registerUser}>
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body row g-2 font-welcome-text">
               
                  <br></br>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.username}
                  />
                  <br/>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.email}
                  />
                  <br/>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.password}
                  />
                  <br></br>
                   <label htmlFor="role">Role: </label>
                  <input
                    type="datalist"
                    id="role"
                    name="role"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.role}
                  />
                  <br/>
                  {/* <h5>An access code will be given by Gunslingers Drill Team staff for access to the portal.</h5>
                  <label htmlFor="role">Access Code: </label>
                  <input
                    type="text"
                    id="access_code"
                    name="access_ode"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.role}
                  /> */}
                  
                </div>
                <div className="modal-footer">
                  <input type="submit" className="btn btn-dark text-light font-signup-buttons" data-bs-dismiss="modal" value="Sign Up" />
                </div>
                </form>
              </div>
            </div>
          </div>


          {/* Login Modal */}

          <div
            className="modal fade"
            id="loginModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={this.props.loginUser}>
                <div className="modal-header">
                  <h4 className="modal-title font-welcome-buttons" id="exampleModalLabel">Welcome back, Please log in!</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body row g-2 font-welcome-text">
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <br></br>
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="modal-footer">
                  <input type="submit" className="btn btn-dark text-light font-signup-buttons" data-bs-dismiss="modal" value="Login" />
                </div>
              </form>
              </div>
            </div>
            </div>
            </div>
          </div>
         );
    }
}

export default User;