import { Suspense, useState } from "react";
import SuspenseChild from "./SuspenseChild";

export default function SuspenseExample() {
  const [message, setMessage] = useState('')
  
  return (
    <div>
      <button
        className="feature-buttons"
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
