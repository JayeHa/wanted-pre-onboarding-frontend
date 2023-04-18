import React from "react";
import { useInput } from "../hooks/useInput";

export const AuthForm = ({ isSignIn, onSubmit }) => {
  const emailInput = useInput("");
  const passwordInput = useInput("");

  const isValid =
    emailInput.value?.includes("@") && passwordInput.value?.length >= 8;

  return (
    <form onSubmit={onSubmit}>
      <input data-testid="email-input" name="email" {...emailInput} />
      <input
        data-testid="password-input"
        name="password"
        type="password"
        {...passwordInput}
      />

      {isSignIn && (
        <button data-testid="signin-button" disabled={!isValid}>
          로그인
        </button>
      )}

      {!isSignIn && (
        <button data-testid="signup-button" disabled={!isValid}>
          회원가입
        </button>
      )}
    </form>
  );
};
