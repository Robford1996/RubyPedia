import { useState, useEffect } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [profilesState, setProfilesState] = useState({ profiles: [] });
  useEffect(() => {
    async function getProfiles() {
      try {
        const profiles = await fetch("http://localhost:3000/profiles").then(
          (response) => response.json()
        );
        setProfilesState({ profiles });
      } catch (error) {
        console.log(error);
      }
    }
    getProfiles();
  }, []);
  async function handleAdd(formInputs) {
    try {
      const profiles = await fetch("http://localhost:3000/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formInputs),
      }).then((res) => res.json());
      setProfilesState({ profiles });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleDelete(profileId) {
    try {
      const profiles = await fetch(
        `http://localhost:3000/profiles/${profileId}`,
        {
          method: "DELETE",
        }
      ).then((res) => res.json());

      setProfilesState({ profiles });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUpdate(formInputs) {
    try {
      const { first_name, last_name, dob, job_title, id } = formInputs;
      const profiles = await fetch(`http://localhost:3000/profiles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ first_name, last_name, dob, job_title }),
      }).then((res) => res.json());
      setProfilesState({ profiles });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(profilesState);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Aside handleAdd={handleAdd} />
        <Main
          profiles={profilesState.profiles}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
