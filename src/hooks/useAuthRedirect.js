import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_KEY } from "../constants";
import { useLocalStorage } from "./useLocalStorage";

export const useAuthRedirect = () => {
  const [loginJWT] = useLocalStorage(LOGIN_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginJWT) {
      navigate("/todo");
    }
  }, [loginJWT, navigate]);
};
