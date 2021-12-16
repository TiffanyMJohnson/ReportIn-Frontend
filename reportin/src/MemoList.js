import React, { useEffect, useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import MemoForm from "./MemoForm";


function MemoList () {
    const [memos, setMemos] = useState([
        {
        title: "",
        body: "",
        createdOn: ""
        }
    ])

    useEffect(() => {
        fetch("/memolist").then (res => {
            if(res.ok) {
                return res.json
            }
        }).then(jsonRes => setMemos(jsonRes))
    })




    return (
        <div>
            <h1>Memos</h1>

             {memos.map(memo => (
           
                <div>
                    <li>{memos}</li>
                </div>
                 
             )
             )}
             

            <Link to ='/memoform'  >
            <button>Create Memo</button>
            </Link>

           

        </div>
    )
}


export default MemoList


