import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
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
