import React, {Component} from "react";
import './App.css'


export default class MemoForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            title: "",
            createdOn: "",
            body: "",
        }
    }

    onSubmit = async (e) => {
      e.preventDefault()
      await this.setState({
        title: e.target.title.value,
        createdOn: e.target.createdOn.value,
        body: e.target.body.value
      }) 
       this.post(e)
       console.log('state at line 25', this.state)
    }

    post = async (e) => {
      console.log('state at line 29', this.state)
        const url = process.env.REACT_APP_BASE_URL+'/memoform'
        console.log(url)
        try {
          console.log("this is after try")
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              title: e.target.title.value,
              createdOn: e.target.createdOn.value,
              body: e.target.body.value,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          console.log("line 36")
          if (response.status === 201) {
            console.log("this is my response on 37", response)
            this.setState({ redirect: "/login"})
          }
        }
        catch (err) {
          console.log('Error => ', err);
        }
       
      }

render () {
      return (
        <React.Fragment>

         <h1 className="mt-4">Create Memo</h1>

          <form onSubmit={this.onSubmit} className="mt-2">
              <label htmlFor="name">Title: </label> 
              <input type="text" id="title" name="title"/>
              <br/>
              <label htmlFor="name">Body: </label>
              <input type="textarea" id="textbody" name="body" rows="10" cols="30" />
              <br/>
              <label htmlFor="name">Date: </label>
              <input type="date" id="createdOn" name="createdOn"/>
              <br/>
              <input type="submit" value="Post" />
          </form>

        </React.Fragment>
        )
    }
}


