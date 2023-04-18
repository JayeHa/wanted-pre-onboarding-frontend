import axios from "axios";
import { ENDPOINT } from "../constants";

export const signUp = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT}/auth/signup`, payload);
    return response.status === 201;
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message);
  }
};

export const signIn = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT}/auth/signin`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message);
  }
};
