import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <Button incrementCount={incrementCount} />
      <Count count={count} />
      <span>{feedback}</span>
    </div>
  );
}
function Count({ count }) {
  return (
    <div>
      <span>{count}</span>
    </div>
  );
}

function Button({ incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}> Add 1!</button>
    </div>
  );
}

export default Counter;
