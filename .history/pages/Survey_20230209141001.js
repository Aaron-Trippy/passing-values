import { useState } from "react";

export default function Survey() {
  const [name, setName] = useState("bob");
  const [isActiveOne, setActiveOne] = useState(true);
  const [isActiveTwo, setActiveTwo] = useState(false);

  const passName = (event) => {
    if (event.key === "Enter") {
      console.log("Enter");
      //   setActiveOne(false);
      //   setActiveTwo(true);
    }
  };
  return (
    <div>
      <div style={{ display: isActiveOne ? "block" : "none" }}>
        <h1>What is your name?</h1>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          playholder="Enter Name"
          onKeyDown={passName}
          type="text"
        />
      </div>
      <div stlye={{ display: isActiveTwo ? "block" : "none" }}></div>
    </div>
  );
}
