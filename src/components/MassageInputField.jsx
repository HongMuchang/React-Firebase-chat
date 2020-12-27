import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});

const MasseageInputField = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes}>
      <p>{name}</p>
      <p>konnnitiha</p>
    </div>
  );
};
export default MasseageInputField;
