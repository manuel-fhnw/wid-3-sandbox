import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => {setCounter(counter +1)}}>Like</button>
      <p>{counter}</p>
      
    </div>
  );
}
