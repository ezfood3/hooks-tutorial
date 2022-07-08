import React, { useState, useEffect, useReducer } from "react";

// Reducer의 장점
const userInfoUpdate = (state, action) => {
  return {
    ...state,
    [action.name]: action.value, // action === e.target,
  };
};

const Info = () => {
  // useReducer
  const [reducerObj, setReducerObjAction] = useReducer(userInfoUpdate, {
    name1: "",
    nickName1: "",
  });

  const onChange = (e) => {
    setReducerObjAction(e.target);
  };

  const { name1, nickName1 } = reducerObj;

  // useState
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // useEffect(() => {
  //   console.log("렌더링 완료 ");
  //   console.log({ name, nickName });
  // }, []);
  // useEffect(() => {
  //   console.log("이름 변경");
  //   console.log({ name, nickName });
  // }, [name]);
  // useEffect(() => {
  //   console.log("닉네임 변경");
  //   console.log({ name, nickName });
  // }, [nickName]);

  useEffect(
    () => {
      console.log("렌더링 완료 ~");
      console.log({ name, nickName });
      return () => {
        console.log("Unmount");
        console.log({ name, nickName });
      };
    } /* , [] */
  );

  return (
    <>
      <div>
        <input type="text" value={name} onChange={onChangeName}></input>
        <input type="text" value={nickName} onChange={onChangeNickName}></input>
      </div>
      <div>
        <b>이름 : </b>
        {name}
      </div>
      <div>
        <b>닉네임 : </b>
        {nickName}
      </div>
      <div>
        <input
          type="text"
          name="name1"
          value={name1}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="nickName1"
          value={nickName1}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <b>이름 : </b>
        {name1}
      </div>
      <div>
        <b>닉네임 : </b>
        {nickName1}
      </div>
    </>
  );
};

export default Info;
