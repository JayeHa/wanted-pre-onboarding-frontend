import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import { AuthForm } from "../components/AuthForm";
import { LOGIN_KEY } from "../constants";
import { useAuthRedirect, useLocalStorage } from "../hooks";

export const SignIn = () => {
  const [, setLoginJWT] = useLocalStorage(LOGIN_KEY);
  const navigate = useNavigate();
  useAuthRedirect();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const { access_token } = await signIn(payload);

      if (access_token) {
        setLoginJWT(access_token);
        navigate(0);
      }
    },
    [navigate, setLoginJWT]
  );

  return (
    <div>
      <h2>📌 로그인</h2>
      <AuthForm isSignIn onSubmit={onSubmit} />
    </div>
  );
};
