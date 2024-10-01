import { ErrorBoundary } from "@architecture-it/stylesystem";
import { AuthContext } from "@architecture-it/react-auth";
import { useContext } from "react";

import PrincipalSkeleton from "../skeletons/Principal";

import styles from "./Main.module.scss";

interface IMainProps {
  children: React.ReactNode;
}

export default function Main({ children }: IMainProps) {
  const { loginInProgress } = useContext(AuthContext);

  return (
    <main className={styles.main}>
      {loginInProgress ? <PrincipalSkeleton /> : <ErrorBoundary>{children}</ErrorBoundary>}
    </main>
  );
}
