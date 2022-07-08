import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter></Counter>
      <hr />
      <button
        onClick={(e) => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <br />
      {visible && <Info></Info>}
    </>
  );
}

export default App;
