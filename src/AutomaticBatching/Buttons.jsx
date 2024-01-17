import { useState } from "react";

export default function Buttons() {
  const [additionCount, setAdditionCount] = useState(0);
  const [subtractionCount, setSubtractionCount] = useState(0);
  const [additionCountOnAsync, setAdditionCountOnAsync] = useState(0);
  const [subtractionCountOnAsync, setSubtractionCountOnAsync] = useState(0);
  console.log("Automatic batching works!");
  const handleOnClick = () => {
    setAdditionCount(additionCount + 1);
    setSubtractionCount(subtractionCount - 1);
  };
  const handleOnClickOnAsync = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setAdditionCountOnAsync(additionCountOnAsync + 1);
      setSubtractionCountOnAsync(subtractionCountOnAsync - 1);
    });
  };
  return (
    <div>
      <div>
        <p>Click on the button</p>
        <div className="button-example">
          <button
            onClick={() => {
              handleOnClick();
            }}
          >
            Click Me!
          </button>
          <div>
            <p>Add Count: {additionCount}</p>
            <p>Substraction Count: {subtractionCount}</p>
          </div>
        </div>
      </div>
      <p>Now click here</p>
      <div className="button-example">
        <button
          onClick={() => {
            handleOnClickOnAsync();
          }}
        >
          Click Me With Async!
        </button>
        <div>
          <p>Add Count: {additionCountOnAsync}</p>
          <p>Substraction Count: {subtractionCountOnAsync}</p>
        </div>
      </div>
    </div>
  );
}
