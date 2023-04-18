import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/auth";
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

      const isOk = await signUp(payload);
      isOk && navigate("/signin");
    },
    [navigate]
  );

  return <AuthForm onSubmit={onSubmit} />;
};
