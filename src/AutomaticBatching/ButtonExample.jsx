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
    <div className="example">
        <button
            className="feature-buttons"
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
    </div>)
}