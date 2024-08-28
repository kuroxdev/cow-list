import React, { useState } from "react";

export default function Addcow({ handlePost }) {
  const [input, setInput] = useState({ cName: "", desc: "" });
  const handleCHange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className="add-cow-container">
      <label htmlFor="cName">Add a cow here</label>
      <input type="text" id="cName" name="cName" onChange={handleCHange} />

      <label htmlFor="desc">add description</label>
      <input type="text" id="desc" name="desc" onChange={handleCHange} />
      <button onClick={() => handlePost(input)}>Submit</button>
    </div>
  );
}
