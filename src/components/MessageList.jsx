import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MasseageList = () => {
  const classes = useStyles();

  return (
    <div className={classes}>
      <p>lkdn</p>
    </div>
  );
};
export default MasseageList;
