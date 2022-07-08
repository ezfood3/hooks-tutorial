import React, { useState } from "react";

const calculateAvg = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, cur) => {
    // acc: 누적값, cur: 현재값(arr의 원소들)
    return acc + cur;
  });
  return sum / arr.length;
};

const Average = () => {
  const [numArr, setNumArr] = useState([]);
  const [num, setNum] = useState("");
  const onChange = (e) => {
    setNum(e.target.value);
  };
  const onInsert = (e) => {
    // 불변성 유지 (배열 or 객체)
    const newNumArr = numArr.concat(parseInt(num));
    setNumArr(newNumArr);
    setNum("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert(e);
    }
  };
  return (
    <>
      <input
        type="text"
        value={num}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {numArr.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값 : </b> {calculateAvg(numArr)}
      </div>
    </>
  );
};

export default Average;
