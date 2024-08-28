import React from "react";
import Modal from "./Modal";
import DeleteCow from "./DeleteCow";
import UpdateCow from "./UpdateCow";

function CowsList({ cows, fetch }) {
  return cows.map((cow) => {
    return (
      <div key={cow.id} className="cows-list-item">
        <h1>{cow.Name}</h1>
        <Modal cow={cow} />
        <div className="delete-update-buttons">
          <DeleteCow id={cow.id} fetch={fetch} className="delete-button" />
          <UpdateCow id={cow.id} fetch={fetch} className="update-button" />
        </div>
      </div>
    );
  });
}

export default CowsList;
