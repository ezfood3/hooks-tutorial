import React, { useRef } from "react";

const RefTest = () => {
  const id = useRef(1);
  const setId = (num) => {
    id.current = num;
  };
  const printId = () => {
    console.log(id.current);
  };
  return (
    <>
      <div>Ref Test Component</div>
    </>
  );
};

export default RefTest;
