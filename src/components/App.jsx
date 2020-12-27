import React, { useState } from "react";
import Sginin from "./Signin";
import Main from "./Main";
import Config from "../config.json";

export default () => {
  const [name, setName] = useState("");
  console.log({ name });

  if (Config.signInEnabled && name === "") {
    return <Sginin setName={setName} />;
  } else {
    return <Main />;
  }
};
