import React from "react";
import Profiles from "./Profiles";

function Main({ profiles, handleDelete, handleUpdate }) {
  console.log("hi", profiles);
  return (
    <main>
      <Profiles
        profiles={profiles}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;
