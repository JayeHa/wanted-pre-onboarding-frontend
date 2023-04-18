import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_KEY } from "../constants";
import { useLocalStorage } from "../hooks";

export const withAuth = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const [loginJWT] = useLocalStorage(LOGIN_KEY);

    useEffect(() => {
      setAuthenticated(Boolean(loginJWT));
      setLoading(false);
    }, [loginJWT]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!authenticated) {
      navigate("/signin");
    }

    return <Component {...props} />;
  };
};
