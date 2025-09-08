import { productsApi } from "../api/product";
import { User } from "../interfaces/user";

export interface AuthResponse {
  email: string;
  fullName: string;
  id: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnUserToken = (data: AuthResponse): { token: string; user: User } => {
  const { token, ...user } = data;

  return { token, user };
};

export const registerUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  fullName = fullName.trim();
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await productsApi.get<AuthResponse>("/auth/check-status");

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
