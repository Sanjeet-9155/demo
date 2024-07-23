import React from 'react'

function State() {
    var x = 10;
    function updateState(){
        x=15;
    }
    console.log(x)
  return (
    <>
    <h1>Learing State {x}</h1>
    <button onClick={updateState}>Click Me</button>
    </>
  )
}

export default State