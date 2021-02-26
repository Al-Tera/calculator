import React, { useState } from 'react';
import './Basic.css';

function Basic({basic}) {
    const [caches, setCaches] = useState([]);
    const [newlist, setNewlist] = useState("")
    const [sum, setSum] = useState("")
    const [op, setOp] = useState("")
    
 

    const equal = (e) => {
        const theInput = document.getElementById("theInput");
        if (theInput.value.length > 0) {
        let sumx = sum.map(x => +x);
        var equalize = sum.toString().length >= 1 ? sumx[0] : parseInt(sum);
        for (var i = 0; i <= op.length; i++) {
            if(op[i]==="+") equalize += sumx[i+1];
            if(op[i]==="-") equalize -= sumx[i+1];
            if(op[i]==="\u00D7") equalize *= sumx[i+1];
            if(op[i]==="\u00F7") equalize /= sumx[i+1];
            if (op[i] === "%") equalize *= 0.01;
        }
        setCaches([...caches,
            {
                input: newlist,
                // sumnumber: equalize ? equalize:"Syntax Error",
                sumnumber: !isNaN(equalize) ? (parseFloat(equalize.toFixed(4))) : "Syntax Error",
            }
        ])
        setNewlist(!isNaN(equalize) ? equalize : "Syntax Error");
        setSum(equalize.toString().split(/[%+\u00F7\u00D7-]/g));
        setOp("");
        }
    }
    const enter = (e) => {
        switch (e.keyCode) {
            case 191:
                e.target.value += "\u00F7"; break
            case 56:
                if(e.shiftKey) e.target.value += "\u00D7"; break
            case 13:
                equal(); break
            default: break
            
        }
    }
    const addtoInput = (e) => {
        const theInput = document.getElementById("theInput");
        theInput.value += e.target.value;
        setNewlist(theInput.value);
        setSum(theInput.value.split(/[%+\u00F7\u00D7-]/g));
        setOp(theInput.value.split(/[0-9]|[.]/g).join("").split(""));
    } 

    const clear = (e) => {
        e.preventDefault();
        const theInput = document.getElementById("theInput");
        theInput.value = "";
        setNewlist("")
        setSum("")
        setOp("")
    } 

    const OnlyNumericalValue = (e) => {
        e.target.value = e.target.value.replace(/[^0-9%.+\u00F7\u00D7-]/g, '')
    }
    const inputHandlre = (e) => {
        setNewlist(e.target.value);
        setSum(e.target.value.split(/[%+\u00F7\u00D7-]/g))
        setOp(e.target.value.split(/[0-9]|[.]/g).join("").split(""))
    }
    return (
        <div style={{visibility: basic ? "visible" : "hidden"}}>
            <div className="conter" >
            {
            caches.map((cache, i) => (
                <div key={i} className="conterInner">
                    <h1 >{cache.input}</h1> 
                    <h1 >=</h1> 
                    <h1 >{cache.sumnumber}</h1>
                </div>
            ))
            }
            </div>
            <input type="text" id="theInput"
            value={newlist}
                onChange={inputHandlre}
                onKeyDown={enter}
                onInput={OnlyNumericalValue}
                autoComplete="off"
            />

            <div className="buttons">
            <button value="0" className="n0" onMouseUp={addtoInput}>0</button>
            <button value="1" className="n1" onMouseUp={addtoInput}>1</button>
            <button value="2" className="n2" onMouseUp={addtoInput}>2</button>
            <button value="3" className="n3" onMouseUp={addtoInput}>3</button>
            <button value="4" className="n4" onMouseUp={addtoInput}>4</button>
            <button value="5" className="n5" onMouseUp={addtoInput}>5</button>
            <button value="6" className="n6" onMouseUp={addtoInput}>6</button>
            <button value="7" className="n7" onMouseUp={addtoInput}>7</button>
            <button value="8" className="n8" onMouseUp={addtoInput}>8</button>
            <button value="9" className="n9" onMouseUp={addtoInput}>9</button>    
            
            <button value="." className="period" onMouseUp={addtoInput}>.</button>
            <button value="%" className="percent" onMouseUp={addtoInput}>%</button>
            <button value={"\u00F7"} className="divide" onMouseUp={addtoInput}>/</button>
            <button value={"\u00D7"} className="multiply" onMouseUp={addtoInput}>x</button>
            <button value="-"className="minus" onMouseUp={addtoInput}>-</button>
            <button value="+" className="addition" onMouseUp={addtoInput}>+</button>
            <button className="equal" onMouseUp={equal}>=</button>
            <button className="clear" onMouseUp={clear}>C</button>
            </div>
        </div>
    )
}

export default Basic
