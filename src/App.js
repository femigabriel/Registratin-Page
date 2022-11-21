// import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "firtName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "First name should be in 3-16 characters, and should't include any special character!",
    },
    // {
    //   id: 2,
    //   name: "lastName",
    //   type: "text",
    //   placeholder: "Last Name",
    //   label: "Last Name",
    //   required: true,
    //   pattern: "^[A-Za-z0-9]{3,16}$",
    //   errorMessage:
    //     "Last name should be in 3-16 characters, and should't include any special character!",
    // },
    {
      id: 3,
      name: "email",
      type: "emal",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "Email should be a valid email",
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "DOB",
      label: "Date Of Birth",
      errorMessage: "",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage:
        "Password should contain 8-20 characters, and must include at least 1 letter, 1 number and 1 special character!",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
      errorMessage: "Password don't match!",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  console.log("re-render");
  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <FormInput name="lastName" placeholder="Last Name" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="birthday" placeholder="DOB" />
        <FormInput name="password" placeholder="Password" type="password" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
