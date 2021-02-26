import React,{useState} from 'react'
import Binary from "./Binary"

function Converter({converter}) {
    let btn = []
    let setter = []
    const [binaries, setBinaries] = useState(setter)



    for (var i = 0; i < 50; i++){
        btn.push(i)
        setter.push(0)
    }

    return (

        <div className="converter" style={{visibility: converter ? "visible": "hidden"}}>
            <div className="button_container">
            {
                btn.map((item, i) => (
                    <Binary key={item} id={i}
                        binaries={binaries} setBinaries={setBinaries}
                    />
                ))
                
                }
            </div>
            <div id="result" className="result">{parseInt((binaries.join("").split("").reverse().join("")),2)}</div>
        </div>
    )
}

export default Converter
