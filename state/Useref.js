import React, { useState, useRef} from 'react';

function Useref() {
    const refElement = useRef("");
    const [name, setName] = useState("Ram")
    console.log(refElement)
    function Reset(){
       setName("")
       refElement.current.focus()
    }

    function handleInput(){
        refElement.current.style.color="blue"
    }
    return (
        <>
            <h1>Learing useRef</h1>
            <input ref={refElement}type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleInput}>handle input</button>
        </>
    );
}

export default Useref;
