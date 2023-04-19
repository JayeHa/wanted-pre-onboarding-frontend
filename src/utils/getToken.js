import { LOGIN_KEY } from "../constants";

export const getToken = () => {
  try {
    const item = window.localStorage.getItem(LOGIN_KEY);
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};
