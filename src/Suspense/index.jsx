import { Suspense, useState } from "react";
import SuspenseChild from "./SuspenseChild";
import "./styles.scss";

export default function SuspenseExample() {
  const [message, setMessage] = useState('')
  
  return (
    <div>
      <button
        onClick={() => setMessage(true)}
      >
        Submit 
      </button>
      {message && <Suspense fallback={<h1>Loading...</h1>}>
       <SuspenseChild />
     </Suspense>}
    </div>
  );

}
