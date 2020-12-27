import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);

  console.log({ setText, text });

  return (
    <div>
      <TextField
        fullWidth={true}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (isComposed) return;

          //空文字の時送信しない
          const text = e.target.value;
          if (text === "") return;

          //Enterで追加
          if (e.key === "Enter") {
            console.log("Firebase");
            setText("");
            e.preventDefault();
          }
        }}
        //変換Enter設定
        onCompositionStart={() => setIsComposed(true)}
        onCompositionEnd={() => setIsComposed(false)}
        value={text}
      />
    </div>
  );
};

export default MessageField;
