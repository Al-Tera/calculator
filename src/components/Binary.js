import React, {useState} from 'react'
import "./Converter.css"

function Binary({id, binaries, setBinaries}) {
    const [binary, setBinary] = useState(false)

    const btnHandlre = e => {
        e.preventDefault()
        let newArr = [...binaries]
        setBinary(!binary)
        if (!binary) {
            newArr[id] = 1
            setBinaries(newArr)
        }
        else {
            newArr[id] = 0
            setBinaries(newArr)
        }
    
    }

    return (
        <div className="btnbtn">
            <button className="btn" onMouseDown={btnHandlre}>
            {binaries[id]}</button>
            
        </div>
    )
}

export default Binary
