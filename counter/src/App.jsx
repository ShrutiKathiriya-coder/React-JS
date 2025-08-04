import { useState } from "react";
import "../public/css/App.css";

function App() {

  //syntax =let[status,function]=usestate([defaultvalue])
  let [count, setCount] = useState(0);

   console.log("Type : ", typeof (count));
  console.log("Type : ", typeof (setCount));

  // Increment 
  const increment = () => {
    if (count < 50) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached!🤷‍♀️");
    }
  };

  // Decrement 
   const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }else{
      alert("minimum limit reached!🙄")
    }
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>
      <div className="box">
        <h3 className="value">{count}</h3>
        <div className="button">
          <button className="btn increment" onClick={increment}>
            Increment +
          </button>
          <button className="btn decrement" onClick={decrement}>
            Decrement -
          </button>
          <button className="btn reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
