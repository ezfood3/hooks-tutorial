import React, { useState, useEffect } from "react";

const Info = () => {
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
    </>
  );
};

export default Info;
