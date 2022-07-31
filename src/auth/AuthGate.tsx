import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

interface Props {
  children: ReactNode;
  required?: true;
  notRequired?: true;
}

export function AuthGate({ children, required, notRequired }: Props) {
  if (!required && !notRequired) {
    throw new Error("Reached invalid state, need required or not required.");
  }

  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth && required) {
    // Redirect them to the /signin page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they sign in, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  } else if (auth && notRequired) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
