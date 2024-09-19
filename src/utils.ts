import { JWTHeaders } from "./types";

export const defaultHeaders = (jwt: string): JWTHeaders => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwt}`,
  };
};
