"use client";
import React from "react";
import { IUseUser } from "@architecture-it/react-auth/use-user";

import { IPermission } from "../domain/Permission";

/**
 * Context to keep and share account info inside microfontend
 */
export const UserContext = React.createContext<IUseUser<IPermission> | undefined>(undefined);

export const useUserContext = () => React.useContext(UserContext);

export const DEFAULT_USER: IUseUser<IPermission> = {
  username: "Lmessi",
  email: "lmessi@ejemplo.com",
  isFromAAD: false,
  name: "Lionel",
};
