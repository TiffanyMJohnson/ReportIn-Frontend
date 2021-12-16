import React, {useState} from "react";
import './App.css'
import axios from "axios"
import {Redirect} from "react-router-dom"


export default function MemoForm () {

    const [input, setInput] = useState({
        title: "",
        body: "",
        createdOn: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    
    function handleClick(event) {
        event.preventDefault()
        const newMemo = {
            title: input.title ,
            body: input.body,
            createdOn: input.createdOn
        }
        
        axios.post('http://localhost:3003/memoform', newMemo)
        console.log(newMemo)
    }

    return (
      
        <React.Fragment>
        

         <h1 className="mt-4">Create Memo</h1>

          <form className="mt-2">
              <label htmlFor="name">Title: </label> 
              <input onChange={handleChange} type="text" id="title" name="title" value={input.title}/>
              <br/>
              <label htmlFor="name">Body: </label>
              <input onChange={handleChange} type="textarea" id="textbody" name="body" value={input.body} rows="10" cols="30" />
              <br/>
              <label htmlFor="name">Date: </label>
              <input onChange={handleChange} type="date" id="createdOn" name="createdOn" value={input.createdOn}/>
              <br/>
              <button onClick={handleClick} className="btn btn-lg">Post</button>
          </form>

        </React.Fragment>
      )
     
    }


