import React, { useState } from 'react';

function AddNumbers(props) {
  const [sum, setSum] = useState(null);

  const addNumbers = () => {
    setSum(props.num1 + props.num2);
  };

  return (
    <div className="App">
      <h1>Sum: {sum !== null ? sum : "Click to calculate"}</h1>
      <button onClick={addNumbers}>Add Numbers</button>
    </div>
  );
}

export default AddNumbers;
