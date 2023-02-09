import { useState } from "react";

export default function Survey() {
  const [name, setName] = useState("bob");
  const [isActiveOne, setActiveOne] = useState(true);
  const [isActiveTwo, setActiveTwo] = useState(false);

  return (
    <div>
      <div>
        <h1>What is your name?</h1>
        <input />
      </div>
      <div></div>
    </div>
  );
}
