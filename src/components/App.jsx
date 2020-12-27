import React, { useState } from "react";
import Sginin from "./Signin";
import Main from "./Main";

export default () => {
  const [name, setName] = useState("");
  console.log({ name });

  if (name === "") {
    return <Sginin setName={setName} />;
  } else {
    return <Main />;
  }
};
