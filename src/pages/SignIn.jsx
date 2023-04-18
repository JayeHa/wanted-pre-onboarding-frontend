import React from "react";
import { AuthForm } from "../components/AuthForm";

export const SignIn = () => {
  return (
    <AuthForm
      isSignIn
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
      }}
    />
  );
};
