import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MasseageList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>lkdn</p>
    </div>
  );
};
export default MasseageList;
