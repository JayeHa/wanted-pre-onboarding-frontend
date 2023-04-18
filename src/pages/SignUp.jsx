import React from "react";
import { AuthForm } from "../components/AuthForm";

export const SignUp = () => {
  return (
    <AuthForm
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
      }}
    />
  );
};
