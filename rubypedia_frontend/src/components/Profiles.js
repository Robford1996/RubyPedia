import React from "react";
import Profile from "./Profile";

function Profiles({ profiles, handleDelete, handleUpdate }) {
  return (
    <div>
      {profiles.map((profile) => (
        <Profile
          key={profile.id}
          profile={profile}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Profiles;
