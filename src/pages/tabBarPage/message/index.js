import React, { useState, useEffect } from "react";
function AddCount(initData){
  const [count, setCount] = useState(initData)
  return [count, setCount]
}
function Message() {
  const [count, setCount] = AddCount(0)
  useEffect(() => {
    console.log('useEffect')
  }, [count])
  // console.log('render')
  return (
    <div>
      <p>数字：{count}</p>
      <button onClick={() => setCount(count + 1)}>加一</button>
    </div>
  );
}

export default Message;
