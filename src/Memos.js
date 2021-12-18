import"./App.css"
import {useState, useEffect} from "react"
import axios from "axios"


function Memos() {

    const [memo, setMemo] = useState(
        {
            title: "",
            body: "",
            createdOn: ""
        }
    )

    const [memos, setMemos] = useState([{
        title: "",
        body: "",
        createdOn: "",
        _id: "",
    }])

    const [isPut, setIsPut] = useState(false)

    const [updateMemo, setUpdateMemo] = useState({
        title: "",
        body: "",
        createdOn: "",
        id: ""
    })

    useEffect(() => {
        fetch('/memos').then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
        .then(jsonRes => setMemos(jsonRes))
        .catch(err => console.log(err))
    }, [memos])

    function handleChange(event) {
        const {name, value} = event.target
        setMemo(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
    }

    function addMemo(event) {
        event.preventDefault()
        const newMemo = {
            title: memo.title,
            body: memo.body,
            createdOn: memo.createdOn
        }
        axios.post('/newmemo', newMemo)
        console.log(newMemo)
        alert("Memo was added")

        setMemo({
            title: "",
            body: "",
            createdOn: ""
        })
    }

    function deleteMemo(id) {
        axios.delete("/delete/" + id)
        alert("memo deleted")
        console.log(`Deleted item with id ${id}`)

    }

    function openUpdate(id) {
        setIsPut(true)
        setUpdateMemo(prevInput => {
            return (
                {
                    ...prevInput,
                    id: id

                }
            )
        })
    }

    function updatedMemo(id) {
        axios.put('/update/' + id, updateMemo)
        alert("memo updated")
        console.log('Memo updated')

        setMemo({
            title: "",
            body: "",
            createdOn: ""
        })
    }

    function handleUpdate(event) {
        const {name, value} = event.target
        setUpdateMemo(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
        console.log(updateMemo)
    }

    return (
        <div className="Memos">
            <h1 id="memotitle">Memos</h1>

            {!isPut ?
            (<div className="memoform">
                <h3>Add Memo</h3>
                <input onChange={handleChange} name="title" value={memo.title} placeholder="Title"></input>
                <input onChange={handleChange} name="body" value={memo.body} placeholder="Body"></input>
                <input onChange={handleChange} name="createdOn" value={memo.createdOn}  type="date" id="createdOn"></input>
                <button onClick={addMemo}>Add Memo</button>
            </div>) : (
                <div className="memoform">
                <h3>Update Memo</h3>
                <input onChange={handleUpdate} name="title" value={updateMemo.title} placeholder="Title"></input>
                <input onChange={handleUpdate} name="body" value={updateMemo.body} placeholder="Body"></input>
                <input onChange={handleUpdate} name="createdOn" value={updateMemo.createdOn}  type="date" id="createdOn"></input>
                <button onClick={() => updatedMemo(updateMemo.id)}>Update Memo</button>
            </div>
            )}
            {memos.map((memo) => {
                return(
                    <div>
                        <div className="memolist" key={memo._id}>
                            <h4>{memo.title}</h4>
                            <p>{memo.body}</p>
                            <button onClick={() => openUpdate(memo._id)}>Update</button>
                            <button onClick={() => deleteMemo(memo._id)}>Delete</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}


export default Memos