import React, { useCallback } from "react";
import { signIn } from "../api/auth";
import { AuthForm } from "../components/AuthForm";
import { LOGIN_KEY } from "../constants";
import { useLocalStorage } from "../hooks";

export const SignIn = () => {
  const [, setLoginJWT] = useLocalStorage(LOGIN_KEY);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const jwt = await signIn(payload);
      if (jwt) {
        setLoginJWT(jwt);
      }
    },
    [setLoginJWT]
  );

  return <AuthForm isSignIn onSubmit={onSubmit} />;
};
