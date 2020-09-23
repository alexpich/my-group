import axios from "axios";
import { AUTH_USER } from "./types";

// export const signup = (formProps, callback) => async (dispatch) => {
export const signup = (formProps) => (dispatch) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/signup",
  //       formProps
  //     );
  // dispatch({ type: AUTH_USER, payload: response.data.token });
  // localStorage.setItem("token", response.data.token);
  // callback();
  //   } catch (e) {
  // dispatch({ type: AUTH_ERROR, payload: "Email is in use" });
  //   }
  axios.post("http://localhost:5000/api/auth/signup", formProps);
};
