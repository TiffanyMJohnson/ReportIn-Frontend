import React from "react";
import './App.css'
import {Link} from 'react-router-dom'
import MemoForm from "./MemoForm";


function MemoList () {




    return (
        <div>
            <h1>Memos</h1>

            <Link to ='/memoform'>
            <button>Create Memo</button>
            </Link>

        </div>
    )
}


export default MemoList


