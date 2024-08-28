import axios from "axios";
import React from "react";

function UpdateCow({ id, fetch }) {
  const handleUpdate = () => {
    axios
      .put(`http://127.0.0.1:3000/cows/${id}`, {
        Name: "im just testing",
        Description: "meooow",
      })
      .then(() => {
        console.log("updated cow successfully");
        fetch();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="update-button" onClick={handleUpdate}>
        Update Cow
      </button>
    </div>
  );
}

export default UpdateCow;
