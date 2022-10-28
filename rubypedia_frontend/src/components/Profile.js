import React from "react";
import { useState } from "react";
import Form from "./Form";

function Profile({ profile, handleDelete, handleUpdate }) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }

  return (
    <>
      {editFormVisible ? (
        <Form
          profile={profile}
          toggleForm={toggleForm}
          handleUpdate={handleUpdate}
        />
      ) : (
        <div className="profile">
          <h3>{profile.first_name}</h3>
          <h3>{profile.last_name}</h3>
          <p>{profile.dob}</p>
          <p>{profile.job_title}</p>
          <button onClick={() => handleDelete(profile.id)}>DELETE</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
      )}
    </>
  );
}

export default Profile;
