import { create } from "zustand";

import {
  authCheckStatus,
  authLogin,
  registerUser,
} from "@/core/auth/actions/auth";
import { User } from "@/core/auth/interfaces/user";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  changeStatus: (token?: string, user?: User) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: "checking",
  token: undefined,
  user: undefined,
  changeStatus: async (token?: string, user?: User) => {
    if (!token || !user) {
      set({
        status: "unauthenticated",
        token: undefined,
        user: undefined,
      });

      await SecureStorageAdapter.deleteItem("token");

      return false;
    }

    set({
      status: "authenticated",
      token: token,
      user: user,
    });

    await SecureStorageAdapter.setItem("token", token);

    return true;
  },
  login: async (email: string, password: string) => {
    const response = await authLogin(email, password);
    return get().changeStatus(response?.token, response?.user);
  },
  checkStatus: async () => {
    const response = await authCheckStatus();
    get().changeStatus(response?.token, response?.user);
  },
  logout: async () => {
    SecureStorageAdapter.deleteItem("token");

    set({
      status: "unauthenticated",
      token: undefined,
      user: undefined,
    });
  },
  register: async (fullName: string, email: string, password: string) => {
    const response = await registerUser(fullName, email, password);
    return get().changeStatus(response?.token, response?.user);
  },
}));
