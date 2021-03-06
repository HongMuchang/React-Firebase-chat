import React from "react";
import { pushMessage } from "../firebase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const Button = ({ name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: { name }, text: { text } });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default Button;
