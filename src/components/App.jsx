import React, { useState } from "react";
import Sginin from "./Signin";

export default () => {
  const [name, setName] = useState("");
  console.log({ name });

  return (
    <div>
      <Sginin setName={setName} />
    </div>
  );
};
