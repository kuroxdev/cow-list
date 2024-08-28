import React from "react";
import axios from "axios";
function DeleteCow({ id, fetch }) {
  const handleDelete = () => {
    console.log(id);

    axios
      .delete(`http://127.0.0.1:3000/cows/${id}`)
      .then(() => {
        console.log("deleted cow successfully");
        fetch();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button className="delete-button" onClick={handleDelete}>
        Delete Cow
      </button>
    </div>
  );
}

export default DeleteCow;
