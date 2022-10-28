import { useState, useEffect } from "react";
import Input from "./Input.js";

function Form(props) {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    job_title: "",
  });

  useEffect(() => {
    if (props.profile) {
      const { first_name, last_name, dob, job_title, id } = props.profile;
      setFormState({
        first_name,
        last_name,
        dob,
        job_title,
        id,
      });
      console.log("Here", id);
    }
  }, [props.profile]);

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.profile) {
      console.log("This", formState);
      props.handleUpdate(formState);
      props.toggleForm();
    } else {
      props.handleAdd(formState);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        name="first_name"
        label="First Name"
        placeholder="Profile first_name"
        type="text"
        value={formState.first_name}
        id="first_name"
      />
      <Input
        handleChange={handleChange}
        name="last_name"
        label="Last Name"
        placeholder="Profile last_name"
        type="text"
        value={formState.last_name}
        id="last_name"
      />
      <Input
        handleChange={handleChange}
        name="dob"
        label="Birthdate"
        placeholder="Profile dob"
        type="dob"
        value={formState.dob}
        id="dob"
      />
      <Input
        handleChange={handleChange}
        name="job_title"
        label="Job Title"
        placeholder="Profile job_title"
        type="job_title"
        value={formState.job_title}
        id="job_title"
      />

      <input
        type="submit"
        value={props.profile ? "update this profile" : "add a profile"}
      />
    </form>
  );
}

export default Form;
