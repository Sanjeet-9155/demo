import React, { useState, useEffect,} from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("Ram")

    useEffect(() => {
        console.log("component mounted");
    }, [data]); // Dependency array, this effect runs when `count` changes

    function updateCount() {
        setCount(count + 1);
    }

    function updateData(){
        setData("seeta")
    }
    return (
        <>
            <h1>Button clicked {count} times</h1>
            <button onClick={updateCount}>Click</button>
            <button onClick={updateData}>Update Data</button>
        </>
    );
}

export default UseEffect;
