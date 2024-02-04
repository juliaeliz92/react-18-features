import { useState, useTransition } from "react";

export default function Transitions() {
  const [multiplier, setMultiplier] = useState("");
  const [secretMessage, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const onChangeInput = (input) => {
    startTransition(() => {
      if (input.length) {
        let count = 0;
        for (let i = Number(input); i < 5000; i++) {
          if (i % Number(input) === 0) count++;
        }
        setTimeout(() => setMessage(`${count} numbers are divisible by ${input} upto 5000`), 3000)
        
      } else setMessage("");
    });
    setMultiplier(input);
  };
  return (
    <div>
      <p>
        Let's start entering a number, The example will return number of
        multiples of the number you entered for upto 500000000
      </p>
      <div className="example-container">
        <div className="example" aria-label="example">
          <input
            value={multiplier}
            type="number"
            min={1}
            max={500000000}
            onChange={(e) => onChangeInput(e.target.value)}
          />
          <div>{isPending ? "Loading" : <p>{secretMessage}</p>}</div>
        </div>
      </div>
      <p>This is how the code goes.</p>
      <div className="example-container">
        <div className="example">
          <pre aria-label="code">
            <code>
            { 
              `const onChangeInput = (input) => {
                startTransition(() => {
                  \\\\ insert code here..
                });
                setMultiplier(input);
              };` }
              </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
