import { UserType } from "../types/users";
import instance from "./instance";

export const Add = (signup: UserType) => {
  const url = `/users`;
  return instance.post(url, signup);
};
export const Signin = (signin: UserType) => {
  const url = "/users";
  return instance.post(url, signin);
};