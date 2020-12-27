import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";
import gravatarPath from "../gravatar";
import MessageField from "./MessageField";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

const MasseageInputField = ({ name }) => {
  //メッセージ内容の状態
  const [text, setText] = useState("");
  //classの指定
  const classes = useStyles();
  //アバター画像ライブラリ
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>
          <MessageField name={name} setText={setText} text={text} />
        </Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};
export default MasseageInputField;
