import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import { AuthForm } from "../components/AuthForm";

export const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      try {
        const isOk = await signIn(payload);
        isOk && navigate("/signin");
      } catch (error) {
        console.log(error);
        alert(error.response?.data?.message);
      }
    },
    [navigate]
  );

  return <AuthForm onSubmit={onSubmit} />;
};
