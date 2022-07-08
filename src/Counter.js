// useState Hooks 사용예제
// 사용선언
// const [상태명, set상태명] = useState(초기값); set상태명 -> Setter함수
// 상태는 Setter함수로만 변경 가능

import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button
        onClick={(e) => {
          setValue(value + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          setValue(value - 1);
        }}
      >
        -1
      </button>
    </>
  );
};

export default Counter;
