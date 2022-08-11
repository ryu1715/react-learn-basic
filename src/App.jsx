/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";

import { ColorfulMessage } from "./Components/ClorfulMessage";

// コンポーネント
const App = () => {
  // state
  const [num, setNum] = useState(0);
  const [faseShowFlag, setfaseShowFlag] = useState(false);

  // onClickイベント
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlg = () => {
    setfaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setfaseShowFlag(true);
      } else {
        faseShowFlag && setfaseShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      {/* スタイル */}
      <h1>こんにちは</h1>
      <ColorfulMessage color="pink">こんにちは</ColorfulMessage>
      <ColorfulMessage color="blue">こんにちは</ColorfulMessage>
      {/* 関数はこうやって書くこと */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p>✊</p>}
    </>
  );
};

export default App;
