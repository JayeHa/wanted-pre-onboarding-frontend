import axios from "axios";
import { ENDPOINT } from "../constants";

export const signIn = async (payload) => {
  const response = await axios.post(`${ENDPOINT}/auth/signup`, payload);
  return response.status === 201;
};
