import React, { useMemo, useState } from 'react';

function Memo() {
  const [countOne, setCounterOne] = useState(0);
  const [countTwo, setCounterTwo] = useState(0);

  // Function to increment countOne
  const incrementOne = () => {
    setCounterOne(countOne + 1);
  };

  // Function to increment countTwo
  const incrementTwo = () => {
    setCounterTwo(countTwo + 1);
  };

  // useMemo to memoize the even/odd calculation for countOne
  const isEven = useMemo(() => {
    console.warn("Calculating...");
    let i = 0;
    while (i < 20000000) i++; // Simulate an expensive computation
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={incrementOne}>Counter + {countOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>Counter - {countTwo}</button>
    </div>
  );
}

export default Memo;
