import { useState } from "react";

export default function ButtonExample({isAsync = false}) {
    const [additionCount, setAdditionCount] = useState(0);
    const [subtractionCount, setSubtractionCount] = useState(0);
    const handleOnClick = () => {  
        if(isAsync) {
            fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
                setAdditionCount(additionCount + 1);
                setSubtractionCount(subtractionCount - 1);
            });
        } else {
            setAdditionCount(additionCount + 1);
            setSubtractionCount(subtractionCount - 1);
        }
    };
    return (
    <div className="example-container">
        <div className="example" aria-label="example">
            <button
                onClick={() => {
                    handleOnClick();
                }}
            >
                Click Me!
            </button>
            <div>
                <p>Add Count: {additionCount}</p>
                <p>Subtraction Count: {subtractionCount}</p>
            </div>
        </div>
    </div>)
}