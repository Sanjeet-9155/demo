import React, { useState } from 'react';

function UseState() {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Button clicked {count} times</h1>
            <button onClick={updateCount}>Click</button>
        </>
    );
}

export default UseState;
