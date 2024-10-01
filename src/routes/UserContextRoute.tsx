import { Navigate, Outlet } from "react-router-dom";
import { IUseUser } from "@architecture-it/react-auth/use-user";

import { UserContext } from "../context/Account";
import { IPermission } from "../domain/Permission";
const ProtectedRoute = ({ user }: { user: IUseUser<IPermission> | undefined }) => {
  if (user) {
    return (
      <UserContext.Provider value={user}>
        <Outlet />
      </UserContext.Provider>
    );
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
