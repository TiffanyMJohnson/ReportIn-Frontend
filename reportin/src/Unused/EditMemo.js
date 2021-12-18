import React, { useEffect, useState } from "react";
import './App.css'
import axios from "axios";



export default function UpdateMemo () {
   
    const [updatedMemo, setUpdatedMemo] = useState ({
        title: "",
        body: "",
        createdOn: "",
        _id: ""
    })

    function updatedMemoPut(_id) {
        axios.put('/update/' + _id, updatedMemo)
        alert("memo updated")
        console.log('memo updated')
    }

    console.log(updatedMemo)

    // useEffect( () => {
    //     fetch("/memoslist").then (res => {
    //         if(res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => setMemos(jsonRes))
    // })

    function handleUpdate(event) {
        event.preventDefault()
        const {name, value} = event.target
        setUpdatedMemo(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
    }
        console.log(updatedMemo)
    

    return (
      
        <React.Fragment>
        

         <h1 className="mt-4">Update Memo</h1>

          <form className="mt-2">
              <label htmlFor="name">Title: </label> 
              <input onChange={handleUpdate} type="text" id="title" name="title" value={updatedMemo.title}/>
              <br/>
              <label htmlFor="name">Body: </label>
              <input onChange={handleUpdate} type="textarea" id="textbody" name="body" value={updatedMemo.body} rows="10" cols="30" />
              <br/>
              <label htmlFor="name">Date: </label>
              <input onChange={handleUpdate} type="date" id="createdOn" name="createdOn" value={updatedMemo.createdOn}/>
              <br/>
              <button onClick={() => updatedMemoPut(updatedMemo._id)} className="btn btn-lg">Update</button>
          </form>

        </React.Fragment>
      )
     
}