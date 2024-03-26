.app {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10rem;
}
.app .count {
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    margin-left: 10rem;
}
.app .count h3 {
    line-height: 8.6rem;
    margin-right: 1rem;
}
.app .count h1 {
    font-size:5em;
    margin-top: 2rem;
}
.app .buttons button {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: none;
    margin: 0 2rem;
    font-size: 5em;
    box-shadow: 0 4px 32px 0 rgba(10,14,29,.02), 0 8px 64px 0 rgba(10,14,29,.08);
    cursor: pointer;
}
.app .buttons button:hover{
    font-size: 7em;
}
.app .buttons button:focus{
    outline: 0;
}

/* style.css */

body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  
  .app {
    text-align: center;
    margin-top: 20px; /* Adjust the top margin as needed */
  }
  
  .title-container {
    margin-bottom: 20px;
  }
  
  .title-container h2 {
    text-decoration: underline;
    display: inline-block; /* Prevents the underline from extending full width */
  }
  
  .count {
    margin-bottom: 20px;
  }

COMPONENTS::(FOLDER)
____________

BUTTON.JSX::(FILE)
____________

import React from "react";

export default function Button(props){
    let {action,title}=props;
    return <button onClick={action}> {title} </button>;
}

APP.JS::
________

import React, { useState } from "react";
import Button from "./components/Button";
import "./assets/style.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div className="title-container">
          <h2>COUNTER REACT APP</h2>
          <div className="title-underline"></div>
        </div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
