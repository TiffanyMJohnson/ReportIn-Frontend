import React, { useEffect, useState } from "react";
import './App.css'
import {Link} from 'react-router-dom'
import axios from "axios";



function MemoList () {
    const [memos, setMemos] = useState([{
        title: "",
        body: "",
        createdOn: "",
        _id: ""
}])

    useEffect( () => {
        fetch("/memoslist").then (res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setMemos(jsonRes))
    })

    
    function deleteMemo(id) {
        axios.delete("/delete/" + id)
        alert("memo deleted")
        console.log(`Deleted item with id ${id}`)

    }


 
    return (
        <div className="app">
                <h1 id="memotitle">Memos</h1>
                
                    {memos.map(memo => 
                        <div className="memolist" key={memo._id}>
                            <h4>{memo.title}</h4>
                            <p>{memo.body}</p>
                            
                            <Link to="/update">
                            <button id="btn"> Update </button>
                            </Link>
                           
                            <button id="btn" onClick={() => deleteMemo(memo._id)}>Delete</button>
                           
                        </div> 
                    )}
                <Link to ='/memoform'  >
                <button>Create Memo</button>
                </Link>

        </div>
        
    )
}

export default MemoList
