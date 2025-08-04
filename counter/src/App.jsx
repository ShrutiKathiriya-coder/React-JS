import { useState } from "react";
import "../public/css/App.css";

function App() {
 //syntax =let[status,function]=usestate([defaultvalue])
  let [count, setCount] = useState(0);

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
    } else {
      alert("Minimum limit reached!🙄");
    }
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Product Card</h1>

      <div className="card">
        
        <img
          src="https://lolaartdesign.com/cdn/shop/files/1_cd58bb70-88bd-4338-9021-8bffc61182fd.png?v=1687429965&width=1946"
          alt="Product"
          className="product-image"
        />

        
        <div className="card-content">
          <h2 className="product-title">Stylish T-Shirt</h2>
          <p className="product-desc">
            High-quality cotton T-shirt perfect for casual wear.
          </p>
          <p className="product-price">$25</p>
        </div>

       
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

       
        <button className="btn add-to-cart">Add to Cart 🛒</button>
      </div>
    </div>
  );
}

export default App;
